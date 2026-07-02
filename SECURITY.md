# Security Policy

## Supported Versions

Security fixes are released in the latest available version of OmniChat Exporter.

Users are encouraged to keep the userscript up to date through Greasy Fork, GitHub, or their userscript manager to receive security improvements, compatibility fixes, and bug fixes.

---

## Reporting a Vulnerability

If you believe you have found a security vulnerability, please **do not report it through public GitHub Issues**.

Instead, report it privately using **GitHub Private Vulnerability Reporting**:

https://github.com/DREwX-code/omnichat-exporter/security/advisories/new

If the vulnerability is confirmed, a fix will be prepared before public disclosure whenever possible.

---

## Scope

OmniChat Exporter is a browser userscript that runs on supported AI chat platforms and generates exports locally in the browser.

Security reports are especially useful when they relate to:

- Unsafe handling of conversation content during TXT, Markdown, JSON, or PDF export
- Cross-site scripting or HTML injection in generated export content
- Unexpected network transmission of conversation data
- Unsafe handling of AI-generated images or external media during PDF export
- Issues related to third-party libraries or font resources loaded for PDF generation and multilingual rendering
- Problems caused by platform-specific DOM extraction on ChatGPT, Gemini, Claude, Grok, or DeepSeek

---

## What to Include

Please include as much information as possible:

- Description of the vulnerability
- Affected OmniChat Exporter version
- Browser and userscript manager used
- Affected platform, such as ChatGPT, Gemini, Claude, Grok, or DeepSeek
- Export format involved, such as TXT, Markdown, JSON, or PDF
- Steps to reproduce
- Potential impact
- Proof of concept, if applicable
- Suggested fix, optional

---

## Responsible Disclosure

Please allow reasonable time for the issue to be investigated and fixed before publicly disclosing the vulnerability.

When appropriate, confirmed reporters will be credited in the release notes or security advisory.

---

## Privacy

Security and privacy are closely related, but they are not the same.

OmniChat Exporter processes conversation content locally in the browser for export generation. No conversation data is intentionally sent to an external API for export generation.

External libraries and font resources may be loaded when required for PDF generation, formatting, image handling, language detection, and multilingual rendering.

For more details about data handling, see the project documentation.
