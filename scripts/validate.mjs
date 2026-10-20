import { readFile } from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const userscriptPath = path.join(root, "src", "omnichat-exporter.user.js");
const i18nPath = path.join(root, "src", "omnichat-exporter.i18n.js");
const expectedMatches = [
  "https://chat.openai.com/*",
  "https://chatgpt.com/*",
  "https://gemini.google.com/*",
  "https://claude.ai/*",
  "https://grok.com/*",
  "https://grok.x.ai/*",
  "https://chat.deepseek.com/*",
  "https://*.web-sandbox.oaiusercontent.com/*",
];

function fail(message) {
  throw new Error(`Validation failed: ${message}`);
}

function getMetadata(source) {
  const match = source.match(/\/\/ ==UserScript==([\s\S]*?)\/\/ ==\/UserScript==/);
  if (!match) {
    fail("userscript metadata block is missing or incomplete");
  }

  const entries = new Map();
  for (const line of match[1].split("\n")) {
    const entry = line.match(/^\/\/\s+@(\S+)\s+(.+?)\s*$/);
    if (!entry) {
      continue;
    }
    const [, key, value] = entry;
    entries.set(key, [...(entries.get(key) || []), value]);
  }
  return entries;
}

function getSingleMetadataValue(entries, key) {
  const values = entries.get(key) || [];
  if (values.length !== 1 || !values[0]) {
    fail(`@${key} must appear exactly once`);
  }
  return values[0];
}

function assertHttpsUrl(value, label) {
  let url;
  try {
    url = new URL(value);
  } catch {
    fail(`${label} is not a valid URL`);
  }
  if (url.protocol !== "https:") {
    fail(`${label} must use HTTPS`);
  }
}

function validateMetadata(source) {
  const entries = getMetadata(source);
  for (const key of ["name", "namespace", "version", "description", "license", "run-at", "downloadURL", "updateURL"]) {
    getSingleMetadataValue(entries, key);
  }

  const matches = entries.get("match") || [];
  if (new Set(matches).size !== matches.length) {
    fail("@match entries must be unique");
  }
  if (matches.join("\n") !== expectedMatches.join("\n")) {
    fail("@match entries do not match the supported platforms");
  }

  for (const [key, values] of entries) {
    if (key === "downloadURL" || key === "updateURL" || key === "icon" || key === "require") {
      values.forEach((value) => assertHttpsUrl(value, `@${key}`));
    }
  }
  return entries;
}

function validateTranslations(source, userscriptSource, metadata) {
  const context = vm.createContext({
    navigator: { language: "en", languages: ["en"] },
  });
  vm.runInContext(source, context, { filename: "src/omnichat-exporter.i18n.js" });

  const i18n = context.OmniChatExporterI18n;
  if (!i18n || !Array.isArray(i18n.supportedLocales) || !i18n.supportedLocales.length) {
    fail("translation library did not expose supported locales");
  }

  const englishKeys = Object.keys(i18n.translations.en || {});
  if (!englishKeys.length) {
    fail("English translations are missing");
  }
  for (const locale of i18n.supportedLocales) {
    const dictionary = i18n.translations[locale];
    if (!dictionary || englishKeys.some((key) => !dictionary[key])) {
      fail(`translation keys are incomplete for ${locale}`);
    }
  }

  const usedKeys = new Set(
    Array.from(userscriptSource.matchAll(/\bt\(["']([^"']+)["']/g)).map(
      (match) => match[1],
    ),
  );
  for (const locale of i18n.supportedLocales) {
    for (const key of usedKeys) {
      if (i18n.t(key, undefined, locale) === key) {
        fail(`translation key ${key} is unavailable for ${locale}`);
      }
    }
  }

  for (const directive of ["name", "description"]) {
    const localized = Array.from(metadata.keys())
      .filter((key) => key.startsWith(`${directive}:`))
      .map((key) => key.slice(directive.length + 1))
      .sort();
    const locales = Array.from(i18n.supportedLocales).filter(
      (locale) => locale !== "en",
    ).sort();
    if (localized.join("\n") !== locales.join("\n")) {
      fail(`localized @${directive} entries do not match supported locales`);
    }
  }
}

const [userscript, translations] = await Promise.all([
  readFile(userscriptPath, "utf8"),
  readFile(i18nPath, "utf8"),
]);

const metadata = validateMetadata(userscript);
validateTranslations(translations, userscript, metadata);
console.log("Userscript metadata and translations are valid.");
