// ==UserScript==
// @name OmniChat Exporter - Export Any AI Chat Instantly
// @name:fr OmniChat Exporter - Exporter instantanément n’importe quelle conversation IA
// @name:es OmniChat Exporter - Exportar instantáneamente cualquier chat de IA
// @name:de OmniChat Exporter - Jeden KI-Chat sofort exportieren
// @name:ru OmniChat Exporter - Мгновенный экспорт любого ИИ-чата
// @name:zh-CN OmniChat Exporter - 即时导出任何 AI 聊天
// @name:zh-TW OmniChat Exporter - 即時匯出任何 AI 聊天
// @name:ja OmniChat Exporter - あらゆるAIチャットを即時エクスポート
// @name:pt OmniChat Exporter - Exportar instantaneamente qualquer chat de IA
// @name:it OmniChat Exporter - Esporta istantaneamente qualsiasi chat IA
// @name:ar OmniChat Exporter - تصدير أي دردشة ذكاء اصطناعي فورًا
// @name:be OmniChat Exporter - Імгненны экспарт любога ІІ-чата
// @name:bg OmniChat Exporter - Незабавно експортиране на всеки AI чат
// @name:cs OmniChat Exporter - Okamžitý export jakéhokoli AI chatu
// @name:da OmniChat Exporter - Eksportér enhver AI-chat med det samme
// @name:el OmniChat Exporter - Άμεση εξαγωγή οποιασδήποτε συνομιλίας AI
// @name:eo OmniChat Exporter - Tuj eksportu ajnan AI-babilejon
// @name:fi OmniChat Exporter - Vie mikä tahansa AI-keskustelu heti
// @name:he OmniChat Exporter - ייצוא מיידי של כל צ׳אט בינה מלאכותית
// @name:hr OmniChat Exporter - Trenutni izvoz bilo kojeg AI chata
// @name:hu OmniChat Exporter - Bármely AI-chat azonnali exportálása
// @name:id OmniChat Exporter - Ekspor instan semua chat AI
// @name:ka OmniChat Exporter - ნებისმიერი AI ჩატის მყისიერი ექსპორტი
// @name:ko OmniChat Exporter - 모든 AI 채팅 즉시 내보내기
// @name:mr OmniChat Exporter - कोणताही AI चॅट त्वरित निर्यात करा
// @name:nl OmniChat Exporter - Exporteer direct elke AI-chat
// @name:nb OmniChat Exporter - Eksporter enhver AI-chat umiddelbart
// @name:pl OmniChat Exporter - Natychmiastowy eksport dowolnego czatu AI
// @name:pt-BR OmniChat Exporter - Exporte instantaneamente qualquer chat de IA
// @name:ro OmniChat Exporter - Exportă instant orice chat AI
// @name:sk OmniChat Exporter - Okamžitý export akéhokoľvek AI chatu
// @name:sr OmniChat Exporter - Trenutni izvoz bilo kog AI chata
// @name:sv OmniChat Exporter - Exportera valfri AI-chatt direkt
// @name:th OmniChat Exporter - ส่งออกแชท AI ใดก็ได้ทันที
// @name:tr OmniChat Exporter - Herhangi bir AI sohbetini anında dışa aktar
// @name:ug OmniChat Exporter - ھەر قانداق AI سۆھبەتنى دەرھال چىقىرىش
// @name:uk OmniChat Exporter - Миттєвий експорт будь-якого AI-чату
// @name:vi OmniChat Exporter - Xuất ngay mọi cuộc trò chuyện AI
// @name:fr-CA OmniChat Exporter - Exporter instantanément toute conversation IA
// @name:ckb OmniChat Exporter - هەر گفتوگۆیەکی AI بە خێرایی هەناردە بکە
// @name:es-419 OmniChat Exporter - Exporta al instante cualquier chat de IA

// @namespace    https://github.com/DREwX-code
// @version      1.1.5
// @icon         https://raw.githubusercontent.com/DREwX-code/omnichat-exporter/main/assets/logo.png

// @description Export and download conversations from ChatGPT, Gemini, Claude, Grok, and DeepSeek in TXT, PDF, JSON, or Markdown format - per message or full thread.
// @description:fr Exporter et télécharger des conversations depuis ChatGPT, Gemini, Claude, Grok et DeepSeek aux formats TXT, PDF, JSON ou Markdown - par message ou conversation complète.
// @description:es Exportar y descargar conversaciones de ChatGPT, Gemini, Claude, Grok y DeepSeek en formato TXT, PDF, JSON o Markdown - por mensaje o conversación completa.
// @description:de Gespräche von ChatGPT, Gemini, Claude, Grok und DeepSeek als TXT-, PDF-, JSON- oder Markdown-Datei exportieren und herunterladen - pro Nachricht oder gesamter Verlauf.
// @description:ru Экспорт и загрузка диалогов из ChatGPT, Gemini, Claude, Grok и DeepSeek в форматах TXT, PDF, JSON или Markdown - по сообщениям или всей переписки.
// @description:zh-CN 从 ChatGPT、Gemini、Claude、Grok 和 DeepSeek 导出并下载对话，支持 TXT、PDF、JSON 或 Markdown 格式--按单条消息或完整对话。
// @description:zh-TW 從 ChatGPT、Gemini、Claude、Grok 和 DeepSeek 匯出並下載對話，支援 TXT、PDF、JSON 或 Markdown 格式--單則訊息或完整對話。
// @description:ja ChatGPT、Gemini、Claude、Grok、DeepSeek の会話を TXT、PDF、JSON、Markdown 形式でエクスポートおよびダウンロード - メッセージ単位またはスレッド全体。
// @description:pt Exportar e baixar conversas do ChatGPT, Gemini, Claude, Grok e DeepSeek nos formatos TXT, PDF, JSON ou Markdown - por mensagem ou conversa completa.
// @description:it Esportare e scaricare conversazioni da ChatGPT, Gemini, Claude, Grok e DeepSeek nei formati TXT, PDF, JSON o Markdown - per messaggio o conversazione completa.
// @description:ar تصدير وتنزيل المحادثات من ChatGPT وGemini وClaude وGrok وDeepSeek بصيغ TXT أو PDF أو JSON أو Markdown - لكل رسالة أو للمحادثة كاملة.
// @description:be Экспарт і спампоўка размоў з ChatGPT, Gemini, Claude, Grok і DeepSeek у фарматах TXT, PDF, JSON або Markdown - па паведамленнях або ўся размова.
// @description:bg Експортиране и изтегляне на разговори от ChatGPT, Gemini, Claude, Grok и DeepSeek във формати TXT, PDF, JSON или Markdown - по съобщение или цял разговор.
// @description:cs Export a stažení konverzací z ChatGPT, Gemini, Claude, Grok a DeepSeek ve formátu TXT, PDF, JSON nebo Markdown - po zprávách nebo celé vlákno.
// @description:da Eksportér og download samtaler fra ChatGPT, Gemini, Claude, Grok og DeepSeek i TXT-, PDF-, JSON- eller Markdown-format - pr. besked eller hele tråden.
// @description:el Εξαγωγή και λήψη συνομιλιών από ChatGPT, Gemini, Claude, Grok και DeepSeek σε μορφή TXT, PDF, JSON ή Markdown - ανά μήνυμα ή ολόκληρη συνομιλία.
// @description:eo Eksporti kaj elŝuti konversaciojn el ChatGPT, Gemini, Claude, Grok kaj DeepSeek en formato TXT, PDF, JSON aŭ Markdown - laŭ mesaĝo aŭ tuta fadeno.
// @description:fi Vie ja lataa keskustelut ChatGPT:stä, Geministä, Claudesta, Grokista ja DeepSeekistä TXT-, PDF-, JSON- tai Markdown-muodossa - viestikohtaisesti tai koko keskustelu.
// @description:he ייצוא והורדת שיחות מ-ChatGPT, Gemini, Claude, Grok ו-DeepSeek בפורמט TXT, PDF, JSON או Markdown - לפי הודעה או כל השיחה.
// @description:hr Izvoz i preuzimanje razgovora iz ChatGPT-a, Geminija, Claudea, Groka i DeepSeeka u TXT, PDF, JSON ili Markdown formatu - po poruci ili cijelom razgovoru.
// @description:hu Beszélgetések exportálása és letöltése a ChatGPT, Gemini, Claude, Grok és DeepSeek rendszerekből TXT, PDF, JSON vagy Markdown formátumban - üzenetenként vagy teljes beszélgetés.
// @description:id Ekspor dan unduh percakapan dari ChatGPT, Gemini, Claude, Grok, dan DeepSeek dalam format TXT, PDF, JSON, atau Markdown - per pesan atau seluruh percakapan.
// @description:ka ჩათGPT, Gemini, Claude, Grok და DeepSeek საუბრების ექსპორტი და ჩამოტვირთვა TXT, PDF, JSON ან Markdown ფორმატში - თითოეული შეტყობინებით ან სრული საუბარი.
// @description:ko ChatGPT, Gemini, Claude, Grok 및 DeepSeek의 대화를 TXT, PDF, JSON 또는 Markdown 형식으로 내보내기 및 다운로드 - 메시지별 또는 전체 대화.
// @description:mr ChatGPT, Gemini, Claude, Grok आणि DeepSeek मधील संभाषणे TXT, PDF, JSON किंवा Markdown स्वरूपात निर्यात व डाउनलोड करा - प्रत्येक संदेशानुसार किंवा पूर्ण संभाषण.
// @description:nl Exporteer en download gesprekken van ChatGPT, Gemini, Claude, Grok en DeepSeek in TXT-, PDF-, JSON- of Markdown-formaat - per bericht of volledige conversatie.
// @description:nb Eksporter og last ned samtaler fra ChatGPT, Gemini, Claude, Grok og DeepSeek i TXT-, PDF-, JSON- eller Markdown-format - per melding eller hele tråden.
// @description:pl Eksportuj i pobieraj rozmowy z ChatGPT, Gemini, Claude, Grok i DeepSeek w formacie TXT, PDF, JSON lub Markdown - według wiadomości lub cała rozmowa.
// @description:pt-BR Exporte e baixe conversas do ChatGPT, Gemini, Claude, Grok e DeepSeek nos formatos TXT, PDF, JSON ou Markdown - por mensagem ou conversa completa.
// @description:ro Exportă și descarcă conversații din ChatGPT, Gemini, Claude, Grok și DeepSeek în format TXT, PDF, JSON sau Markdown - per mesaj sau întreaga conversație.
// @description:sk Export a stiahnutie konverzácií z ChatGPT, Gemini, Claude, Grok a DeepSeek vo formáte TXT, PDF, JSON alebo Markdown - po správach alebo celé vlákno.
// @description:sr Izvoz i preuzimanje razgovora iz ChatGPT-a, Geminija, Claudea, Groka i DeepSeeka u TXT, PDF, JSON ili Markdown formatu - po poruci ili ceo razgovor.
// @description:sv Exportera och ladda ner konversationer från ChatGPT, Gemini, Claude, Grok och DeepSeek i TXT-, PDF-, JSON- eller Markdown-format - per meddelande eller hela tråden.
// @description:th ส่งออกและดาวน์โหลดบทสนทนาจาก ChatGPT, Gemini, Claude, Grok และ DeepSeek ในรูปแบบ TXT, PDF, JSON หรือ Markdown - แยกตามข้อความหรือทั้งบทสนทนา.
// @description:tr ChatGPT, Gemini, Claude, Grok ve DeepSeek konuşmalarını TXT, PDF, JSON veya Markdown formatında dışa aktarın ve indirin - mesaj bazında veya tüm konuşma.
// @description:ug ChatGPT، Gemini، Claude، Grok ۋە DeepSeek دىكى سۆھبەتلەرنى TXT، PDF، JSON ياكى Markdown فورماتىدا چىقىرىش ۋە چۈشۈرۈش - ھەر بىر ئۇچۇر ياكى پۈتۈن سۆھبەت.
// @description:uk Експорт і завантаження розмов із ChatGPT, Gemini, Claude, Grok та DeepSeek у форматах TXT, PDF, JSON або Markdown - за повідомленням або вся розмова.
// @description:vi Xuất và tải xuống cuộc trò chuyện từ ChatGPT, Gemini, Claude, Grok và DeepSeek ở định dạng TXT, PDF, JSON hoặc Markdown - theo từng tin nhắn hoặc toàn bộ cuộc trò chuyện.
// @description:fr-CA Exporter et télécharger des conversations depuis ChatGPT, Gemini, Claude, Grok et DeepSeek aux formats TXT, PDF, JSON ou Markdown - par message ou conversation complète.
// @description:ckb هەناردن و داگرتنی گفتوگۆکان لە ChatGPT، Gemini، Claude، Grok و DeepSeek بە شێوەی TXT، PDF، JSON یان Markdown - بۆ هەر نامەیەک یان تەواوی گفتوگۆ.
// @description:es-419 Exportar y descargar conversaciones de ChatGPT, Gemini, Claude, Grok y DeepSeek en formato TXT, PDF, JSON o Markdown - por mensaje o conversación completa.

// @author       Dℝ∃wX
// @license      Apache-2.0
// @copyright    2026 Dℝ∃wX

// @match        https://chat.openai.com/*
// @match        https://chatgpt.com/*
// @match        https://gemini.google.com/*
// @match        https://claude.ai/*
// @match        https://grok.com/*
// @match        https://grok.x.ai/*
// @match        https://chat.deepseek.com/*

// @grant GM_xmlhttpRequest
// @connect raw.githubusercontent.com
// @connect esm.sh
// @connect cdn.jsdelivr.net
// @connect github.com
// @connect lh3.googleusercontent.com
// @connect *.googleusercontent.com

// @require      https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.9/pdfmake.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.9/vfs_fonts.js
// @run-at       document-idle
// @tag          utilities
// @downloadURL https://update.greasyfork.org/scripts/567743/OmniChat%20Exporter%20-%20Export%20Any%20AI%20Chat%20Instantly.user.js
// @updateURL https://update.greasyfork.org/scripts/567743/OmniChat%20Exporter%20-%20Export%20Any%20AI%20Chat%20Instantly.meta.js
// ==/UserScript==

/*

Copyright 2026 Dℝ∃wX

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/


/*

Third-Party Libraries used by this userscript
=============================================

PDF generation — pdfmake
------------------------

Used to generate PDF files directly in the browser.
No chat content is sent to any external PDF service.

Website: https://pdfmake.github.io/docs/
CDN: https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.9/pdfmake.min.js
Virtual fonts: https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.9/vfs_fonts.js
Source: https://github.com/bpampuch/pdfmake
License: MIT


Language detection — franc-min
------------------------------

Used to detect the primary language of exported chat text locally.

Source: https://github.com/wooorm/franc/tree/main/packages/franc-min
License: MIT


Font resources
--------------

Noto fonts may be downloaded on demand to ensure full script coverage during PDF export.
Fonts are fetched from upstream open-source repositories only when a matching script is detected.

Sources:
- https://github.com/notofonts
- https://github.com/google/fonts

Licenses:
- SIL Open Font License 1.1
- Apache License 2.0 (depending on the font family)

*/


(function () {
  'use strict';

  const host = location.hostname;
  const platform = detectPlatform(host);
  if (!platform) {
    return;
  }

  // ─────────────────────────────────────────────
  // Constants and platform selectors
  // ─────────────────────────────────────────────

  const STYLE_ID = 'omni-exporter-style';
  const EXPORT_BUTTON_CLASS = 'omni-exporter-btn';
  const SHARE_BUTTON_SELECTOR =
    'button[data-testid="copy-turn-action-button"], button[data-testid="share-chat-button"]';
  const TURN_SELECTOR = '[data-testid^="conversation-turn"]';
  const HEADER_ACTIONS_SELECTOR = '#conversation-header-actions';
  const HEADER_EXPORT_ATTR = 'data-omni-export-header';
  const EXPORT_SCOPE_ATTR = 'data-omni-scope';
  const CHATGPT_TOOLTIP_STYLE_ID = 'omni-gpt-tooltip-style';
  const CHATGPT_TOOLTIP_BOUND_ATTR = 'data-omni-gpt-tooltip-bound';
  const GROK_EXPORT_ATTR = 'data-omni-export-grok';
  const GROK_HEADER_SELECTOR =
    '[class*="absolute"][class*="flex-row"][class*="items-center"][class*="ms-auto"][class*="end-3"], ' +
    '[class*="absolute"][class*="flex-row"][class*="items-center"][class*="ms-auto"][class*="right-3"], ' +
    '.flex.shrink-0.flex-row.items-center.gap-1\\.5';
  const GROK_THREAD_EXPORT_ATTR = 'data-omni-export-grok-thread';
  const GROK_TOOLTIP_BOUND_ATTR = 'data-omni-grok-tooltip-bound';
  const GROK_TOOLTIP_PORTAL_ATTR = 'data-omni-grok-tooltip';
  const GROK_TOOLTIP_DELAY_MS = 100;
  const GROK_THREAD_TOOLTIP_DELAY_MS = 300;
  const GROK_TOOLTIP_CLOSE_MS = 165;
  const GROK_THREAD_EXPORT_CLASS =
    `inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium leading-[normal] ` +
    `cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-100 ` +
    `[&_svg]:shrink-0 select-none text-fg-secondary hover:bg-button-ghost-hover hover:text-fg-primary disabled:hover:bg-transparent ` +
    `border border-transparent rounded-full overflow-hidden h-10 w-10 p-2`;
  const GROK_TURN_EXPORT_CLASS =
    `inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium leading-[normal] cursor-pointer ` +
    `focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed transition-colors duration-100 ` +
    `[&_svg]:shrink-0 select-none text-fg-secondary hover:text-fg-primary hover:bg-button-ghost-hover disabled:hover:text-fg-secondary ` +
    `disabled:hover:bg-transparent [&_svg]:hover:text-fg-primary h-8 w-8 rounded-full opacity-0 group-focus-within:opacity-100 ` +
    `group-hover:opacity-100 [.last-response_&]:opacity-100 disabled:opacity-0 group-focus-within:disabled:opacity-60 ` +
    `group-hover:disabled:opacity-60 [.last-response_&]:disabled:opacity-60`;
  const GEMINI_ACTIONS_SELECTOR = '.actions-container-v2';
  const GEMINI_CONVERSATION_SELECTOR = '.conversation-container';
  const GEMINI_TURN_EXPORT_ATTR = 'data-omni-export-gemini-turn';
  const GEMINI_TURN_NATIVE_ATTR = 'data-omni-gemini-native-turn';
  const GEMINI_TURN_HOST_ATTR = 'data-omni-gemini-turn-host';
  const GEMINI_SHARE_BUTTON_SELECTOR =
    'button[data-test-id="share-and-export-menu-button"], button[data-test-id="share-button"], share-button button, gem-icon-button[data-test-id="share-and-export-menu-button"] button, gem-icon-button[data-test-id="share-button"] button';
  const GEMINI_THREAD_SHARE_BUTTON_SELECTOR =
    'button[data-test-id="share-and-export-menu-button"], button[data-test-id="share-button"], share-button button, gem-icon-button[data-test-id="share-and-export-menu-button"] button, gem-icon-button[data-test-id="share-button"] button';
  const GEMINI_MENU_BUTTON_SELECTOR =
    'button[data-test-id="more-menu-button"], button[data-test-id="conversation-actions-menu-icon-button"], gem-icon-button[data-test-id="more-menu-button"] button, gem-icon-button[data-test-id="conversation-actions-menu-icon-button"] button';
  const GEMINI_HEADER_SELECTOR = '.buttons-container.share';
  const GEMINI_UPSELL_SELECTOR =
    '.adv-upsell, g1-dynamic-upsell-button, [data-test-id*="upsell" i], [data-test-id*="upgrade" i], button[data-test-id="bard-g1-dynamic-upsell-menu-button"]';
  const GEMINI_NON_CONVERSATION_ACTION_SELECTOR =
    '[data-test-id*="install" i]';
  const GEMINI_THREAD_EXPORT_ATTR = 'data-omni-export-gemini-thread';
  const GEMINI_THREAD_NATIVE_ATTR = 'data-omni-gemini-native-thread';
  const GEMINI_THREAD_FALLBACK_ATTR = 'data-omni-gemini-thread-fallback';
  const GEMINI_TOOLTIP_BOUND_ATTR = 'data-omni-gemini-tooltip-bound';
  const GEMINI_NATIVE_TOOLTIP_SWITCH_BOUND_ATTR = 'data-omni-gemini-native-tooltip-switch-bound';
  const GEMINI_TOOLTIP_OVERLAY_ATTR = 'data-omni-gemini-tooltip';
  const GEMINI_TOOLTIP_SHOW_DELAY_MS = 0;
  const GEMINI_TOOLTIP_REMOVE_DELAY_MS = 75;
  const CLAUDE_HEADER_SELECTOR = '[data-testid="wiggle-controls-actions"]';
  const CLAUDE_SHARE_SELECTOR = '[data-testid="wiggle-controls-actions-share"]';
  const CLAUDE_THREAD_EXPORT_ATTR = 'data-omni-export-claude-thread';
  const CLAUDE_ACTIONS_SELECTOR = '[data-message-action-bar]';
  const CLAUDE_COPY_SELECTOR = '[data-testid="action-bar-copy"]';
  const CLAUDE_TURN_EXPORT_ATTR = 'data-omni-export-claude-turn';
  const CLAUDE_TOOLTIP_BOUND_ATTR = 'data-omni-claude-tooltip-bound';
  const CLAUDE_TOOLTIP_DELAY_MS = 500;
  const CLAUDE_TOOLTIP_SKIP_DELAY_MS = 300;
  const CLAUDE_TOOLTIP_HIDE_DELAY_MS = 120;
  const DEEPSEEK_ACTIONS_SELECTOR = 'div.ds-flex._0a3d93b';
  const DEEPSEEK_GROUP_SELECTOR = 'div.ds-flex._965abe9';
  const DEEPSEEK_ROLE_BUTTON_SELECTOR = '[role="button"]';
  const DEEPSEEK_TURN_BUTTON_CLASSNAME =
    'ds-button ds-button--iconLabelTertiary ds-button--icon ds-button--capsule ds-button--xs ds-button--icon-relative-l db183363';
  const DEEPSEEK_THREAD_BUTTON_CLASSNAME =
    'ds-button ds-button--iconLabelPrimary ds-button--icon ds-button--capsule ds-button--l ds-button--icon-relative-m _57370c5 _5dedc1e';
  const DEEPSEEK_EXPORT_ATTR = 'data-omni-export-deepseek';
  const DEEPSEEK_THREAD_BUTTON_SELECTOR =
    'div.ds-button.ds-button--iconLabelPrimary.ds-button--icon.ds-button--capsule.ds-button--l.ds-button--icon-relative-m[role="button"]';
  const DEEPSEEK_THREAD_EXPORT_ATTR = 'data-omni-export-deepseek-thread';
  const DEEPSEEK_SCROLL_SETTLE_MS = 70;
  const DEEPSEEK_SCROLL_RESTORE_SETTLE_MS = 120;
  const DEEPSEEK_SCROLL_STEP_MULTIPLIER = 1.35;
  const MENU_CLASS = 'omni-exporter-menu';
  const MENU_ITEM_CLASS = 'omni-exporter-menu-item';
  const MENU_OPEN_CLASS = 'omni-exporter-menu-open';
  const STATUS_DURATION_MS = 1400;
  const PROJECT_URL = 'https://github.com/DREwX-code/omnichat-exporter';
  const PDF_EXPORT_LOADER_ID = 'omni-exporter-pdf-loader';
  const PDF_EXPORT_LOADER_STAGE_ATTR = 'data-omni-pdf-stage';
  const PDF_LANGUAGE_DETECTOR_URL = 'https://esm.sh/franc-min@6.2.0/es2022/franc-min.bundle.mjs';
  const PDF_LANGUAGE_SAMPLE_LIMIT = 180;
  const PDF_LANGUAGE_SAMPLE_LENGTH = 1600;
  const PDF_LANGUAGE_MIN_LENGTH = 24;
  const PDF_ENABLE_EMOJI_FONT = true;
  const PDF_EMOJI_FONT_FAMILY = 'OpenMojiBlack';
  const PDF_EMOJI_FONT_FILE = 'OpenMoji-black-glyf.ttf';
  const PDF_CODE_DEFAULT_TEXT_COLOR = '#f8fafc';
  const PDF_A4_WIDTH_PT = 595.28;
  const PDF_PAGE_MARGINS = [42, 38, 42, 50];
  const PDF_CONTENT_WIDTH_PT = PDF_A4_WIDTH_PT - PDF_PAGE_MARGINS[0] - PDF_PAGE_MARGINS[2];
  const PDF_TABLE_SAFE_RIGHT_MARGIN_PT = 28;
  const PDF_GEMINI_HLJS_TOKEN_STYLES = {
    keyword: { color: '#c084fc', bold: true },
    built_in: { color: '#fbbf24' },
    type: { color: '#67e8f9' },
    literal: { color: '#67e8f9' },
    number: { color: '#fbbf24' },
    regexp: { color: '#f472b6' },
    string: { color: '#86efac' },
    subst: { color: '#f8fafc' },
    symbol: { color: '#93c5fd' },
    class: { color: '#67e8f9' },
    function: { color: '#93c5fd' },
    title: { color: '#93c5fd' },
    params: { color: '#f8fafc' },
    comment: { color: '#94a3b8', italics: true },
    doctag: { color: '#f472b6' },
    meta: { color: '#94a3b8' },
    section: { color: '#93c5fd', bold: true },
    tag: { color: '#f472b6' },
    name: { color: '#f472b6' },
    attr: { color: '#fbbf24' },
    attribute: { color: '#fbbf24' },
    variable: { color: '#fda4af' },
    template_variable: { color: '#fda4af' },
    selector_id: { color: '#93c5fd' },
    selector_class: { color: '#93c5fd' },
    selector_attr: { color: '#fbbf24' },
    selector_tag: { color: '#f472b6' },
    addition: { color: '#86efac' },
    deletion: { color: '#fda4af' }
  };
  const PDF_PRISM_TOKEN_STYLES = {
    keyword: { color: '#c084fc', bold: true },
    boolean: { color: '#fbbf24' },
    number: { color: '#fbbf24' },
    constant: { color: '#67e8f9' },
    symbol: { color: '#93c5fd' },
    deleted: { color: '#fda4af' },
    string: { color: '#86efac' },
    char: { color: '#86efac' },
    builtin: { color: '#fbbf24' },
    inserted: { color: '#86efac' },
    operator: { color: '#f472b6' },
    entity: { color: '#fbbf24' },
    url: { color: '#93c5fd' },
    variable: { color: '#fda4af' },
    atrule: { color: '#93c5fd' },
    attr_value: { color: '#86efac' },
    function: { color: '#93c5fd' },
    class_name: { color: '#67e8f9' },
    regex: { color: '#f472b6' },
    important: { color: '#f472b6', bold: true },
    punctuation: { color: '#cbd5e1' },
    property: { color: '#fbbf24' },
    tag: { color: '#f472b6' },
    attr_name: { color: '#fbbf24' },
    namespace: { color: '#67e8f9' },
    selector: { color: '#93c5fd' },
    comment: { color: '#94a3b8', italics: true },
    prolog: { color: '#94a3b8', italics: true },
    doctype: { color: '#94a3b8', italics: true },
    cdata: { color: '#94a3b8', italics: true },
    parameter: { color: '#fda4af' },
    interpolation: { color: '#f8fafc' },
    interpolation_punctuation: { color: '#f472b6' },
    template_string: { color: '#86efac' },
    template_punctuation: { color: '#86efac' },
    string_property: { color: '#fbbf24' },
    literal_property: { color: '#fbbf24' }
  };
  const NON_EXPORTABLE_NODE_SELECTOR =
    'button, svg, [role="button"], script, style, .omni-exporter-btn, [data-test-id="action-bar-copy"], ' +
    '.cdk-visually-hidden, .visually-hidden, .sr-only, [hidden]';
  const PDF_EMOJI_FONT_URLS = [
    'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/font/OpenMoji-black-glyf/OpenMoji-black-glyf.ttf'
  ];
  const PDF_SCRIPT_FONT_SPECS = {
    symbolsText: {
      family: 'NotoSansSymbols',
      file: 'NotoSansSymbols-Regular.ttf',
      urls: [
        'https://raw.githubusercontent.com/notofonts/noto-fonts/main/hinted/ttf/NotoSansSymbols/NotoSansSymbols-Regular.ttf'
      ]
    },
    symbolsExtra: {
      family: 'NotoSansSymbols2',
      file: 'NotoSansSymbols2-Regular.ttf',
      urls: [
        'https://raw.githubusercontent.com/notofonts/noto-fonts/main/hinted/ttf/NotoSansSymbols2/NotoSansSymbols2-Regular.ttf'
      ]
    },
    latinExtended: {
      family: 'NotoSansExtended',
      file: 'NotoSans-Regular.ttf',
      urls: [
        'https://raw.githubusercontent.com/notofonts/noto-fonts/main/hinted/ttf/NotoSans/NotoSans-Regular.ttf'
      ]
    },
    greek: {
      family: 'NotoSansGreek',
      file: 'NotoSans-Regular.ttf',
      urls: [
        'https://raw.githubusercontent.com/notofonts/noto-fonts/main/hinted/ttf/NotoSans/NotoSans-Regular.ttf'
      ]
    },
    cyrillic: {
      family: 'NotoSansCyrillic',
      file: 'NotoSans-Regular.ttf',
      urls: [
        'https://raw.githubusercontent.com/notofonts/noto-fonts/main/hinted/ttf/NotoSans/NotoSans-Regular.ttf'
      ]
    },
    chinese: {
      family: 'NotoSansSC',
      file: 'NotoSansCJKsc-Regular.otf',
      urls: [
        'https://raw.githubusercontent.com/notofonts/noto-cjk/main/Sans/OTF/SimplifiedChinese/NotoSansCJKsc-Regular.otf'
      ]
    },
    japanese: {
      family: 'NotoSansJP',
      file: 'NotoSansCJKjp-Regular.otf',
      urls: [
        'https://raw.githubusercontent.com/notofonts/noto-cjk/main/Sans/OTF/Japanese/NotoSansCJKjp-Regular.otf'
      ]
    },
    korean: {
      family: 'NotoSansKR',
      file: 'NotoSansCJKkr-Regular.otf',
      urls: [
        'https://raw.githubusercontent.com/notofonts/noto-cjk/main/Sans/OTF/Korean/NotoSansCJKkr-Regular.otf'
      ]
    },
    arabic: {
      family: 'NotoSansArabic',
      file: 'NotoSansArabic-Regular.ttf',
      urls: [
        'https://raw.githubusercontent.com/notofonts/noto-fonts/main/hinted/ttf/NotoSansArabic/NotoSansArabic-Regular.ttf'
      ]
    },
    syriac: {
      family: 'NotoSansSyriac',
      file: 'NotoSansSyriac-Regular.ttf',
      urls: [
        'https://raw.githubusercontent.com/notofonts/noto-fonts/main/hinted/ttf/NotoSansSyriac/NotoSansSyriac-Regular.ttf'
      ]
    },
    devanagari: {
      family: 'Hind',
      file: 'Hind-Regular.ttf',
      urls: [
        'https://raw.githubusercontent.com/google/fonts/main/ofl/hind/Hind-Regular.ttf'
      ]
    },
    bengali: {
      family: 'NotoSansBengali',
      file: 'NotoSansBengali-Regular.ttf',
      urls: [
        'https://raw.githubusercontent.com/notofonts/noto-fonts/main/hinted/ttf/NotoSansBengali/NotoSansBengali-Regular.ttf'
      ]
    },
    gurmukhi: {
      family: 'NotoSansGurmukhi',
      file: 'NotoSansGurmukhi-Regular.ttf',
      urls: [
        'https://raw.githubusercontent.com/notofonts/noto-fonts/main/hinted/ttf/NotoSansGurmukhi/NotoSansGurmukhi-Regular.ttf'
      ]
    },
    gujarati: {
      family: 'NotoSansGujarati',
      file: 'NotoSansGujarati-Regular.ttf',
      urls: [
        'https://raw.githubusercontent.com/notofonts/noto-fonts/main/hinted/ttf/NotoSansGujarati/NotoSansGujarati-Regular.ttf'
      ]
    },
    odia: {
      family: 'NotoSansOriya',
      file: 'NotoSansOriya-Regular.ttf',
      urls: [
        'https://raw.githubusercontent.com/notofonts/noto-fonts/main/hinted/ttf/NotoSansOriya/NotoSansOriya-Regular.ttf'
      ]
    },
    tamil: {
      family: 'NotoSansTamil',
      file: 'NotoSansTamil-Regular.ttf',
      urls: [
        'https://raw.githubusercontent.com/notofonts/noto-fonts/main/hinted/ttf/NotoSansTamil/NotoSansTamil-Regular.ttf'
      ]
    },
    telugu: {
      family: 'Mandali',
      file: 'Mandali-Regular.ttf',
      urls: [
        'https://raw.githubusercontent.com/google/fonts/main/ofl/mandali/Mandali-Regular.ttf'
      ]
    },
    kannada: {
      family: 'NotoSansKannada',
      file: 'NotoSansKannada-Regular.ttf',
      urls: [
        'https://raw.githubusercontent.com/notofonts/noto-fonts/main/hinted/ttf/NotoSansKannada/NotoSansKannada-Regular.ttf'
      ]
    },
    malayalam: {
      family: 'NotoSansMalayalam',
      file: 'NotoSansMalayalam-Regular.ttf',
      urls: [
        'https://raw.githubusercontent.com/notofonts/noto-fonts/main/hinted/ttf/NotoSansMalayalam/NotoSansMalayalam-Regular.ttf'
      ]
    },
    sinhala: {
      family: 'NotoSansSinhala',
      file: 'NotoSansSinhala-Regular.ttf',
      urls: [
        'https://raw.githubusercontent.com/notofonts/noto-fonts/main/hinted/ttf/NotoSansSinhala/NotoSansSinhala-Regular.ttf'
      ]
    },
    thai: {
      family: 'NotoSansThai',
      file: 'NotoSansThai-Regular.ttf',
      urls: [
        'https://raw.githubusercontent.com/notofonts/noto-fonts/main/hinted/ttf/NotoSansThai/NotoSansThai-Regular.ttf'
      ]
    },
    lao: {
      family: 'NotoSansLao',
      file: 'NotoSansLao-Regular.ttf',
      urls: [
        'https://raw.githubusercontent.com/notofonts/noto-fonts/main/hinted/ttf/NotoSansLao/NotoSansLao-Regular.ttf'
      ]
    },
    khmer: {
      family: 'NotoSansKhmer',
      file: 'NotoSansKhmer-Regular.ttf',
      urls: [
        'https://raw.githubusercontent.com/notofonts/noto-fonts/main/hinted/ttf/NotoSansKhmer/NotoSansKhmer-Regular.ttf'
      ]
    },
    myanmar: {
      family: 'NotoSansMyanmar',
      file: 'NotoSansMyanmar-Regular.ttf',
      urls: [
        'https://raw.githubusercontent.com/notofonts/noto-fonts/main/hinted/ttf/NotoSansMyanmar/NotoSansMyanmar-Regular.ttf'
      ]
    },
    hebrew: {
      family: 'NotoSansHebrew',
      file: 'NotoSansHebrew-Regular.ttf',
      urls: [
        'https://raw.githubusercontent.com/notofonts/noto-fonts/main/hinted/ttf/NotoSansHebrew/NotoSansHebrew-Regular.ttf'
      ]
    },
    canadianAboriginal: {
      family: 'NotoSansCanadianAboriginal',
      file: 'NotoSansCanadianAboriginal-Regular.ttf',
      urls: [
        'https://raw.githubusercontent.com/notofonts/noto-fonts/main/hinted/ttf/NotoSansCanadianAboriginal/NotoSansCanadianAboriginal-Regular.ttf'
      ]
    },
    tangut: {
      family: 'NotoSerifTangut',
      file: 'NotoSerifTangut-Regular.otf',
      urls: [
        'https://raw.githubusercontent.com/notofonts/noto-fonts/main/unhinted/otf/NotoSerifTangut/NotoSerifTangut-Regular.otf'
      ]
    },
    avestan: {
      family: 'NotoSansAvestan',
      file: 'NotoSansAvestan-Regular.ttf',
      urls: [
        'https://raw.githubusercontent.com/notofonts/noto-fonts/main/hinted/ttf/NotoSansAvestan/NotoSansAvestan-Regular.ttf'
      ]
    },
    armenian: {
      family: 'NotoSansArmenian',
      file: 'NotoSansArmenian-Regular.ttf',
      urls: [
        'https://raw.githubusercontent.com/notofonts/noto-fonts/main/hinted/ttf/NotoSansArmenian/NotoSansArmenian-Regular.ttf'
      ]
    },
    georgian: {
      family: 'NotoSansGeorgian',
      file: 'NotoSansGeorgian-Regular.ttf',
      urls: [
        'https://raw.githubusercontent.com/notofonts/noto-fonts/main/hinted/ttf/NotoSansGeorgian/NotoSansGeorgian-Regular.ttf'
      ]
    },
    ethiopic: {
      family: 'NotoSansEthiopic',
      file: 'NotoSansEthiopic-Regular.ttf',
      urls: [
        'https://raw.githubusercontent.com/notofonts/noto-fonts/main/hinted/ttf/NotoSansEthiopic/NotoSansEthiopic-Regular.ttf'
      ]
    },
    egyptianHieroglyphs: {
      family: 'NotoSansEgyptianHieroglyphs',
      file: 'NotoSansEgyptianHieroglyphs-Regular.ttf',
      urls: [
        'https://raw.githubusercontent.com/notofonts/noto-fonts/main/hinted/ttf/NotoSansEgyptianHieroglyphs/NotoSansEgyptianHieroglyphs-Regular.ttf'
      ]
    },
    runic: {
      family: 'NotoSansRunic',
      file: 'NotoSansRunic-Regular.ttf',
      urls: [
        'https://raw.githubusercontent.com/notofonts/noto-fonts/main/hinted/ttf/NotoSansRunic/NotoSansRunic-Regular.ttf'
      ]
    },
    glagolitic: {
      family: 'NotoSansGlagolitic',
      file: 'NotoSansGlagolitic-Regular.ttf',
      urls: [
        'https://raw.githubusercontent.com/notofonts/noto-fonts/main/hinted/ttf/NotoSansGlagolitic/NotoSansGlagolitic-Regular.ttf'
      ]
    },
    cuneiform: {
      family: 'NotoSansCuneiform',
      file: 'NotoSansCuneiform-Regular.ttf',
      urls: [
        'https://raw.githubusercontent.com/notofonts/noto-fonts/main/hinted/ttf/NotoSansCuneiform/NotoSansCuneiform-Regular.ttf'
      ]
    }
  };
  const PDF_SCRIPT_DETECTION_PATTERNS = {
    symbolsText: /[\u2190-\u21FF\u2300-\u23FF\u2460-\u24FF\u2600-\u27BF\u2900-\u297F\u2B00-\u2BFF\u3000-\u303D\u3200-\u32FF\u{1F100}-\u{1F2FF}]/u,
    symbolsExtra: /[\u2200-\u23FF\u2460-\u24FF\u2500-\u25FF\u2600-\u27BF\u2800-\u28FF\u2900-\u297F\u2B00-\u2BFF]/u,
    latin: /[A-Za-z\u00C0-\u024F]/u,
    latinExtended: /[\u0100-\u024F\u1E00-\u1EFF\u2C60-\u2C7F\uA720-\uA7FF\uAB30-\uAB6F\uFB00-\uFB06]/u,
    chinese: /[\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF\u{20000}-\u{2EBEF}\u{30000}-\u{323AF}]/u,
    japanese: /[\u3040-\u309F\u30A0-\u30FF\u31F0-\u31FF]/u,
    korean: /[\u1100-\u11FF\u3130-\u318F\uAC00-\uD7AF]/u,
    arabic: /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/u,
    syriac: /[\u0700-\u074F\u0860-\u086F]/u,
    devanagari: /[\u0900-\u097F\uA8E0-\uA8FF]/u,
    bengali: /[\u0980-\u09FF]/u,
    gurmukhi: /[\u0A00-\u0A7F]/u,
    gujarati: /[\u0A80-\u0AFF]/u,
    odia: /[\u0B00-\u0B7F]/u,
    tamil: /[\u0B80-\u0BFF]/u,
    telugu: /[\u0C00-\u0C7F]/u,
    kannada: /[\u0C80-\u0CFF]/u,
    malayalam: /[\u0D00-\u0D7F]/u,
    sinhala: /[\u0D80-\u0DFF]/u,
    thai: /[\u0E00-\u0E7F]/u,
    lao: /[\u0E80-\u0EFF]/u,
    myanmar: /[\u1000-\u109F\uA9E0-\uA9FF\uAA60-\uAA7F]/u,
    georgian: /[\u10A0-\u10FF\u1C90-\u1CBF\u2D00-\u2D2F]/u,
    ethiopic: /[\u1200-\u137F\u1380-\u139F\u2D80-\u2DDF\uAB00-\uAB2F]/u,
    khmer: /[\u1780-\u17FF\u19E0-\u19FF]/u,
    armenian: /[\u0530-\u058F\uFB13-\uFB17]/u,
    hebrew: /[\u0590-\u05FF\uFB1D-\uFB4F]/u,
    canadianAboriginal: /[\u1400-\u167F\u18B0-\u18FF\u{11AB0}-\u{11ABF}]/u,
    tangut: /[\u{17000}-\u{187FF}\u{18800}-\u{18AFF}\u{18D00}-\u{18D8F}]/u,
    avestan: /[\u{10B00}-\u{10B3F}]/u,
    egyptianHieroglyphs: /[\u{13000}-\u{1345F}]/u,
    runic: /[\u16A0-\u16FF]/u,
    glagolitic: /[\u2C00-\u2C5F\u{1E000}-\u{1E02F}]/u,
    cuneiform: /[\u{12000}-\u{123FF}\u{12400}-\u{1247F}]/u,
    greek: /[\u0370-\u03FF\u1F00-\u1FFF]/u,
    cyrillic: /[\u0400-\u04FF\u0500-\u052F\u2DE0-\u2DFF\uA640-\uA69F]/u
  };
  const PDF_DIRECT_SCRIPT_SCAN_ORDER = [
    'symbolsExtra',
    'symbolsText',
    'latinExtended',
    'arabic',
    'syriac',
    'devanagari',
    'bengali',
    'gurmukhi',
    'gujarati',
    'odia',
    'tamil',
    'telugu',
    'kannada',
    'malayalam',
    'sinhala',
    'thai',
    'lao',
    'myanmar',
    'khmer',
    'hebrew',
    'canadianAboriginal',
    'tangut',
    'avestan',
    'armenian',
    'georgian',
    'ethiopic',
    'egyptianHieroglyphs',
    'runic',
    'glagolitic',
    'cuneiform',
    'greek',
    'cyrillic'
  ];
  const PDF_SCRIPT_RESOURCE_LABELS = {
    symbolsText: 'Symbols font',
    symbolsExtra: 'Extended symbols font',
    latinExtended: 'Extended Latin font',
    chinese: 'Chinese font',
    japanese: 'Japanese font',
    korean: 'Korean font',
    arabic: 'Arabic font',
    syriac: 'Assyrian / Syriac font',
    devanagari: 'Devanagari font',
    bengali: 'Bengali font',
    gurmukhi: 'Gurmukhi font',
    gujarati: 'Gujarati font',
    odia: 'Odia font',
    tamil: 'Tamil font',
    telugu: 'Telugu font',
    kannada: 'Kannada font',
    malayalam: 'Malayalam font',
    sinhala: 'Sinhala font',
    thai: 'Thai font',
    lao: 'Lao font',
    myanmar: 'Myanmar font',
    khmer: 'Khmer font',
    hebrew: 'Hebrew font',
    canadianAboriginal: 'Inuktut syllabics font',
    tangut: 'Tangut font',
    avestan: 'Avestan font',
    armenian: 'Armenian font',
    georgian: 'Georgian font',
    ethiopic: 'Amharic / Ethiopic font',
    egyptianHieroglyphs: 'Egyptian hieroglyph font',
    runic: 'Runic font',
    glagolitic: 'Glagolitic font',
    cuneiform: 'Cuneiform font',
    greek: 'Greek font',
    cyrillic: 'Cyrillic font',
    emoji: 'Emoji / symbols font'
  };
  const PDF_SCRIPT_FALLBACK_LANGUAGE_MAP = {
    chinese: 'zh',
    japanese: 'ja',
    korean: 'ko',
    arabic: 'ar',
    syriac: 'aii',
    devanagari: 'hi',
    bengali: 'bn',
    gurmukhi: 'pa',
    gujarati: 'gu',
    odia: 'or',
    tamil: 'ta',
    telugu: 'te',
    kannada: 'kn',
    malayalam: 'ml',
    sinhala: 'si',
    thai: 'th',
    lao: 'lo',
    myanmar: 'my',
    khmer: 'km',
    hebrew: 'he',
    canadianAboriginal: 'iu',
    tangut: 'txg',
    avestan: 'ae',
    armenian: 'hy',
    georgian: 'ka',
    ethiopic: 'am',
    runic: 'non',
    glagolitic: 'cu',
    greek: 'el',
    cyrillic: 'ru'
  };
  const PDF_SCRIPT_FALLBACK_PRIORITY = [
    'japanese',
    'korean',
    'chinese',
    'arabic',
    'syriac',
    'devanagari',
    'bengali',
    'gurmukhi',
    'gujarati',
    'odia',
    'tamil',
    'telugu',
    'kannada',
    'malayalam',
    'sinhala',
    'thai',
    'lao',
    'myanmar',
    'khmer',
    'hebrew',
    'canadianAboriginal',
    'tangut',
    'avestan',
    'armenian',
    'georgian',
    'ethiopic',
    'runic',
    'glagolitic',
    'cuneiform',
    'greek',
    'cyrillic',
    'latin'
  ];
  const PDF_SCRIPT_FONT_RETRY_ORDER = [
    'arabic',
    'syriac',
    'devanagari',
    'bengali',
    'gurmukhi',
    'gujarati',
    'odia',
    'tamil',
    'telugu',
    'kannada',
    'malayalam',
    'sinhala',
    'thai',
    'lao',
    'myanmar',
    'khmer',
    'hebrew',
    'canadianAboriginal',
    'tangut',
    'avestan',
    'ethiopic',
    'armenian',
    'georgian',
    'runic',
    'glagolitic',
    'cuneiform',
    'japanese',
    'korean',
    'chinese',
    'cyrillic'
  ];
  const PDF_HAN_PATTERN = /[\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF\u{20000}-\u{2EBEF}\u{30000}-\u{323AF}]/u;
  const PDF_CJK_SYMBOL_PATTERN = /[\u3000-\u303F\uFF00-\uFFEF]/u;
  const PDF_SYMBOL_TEXT_PATTERN = /[\u2190-\u23FF\u2460-\u24FF\u2500-\u25FF\u2600-\u27BF\u2800-\u28FF\u2900-\u297F\u2B00-\u2BFF\u3000-\u303D\u3200-\u32FF\u{1F100}-\u{1F2FF}]/u;
  const PDF_NON_CJK_SYMBOL_TEXT_PATTERN = /[\u2190-\u23FF\u2460-\u24FF\u2500-\u25FF\u2600-\u27BF\u2800-\u28FF\u2900-\u297F\u2B00-\u2BFF\u{1F100}-\u{1F2FF}]/u;
  const PDF_EMOJI_STYLE_PATTERN = /(?:\p{Extended_Pictographic}|\p{Regional_Indicator}|\p{Emoji_Modifier}|\u{FE0F}|\u{20E3}|\u{200D}|[\u{1F100}-\u{1F2FF}])/u;
  const PDF_SAFE_SEGMENTATION_SCRIPTS = [
    'arabic',
    'syriac',
    'devanagari',
    'bengali',
    'gurmukhi',
    'gujarati',
    'odia',
    'tamil',
    'telugu',
    'kannada',
    'malayalam',
    'sinhala',
    'thai',
    'lao',
    'myanmar',
    'khmer',
    'hebrew',
    'canadianAboriginal'
  ];
  const PDF_LATIN_COMBINING_MARK_PATTERN = /[\u0300-\u036F\u1AB0-\u1AFF\u1DC0-\u1DFF]/u;
  const PDF_TOKEN_BREAK_PATTERN = /[\s\u0000-\u002F\u003A-\u0040\u005B-\u0060\u007B-\u007E\u2000-\u206F\u3000-\u303F]/u;
  const PDF_LANGUAGE_CODE_MAP = {
    amh: 'am',
    afr: 'af',
    aii: 'aii',
    ara: 'ar',
    arb: 'ar',
    arm: 'hy',
    ave: 'ae',
    ben: 'bn',
    bul: 'bg',
    cat: 'ca',
    ces: 'cs',
    cmn: 'zh',
    cym: 'cy',
    dan: 'da',
    deu: 'de',
    ell: 'el',
    eng: 'en',
    est: 'et',
    fas: 'fa',
    fin: 'fi',
    fra: 'fr',
    guj: 'gu',
    heb: 'he',
    hin: 'hi',
    hrv: 'hr',
    hun: 'hu',
    iku: 'iu',
    ind: 'id',
    ita: 'it',
    jav: 'jv',
    jpn: 'ja',
    kat: 'ka',
    kan: 'kn',
    khm: 'km',
    kor: 'ko',
    lao: 'lo',
    lit: 'lt',
    lvs: 'lv',
    mal: 'ml',
    mar: 'mr',
    mya: 'my',
    mon: 'mn',
    nld: 'nl',
    nep: 'ne',
    nor: 'no',
    npi: 'ne',
    ori: 'or',
    ory: 'or',
    pan: 'pa',
    pol: 'pl',
    por: 'pt',
    ron: 'ro',
    rus: 'ru',
    slk: 'sk',
    slv: 'sl',
    spa: 'es',
    srp: 'sr',
    sin: 'si',
    syc: 'aii',
    syr: 'aii',
    swe: 'sv',
    tam: 'ta',
    tel: 'te',
    tha: 'th',
    txg: 'txg',
    tur: 'tr',
    ukr: 'uk',
    urd: 'ur',
    vie: 'vi',
    khk: 'mn',
    hye: 'hy',
    zho: 'zh'
  };

  // ─────────────────────────────────────────────
  // Runtime state
  // ─────────────────────────────────────────────

let iconCounter = 0;
let activeMenu = null;
let activeMenuButton = null;
let menuCleanup = null;
let chatGptTooltip = null;
let chatGptTooltipTarget = null;
let chatGptTooltipCleanup = null;
let chatGptThemeObserver = null;
let chatGptThemeSyncQueued = false;
let claudeTooltipWarmUntil = 0;
let claudeTooltipShowTimer = null;
let claudeTooltipBridgeInstalled = false;
let activeClaudeBridgeTooltip = null;
let activeClaudeOmniTooltipCloser = null;
let activeGeminiTooltip = null;
let geminiTooltipShowTimer = null;
let geminiTooltipHideTimer = null;
let geminiTooltipTargetHovered = false;
let geminiTooltipHovered = false;
let geminiThemeObserver = null;
let geminiThemeSyncQueued = false;
let activeGrokTooltip = null;
let grokTooltipTarget = null;
let grokTooltipCycle = 0;
let grokTooltipShowTimer = null;
let grokTooltipHideTimer = null;
let grokTooltipScrollCleanup = null;
let grokTooltipAnchorCleanup = null;
let lastGeminiThreadInjectionLogKey = '';
let pdfMakeRef = null;
  let activePdfFontContext = null;
  let activePdfEmojiFontFamily = '';
  let languageDetectorModulePromise = null;
  let pdfFontBase64Promises = Object.create(null);
  let pdfImageDataUrlPromises = Object.create(null);
  let trustedHtmlPolicyRef = null;
  let trustedHtmlPolicyUnavailable = false;
  let emojiRegexRef = null;
  let graphemeSegmenterRef = null;

  // ─────────────────────────────────────────────
  // Shared stylesheet
  // ─────────────────────────────────────────────

  const styles = `
.${EXPORT_BUTTON_CLASS}:not(.omni-exporter-grok):not([${CLAUDE_THREAD_EXPORT_ATTR}]):not([${CLAUDE_TURN_EXPORT_ATTR}]) {
  pointer-events: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  width: 2rem;
  padding: 0;
  border-radius: 0.5rem;
  border: none;
  color: var(--text-token-text-secondary, #8e8ea0);
  cursor: pointer;
}

.${EXPORT_BUTTON_CLASS}:not(.omni-exporter-grok):not([${CLAUDE_THREAD_EXPORT_ATTR}]):not([${CLAUDE_TURN_EXPORT_ATTR}]) svg {
  width: 18px;
  height: 18px;
  display: block;
  color: currentColor;
}

.${EXPORT_BUTTON_CLASS}[data-omni-status="success"] {
  background: rgba(34, 197, 94, 0.15);
}

.${EXPORT_BUTTON_CLASS}[data-omni-status="error"] {
  background: rgba(239, 68, 68, 0.15);
}

.${EXPORT_BUTTON_CLASS}[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}

.${EXPORT_BUTTON_CLASS}.omni-exporter-grok {
  pointer-events: auto;
  color: inherit;
  background: transparent;
  border: none;
  padding: 0;
  width: auto;
  height: auto;
  border-radius: inherit;
}

.omni-exporter-grok.${EXPORT_BUTTON_CLASS} svg {
  width: 16px !important;
  height: 16px !important;
  display: block;
  color: currentColor;
}

button[${GROK_EXPORT_ATTR}] svg,
button[${GROK_THREAD_EXPORT_ATTR}] svg {
  width: 16px !important;
  height: 16px !important;
  display: block !important;
  margin: 0 !important;
  padding: 0 !important;
  vertical-align: middle !important;
}

button[${GROK_EXPORT_ATTR}],
button[${GROK_THREAD_EXPORT_ATTR}] {
  margin-bottom: 0 !important;
}

button[${GROK_EXPORT_ATTR}][data-omni-scope="turn"] > span {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  line-height: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
}

button[${GROK_EXPORT_ATTR}][data-omni-scope="thread"] svg {
  width: 20px !important;
  height: 20px !important;
}

button[${GROK_EXPORT_ATTR}][data-omni-scope="turn"] svg {
  width: 16px !important;
  height: 16px !important;
}

.${MENU_CLASS} {
  position: absolute;
  z-index: 9999;
  min-width: 140px;
  padding: 6px;
  border-radius: 12px;
  border: 1px solid rgba(148, 163, 184, 0.2);
  background: rgba(15, 23, 42, 0.94);
  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.35);
  backdrop-filter: blur(70px);
  opacity: 0;
  transform: translateY(-4px) scale(0.98);
  transition: opacity 0.12s ease, transform 0.12s ease;
  font-family: inherit;
}

.${MENU_CLASS}[data-omni-platform="gemini"] {
  background: #111827;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
}

.${MENU_OPEN_CLASS} {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.${MENU_ITEM_CLASS} {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 8px 10px;
  border-radius: 8px;
  border: none;
  background: transparent;
  color: #e2e8f0;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.2px;
  cursor: pointer;
}

.${MENU_ITEM_CLASS}:hover {
  background: linear-gradient(135deg, rgba(56, 189, 248, 0.2) 0%, rgba(37, 99, 235, 0.2) 100%);
  color: #f8fafc;
}

.${MENU_ITEM_CLASS}:focus-visible {
  outline: 2px solid rgba(56, 189, 248, 0.5);
  outline-offset: 2px;
}

.omni-exporter-btn:not(.omni-exporter-grok):not(.text-token-text-secondary):not([data-omni-export-claude-thread]):not([data-omni-export-claude-turn]) { color: #f3f3f3 !important; }
.omni-exporter-btn.text-token-text-secondary[data-omni-scope="turn"] svg path {
  stroke: currentColor !important;
}
.omni-exporter-btn[data-omni-scope="turn"]:not([data-omni-export-claude-turn]) svg path {
  stroke-width: 1.6;
}

.omni-exporter-btn[data-omni-scope="thread"]:not([data-omni-export-claude-thread]):hover {
  background-color: var(--token-bg-secondary);
  border-radius: 8px;
}

.omni-exporter-gemini-native-icon {
  cursor: pointer !important;
  -webkit-tap-highlight-color: transparent !important;
}

.omni-exporter-gemini-native-icon::before {
  display: none !important;
}

.omni-exporter-gemini-native-icon:focus-visible {
  outline: 2px solid rgba(26, 115, 232, 0.55) !important;
  outline-offset: 2px !important;
}

.omni-exporter-gemini-native-icon-inner {
  pointer-events: none !important;
}

.omni-exporter-gemini-native-icon .icon {
  display: block;
}

[data-omni-gemini-turn-host] {
  --mat-icon-button-state-layer-size: 36px;
  --mat-icon-button-icon-color: var(--lumi-sys-color--on-surface, rgb(31, 31, 31));
  --mat-icon-button-ripple-color: color(from var(--lumi-sys-color--on-surface, rgb(31, 31, 31)) srgb r g b / 0.1);
  --mat-icon-button-state-layer-color: var(--lumi-sys-color--on-surface, rgb(31, 31, 31));
  --mat-icon-button-hover-state-layer-opacity: var(--gem-sys-state--hover-state-layer-opacity, 0.08);
  width: 36px !important;
  min-width: 36px !important;
  max-width: 36px !important;
  height: 36px !important;
  min-height: 36px !important;
  max-height: 36px !important;
  margin-right: 0 !important;
  padding-right: 0 !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  flex: 0 0 auto !important;
}

[data-omni-gemini-turn-host] + * {
  margin-left: 0 !important;
  padding-left: 0 !important;
}

button[data-omni-export-gemini-turn][data-omni-gemini-native-turn] {
  --mat-icon-button-state-layer-size: 36px;
  --mat-icon-button-icon-color: var(--lumi-sys-color--on-surface, rgb(31, 31, 31));
  --mat-icon-button-ripple-color: color(from var(--lumi-sys-color--on-surface, rgb(31, 31, 31)) srgb r g b / 0.1);
  --mat-icon-button-state-layer-color: var(--lumi-sys-color--on-surface, rgb(31, 31, 31));
  --mat-icon-button-hover-state-layer-opacity: var(--gem-sys-state--hover-state-layer-opacity, 0.08);
  width: 36px !important;
  min-width: 36px !important;
  max-width: 36px !important;
  height: 36px !important;
  min-height: 36px !important;
  max-height: 36px !important;
  padding: 0 !important;
  margin: 0 !important;
  border-radius: 50% !important;
  line-height: 36px !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  vertical-align: middle !important;
  box-sizing: border-box !important;
  overflow: hidden !important;
  color: var(--mat-icon-button-icon-color) !important;
  border: 0 !important;
  background: transparent !important;
}

button[data-omni-export-gemini-turn][data-omni-gemini-native-turn] .mat-mdc-button-persistent-ripple,
button[data-omni-export-gemini-turn][data-omni-gemini-native-turn] .mat-ripple,
button[data-omni-export-gemini-turn][data-omni-gemini-native-turn] .mat-mdc-button-ripple,
button[data-omni-export-gemini-turn][data-omni-gemini-native-turn] .mat-mdc-button-touch-target {
  width: 36px !important;
  height: 36px !important;
  inset: 0 !important;
  border-radius: 50% !important;
}

button[data-omni-export-gemini-turn][data-omni-gemini-native-turn]:hover .mat-mdc-button-persistent-ripple,
button[data-omni-export-gemini-turn][data-omni-gemini-native-turn]:focus-visible .mat-mdc-button-persistent-ripple {
  background-color: color(from var(--lumi-sys-color--on-surface, rgb(31, 31, 31)) srgb r g b / var(--gem-sys-state--hover-state-layer-opacity, 0.08)) !important;
}

button[data-omni-export-gemini-turn][data-omni-gemini-native-turn] mat-icon {
  width: 20px !important;
  height: 20px !important;
  min-width: 20px !important;
  min-height: 20px !important;
  font-size: 20px !important;
  line-height: 20px !important;
  margin: 0 !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  color: var(--mat-icon-button-icon-color) !important;
}

button[data-omni-export-gemini-thread][data-omni-gemini-native-thread] {
  color: var(--omni-gemini-thread-color, currentColor) !important;
  width: 36px !important;
  min-width: 36px !important;
  max-width: 36px !important;
  height: 36px !important;
  min-height: 36px !important;
  max-height: 36px !important;
  padding: 0 !important;
  border-radius: 50% !important;
  line-height: 36px !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  vertical-align: middle !important;
  box-sizing: border-box !important;
  overflow: hidden !important;
}

button[data-omni-export-gemini-thread][data-omni-gemini-native-thread] gem-icon,
button[data-omni-export-gemini-thread][data-omni-gemini-native-thread] mat-icon {
  color: var(--omni-gemini-thread-color, currentColor) !important;
  width: 20px !important;
  height: 20px !important;
  min-width: 20px !important;
  min-height: 20px !important;
  font-size: 20px !important;
  line-height: 20px !important;
  margin: 0 !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
}

button[data-omni-export-gemini-thread][data-omni-gemini-native-thread] mat-icon > svg,
button[data-omni-export-gemini-thread][data-omni-gemini-native-thread] gem-icon svg,
button[data-omni-export-gemini-thread][data-omni-gemini-native-thread] .icon {
  color: var(--omni-gemini-thread-color, currentColor) !important;
  display: block !important;
  width: 18px !important;
  height: 18px !important;
  margin: 0 !important;
  padding: 0 !important;
  vertical-align: middle !important;
}

button[data-omni-export-gemini-thread][data-omni-gemini-native-thread] mat-icon > span,
button[data-omni-export-gemini-thread][data-omni-gemini-native-thread] .omni-exporter-gemini-native-icon-inner {
  margin: 0 !important;
  padding: 0 !important;
  line-height: 0 !important;
}

.omni-exporter-btn[data-omni-export-claude-thread] {
  position: relative !important;
  isolation: isolate !important;
}

.omni-exporter-btn[data-omni-export-claude-thread] svg,
.omni-exporter-btn[data-omni-export-claude-thread] svg path,
.omni-exporter-btn[data-omni-export-claude-thread] [data-cds="Icon"] {
  color: currentColor !important;
  stroke: currentColor !important;
}

.omni-exporter-gemini-floating {
  position: fixed !important;
  top: max(72px, env(safe-area-inset-top, 0px) + 16px) !important;
  right: max(16px, env(safe-area-inset-right, 0px) + 16px) !important;
  z-index: 999999 !important;
  width: 40px !important;
  height: 40px !important;
  border-radius: 999px !important;
  background: rgba(255, 255, 255, 0.94) !important;
  color: #1f2937 !important;
  border: 1px solid rgba(148, 163, 184, 0.35) !important;
  box-shadow: 0 10px 28px rgba(15, 23, 42, 0.2) !important;
  backdrop-filter: blur(14px);
}

.omni-exporter-gemini-floating:hover {
  background: #ffffff !important;
}

.omni-exporter-pdf-loader {
  position: fixed;
  left: max(12px, env(safe-area-inset-left));
  right: max(12px, env(safe-area-inset-right));
  bottom: max(12px, env(safe-area-inset-bottom));
  z-index: 2147483646;
  display: flex;
  justify-content: flex-end;
  pointer-events: none;
}

.omni-exporter-pdf-loader-panel {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: min(100%, 390px);
  max-width: calc(100vw - 24px);
  padding: 16px 18px;
  border-radius: 16px;
  border: 1px solid rgba(148, 163, 184, 0.24);
  background: rgba(15, 23, 42, 0.96);
  color: #f8fafc;
  box-shadow: 0 18px 48px rgba(15, 23, 42, 0.34);
  backdrop-filter: blur(14px);
  pointer-events: auto;
  box-sizing: border-box;
}

.omni-exporter-pdf-loader-head {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  width: 100%;
}

.omni-exporter-pdf-loader-spinner {
  flex: 0 0 auto;
  width: 20px;
  height: 20px;
  border-radius: 999px;
  border: 2px solid rgba(248, 250, 252, 0.2);
  border-top-color: #38bdf8;
  animation: omni-exporter-loader-spin 0.85s linear infinite;
}

.omni-exporter-pdf-loader-copy {
  min-width: 0;
  flex: 1 1 auto;
}

.omni-exporter-pdf-loader-close {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 0;
  margin: -4px -6px 0 0;
  border: none;
  border-radius: 999px;
  background: transparent;
  color: #94a3b8;
  cursor: pointer;
  transition: background-color 0.12s ease, color 0.12s ease;
}

.omni-exporter-pdf-loader-close:hover {
  background: rgba(148, 163, 184, 0.12);
  color: #f8fafc;
}

.omni-exporter-pdf-loader-close:focus-visible {
  outline: 2px solid rgba(56, 189, 248, 0.55);
  outline-offset: 2px;
}

.omni-exporter-pdf-loader-title {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.01em;
  color: #f8fafc;
}

.omni-exporter-pdf-loader-stage {
  margin-top: 3px;
  font-size: 12px;
  line-height: 1.35;
  color: #94a3b8;
}

.omni-exporter-pdf-loader-detail {
  margin-top: 6px;
  font-size: 11px;
  line-height: 1.45;
  color: #cbd5e1;
}

.omni-exporter-pdf-loader-progress {
  width: 100%;
}

.omni-exporter-pdf-loader-progress-track {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 8px;
  border-radius: 999px;
  background: rgba(148, 163, 184, 0.16);
}

.omni-exporter-pdf-loader-progress-bar {
  height: 100%;
  width: 0%;
  border-radius: inherit;
  background: linear-gradient(90deg, #38bdf8 0%, #22c55e 100%);
  transition: width 0.18s ease;
}

.omni-exporter-pdf-loader-progress-track[data-indeterminate="true"] .omni-exporter-pdf-loader-progress-bar {
  width: 38%;
  animation: omni-exporter-loader-progress 1.1s ease-in-out infinite;
}

.omni-exporter-pdf-loader-progress-meta {
  margin-top: 6px;
  font-size: 11px;
  color: #94a3b8;
}

@media (max-width: 640px) {
  .omni-exporter-pdf-loader-panel {
    width: 100%;
    padding: 14px 14px 13px;
    border-radius: 14px;
  }

  .omni-exporter-pdf-loader-head {
    gap: 12px;
  }
}

@keyframes omni-exporter-loader-spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes omni-exporter-loader-progress {
  0% {
    transform: translateX(-115%);
  }
  100% {
    transform: translateX(315%);
  }
}

`;

  // ─────────────────────────────────────────────
  // Icons and style injection
  // ─────────────────────────────────────────────

  function buildExportIcon(size) {
    const iconSize = ensureString(size || '18') || '18';
    return `
<svg viewBox="0 0 24 24" width="${iconSize}" height="${iconSize}" aria-hidden="true" class="icon">
  <path d="M12 3v10m0 0 4-4m-4 4-4-4M4 15v4h16v-4"
    fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round"></path>
</svg>`;
  }

  function buildExportIconElement() {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('width', '18');
    svg.setAttribute('height', '18');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('class', 'icon');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M12 3v10m0 0 4-4m-4 4-4-4M4 15v4h16v-4');
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke', 'currentColor');
    path.setAttribute('stroke-width', '2');
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('stroke-linejoin', 'round');

    svg.appendChild(path);
    return svg;
  }


  let scanQueued = null;
  const pendingScanRoots = new Set();

  function injectStyles() {
    if (document.getElementById(STYLE_ID)) {
      return;
    }
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = styles;
    document.head.appendChild(style);
  }

  // ─────────────────────────────────────────────
  // ChatGPT tooltip system
  // ─────────────────────────────────────────────

  function ensureChatGptTooltipStyles() {
    if (document.getElementById(CHATGPT_TOOLTIP_STYLE_ID)) {
      return;
    }
    const style = document.createElement('style');
    style.id = CHATGPT_TOOLTIP_STYLE_ID;
    style.textContent = `
.omni-gpt-tooltip-wrapper {
  position: fixed;
  left: 0;
  top: 0;
  transform: translate(-9999px, -9999px);
  min-width: max-content;
  will-change: transform;
  z-index: 50;
  pointer-events: none;
}

.omni-gpt-tooltip {
  position: relative;
  z-index: 50;
  box-sizing: border-box;
  max-width: 20rem;
  padding: 4px 8px;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid var(--border-token-border-tooltip, var(--border-tooltip, rgba(255, 255, 255, 0.05)));
  background: var(--token-bg-tooltip, var(--bg-tooltip, #1b1b1b));
  opacity: 0;
  user-select: none;
  transition: opacity 120ms ease;
}

.omni-gpt-tooltip[data-state="delayed-open"] {
  opacity: 1;
}

.omni-gpt-tooltip[data-state="closed"] {
  opacity: 0;
}

.omni-gpt-tooltip-inner {
  display: flex;
  align-items: center;
  gap: 4px;
}

.omni-gpt-tooltip-text {
  color: var(--text-token-text-primary, var(--text-primary, #fff));
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  white-space: pre-wrap;
  text-align: center;
}
`;
    document.head.appendChild(style);
  }

  function ensureChatGptTooltip() {
    ensureChatGptTooltipStyles();
    if (chatGptTooltip && chatGptTooltip.wrapper && chatGptTooltip.wrapper.isConnected) {
      return chatGptTooltip;
    }

    const wrapper = document.createElement('div');
    wrapper.className = 'omni-gpt-tooltip-wrapper';

    const tooltip = document.createElement('div');
    tooltip.className = 'omni-gpt-tooltip dark';
    tooltip.setAttribute('data-side', 'bottom');
    tooltip.setAttribute('data-align', 'center');
    tooltip.setAttribute('data-state', 'closed');

    const inner = document.createElement('div');
    inner.className = 'omni-gpt-tooltip-inner';

    const innerWrap = document.createElement('div');
    const text = document.createElement('div');
    text.className = 'omni-gpt-tooltip-text';

    innerWrap.appendChild(text);
    inner.appendChild(innerWrap);
    tooltip.appendChild(inner);
    wrapper.appendChild(tooltip);
    document.body.appendChild(wrapper);

    chatGptTooltip = { wrapper, tooltip, text };
    return chatGptTooltip;
  }

  function attachOmniTooltip(button, label) {
    if (platform !== 'chatgpt' || !button || button.hasAttribute(CHATGPT_TOOLTIP_BOUND_ATTR)) {
      return;
    }
    button.setAttribute(CHATGPT_TOOLTIP_BOUND_ATTR, 'true');
    button.removeAttribute('title');

    const show = () => showChatGptTooltip(button, label);
    const hide = () => hideChatGptTooltip();

    button.addEventListener('mouseenter', show);
    button.addEventListener('focus', show);
    button.addEventListener('mouseleave', hide);
    button.addEventListener('blur', hide);
    button.addEventListener('mousedown', hide, true);
  }

  function showChatGptTooltip(button, label) {
    if (!button || !button.isConnected || !button.getBoundingClientRect) {
      return;
    }
    const tooltipParts = ensureChatGptTooltip();
    tooltipParts.text.textContent = label || 'Export';
    tooltipParts.tooltip.setAttribute('data-state', 'delayed-open');
    tooltipParts.wrapper.style.visibility = 'hidden';
    tooltipParts.wrapper.style.transform = 'translate(-9999px, -9999px)';

    positionChatGptTooltip(button, tooltipParts);
    tooltipParts.wrapper.style.visibility = 'visible';
    chatGptTooltipTarget = button;
    installChatGptTooltipCleanup();
  }

  function hideChatGptTooltip() {
    if (!chatGptTooltip) {
      return;
    }
    chatGptTooltip.tooltip.setAttribute('data-state', 'closed');
    chatGptTooltip.wrapper.style.visibility = 'hidden';
    chatGptTooltip.wrapper.style.transform = 'translate(-9999px, -9999px)';
    chatGptTooltipTarget = null;
    removeChatGptTooltipCleanup();
  }

  function installChatGptTooltipCleanup() {
    if (chatGptTooltipCleanup) {
      return;
    }
    const hide = () => hideChatGptTooltip();
    window.addEventListener('scroll', hide, true);
    window.addEventListener('resize', hide, true);
    chatGptTooltipCleanup = () => {
      window.removeEventListener('scroll', hide, true);
      window.removeEventListener('resize', hide, true);
    };
  }

  function removeChatGptTooltipCleanup() {
    if (!chatGptTooltipCleanup) {
      return;
    }
    chatGptTooltipCleanup();
    chatGptTooltipCleanup = null;
  }

  function positionChatGptTooltip(button, tooltipParts) {
    const rect = button.getBoundingClientRect();
    const tooltipRect = tooltipParts.tooltip.getBoundingClientRect();
    const width = tooltipRect.width || 64;
    const height = tooltipRect.height || 24;
    const padding = 8;
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth || 0;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight || 0;
    const bottomY = rect.bottom + padding;
    const topY = rect.top - height - padding;
    const side = bottomY + height <= viewportHeight - padding || topY < padding ? 'bottom' : 'top';
    const rawX = rect.left + (rect.width / 2) - (width / 2);
    const maxX = Math.max(padding, viewportWidth - width - padding);
    const x = Math.max(padding, Math.min(maxX, rawX));
    const y = side === 'top'
      ? Math.max(padding, topY)
      : Math.min(Math.max(padding, bottomY), Math.max(padding, viewportHeight - height - padding));

    tooltipParts.tooltip.setAttribute('data-side', side);
    tooltipParts.tooltip.setAttribute('data-align', 'center');
    tooltipParts.wrapper.style.transform = `translate(${Math.round(x)}px, ${Math.round(y)}px)`;
  }

  function showPdfExportLoader(stage) {
    injectStyles();
    let loader = document.getElementById(PDF_EXPORT_LOADER_ID);
    if (!loader) {
      loader = document.createElement('div');
      loader.id = PDF_EXPORT_LOADER_ID;
      loader.className = 'omni-exporter-pdf-loader';

      const panel = document.createElement('div');
      panel.className = 'omni-exporter-pdf-loader-panel';
      panel.setAttribute('role', 'status');
      panel.setAttribute('aria-live', 'polite');
      panel.setAttribute('aria-busy', 'true');

      const head = document.createElement('div');
      head.className = 'omni-exporter-pdf-loader-head';

      const spinner = document.createElement('div');
      spinner.className = 'omni-exporter-pdf-loader-spinner';
      spinner.setAttribute('aria-hidden', 'true');

      const copy = document.createElement('div');
      copy.className = 'omni-exporter-pdf-loader-copy';

      const closeButton = document.createElement('button');
      closeButton.className = 'omni-exporter-pdf-loader-close';
      closeButton.type = 'button';
      closeButton.setAttribute('aria-label', 'Close export loader');
      closeButton.textContent = '×';
      closeButton.addEventListener('click', () => {
        loader.remove();
      });

      const title = document.createElement('div');
      title.className = 'omni-exporter-pdf-loader-title';
      title.textContent = 'Preparing PDF export...';

      const stageNode = document.createElement('div');
      stageNode.className = 'omni-exporter-pdf-loader-stage';

      const detailNode = document.createElement('div');
      detailNode.className = 'omni-exporter-pdf-loader-detail';

      const progress = document.createElement('div');
      progress.className = 'omni-exporter-pdf-loader-progress';

      const track = document.createElement('div');
      track.className = 'omni-exporter-pdf-loader-progress-track';
      track.setAttribute('data-indeterminate', 'true');

      const bar = document.createElement('div');
      bar.className = 'omni-exporter-pdf-loader-progress-bar';

      const meta = document.createElement('div');
      meta.className = 'omni-exporter-pdf-loader-progress-meta';

      track.appendChild(bar);
      progress.appendChild(track);
      progress.appendChild(meta);

      copy.appendChild(title);
      copy.appendChild(stageNode);
      copy.appendChild(detailNode);
      head.appendChild(spinner);
      head.appendChild(copy);
      head.appendChild(closeButton);
      panel.appendChild(head);
      panel.appendChild(progress);
      loader.appendChild(panel);
      document.body.appendChild(loader);
    }
    updatePdfExportLoader(stage || 'Scanning chat content...');
    return loader;
  }

  function updatePdfExportLoader(state) {
    const loader = document.getElementById(PDF_EXPORT_LOADER_ID);
    if (!loader) {
      return;
    }
    const next = normalizePdfExportLoaderState(state);
    const stageNode = loader.querySelector('.omni-exporter-pdf-loader-stage');
    const detailNode = loader.querySelector('.omni-exporter-pdf-loader-detail');
    const progressTrack = loader.querySelector('.omni-exporter-pdf-loader-progress-track');
    const progressBar = loader.querySelector('.omni-exporter-pdf-loader-progress-bar');
    const progressMeta = loader.querySelector('.omni-exporter-pdf-loader-progress-meta');
    if (stageNode) {
      stageNode.textContent = next.stage;
    }
    if (detailNode) {
      detailNode.textContent = next.detail;
      detailNode.style.display = next.detail ? '' : 'none';
    }
    if (progressTrack) {
      progressTrack.setAttribute('data-indeterminate', next.indeterminate ? 'true' : 'false');
    }
    if (progressBar) {
      progressBar.style.width = next.indeterminate ? '38%' : `${Math.round(clampPdfLoaderProgress(next.progress) * 100)}%`;
      progressBar.style.transform = next.indeterminate ? '' : 'translateX(0)';
    }
    if (progressMeta) {
      progressMeta.textContent = next.progressText;
      progressMeta.style.display = next.progressText ? '' : 'none';
    }
    loader.setAttribute(PDF_EXPORT_LOADER_STAGE_ATTR, next.stage);
  }

  function hidePdfExportLoader() {
    const loader = document.getElementById(PDF_EXPORT_LOADER_ID);
    if (loader) {
      loader.remove();
    }
  }

  function normalizePdfExportLoaderState(state) {
    if (typeof state === 'string') {
      return {
        stage: ensureString(state || 'Preparing PDF export...'),
        detail: '',
        progress: 0,
        progressText: '',
        indeterminate: true
      };
    }
    const next = state && typeof state === 'object' ? state : {};
    return {
      stage: ensureString(next.stage || 'Preparing PDF export...'),
      detail: ensureString(next.detail),
      progress: clampPdfLoaderProgress(next.progress),
      progressText: ensureString(next.progressText),
      indeterminate: next.indeterminate !== false
    };
  }

  function clampPdfLoaderProgress(value) {
    const numeric = Number(value);
    if (!Number.isFinite(numeric)) {
      return 0;
    }
    if (numeric < 0) {
      return 0;
    }
    if (numeric > 1) {
      return 1;
    }
    return numeric;
  }

  function waitForNextPaint() {
    return new Promise((resolve) => {
      if (typeof window.requestAnimationFrame !== 'function') {
        window.setTimeout(resolve, 0);
        return;
      }
      window.requestAnimationFrame(() => {
        window.setTimeout(resolve, 0);
      });
    });
  }

  function waitMs(duration) {
    return new Promise((resolve) => {
      window.setTimeout(resolve, Math.max(0, Number(duration) || 0));
    });
  }

  // ─────────────────────────────────────────────
  // DOM scanning and platform dispatch
  // ─────────────────────────────────────────────

  function queueScanForNode(node) {
    if (!node) {
      return;
    }
    if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      node.childNodes.forEach(queueScanForNode);
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE && node.nodeType !== Node.DOCUMENT_NODE) {
      return;
    }
    if (isOmniManagedMutationNode(node)) {
      return;
    }
    const scanRoot = resolveScanRoot(node);
    if (!scanRoot) {
      return;
    }
    pendingScanRoots.add(scanRoot);

    if (scanQueued) {
      return;
    }

    scanQueued = setTimeout(() => {
      scanQueued = null;
      const roots = Array.from(pendingScanRoots);
      pendingScanRoots.clear();

      if (platform === 'gemini') {
        attachGeminiThreadButton(document);
        if (roots.length > 30) {
          attachGeminiTurnButtons(document);
        } else {
          roots.forEach((root) => attachGeminiTurnButtons(root));
        }
        return;
      }

      if (roots.length > 50) {
        attachButtons(document);
      } else {
        roots.forEach((root) => attachButtons(root));
      }
    }, 80);
  }

  function isOmniManagedMutationNode(node) {
    if (!node || node.nodeType !== Node.ELEMENT_NODE || !node.matches) {
      return false;
    }
    const selector = [
      `.${EXPORT_BUTTON_CLASS}`,
      `.${MENU_CLASS}`,
      `#${PDF_EXPORT_LOADER_ID}`,
      '.omni-gpt-tooltip-wrapper',
      `[${GROK_TOOLTIP_PORTAL_ATTR}]`,
      `[${GEMINI_TOOLTIP_OVERLAY_ATTR}]`,
      '[data-omni-claude-tooltip]',
      '[data-omni-claude-bridge-tooltip]'
    ].join(',');
    return node.matches(selector) || Boolean(node.closest && node.closest(selector));
  }

  function resolveScanRoot(node) {
    const element = node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement;
    if (!element) {
      return null;
    }
    if (platform === 'chatgpt') {
      return element.closest(TURN_SELECTOR) ||
        element.closest(HEADER_ACTIONS_SELECTOR) ||
        element;
    }
    if (platform === 'deepseek') {
      return element.closest(DEEPSEEK_ACTIONS_SELECTOR) ||
        element.closest(DEEPSEEK_THREAD_BUTTON_SELECTOR) ||
        element;
    }
    if (platform === 'grok') {
      return element.closest(GROK_HEADER_SELECTOR) || element;
    }
    if (platform === 'gemini') {
      return element.closest(GEMINI_ACTIONS_SELECTOR) || element;
    }
    if (platform === 'claude') {
      return getClaudeActionContainer(element) ||
        element.closest(CLAUDE_HEADER_SELECTOR) ||
        element;
    }
    return element;
  }

  function attachButtons(root) {
    if (platform === 'chatgpt') {
      attachChatGptButtons(root);
      attachHeaderButton(root);
    }
    if (platform === 'grok') {
      attachGrokButtons(root);
      attachGrokThreadButton(root);
    }
    if (platform === 'gemini') {
      attachGeminiThreadButton(root);
      attachGeminiTurnButtons(root);
    }
    if (platform === 'claude') {
      attachClaudeThreadButton(root);
      attachClaudeTurnButtons(root);
    }
    if (platform === 'deepseek') {
      attachDeepSeekButtons(root);
    }
  }

  // ─────────────────────────────────────────────
  // ChatGPT buttons
  // ─────────────────────────────────────────────

  function attachChatGptButtons(root) {
    const scope = root || document;

    let turns = [];
    if (scope.matches && scope.matches(TURN_SELECTOR)) {
      turns.push(scope);
    }
    if (scope.querySelectorAll) {
      const found = scope.querySelectorAll(TURN_SELECTOR);
      if (found.length > 0) {
        turns = Array.from(found);
      }
    }

    turns.forEach((turn) => {
      if (turn.hasAttribute('data-omni-processed')) {
        const existingButton = turn.querySelector(`.${EXPORT_BUTTON_CLASS}`);
        if (existingButton) {
          attachOmniTooltip(existingButton, 'Export');
          syncChatGptTurnExportButton(existingButton);
        }
        return;
      }

      const role = getTurnRole(turn);
      if (role !== 'assistant') {
        return;
      }

      const shareButton = turn.querySelector(SHARE_BUTTON_SELECTOR);
      if (!shareButton) {
        return;
      }
      const existingButton = turn.querySelector(`.${EXPORT_BUTTON_CLASS}`);
      if (existingButton) {
        attachOmniTooltip(existingButton, 'Export');
        syncChatGptTurnExportButton(existingButton, shareButton);
        turn.setAttribute('data-omni-processed', 'true');
        return;
      }
      const button = buildExportButton('turn');
      attachOmniTooltip(button, 'Export');
      syncChatGptTurnExportButton(button, shareButton);
      shareButton.insertAdjacentElement('afterend', button);
      turn.setAttribute('data-omni-processed', 'true');
    });
  }

  function syncChatGptTurnExportButton(button, referenceButton) {
    if (platform !== 'chatgpt' || !button || button.getAttribute(EXPORT_SCOPE_ATTR) !== 'turn') {
      return;
    }
    const reference = referenceButton || findChatGptTurnColorReference(button);
    const color = getChatGptTurnReferenceColor(reference) || getChatGptTurnReferenceColor(button);
    if (!color) {
      return;
    }
    button.querySelectorAll('svg path').forEach((path) => {
      path.setAttribute('stroke', color);
      path.style.setProperty('stroke', color, 'important');
    });
    installChatGptThemeSyncObserver();
  }

  function findChatGptTurnColorReference(button) {
    const group = button && button.closest ? button.closest('[role="group"]') : null;
    if (!group || !group.querySelectorAll) {
      return null;
    }
    return Array.from(group.querySelectorAll('button.text-token-text-secondary'))
      .find((candidate) => candidate !== button && !candidate.hasAttribute(EXPORT_SCOPE_ATTR)) || null;
  }

  function getChatGptTurnReferenceColor(node) {
    if (!node || !window.getComputedStyle) {
      return '';
    }
    const color = getComputedStyle(node).color;
    return color && color !== 'rgba(0, 0, 0, 0)' ? color : '';
  }

  function installChatGptThemeSyncObserver() {
    if (platform !== 'chatgpt' || chatGptThemeObserver || typeof MutationObserver === 'undefined') {
      return;
    }
    const schedule = () => {
      if (chatGptThemeSyncQueued) {
        return;
      }
      chatGptThemeSyncQueued = true;
      requestAnimationFrame(() => {
        chatGptThemeSyncQueued = false;
        syncAllChatGptTurnExportButtons();
        window.setTimeout(syncAllChatGptTurnExportButtons, 120);
      });
    };
    chatGptThemeObserver = new MutationObserver(schedule);
    [document.documentElement, document.body].filter(Boolean).forEach((node) => {
      chatGptThemeObserver.observe(node, {
        attributes: true,
        attributeFilter: ['class', 'data-theme']
      });
    });
  }

  function syncAllChatGptTurnExportButtons() {
    if (platform !== 'chatgpt' || !document.querySelectorAll) {
      return;
    }
    document.querySelectorAll(`.${EXPORT_BUTTON_CLASS}[${EXPORT_SCOPE_ATTR}="turn"]`).forEach((button) => {
      syncChatGptTurnExportButton(button);
    });
  }

  // ─────────────────────────────────────────────
  // Grok message buttons
  // ─────────────────────────────────────────────

  function attachGrokButtons(root) {
    repairGrokExportButtonScopes(root);
    cleanupGrokExportButtons(root);
    collectGrokActionReferenceButtons(root).forEach((referenceButton) => {
      const isTurnButton = isGrokMessageScopedElement(referenceButton);
      if (!isTurnButton) {
        return;
      }
      const actionBar = referenceButton.parentElement;
      if (!actionBar) {
        return;
      }
      const existing = actionBar.querySelector(`[${GROK_EXPORT_ATTR}]`);
      if (existing) {
        normalizeGrokExportButtonScope(existing, isTurnButton ? 'turn' : 'thread');
        if (isTurnButton) {
          syncGrokTurnExportButton(existing);
        }
        return;
      }
      const button = buildGrokNativeExportButton(referenceButton, isTurnButton ? 'turn' : 'thread');
      button.setAttribute(GROK_EXPORT_ATTR, 'true');
      if (!isTurnButton) {
        button.setAttribute(GROK_THREAD_EXPORT_ATTR, 'true');
      }
      referenceButton.insertAdjacentElement('afterend', button);
    });
  }

  function collectGrokActionReferenceButtons(root) {
    const scope = root && root.querySelectorAll ? root : document;
    const seen = new Set();
    const buttons = [];

    collectGrokMessageActionReferenceButtons(scope).forEach((button) => {
      if (!isUsableGrokActionButton(button) || seen.has(button)) {
        return;
      }
      seen.add(button);
      buttons.push(button);
    });
    return buttons;
  }

  function collectGrokMessageActionReferenceButtons(scope) {
    const references = [];
    const actionBars = new Set();
    getGrokMessageRoots().forEach((messageRoot) => {
      if (!isGrokRootInScanScope(messageRoot, scope)) {
        return;
      }
      if (inferGrokRoleFromRoot(messageRoot) === 'user') {
        return;
      }
      Array.from(messageRoot.querySelectorAll('button')).forEach((button) => {
        if (!isUsableGrokActionButton(button)) {
          return;
        }
        const actionBar = button.parentElement;
        if (!actionBar || actionBars.has(actionBar)) {
          return;
        }
        const actionButtons = Array.from(actionBar.querySelectorAll(':scope > button')).filter(isUsableGrokActionButton);
        if (actionButtons.length < 2) {
          return;
        }
        if (isGrokSuggestionButtonGroup(actionBar, actionButtons)) {
          return;
        }
        if (isGrokUserActionButtonGroup(actionBar, actionButtons)) {
          return;
        }
        actionBars.add(actionBar);
        references.push(actionButtons[actionButtons.length - 1]);
      });
    });
    return references;
  }

  function isGrokRootInScanScope(messageRoot, scope) {
    if (!messageRoot || !scope) {
      return false;
    }
    if (scope === document || scope === document.body || scope === document.documentElement) {
      return true;
    }
    return scope === messageRoot ||
      (scope.contains && scope.contains(messageRoot)) ||
      (messageRoot.contains && messageRoot.contains(scope));
  }

  function isUsableGrokActionButton(button) {
    if (!button || !button.matches || !button.matches('button')) {
      return false;
    }
    if (button.hasAttribute(GROK_EXPORT_ATTR) || button.closest(`.${EXPORT_BUTTON_CLASS}`)) {
      return false;
    }
    if (button.closest('pre, code, textarea, input, form')) {
      return false;
    }
    if (button.querySelector('.lucide-corner-down-right')) {
      return false;
    }
    const text = normalizeText(button.textContent || '');
    if (text.length > 48) {
      return false;
    }
    return true;
  }

  function isGrokSuggestionButtonGroup(actionBar, actionButtons) {
    if (!actionBar || !actionButtons || actionButtons.length < 2) {
      return false;
    }
    const className = ensureString(actionBar.className);
    if (
      className.includes('flex-col') &&
      className.includes('gap-1') &&
      actionButtons.some((button) => button.querySelector('.lucide-corner-down-right'))
    ) {
      return true;
    }
    const textButtons = actionButtons.filter((button) => normalizeText(button.textContent || '').length > 2);
    return textButtons.length >= 2;
  }

  function isGrokUserActionButtonGroup(actionBar, actionButtons) {
    if (!actionBar || !actionButtons || !actionButtons.length) {
      return false;
    }
    const messageRoot = findGrokMessageRootForElement(actionBar);
    return Boolean(messageRoot && inferGrokRoleFromRoot(messageRoot) === 'user');
  }

  function cleanupGrokExportButtons(root) {
    const scope = root && root.querySelectorAll ? root : document;
    const buttons = [];
    if (root && root.matches && root.matches(`[${GROK_EXPORT_ATTR}]`)) {
      buttons.push(root);
    }
    buttons.push(...scope.querySelectorAll(`[${GROK_EXPORT_ATTR}]`));
    buttons.forEach((button) => {
      if (!isGrokMessageScopedElement(button)) {
        if (button.hasAttribute(GROK_THREAD_EXPORT_ATTR)) {
          return;
        }
        button.remove();
        return;
      }
      const actionBar = button.parentElement;
      const actionButtons = actionBar
        ? Array.from(actionBar.querySelectorAll(':scope > button')).filter((candidate) => candidate !== button)
        : [];
      if (isGrokSuggestionButtonGroup(actionBar, actionButtons) || isGrokUserActionButtonGroup(actionBar, actionButtons)) {
        button.remove();
      }
    });
  }

  function buildGrokNativeExportButton(referenceButton, scope) {
    const button = referenceButton.cloneNode(true);
    button.removeAttribute('id');
    button.removeAttribute('aria-controls');
    button.removeAttribute('aria-describedby');
    button.removeAttribute('data-radix-collection-item');
    button.setAttribute('type', 'button');
    normalizeGrokExportButtonScope(button, scope || 'turn');
    if ((scope || 'turn') === 'turn') {
      syncGrokTurnExportButton(button);
    }
    button.setAttribute('aria-haspopup', 'menu');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('data-state', 'closed');
    button.innerHTML = `<span style="opacity: 1; transform: none;">${buildExportIcon()}</span>`;
    if ((scope || 'turn') === 'turn') {
      bindGrokOmniTooltip(button);
    }
    button.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      toggleMenu(button);
    });
    return button;
  }

  function syncGrokTurnExportButton(button) {
    if (!button) {
      return;
    }
    button.className = GROK_TURN_EXPORT_CLASS;
    button.removeAttribute('title');
    button.style.setProperty('margin-bottom', '0', 'important');
    button.style.removeProperty('margin-right');
    syncGrokExportIconSpacing(button);
    bindGrokOmniTooltip(button);
  }

  function buildGrokNativeTurnButton(referenceButton) {
    return buildGrokNativeExportButton(referenceButton, 'turn');
  }

  function normalizeGrokExportButtonScope(button, scope) {
    const nextScope = scope === 'thread' ? 'thread' : 'turn';
    button.setAttribute(EXPORT_SCOPE_ATTR, nextScope);
    button.setAttribute('aria-label', nextScope === 'thread' ? 'Exporter la conversation' : 'Exporter ce chat');
    if (nextScope === 'thread') {
      button.setAttribute(GROK_THREAD_EXPORT_ATTR, 'true');
    } else {
      button.removeAttribute(GROK_THREAD_EXPORT_ATTR);
    }
  }

  function isGrokMessageScopedElement(element) {
    if (!element) {
      return false;
    }
    return Boolean(findGrokMessageRootForElement(element));
  }

  function findGrokMessageRootForElement(element) {
    if (!element) {
      return null;
    }
    return getGrokMessageRoots().find((root) => root && root.contains && root.contains(element)) || null;
  }

  function repairGrokExportButtonScopes(root) {
    const scope = root && root.querySelectorAll ? root : document;
    const buttons = [];
    if (root && root.matches && root.matches(`[${GROK_EXPORT_ATTR}]`)) {
      buttons.push(root);
    }
    buttons.push(...scope.querySelectorAll(`[${GROK_EXPORT_ATTR}]`));
    buttons.forEach((button) => {
      normalizeGrokExportButtonScope(button, isGrokMessageScopedElement(button) ? 'turn' : 'thread');
    });
  }

  // ─────────────────────────────────────────────
  // Gemini message buttons
  // ─────────────────────────────────────────────

  function attachGeminiTurnButtons(root) {
    cleanupDetachedGeminiTooltip();
    const scope = root || document;
    if (!scope.querySelectorAll) {
      return;
    }
    collectGeminiTurnActionContainers(scope).forEach(attachGeminiTurnButtonToContainer);
  }

  function collectGeminiTurnActionContainers(scope) {
    const containers = [];
    if (scope.matches && scope.matches(GEMINI_ACTIONS_SELECTOR)) {
      containers.push(scope);
    }
    containers.push(...scope.querySelectorAll(GEMINI_ACTIONS_SELECTOR));
    return containers;
  }

  function attachGeminiTurnButtonToContainer(container) {
    bindGeminiNativeTooltipSwitch(container);
    const context = getGeminiTurnButtonContext(container);
    if (!context.referenceButton) {
      return;
    }
    removeLegacyGeminiTurnButton(context);
    refreshGeminiTurnExistingButton(context);
    if (removeStaleGeminiNativeTurnButton(context)) {
      refreshGeminiTurnExistingButton(context);
    }
    if (!context.existingNative) {
      insertNewGeminiTurnButton(context);
      return;
    }
    clearGeminiTurnButtonColor(context.existingButton);
    repositionGeminiTurnButton(context);
    syncGeminiTurnButtonTheme(context.existingButton, context.referenceButton);
  }

  function getGeminiTurnButtonContext(container) {
    const shareButton = container.querySelector(GEMINI_SHARE_BUTTON_SELECTOR);
    const referenceButton = getGeminiTurnReferenceButton(container) || shareButton;
    return {
      container,
      shareButton,
      referenceButton,
      moreMenuBlock: getGeminiTurnMenuBlock(container),
      shareAnchor: shareButton ? shareButton.closest('.tooltip-anchor-point') : null,
      referenceActionHost: getGeminiTurnNativeActionHost(referenceButton),
      referenceAnchor: referenceButton ? referenceButton.closest('.tooltip-anchor-point') : null,
      existingButton: null,
      existingNative: false
    };
  }

  function refreshGeminiTurnExistingButton(context) {
    context.existingButton = context.container.querySelector(`[${GEMINI_TURN_EXPORT_ATTR}]`);
    context.existingNative = context.existingButton && context.existingButton.hasAttribute(GEMINI_TURN_NATIVE_ATTR);
  }

  function removeLegacyGeminiTurnButton(context) {
    refreshGeminiTurnExistingButton(context);
    if (!context.existingButton || context.existingNative) {
      return;
    }
    const staleWrapper = context.existingButton.closest('.tooltip-anchor-point');
    if (staleWrapper && staleWrapper !== context.shareAnchor && staleWrapper.childElementCount === 1) {
      staleWrapper.remove();
    } else {
      context.existingButton.remove();
    }
  }

  function removeStaleGeminiNativeTurnButton(context) {
    if (!context.existingNative) {
      return false;
    }
    const staleButton = isStaleGeminiTurnButton(context.existingButton, context.referenceButton);
    const staleHost = isStaleGeminiTurnHost(context);
    if (!staleButton && !staleHost) {
      return false;
    }
    const staleWrapper = context.existingButton.closest(`[${GEMINI_TURN_HOST_ATTR}]`) ||
      context.existingButton.closest('.tooltip-anchor-point');
    if (staleWrapper && staleWrapper.childElementCount === 1) {
      staleWrapper.remove();
    } else {
      context.existingButton.remove();
    }
    return true;
  }

  function isStaleGeminiTurnHost(context) {
    if (!context || !context.existingButton || !context.referenceActionHost) {
      return false;
    }
    const currentHost = context.existingButton.closest(`[${GEMINI_TURN_HOST_ATTR}]`);
    if (!currentHost) {
      return true;
    }
    return currentHost.tagName.toLowerCase() !== 'copy-button' ||
      hasGeminiRuntimeMarkerOnSelf(currentHost);
  }

  function insertNewGeminiTurnButton(context) {
    const nativeButton = buildGeminiNativeTurnButton(context.referenceButton);
    syncGeminiTurnButtonTheme(nativeButton, context.referenceButton);
    if (context.referenceActionHost) {
      insertGeminiButtonWithHost(nativeButton, context.referenceActionHost, 'afterend');
      return;
    }
    if (context.moreMenuBlock) {
      insertGeminiButtonBeforeMenu(nativeButton, context.moreMenuBlock);
      return;
    }
    if (context.shareAnchor) {
      insertGeminiButtonWithHost(nativeButton, context.shareAnchor, 'afterend');
      return;
    }
    if (context.referenceAnchor) {
      insertGeminiButtonWithHost(nativeButton, context.referenceAnchor, 'beforebegin');
      return;
    }
    context.referenceButton.insertAdjacentElement('beforebegin', nativeButton);
  }

  function insertGeminiButtonBeforeMenu(button, moreMenuBlock) {
    if (moreMenuBlock.matches('button')) {
      moreMenuBlock.insertAdjacentElement('beforebegin', button);
      return;
    }
    insertGeminiButtonWithHost(button, moreMenuBlock, 'beforebegin');
  }

  function insertGeminiButtonWithHost(button, anchor, position) {
    const wrapper = createGeminiTurnButtonHost();
    wrapper.setAttribute(GEMINI_TURN_HOST_ATTR, 'true');
    normalizeGeminiTurnButtonHost(wrapper);
    wrapper.appendChild(button);
    anchor.insertAdjacentElement(position, wrapper);
  }

  function createGeminiTurnButtonHost() {
    return document.createElement('copy-button');
  }

  function normalizeGeminiTurnButtonHost(wrapper) {
    if (wrapper && wrapper.removeAttribute) {
      wrapper.removeAttribute('style');
      wrapper.className = 'gem-button gem-button-badge-size-small gem-button-size-small gem-button-type-on-surface lm-enabled';
      wrapper.setAttribute('theme', 'lm');
      wrapper.setAttribute('type', 'onSurface');
      applyImportantStyles(wrapper, {
        display: 'inline-block',
        alignItems: 'normal',
        justifyContent: 'normal',
        boxSizing: 'content-box',
        width: '32px',
        height: '32px',
        minWidth: '0px',
        minHeight: '0px',
        maxWidth: 'none',
        maxHeight: 'none',
        padding: '0px',
        margin: '0px',
        border: '0px',
        borderRadius: '9999px',
        background: 'rgba(0, 0, 0, 0)',
        opacity: '1',
        font: '16px Times',
        verticalAlign: 'baseline',
        cursor: 'auto',
        transition: 'all',
        transform: 'none'
      });
    }
  }

  function repositionGeminiTurnButton(context) {
    const existingWrapper = context.existingButton.closest(`[${GEMINI_TURN_HOST_ATTR}]`) ||
      context.existingButton.closest('.tooltip-anchor-point');
    if (existingWrapper && existingWrapper.hasAttribute && existingWrapper.hasAttribute(GEMINI_TURN_HOST_ATTR)) {
      normalizeGeminiTurnButtonHost(existingWrapper);
    }
    if (context.referenceActionHost) {
      moveGeminiButtonNearAnchor(context.referenceActionHost, 'afterend', context.referenceActionHost.nextElementSibling, existingWrapper, context.existingButton);
      return;
    }
    if (context.moreMenuBlock) {
      moveGeminiButtonBeforeMenu(context.existingButton, existingWrapper, context.moreMenuBlock);
      return;
    }
    if (context.shareAnchor) {
      moveGeminiButtonNearAnchor(context.shareAnchor, 'afterend', context.shareAnchor.nextElementSibling, existingWrapper, context.existingButton);
      return;
    }
    if (context.shareButton && context.shareButton.nextElementSibling !== context.existingButton) {
      context.shareButton.insertAdjacentElement('afterend', context.existingButton);
      return;
    }
    if (context.referenceAnchor) {
      moveGeminiButtonNearAnchor(context.referenceAnchor, 'beforebegin', context.referenceAnchor.previousElementSibling, existingWrapper, context.existingButton);
      return;
    }
    if (context.referenceButton.previousElementSibling !== context.existingButton) {
      context.referenceButton.insertAdjacentElement('beforebegin', context.existingButton);
    }
  }

  function moveGeminiButtonBeforeMenu(existingButton, existingWrapper, moreMenuBlock) {
    let nodeToPlace = existingWrapper || existingButton;
    if (!existingWrapper && !moreMenuBlock.matches('button')) {
      const wrapper = createGeminiTurnButtonHost();
      wrapper.setAttribute(GEMINI_TURN_HOST_ATTR, 'true');
      normalizeGeminiTurnButtonHost(wrapper);
      wrapper.appendChild(existingButton);
      nodeToPlace = wrapper;
    }
    if (moreMenuBlock.previousElementSibling !== nodeToPlace) {
      moreMenuBlock.insertAdjacentElement('beforebegin', nodeToPlace);
    }
  }

  function moveGeminiButtonNearAnchor(anchor, position, correctTarget, existingWrapper, existingButton) {
    const nodeToPlace = existingWrapper || existingButton;
    if (correctTarget !== nodeToPlace) {
      anchor.insertAdjacentElement(position, nodeToPlace);
    }
  }

  function getGeminiTurnMenuBlock(container) {
    if (!container || !container.querySelector) {
      return null;
    }
    const moreButton = container.querySelector(GEMINI_MENU_BUTTON_SELECTOR);
    if (!moreButton) {
      return null;
    }
    const menuWrapper = moreButton.closest('.menu-button-wrapper');
    if (menuWrapper && menuWrapper.parentElement && menuWrapper.parentElement !== container) {
      return menuWrapper.parentElement;
    }
    return menuWrapper || moreButton;
  }

  function getGeminiTurnNativeActionHost(referenceButton) {
    if (!referenceButton || !referenceButton.closest) {
      return null;
    }
    const host = referenceButton.closest('copy-button, regenerate-button, thumb-up-button, thumb-down-button');
    if (host && host.closest && host.closest(GEMINI_ACTIONS_SELECTOR)) {
      return host;
    }
    return null;
  }

  function getGeminiTurnReferenceButton(container) {
    if (!container || !container.querySelectorAll) {
      return null;
    }
    const preferredSelectors = [
      'button[data-test-id="copy-button"]',
      'button[data-test-id="regenerate-button"]',
      'button[data-test-id="thumb-down-button"]',
      'button[data-test-id="thumb-up-button"]'
    ];
    for (const selector of preferredSelectors) {
      const preferredButton = container.querySelector(selector);
      if (preferredButton && !preferredButton.hasAttribute(GEMINI_TURN_EXPORT_ATTR)) {
        return preferredButton;
      }
    }
    const buttons = Array.from(container.querySelectorAll('button'));
    if (!buttons.length) {
      return null;
    }
    const menuButton = buttons.find((button) => {
      const testId = button.getAttribute('data-test-id');
      return testId === 'more-menu-button' || testId === 'conversation-actions-menu-icon-button';
    });
    if (menuButton) {
      return menuButton;
    }
    return buttons.find((button) => !button.hasAttribute(GEMINI_TURN_EXPORT_ATTR)) || null;
  }

  function isStaleGeminiTurnButton(button, referenceButton) {
    if (!button || !referenceButton) {
      return false;
    }
    if (button.hasAttribute(GEMINI_TURN_NATIVE_ATTR)) {
      const ripple = button.querySelector('.mat-mdc-button-persistent-ripple');
      const icon = button.querySelector('mat-icon');
      const iconName = icon ? ensureString(icon.getAttribute('data-mat-icon-name') || icon.getAttribute('fonticon') || icon.textContent).trim() : '';
      const iconText = icon ? ensureString(icon.textContent).trim() : '';
      return Boolean(
        button.classList.contains('omni-exporter-gemini-native-icon') ||
        hasGeminiRuntimeMarkerOnSelf(button) ||
        button.hasAttribute('aria-haspopup') ||
        button.hasAttribute('aria-expanded') ||
        !icon ||
        !/download/i.test(iconName) ||
        iconText ||
        !button.hasAttribute('mat-icon-button') ||
        !button.classList.contains('mat-mdc-icon-button') ||
        button.style.getPropertyValue('width') !== '32px' ||
        (ripple && !ripple.classList.contains('mdc-icon-button__ripple'))
      );
    }
    const referenceUsesMenuStyle = referenceButton.matches(GEMINI_MENU_BUTTON_SELECTOR) ||
      referenceButton.classList.contains('more-menu-button') ||
      referenceButton.classList.contains('mat-mdc-button');
    if (!referenceUsesMenuStyle) {
      return false;
    }
    return button.classList.contains('share-button') ||
      button.classList.contains('mat-mdc-icon-button') ||
      !button.classList.contains('more-menu-button');
  }

  function buildGeminiNativeTurnButton(referenceButton) {
    const button = createGeminiNativeTurnIconButton(referenceButton);
    button.removeAttribute('data-test-id');
    button.removeAttribute('aria-describedby');
    button.removeAttribute('cdk-describedby-host');
    button.removeAttribute('jslog');
    button.removeAttribute('role');
    button.removeAttribute('disabled');
    button.removeAttribute('aria-disabled');
    button.setAttribute('type', 'button');
    button.setAttribute('aria-label', 'Export');
    removeGeminiTooltipAttributes(button);
    button.setAttribute(EXPORT_SCOPE_ATTR, 'turn');
    button.setAttribute(GEMINI_TURN_EXPORT_ATTR, 'true');
    button.setAttribute(GEMINI_TURN_NATIVE_ATTR, 'true');
    button.removeAttribute('aria-haspopup');
    button.removeAttribute('aria-expanded');
    clearGeminiTurnButtonColor(button);
    bindGeminiOmniTooltip(button);

    button.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      toggleMenu(button);
    });

    return button;
  }

  function removeGeminiTooltipAttributes(button) {
    [
      'mattooltip',
      'mattooltipclass',
      'mattooltipposition',
      'mattooltipshowdelay',
      'mattooltiphidedelay',
      'ng-reflect-message',
      'ng-reflect-position',
      'ng-reflect-show-delay',
      'ng-reflect-hide-delay',
      'aria-describedby',
      'cdk-describedby-host'
    ].forEach((attribute) => {
      button.removeAttribute(attribute);
    });
  }

  // ─────────────────────────────────────────────
  // Gemini tooltip system
  // ─────────────────────────────────────────────

  function ensureGeminiTooltipOverlayContainer() {
    const existing = document.querySelector('.cdk-overlay-container');
    if (existing) {
      return existing;
    }
    const container = document.createElement('div');
    container.className = 'cdk-overlay-container';
    document.body.appendChild(container);
    return container;
  }

  function createGeminiOmniTooltip(button, text) {
    const overlayContainer = ensureGeminiTooltipOverlayContainer();
    const waitForNativeTooltip = hasVisibleGeminiNativeTooltips();
    document.querySelectorAll(`[${GEMINI_TOOLTIP_OVERLAY_ATTR}]`).forEach((node) => node.remove());

    const boundingBox = document.createElement('div');
    boundingBox.className = 'cdk-overlay-connected-position-bounding-box';
    boundingBox.setAttribute('dir', 'ltr');
    boundingBox.setAttribute(GEMINI_TOOLTIP_OVERLAY_ATTR, 'true');
    boundingBox.style.position = 'fixed';
    boundingBox.style.left = '0px';
    boundingBox.style.top = '0px';
    boundingBox.style.width = '100%';
    boundingBox.style.height = '100%';
    boundingBox.style.pointerEvents = 'none';

    const pane = document.createElement('div');
    pane.id = `cdk-overlay-omni-gemini-${++iconCounter}`;
    pane.className = 'cdk-overlay-pane mat-mdc-tooltip-panel-below mat-mdc-tooltip-panel';
    pane.style.position = 'absolute';
    pane.style.pointerEvents = 'auto';
    pane.style.transform = 'translateY(8px)';
    pane.style.visibility = 'hidden';

    const component = document.createElement('mat-tooltip-component');
    component.setAttribute('aria-hidden', 'true');
    component.className = 'ng-star-inserted';

    const tooltip = document.createElement('div');
    tooltip.className = 'mdc-tooltip mat-mdc-tooltip gds-body-s gem-tooltip lm-enabled mat-mdc-tooltip-show';
    tooltip.style.opacity = '0';

    const surface = document.createElement('div');
    surface.className = 'mat-mdc-tooltip-surface mdc-tooltip__surface';
    surface.textContent = text;
    surface.style.userSelect = 'text';
    tooltip.style.transition = 'opacity 120ms cubic-bezier(0.2, 0, 0, 1), transform 120ms cubic-bezier(0.2, 0, 0, 1)';

    tooltip.appendChild(surface);
    component.appendChild(tooltip);
    pane.appendChild(component);
    boundingBox.appendChild(pane);
    overlayContainer.appendChild(boundingBox);

    positionGeminiOmniTooltip(button, pane, tooltip, surface);
    const reveal = () => {
      if (pane.isConnected) {
        positionGeminiOmniTooltip(button, pane, tooltip, surface);
        pane.style.visibility = 'visible';
        tooltip.style.removeProperty('opacity');
      }
    };
    requestAnimationFrame(() => {
      if (pane.isConnected) {
        positionGeminiOmniTooltip(button, pane, tooltip, surface);
        requestAnimationFrame(() => {
          if (waitForNativeTooltip) {
            window.setTimeout(reveal, 45);
          } else {
            reveal();
          }
        });
      }
    });
    pane.addEventListener('pointerenter', () => {
      if (!activeGeminiTooltip || activeGeminiTooltip.pane !== pane) {
        return;
      }
      geminiTooltipHovered = true;
      if (geminiTooltipHideTimer) {
        window.clearTimeout(geminiTooltipHideTimer);
        geminiTooltipHideTimer = null;
      }
    });
    pane.addEventListener('pointerleave', () => {
      if (!activeGeminiTooltip || activeGeminiTooltip.pane !== pane) {
        return;
      }
      geminiTooltipHovered = false;
      scheduleGeminiOmniTooltipHide();
    });
    return { boundingBox, pane, tooltip, surface, button };
  }

  function getGeminiTooltipAnchorRect(button) {
    const buttonRect = button.getBoundingClientRect();
    const host = button.closest ? button.closest(`[${GEMINI_TURN_HOST_ATTR}]`) : null;
    if (host && host.getBoundingClientRect) {
      const hostRect = host.getBoundingClientRect();
      const sameVisualBox =
        Math.abs(hostRect.width - buttonRect.width) <= 2 &&
        Math.abs(hostRect.height - buttonRect.height) <= 2;
      if (sameVisualBox && hostRect.width > 0 && hostRect.height > 0) {
        return hostRect;
      }
    }
    return buttonRect;
  }

  function positionGeminiOmniTooltip(button, pane, tooltip, surface) {
    if (!button || !pane || !tooltip || !button.getBoundingClientRect) {
      return;
    }
    const rect = getGeminiTooltipAnchorRect(button);
    const surfaceRect = surface && surface.getBoundingClientRect ? surface.getBoundingClientRect() : null;
    const tooltipRect = tooltip.getBoundingClientRect();
    const paneRect = pane.getBoundingClientRect();
    const width = tooltipRect.width || (surfaceRect && surfaceRect.width) || (surface && surface.offsetWidth) || (tooltip && tooltip.offsetWidth) || paneRect.width || 64;
    const height = tooltipRect.height || (surfaceRect && surfaceRect.height) || (surface && surface.offsetHeight) || (tooltip && tooltip.offsetHeight) || paneRect.height || 26;
    const padding = 8;
    let left = rect.left + (rect.width / 2) - (width / 2);
    let top = rect.bottom;
    left = Math.max(padding, Math.min((window.innerWidth || document.documentElement.clientWidth || 0) - width - padding, left));
    if (top + height + 8 > (window.innerHeight || document.documentElement.clientHeight || 0) - padding) {
      top = Math.max(padding, rect.top - height - 8);
      pane.classList.remove('mat-mdc-tooltip-panel-below');
      pane.classList.add('mat-mdc-tooltip-panel-above');
      pane.style.transform = 'translateY(-8px)';
    } else {
      pane.classList.remove('mat-mdc-tooltip-panel-above');
      pane.classList.add('mat-mdc-tooltip-panel-below');
      pane.style.transform = 'translateY(8px)';
    }
    pane.style.left = `${left}px`;
    pane.style.top = `${top}px`;
  }

  function showGeminiOmniTooltip(button) {
    if (!button || !button.isConnected || (!button.matches(':hover') && document.activeElement !== button)) {
      return;
    }
    if (activeGeminiTooltip && activeGeminiTooltip.button === button) {
      return;
    }
    removeGeminiOmniTooltipNow();
    activeGeminiTooltip = createGeminiOmniTooltip(button, 'Export');
  }

  function hasVisibleGeminiNativeTooltips() {
    if (platform !== 'gemini' || !document.querySelectorAll) {
      return false;
    }
    return Array.from(document.querySelectorAll('.cdk-overlay-pane mat-tooltip-component .mat-mdc-tooltip-show')).some((tooltip) => {
      if (tooltip.closest && tooltip.closest(`[${GEMINI_TOOLTIP_OVERLAY_ATTR}]`)) {
        return false;
      }
      const rect = tooltip.getBoundingClientRect ? tooltip.getBoundingClientRect() : null;
      return Boolean(rect && rect.width > 0 && rect.height > 0);
    });
  }

  function cleanupDetachedGeminiTooltip() {
    if (activeGeminiTooltip && (!activeGeminiTooltip.button || !activeGeminiTooltip.button.isConnected)) {
      removeGeminiOmniTooltipNow();
    }
  }

  function hideGeminiOmniTooltip() {
    if (geminiTooltipShowTimer) {
      window.clearTimeout(geminiTooltipShowTimer);
      geminiTooltipShowTimer = null;
    }
    geminiTooltipTargetHovered = false;
    geminiTooltipHovered = false;
    closeGeminiOmniTooltip();
  }

  function scheduleGeminiOmniTooltipHide() {
    if (geminiTooltipShowTimer) {
      window.clearTimeout(geminiTooltipShowTimer);
      geminiTooltipShowTimer = null;
    }
    if (geminiTooltipHideTimer) {
      window.clearTimeout(geminiTooltipHideTimer);
    }
    geminiTooltipHideTimer = window.setTimeout(() => {
      geminiTooltipHideTimer = null;
      if (!geminiTooltipTargetHovered && !geminiTooltipHovered && document.activeElement !== (activeGeminiTooltip && activeGeminiTooltip.button)) {
        closeGeminiOmniTooltip();
      }
    }, 80);
  }

  function closeGeminiOmniTooltip() {
    if (!activeGeminiTooltip) {
      return;
    }
    const tooltip = activeGeminiTooltip;
    activeGeminiTooltip = null;
    tooltip.pane.style.pointerEvents = 'none';
    tooltip.tooltip.classList.remove('mat-mdc-tooltip-show');
    tooltip.tooltip.classList.add('mat-mdc-tooltip-hide');
    window.clearTimeout(geminiTooltipHideTimer);
    geminiTooltipHideTimer = window.setTimeout(() => {
      removeGeminiTooltipOverlay(tooltip.boundingBox);
      if (geminiTooltipHideTimer) {
        geminiTooltipHideTimer = null;
      }
    }, GEMINI_TOOLTIP_REMOVE_DELAY_MS);
  }

  function removeGeminiOmniTooltipNow() {
    if (geminiTooltipShowTimer) {
      window.clearTimeout(geminiTooltipShowTimer);
      geminiTooltipShowTimer = null;
    }
    if (geminiTooltipHideTimer) {
      window.clearTimeout(geminiTooltipHideTimer);
      geminiTooltipHideTimer = null;
    }
    geminiTooltipTargetHovered = false;
    geminiTooltipHovered = false;
    if (activeGeminiTooltip) {
      removeGeminiTooltipOverlay(activeGeminiTooltip.boundingBox);
      activeGeminiTooltip = null;
    }
    document.querySelectorAll(`[${GEMINI_TOOLTIP_OVERLAY_ATTR}]`).forEach(removeGeminiTooltipOverlay);
  }

  function removeGeminiTooltipOverlay(node) {
    if (node && node.parentNode) {
      node.remove();
    }
  }

  function bindGeminiNativeTooltipSwitch(container) {
    if (!container || !container.querySelectorAll) {
      return;
    }
    const nativeButtons = Array.from(container.querySelectorAll('button, gem-icon-button'))
      .filter((node) => {
        return node &&
          !node.hasAttribute(GEMINI_TURN_EXPORT_ATTR) &&
          !node.hasAttribute(GEMINI_THREAD_EXPORT_ATTR) &&
          !node.hasAttribute(GEMINI_NATIVE_TOOLTIP_SWITCH_BOUND_ATTR);
      });
    const closeForNativeTooltip = () => {
      if (activeGeminiTooltip || geminiTooltipShowTimer) {
        removeGeminiOmniTooltipNow();
      }
    };
    nativeButtons.forEach((node) => {
      node.setAttribute(GEMINI_NATIVE_TOOLTIP_SWITCH_BOUND_ATTR, 'true');
      node.addEventListener('pointerenter', closeForNativeTooltip);
      node.addEventListener('focus', closeForNativeTooltip);
    });
  }

  function bindGeminiOmniTooltip(button) {
    if (!button || button.hasAttribute(GEMINI_TOOLTIP_BOUND_ATTR)) {
      return;
    }
    button.setAttribute(GEMINI_TOOLTIP_BOUND_ATTR, 'true');
    button.removeAttribute('title');

    const show = (event) => {
      if (event && event.pointerType && event.pointerType !== 'mouse') {
        return;
      }
      geminiTooltipTargetHovered = true;
      if (geminiTooltipHideTimer) {
        window.clearTimeout(geminiTooltipHideTimer);
        geminiTooltipHideTimer = null;
      }
      if (geminiTooltipShowTimer) {
        window.clearTimeout(geminiTooltipShowTimer);
      }
      geminiTooltipShowTimer = window.setTimeout(() => {
        geminiTooltipShowTimer = null;
        showGeminiOmniTooltip(button);
      }, GEMINI_TOOLTIP_SHOW_DELAY_MS);
    };
    const hide = (event) => {
      if (event && event.pointerType && event.pointerType !== 'mouse') {
        return;
      }
      geminiTooltipTargetHovered = false;
      scheduleGeminiOmniTooltipHide();
    };

    button.addEventListener('pointerenter', show);
    button.addEventListener('pointerleave', hide);
    button.addEventListener('focus', show);
    button.addEventListener('blur', () => {
      geminiTooltipTargetHovered = false;
      scheduleGeminiOmniTooltipHide();
    });
    button.addEventListener('mousedown', hideGeminiOmniTooltip, true);
  }

  function clearGeminiTurnButtonColor(button) {
    if (!button || !button.style) {
      return;
    }
    button.style.removeProperty('--omni-gemini-turn-color');
  }

  function syncGeminiTurnButtonTheme(button, referenceButton) {
    if (!button || !window.getComputedStyle) {
      return;
    }
    const reference = referenceButton || findGeminiTurnThemeReference(button);
    const referenceIcon = reference && reference.querySelector ? reference.querySelector('mat-icon') : null;
    const color = reference ? getComputedStyle(referenceIcon || reference).color : '';
    if (!color || color === 'rgba(0, 0, 0, 0)') {
      return;
    }
    applyGeminiTurnColor(button, color);
    installGeminiThemeSyncObserver();
  }

  function findGeminiTurnThemeReference(button) {
    const container = button && button.closest ? button.closest(GEMINI_ACTIONS_SELECTOR) : null;
    if (!container || !container.querySelectorAll) {
      return null;
    }
    return Array.from(container.querySelectorAll('button.mat-mdc-icon-button'))
      .find((candidate) => candidate !== button && !candidate.hasAttribute(GEMINI_TURN_EXPORT_ATTR)) || null;
  }

  function applyGeminiTurnColor(button, color) {
    if (!button || !button.querySelectorAll) {
      return;
    }
    if (button.style) {
      button.style.setProperty('color', color, 'important');
    }
    const host = button.closest ? button.closest(`[${GEMINI_TURN_HOST_ATTR}]`) : null;
    if (host && host.style) {
      host.style.setProperty('color', color, 'important');
    }
    button.querySelectorAll('mat-icon, svg, svg path').forEach((node) => {
      if (node.style) {
        node.style.setProperty('color', color, 'important');
        node.style.setProperty('fill', color, 'important');
      }
    });
  }

  function installGeminiThemeSyncObserver() {
    if (platform !== 'gemini' || geminiThemeObserver || typeof MutationObserver === 'undefined') {
      return;
    }
    const schedule = () => {
      if (geminiThemeSyncQueued) {
        return;
      }
      geminiThemeSyncQueued = true;
      requestAnimationFrame(() => {
        geminiThemeSyncQueued = false;
        syncAllGeminiTurnButtonThemes();
        window.setTimeout(syncAllGeminiTurnButtonThemes, 120);
      });
    };
    geminiThemeObserver = new MutationObserver(schedule);
    [document.documentElement, document.body].filter(Boolean).forEach((node) => {
      geminiThemeObserver.observe(node, {
        attributes: true,
        attributeFilter: ['class', 'data-theme']
      });
    });
  }

  function syncAllGeminiTurnButtonThemes() {
    if (platform !== 'gemini' || !document.querySelectorAll) {
      return;
    }
    document.querySelectorAll(`[${GEMINI_TURN_EXPORT_ATTR}]`).forEach((button) => {
      syncGeminiTurnButtonTheme(button);
    });
  }

  // ─────────────────────────────────────────────
  // Gemini thread button
  // ─────────────────────────────────────────────

  function attachGeminiThreadButton(root) {
    if (isGeminiSearchRoute()) {
      removeGeminiThreadButtons('gemini-search-page');
      return;
    }
    if (!hasActiveGeminiThreadContext()) {
      removeGeminiThreadButtons('no-active-conversation');
      return;
    }
    const anchor = findGeminiThreadAnchor(root);
    let existingButton = getPrimaryGeminiThreadButton();
    if (existingButton && isStaleGeminiNativeThreadButton(existingButton)) {
      existingButton.remove();
      existingButton = null;
    }
    const existingIsNative = existingButton && existingButton.hasAttribute(GEMINI_THREAD_NATIVE_ATTR);
    const existingIsFallback = existingButton && existingButton.hasAttribute(GEMINI_THREAD_FALLBACK_ATTR);

    if (anchor) {
      if (existingButton && (!existingIsNative || existingIsFallback)) {
        existingButton.remove();
        existingButton = null;
      }
      const button = existingButton || buildGeminiNativeThreadButton(anchor.referenceButton);
      button.classList.remove('omni-exporter-gemini-floating');
      button.removeAttribute(GEMINI_THREAD_FALLBACK_ATTR);
      syncGeminiThreadButtonColor(button, anchor.referenceButton);
      placeGeminiThreadButton(button, anchor);
      logGeminiThreadInjection('anchored', anchor.name);
      return;
    }

    removeGeminiThreadButtons('waiting-for-gemini-header-anchor');
    logGeminiThreadInjection('skip-floating-fallback', 'waiting for a stable Gemini header anchor');
  }

  function getPrimaryGeminiThreadButton() {
    const buttons = Array.from(document.querySelectorAll(`[${GEMINI_THREAD_EXPORT_ATTR}]`));
    if (buttons.length > 1) {
      buttons.slice(1).forEach((button) => button.remove());
      logGeminiThreadInjection('dedupe', `removed ${buttons.length - 1} duplicate thread button(s)`);
    }
    return buttons[0] || null;
  }

  function removeGeminiThreadButtons(reason) {
    const buttons = Array.from(document.querySelectorAll(`[${GEMINI_THREAD_EXPORT_ATTR}]`));
    if (!buttons.length) {
      return;
    }
    buttons.forEach((button) => button.remove());
    logGeminiThreadInjection('removed', reason || 'thread button is not valid here');
  }

  function hasActiveGeminiThreadContext() {
    if (isGeminiSearchRoute()) {
      return false;
    }
    const conversations = Array.from(document.querySelectorAll(GEMINI_CONVERSATION_SELECTOR));
    if (conversations.some(hasExportableGeminiConversationContent)) {
      return true;
    }
    const main = document.querySelector('main') || document.body;
    if (main && main.querySelector('user-query, user-query-content, model-response, message-content')) {
      return Boolean(normalizeText(main.textContent || '') || nodeHasExportableImages(main));
    }
    return Boolean(getGeminiConversationIdFromLocation());
  }

  function hasStableGeminiThreadFallbackContext() {
    if (getGeminiConversationIdFromLocation()) {
      return true;
    }
    const main = document.querySelector('main') || document.body;
    return Boolean(main && main.querySelector('model-response, message-content'));
  }

  function getGeminiRouteParts() {
    const parts = location.pathname.split('/').filter(Boolean);
    if (parts[0] === 'u' && /^\d+$/.test(parts[1] || '')) {
      return parts.slice(2);
    }
    return parts;
  }

  function isGeminiSearchRoute() {
    const parts = getGeminiRouteParts();
    return parts[0] === 'search';
  }

  function hasExportableGeminiConversationContent(conversation) {
    if (!conversation || !conversation.isConnected) {
      return false;
    }
    if (getGeminiRootsFromConversation(conversation).length) {
      return true;
    }
    return Boolean(normalizeText(conversation.textContent || '') || nodeHasExportableImages(conversation));
  }

  function getGeminiConversationIdFromLocation() {
    const parts = getGeminiRouteParts();
    if (parts[0] !== 'app' || !parts[1]) {
      return '';
    }
    if (/^(new|settings|extensions|updates|privacy|about|gems|library|explore)$/i.test(parts[1])) {
      return '';
    }
    return parts[1].length >= 8 ? parts[1] : '';
  }

  function findGeminiThreadAnchor(root) {
    const scope = root && root.querySelectorAll ? root : document;
    const candidates = [];

    const addContainerCandidate = (name, container) => {
      if (!isSafeGeminiThreadAnchor(container)) {
        return;
      }
      const referenceButton = getGeminiThreadReferenceButton(container);
      if (!referenceButton || !isSafeGeminiThreadAnchor(referenceButton)) {
        return;
      }
      candidates.push({
        name: name,
        container: container,
        referenceButton: referenceButton,
        placement: 'before-reference'
      });
    };

    const addButtonCandidate = (name, button) => {
      if (!button || !isSafeGeminiThreadAnchor(button)) {
        return;
      }
      candidates.push({
        name: name,
        container: button.parentElement || button,
        referenceButton: button,
        placement: 'before-reference'
      });
    };

    addContainerCandidate('header-buttons-container', document.querySelector(GEMINI_HEADER_SELECTOR));

    const threadShareButtons = Array.from(document.querySelectorAll(GEMINI_THREAD_SHARE_BUTTON_SELECTOR));
    threadShareButtons.forEach((button, index) => {
      addButtonCandidate(`thread-share-button-${index + 1}`, button);
    });

    const genericHeaderSelectors = [
      'header',
      '[role="banner"]',
      '[data-test-id="conversation-header"]',
      '[data-test-id="bard-header"]',
      '.buttons-container',
      '.conversation-header'
    ];
    genericHeaderSelectors.forEach((selector) => {
      const nodes = Array.from(document.querySelectorAll(selector));
      nodes.forEach((node, index) => {
        addContainerCandidate(`${selector}-${index + 1}`, node);
      });
    });

    const scopedHeader = scope.matches && isSafeGeminiThreadAnchor(scope)
      ? scope
      : null;
    if (scopedHeader) {
      addContainerCandidate('mutation-scope', scopedHeader);
    }

    return candidates.find((candidate) => {
      return candidate &&
        candidate.container &&
        candidate.referenceButton &&
        candidate.container.isConnected &&
        candidate.referenceButton.isConnected;
    }) || null;
  }

  function isSafeGeminiThreadAnchor(element) {
    if (!element || !element.isConnected) {
      return false;
    }
    if (element.closest && element.closest([
      GEMINI_UPSELL_SELECTOR,
      GEMINI_NON_CONVERSATION_ACTION_SELECTOR,
      GEMINI_ACTIONS_SELECTOR,
      GEMINI_CONVERSATION_SELECTOR,
      'model-response',
      'user-query',
      'message-actions',
      'response-container',
      '.generated-image-controls',
      '.attachment-container'
    ].join(','))) {
      return false;
    }
    if (element.hasAttribute && element.hasAttribute('hidden')) {
      return false;
    }
    if (element.closest && element.closest('[hidden], [aria-hidden="true"]')) {
      return false;
    }
    try {
      const style = window.getComputedStyle(element);
      if (style && (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0')) {
        return false;
      }
      if (element.matches && element.matches('button, [role="button"]')) {
        const rect = element.getBoundingClientRect();
        if (!rect || rect.width <= 0 || rect.height <= 0) {
          return false;
        }
      }
    } catch (err) {
    }
    return true;
  }

  function getGeminiThreadReferenceButton(container) {
    if (!container || !container.querySelectorAll) {
      return null;
    }
    const preferredSelectors = [
      GEMINI_THREAD_SHARE_BUTTON_SELECTOR,
      GEMINI_MENU_BUTTON_SELECTOR,
      'button.mat-mdc-icon-button'
    ];
    for (const selector of preferredSelectors) {
      const button = Array.from(container.querySelectorAll(selector)).find(isUsableGeminiThreadReferenceButton);
      if (button) {
        return button;
      }
    }
    return Array.from(container.querySelectorAll('button')).find(isUsableGeminiThreadReferenceButton) || null;
  }

  function isUsableGeminiThreadReferenceButton(button) {
    if (!button || button.hasAttribute(GEMINI_THREAD_EXPORT_ATTR)) {
      return false;
    }
    if (button.closest && button.closest(GEMINI_UPSELL_SELECTOR)) {
      return false;
    }
    if (button.matches && button.matches(GEMINI_NON_CONVERSATION_ACTION_SELECTOR)) {
      return false;
    }
    return isSafeGeminiThreadAnchor(button);
  }

  function placeGeminiThreadButton(button, anchor) {
    button.setAttribute(GEMINI_THREAD_EXPORT_ATTR, 'true');
    const placementTarget = getGeminiThreadPlacementTarget(anchor);
    if (anchor.placement === 'before-reference' && placementTarget && placementTarget.parentElement) {
      if (placementTarget.previousElementSibling !== button) {
        placementTarget.insertAdjacentElement('beforebegin', button);
      }
      return;
    }
    if (anchor.container && button.parentElement !== anchor.container) {
      anchor.container.insertAdjacentElement('afterbegin', button);
    }
  }

  function getGeminiThreadPlacementTarget(anchor) {
    if (!anchor || !anchor.referenceButton) {
      return null;
    }
    const referenceButton = anchor.referenceButton;
    const topBarActionHost = getGeminiTopBarActionHost(referenceButton);
    if (
      topBarActionHost &&
      topBarActionHost.parentElement &&
      topBarActionHost.parentElement.matches &&
      topBarActionHost.parentElement.matches('.buttons-container')
    ) {
      return topBarActionHost;
    }
    return referenceButton;
  }

  function getGeminiTopBarActionHost(referenceButton) {
    if (!referenceButton || !referenceButton.closest) {
      return null;
    }
    const hostSelectors = [
      'conversation-actions-icon',
      'share-button',
      'gem-icon-button'
    ];
    for (const selector of hostSelectors) {
      const host = referenceButton.closest(selector);
      if (
        host &&
        host.parentElement &&
        host.parentElement.matches &&
        host.parentElement.matches('.buttons-container')
      ) {
        return host;
      }
    }
    return null;
  }

  function buildGeminiFloatingThreadButton() {
    const button = buildExportButton('thread');
    button.setAttribute('aria-label', 'Exporter la conversation');
    button.setAttribute(GEMINI_THREAD_EXPORT_ATTR, 'true');
    button.setAttribute(GEMINI_THREAD_FALLBACK_ATTR, 'true');
    button.classList.add('omni-exporter-gemini-floating');
    return button;
  }

  function getGeminiThreadFallbackHost() {
    return document.body || document.documentElement || null;
  }

  function logGeminiThreadInjection(state, detail) {
    const key = `${state}:${detail || ''}`;
    if (lastGeminiThreadInjectionLogKey === key) {
      return;
    }
    lastGeminiThreadInjectionLogKey = key;
    console.info(`OmniChat Gemini thread export: ${state}`, detail || '');
  }

  function isStaleGeminiNativeThreadButton(button) {
    if (!button || !button.hasAttribute(GEMINI_THREAD_NATIVE_ATTR)) {
      return false;
    }
    return Boolean(
      button.querySelector('.dynamic-upsell-label, .mdc-button__label') ||
      button.closest(GEMINI_UPSELL_SELECTOR)
    );
  }

  function buildGeminiNativeThreadButton(referenceButton) {
    const button = createGeminiNativeThreadIconButton(referenceButton);
    button.removeAttribute('data-test-id');
    button.removeAttribute('aria-describedby');
    button.removeAttribute('cdk-describedby-host');
    button.removeAttribute('jslog');
    button.removeAttribute('role');
    button.removeAttribute('disabled');
    button.removeAttribute('aria-disabled');
    button.setAttribute('type', 'button');
    button.setAttribute('aria-label', 'Export');
    removeGeminiTooltipAttributes(button);
    button.setAttribute(EXPORT_SCOPE_ATTR, 'thread');
    button.setAttribute(GEMINI_THREAD_EXPORT_ATTR, 'true');
    button.setAttribute(GEMINI_THREAD_NATIVE_ATTR, 'true');
    button.setAttribute('aria-haspopup', 'menu');
    button.setAttribute('aria-expanded', 'false');
    syncGeminiThreadButtonColor(button, referenceButton);
    syncGeminiThreadIconSpacing(button);

    button.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      toggleMenu(button);
    });

    return button;
  }

  function syncGeminiThreadIconSpacing(button) {
    if (!button || !button.querySelectorAll) {
      return;
    }
    button.querySelectorAll('mat-icon, gem-icon, mat-icon > svg, gem-icon svg, .icon').forEach((node) => {
      node.style.setProperty('margin', '0', 'important');
      node.style.setProperty('padding', '0', 'important');
    });
  }

  function syncGeminiThreadButtonColor(button, referenceButton) {
    if (!button || !button.style || !referenceButton || !window.getComputedStyle) {
      return;
    }
    const referenceIcon = referenceButton.querySelector ? referenceButton.querySelector('mat-icon') : null;
    const referenceColor = getComputedStyle(referenceIcon || referenceButton).color;
    if (referenceColor) {
      button.style.setProperty('--omni-gemini-thread-color', referenceColor);
    }
  }

  function createGeminiNativeTurnIconButton() {
    const button = document.createElement('button');
    button.className = 'mdc-icon-button mat-mdc-icon-button mat-mdc-button-base mat-badge mat-unthemed mat-badge-overlap mat-badge-above mat-badge-after mat-badge-small mat-badge-hidden';
    button.setAttribute('mat-icon-button', '');
    button.setAttribute('matbadgeposition', 'after');
    button.setAttribute('tabindex', '0');
    button.setAttribute('mat-ripple-loader-class-name', 'mat-mdc-button-ripple');
    button.setAttribute('mat-ripple-loader-centered', '');
    applyGeminiTurnButtonInlineStyle(button);
    button.appendChild(createGeminiTurnButtonPart('span', 'mat-mdc-button-persistent-ripple mdc-icon-button__ripple'));
    button.appendChild(createGeminiTurnDownloadIcon());
    button.appendChild(createGeminiTurnButtonPart('span', 'mat-focus-indicator'));
    button.appendChild(createGeminiTurnButtonPart('span', 'mat-mdc-button-touch-target'));
    button.appendChild(createGeminiTurnButtonPart('span', 'mat-ripple mat-mdc-button-ripple'));
    return button;
  }

  function createGeminiNativeThreadIconButton(referenceButton) {
    const button = referenceButton && referenceButton.matches && referenceButton.matches('button')
      ? referenceButton.cloneNode(true)
      : document.createElement('button');
    if (!referenceButton || !referenceButton.matches || !referenceButton.matches('button')) {
      applyGeminiNativeButtonVisuals(button, referenceButton);
    }
    button.classList.add('omni-exporter-gemini-native-icon');
    removeGeminiClonedButtonExtras(button);
    replaceGeminiNativeExportIcon(button, referenceButton);
    return button;
  }

  function applyGeminiNativeButtonVisuals(button, referenceButton) {
    const fallbackClassName = 'mdc-button mat-mdc-button-base mat-mdc-tooltip-trigger icon-button mat-mdc-button mat-unthemed ng-star-inserted';
    const referenceClassName = referenceButton && typeof referenceButton.className === 'string'
      ? referenceButton.className
      : '';
    button.className = `${referenceClassName || fallbackClassName} omni-exporter-gemini-native-icon`
      .replace(/\bmat-mdc-menu-trigger\b/g, '')
      .replace(/\bmore-menu-button\b/g, '')
      .replace(/\brefresh-icon\b/g, '')
      .replace(/\bembedded-copy-icon\b/g, '')
      .replace(/\s+/g, ' ')
      .trim();
    if (isGeminiTextIconButtonReference(referenceButton)) {
      button.setAttribute('mat-button', '');
      button.setAttribute('tabindex', '0');
    } else {
      button.setAttribute('mat-icon-button', '');
      button.setAttribute('mat-ripple-loader-centered', '');
    }
    button.setAttribute('mat-ripple-loader-class-name', 'mat-mdc-button-ripple');
  }

  function removeGeminiClonedButtonExtras(button) {
    if (!button || !button.querySelectorAll) {
      return;
    }
    button.querySelectorAll('[lottie-animation], .thumb-animation, .regenerate-animation').forEach((node) => node.remove());
  }

  function createGeminiTurnButtonPart(tagName, className) {
    const part = document.createElement(tagName);
    part.className = className;
    if (className.includes('mat-mdc-button-persistent-ripple')) {
      applyImportantStyles(part, {
        display: 'block',
        position: 'absolute',
        inset: '0px',
        width: '32px',
        height: '32px',
        borderRadius: '9999px',
        background: 'rgba(0, 0, 0, 0)',
        opacity: '1',
        pointerEvents: 'none',
        transition: 'all',
        transform: 'none'
      });
    } else if (className.includes('mat-mdc-button-touch-target')) {
      applyImportantStyles(part, {
        display: 'none',
        position: 'absolute',
        inset: '50% auto auto 50%',
        width: '48px',
        height: '48px',
        borderRadius: '0px',
        background: 'rgba(0, 0, 0, 0)',
        opacity: '1',
        pointerEvents: 'auto',
        transition: 'all',
        transform: 'none'
      });
    }
    return part;
  }

  function createGeminiTurnDownloadIcon() {
    const matIcon = document.createElement('mat-icon');
    matIcon.setAttribute('role', 'img');
    matIcon.setAttribute('fonticon', 'download');
    matIcon.className = 'mat-icon notranslate embedded-copy-icon gds-icon-l google-symbols mat-ligature-font mat-icon-no-color';
    matIcon.setAttribute('aria-hidden', 'true');
    matIcon.setAttribute('data-mat-icon-type', 'font');
    matIcon.setAttribute('data-mat-icon-name', 'download');
    applyImportantStyles(matIcon, {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'content-box',
      width: '20px',
      height: '20px',
      minWidth: 'auto',
      minHeight: 'fit-content',
      maxWidth: 'none',
      maxHeight: 'none',
      fontSize: '20px',
      lineHeight: '20px',
      stroke: 'none',
      opacity: '1',
      overflow: 'hidden',
      verticalAlign: 'baseline',
      transition: 'all',
      transform: 'none'
    });
    return matIcon;
  }

  function applyGeminiTurnButtonInlineStyle(button) {
    applyImportantStyles(button, {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      boxSizing: 'border-box',
      width: '32px',
      height: '32px',
      minWidth: '0px',
      minHeight: '0px',
      maxWidth: 'none',
      maxHeight: 'none',
      padding: '4px',
      margin: '0px',
      border: '0px',
      borderRadius: '9999px',
      overflow: 'visible',
      background: 'rgba(0, 0, 0, 0)',
      boxShadow: 'none',
      font: '24px Arial',
      letterSpacing: 'normal',
      textAlign: 'center',
      verticalAlign: 'baseline',
      cursor: 'pointer',
      transition: 'all',
      transform: 'none',
      opacity: '1'
    });
  }

  function applyImportantStyles(element, stylesMap) {
    if (!element || !element.style || !stylesMap) {
      return;
    }
    Object.entries(stylesMap).forEach(([property, value]) => {
      element.style.setProperty(property.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`), value, 'important');
    });
  }

  function hasGeminiRuntimeMarkerOnSelf(node) {
    if (!node) {
      return false;
    }
    if (node.attributes && Array.from(node.attributes).some((attribute) => /^_ng(?:content|host)-/i.test(attribute.name) || /^ng-/i.test(attribute.name))) {
      return true;
    }
    return Boolean(node.classList && Array.from(node.classList).some((className) => /^ng-/.test(className)));
  }

  function replaceGeminiNativeExportIcon(button, referenceButton) {
    if (!button || !button.querySelector) {
      return;
    }
    const matIcon = button.querySelector('mat-icon');
    if (matIcon) {
      while (matIcon.firstChild) {
        matIcon.removeChild(matIcon.firstChild);
      }
      matIcon.removeAttribute('fonticon');
      matIcon.removeAttribute('data-mat-icon-name');
      matIcon.appendChild(buildExportIconElement());
      return;
    }
    appendGeminiNativeExportIconFallback(button, referenceButton);
  }

  function appendGeminiNativeExportIconFallback(button, referenceButton) {
    const persistentRipple = document.createElement('span');
    persistentRipple.className = isGeminiTextIconButtonReference(referenceButton)
      ? 'mat-mdc-button-persistent-ripple mdc-button__ripple'
      : 'mat-mdc-button-persistent-ripple mdc-icon-button__ripple';
    button.appendChild(persistentRipple);

    const matIcon = document.createElement('mat-icon');
    const referenceIcon = referenceButton && referenceButton.querySelector
      ? referenceButton.querySelector('mat-icon')
      : null;
    matIcon.setAttribute('role', 'img');
    matIcon.className = referenceIcon && typeof referenceIcon.className === 'string'
      ? referenceIcon.className
          .replace(/\brefresh-icon\b/g, '')
          .replace(/\bembedded-copy-icon\b/g, '')
          .replace(/\bicon-filled\b/g, '')
          .replace(/\s+/g, ' ')
          .trim()
      : 'mat-icon notranslate gds-icon-m google-symbols mat-ligature-font mat-icon-no-color ng-star-inserted';
    matIcon.setAttribute('aria-hidden', 'true');
    matIcon.setAttribute('data-mat-icon-type', 'font');
    matIcon.appendChild(buildExportIconElement());
    button.appendChild(matIcon);

    if (isGeminiTextIconButtonReference(referenceButton)) {
      const label = document.createElement('span');
      label.className = 'mdc-button__label';
      button.appendChild(label);
    }

    const focusIndicator = document.createElement('span');
    focusIndicator.className = 'mat-focus-indicator';
    button.appendChild(focusIndicator);

    const touchTarget = document.createElement('span');
    touchTarget.className = 'mat-mdc-button-touch-target';
    button.appendChild(touchTarget);

    const ripple = document.createElement('span');
    ripple.className = 'mat-ripple mat-mdc-button-ripple';
    button.appendChild(ripple);
  }

  function isGeminiTextIconButtonReference(referenceButton) {
    if (!referenceButton) {
      return true;
    }
    return Boolean(
      referenceButton.hasAttribute('mat-button') ||
      referenceButton.classList.contains('mdc-button') ||
      referenceButton.classList.contains('mat-mdc-button')
    ) && !referenceButton.classList.contains('mdc-icon-button');
  }

  // ─────────────────────────────────────────────
  // Grok thread button and tooltip system
  // ─────────────────────────────────────────────

  function attachGrokThreadButton(root) {
    let existingButton = getPrimaryGrokThreadButton();
    removeDuplicateGrokThreadButtons(existingButton);
    if (!hasActiveGrokThreadContext()) {
      removeGrokThreadButton(existingButton);
      return;
    }

    const header = findGrokThreadHeader(root);
    if (!header) {
      removeGrokThreadButton(existingButton);
      return;
    }

    if (existingButton && !isValidGrokThreadExportButton(existingButton, header)) {
      removeGrokThreadButton(existingButton);
      existingButton = null;
    }

    const referenceButton = findGrokHeaderReferenceButton(header);
    if (!referenceButton) {
      return;
    }

    const button = existingButton || buildGrokThreadExportButton();
    syncGrokThreadExportButton(button);

    if (activeMenu && activeMenuButton === button) {
      return;
    }

    if (referenceButton.previousElementSibling !== button) {
      referenceButton.insertAdjacentElement('beforebegin', button);
    }
  }

  function getPrimaryGrokThreadButton() {
    const buttons = Array.from(document.querySelectorAll(`[${GROK_THREAD_EXPORT_ATTR}]`));
    return buttons.find((button) => {
      return button.hasAttribute(GROK_EXPORT_ATTR) &&
        button.getAttribute(EXPORT_SCOPE_ATTR) === 'thread' &&
        !isGrokMessageScopedElement(button);
    }) || buttons.find((button) => !isGrokMessageScopedElement(button)) || buttons[0] || null;
  }

  function removeDuplicateGrokThreadButtons(primaryButton) {
    Array.from(document.querySelectorAll(`[${GROK_THREAD_EXPORT_ATTR}]`)).forEach((button) => {
      if (button !== primaryButton) {
        button.remove();
      }
    });
  }

  function buildGrokThreadExportButton() {
    const button = buildExportButton('thread', {
      overrideClassName: GROK_THREAD_EXPORT_CLASS
    });
    button.setAttribute(GROK_THREAD_EXPORT_ATTR, 'true');
    button.setAttribute('aria-label', 'Exporter la conversation');
    syncGrokThreadExportButton(button);
    return button;
  }

  function syncGrokThreadExportButton(button) {
    if (!button) {
      return;
    }
    if (button.className !== GROK_THREAD_EXPORT_CLASS) {
      button.className = GROK_THREAD_EXPORT_CLASS;
    }
    if (!isGrokThreadIconMarkupCurrent(button)) {
      button.innerHTML = `<span style="opacity: 1; transform: none;">${buildExportIcon('20')}</span>`;
    }
    if (button.style.getPropertyValue('margin-bottom') !== '0px') {
      button.style.setProperty('margin-bottom', '0', 'important');
    }
    setAttributeIfChanged(button, 'aria-label', 'Exporter la conversation');
    setAttributeIfChanged(button, 'type', 'button');
    setAttributeIfChanged(button, 'data-state', 'closed');
    setAttributeIfChanged(button, 'aria-haspopup', 'menu');
    button.removeAttribute('title');
    if (!activeMenu || activeMenuButton !== button) {
      setAttributeIfChanged(button, 'aria-expanded', 'false');
    }
    setAttributeIfChanged(button, GROK_EXPORT_ATTR, 'true');
    setAttributeIfChanged(button, GROK_THREAD_EXPORT_ATTR, 'true');
    bindGrokOmniTooltip(button);
  }

  function isGrokThreadIconMarkupCurrent(button) {
    if (!button || !button.querySelector) {
      return false;
    }
    const span = button.firstElementChild;
    const svg = span && span.querySelector ? span.querySelector('svg') : null;
    return Boolean(
      span &&
      span.tagName &&
      span.tagName.toLowerCase() === 'span' &&
      svg &&
      svg.getAttribute('width') === '20' &&
      svg.getAttribute('height') === '20'
    );
  }

  function ensureGrokTooltipPortal() {
    const existing = document.getElementById('tooltip-portal');
    if (existing) {
      return existing;
    }
    const portal = document.createElement('div');
    portal.id = 'tooltip-portal';
    document.body.appendChild(portal);
    return portal;
  }

  function createGrokOmniTooltip(button, text) {
    const portal = ensureGrokTooltipPortal();
    document.querySelectorAll(`[${GROK_TOOLTIP_PORTAL_ATTR}]`).forEach((node) => node.remove());
    const tooltipId = `radix-_omni_grok_${++iconCounter}_`;

    const wrapper = document.createElement('div');
    wrapper.setAttribute('data-radix-popper-content-wrapper', '');
    wrapper.setAttribute(GROK_TOOLTIP_PORTAL_ATTR, 'true');
    wrapper.style.position = 'fixed';
    wrapper.style.left = '0px';
    wrapper.style.top = '0px';
    wrapper.style.minWidth = 'max-content';
    wrapper.style.setProperty('--radix-popper-transform-origin', '50% 0px');
    wrapper.style.willChange = 'transform';
    wrapper.style.zIndex = 'auto';

    const content = document.createElement('div');
    content.id = tooltipId;
    content.setAttribute('data-side', 'bottom');
    content.setAttribute('data-align', 'center');
    content.setAttribute('data-state', 'delayed-open');
    content.className = 'overflow-hidden rounded-lg bg-popover shadow-sm dark:shadow-none px-3 py-1.5 border border-border-l1 text-xs text-fg-primary pointer-events-none max-w-80 text-wrap animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2';
    content.style.setProperty('--radix-tooltip-content-transform-origin', 'var(--radix-popper-transform-origin)');
    content.style.setProperty('--radix-tooltip-content-available-width', 'var(--radix-popper-available-width)');
    content.style.setProperty('--radix-tooltip-content-available-height', 'var(--radix-popper-available-height)');
    content.style.setProperty('--radix-tooltip-trigger-width', 'var(--radix-popper-anchor-width)');
    content.style.setProperty('--radix-tooltip-trigger-height', 'var(--radix-popper-anchor-height)');

    const visibleText = document.createElement('p');
    visibleText.textContent = text;
    content.appendChild(visibleText);

    const srText = document.createElement('span');
    srText.setAttribute('role', 'tooltip');
    srText.style.position = 'absolute';
    srText.style.border = '0px';
    srText.style.width = '1px';
    srText.style.height = '1px';
    srText.style.padding = '0px';
    srText.style.margin = '-1px';
    srText.style.overflow = 'hidden';
    srText.style.clip = 'rect(0px, 0px, 0px, 0px)';
    srText.style.whiteSpace = 'nowrap';
    srText.style.overflowWrap = 'normal';

    const srParagraph = document.createElement('p');
    srParagraph.textContent = text;
    srText.appendChild(srParagraph);
    content.appendChild(srText);

    wrapper.appendChild(content);
    portal.appendChild(wrapper);

    const viewportWidth = window.innerWidth || document.documentElement.clientWidth || 0;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight || 0;
    const rect = button.getBoundingClientRect();
    const tooltipRect = content.getBoundingClientRect();
    const tooltipWidth = tooltipRect.width || wrapper.getBoundingClientRect().width || 64;
    const tooltipHeight = tooltipRect.height || wrapper.getBoundingClientRect().height || 28;
    const padding = 16;
    const sideOffset = 4;
    const bottomAvailable = viewportHeight - padding - rect.bottom - sideOffset;
    const topAvailable = rect.top - padding - sideOffset;
    const side = bottomAvailable >= tooltipHeight ? 'bottom' : 'top';
    const x = Math.max(padding, Math.min(viewportWidth - tooltipWidth - padding, rect.left + (rect.width / 2) - (tooltipWidth / 2)));
    const preferredY = side === 'top'
      ? rect.top - tooltipHeight - sideOffset
      : rect.bottom + sideOffset;
    const y = Math.max(padding, Math.min(viewportHeight - tooltipHeight - padding, preferredY));
    content.setAttribute('data-side', side);
    wrapper.style.transform = `translate(${x}px, ${y}px)`;
    wrapper.style.setProperty('--radix-popper-transform-origin', side === 'top' ? `50% ${Math.round(tooltipHeight)}px` : '50% 0px');
    wrapper.style.setProperty('--radix-popper-available-width', `${Math.max(0, window.innerWidth - padding * 2)}px`);
    wrapper.style.setProperty('--radix-popper-available-height', `${Math.max(0, side === 'top' ? topAvailable : bottomAvailable)}px`);
    wrapper.style.setProperty('--radix-popper-anchor-width', `${Math.round(rect.width)}px`);
    wrapper.style.setProperty('--radix-popper-anchor-height', `${Math.round(rect.height)}px`);

    button.setAttribute('aria-describedby', tooltipId);
    button.setAttribute('data-state', 'delayed-open');

    return { wrapper, content, button, tooltipId };
  }

  function showGrokOmniTooltip(button) {
    if (!button || !button.isConnected || grokTooltipTarget !== button || !button.matches(':hover')) {
      return;
    }
    if (activeGrokTooltip && activeGrokTooltip.button === button) {
      return;
    }
    removeGrokOmniTooltipNow();
    activeGrokTooltip = createGrokOmniTooltip(button, 'Export');
    installGrokTooltipScrollDismiss(button);
  }

  function hideGrokOmniTooltip() {
    grokTooltipCycle += 1;
    grokTooltipTarget = null;
    if (grokTooltipShowTimer) {
      window.clearTimeout(grokTooltipShowTimer);
      grokTooltipShowTimer = null;
    }
    cleanupGrokTooltipScrollDismiss();
    cleanupGrokTooltipAnchorDismiss();
    if (!activeGrokTooltip) {
      return;
    }
    const tooltip = activeGrokTooltip;
    activeGrokTooltip = null;
    if (tooltip.button && tooltip.button.isConnected) {
      tooltip.button.removeAttribute('aria-describedby');
      tooltip.button.setAttribute('data-state', 'closed');
    }
    tooltip.content.style.animationFillMode = 'forwards';
    tooltip.content.setAttribute('data-state', 'closed');
    scheduleGrokTooltipRemoval(tooltip);
  }

  function removeGrokOmniTooltipNow() {
    cleanupGrokTooltipScrollDismiss();
    cleanupGrokTooltipAnchorDismiss();
    if (grokTooltipHideTimer) {
      window.clearTimeout(grokTooltipHideTimer);
      grokTooltipHideTimer = null;
    }
    if (activeGrokTooltip && activeGrokTooltip.wrapper) {
      if (activeGrokTooltip.button && activeGrokTooltip.button.isConnected) {
        activeGrokTooltip.button.removeAttribute('aria-describedby');
        activeGrokTooltip.button.setAttribute('data-state', 'closed');
      }
      removeGrokTooltipWrapper(activeGrokTooltip.wrapper);
      activeGrokTooltip = null;
    }
    document.querySelectorAll(`[${GROK_TOOLTIP_PORTAL_ATTR}]`).forEach(removeGrokTooltipWrapper);
  }

  function isGrokThreadTooltipButton(button) {
    return Boolean(button && (
      button.hasAttribute(GROK_THREAD_EXPORT_ATTR) ||
      button.getAttribute(EXPORT_SCOPE_ATTR) === 'thread'
    ));
  }

  function installGrokTooltipScrollDismiss(button) {
    cleanupGrokTooltipScrollDismiss();
    installGrokTooltipAnchorDismiss(button);
    if (!button) {
      return;
    }
    const onScroll = () => {
      hideGrokOmniTooltip();
    };
    window.addEventListener('scroll', onScroll, true);
    grokTooltipScrollCleanup = () => {
      window.removeEventListener('scroll', onScroll, true);
      grokTooltipScrollCleanup = null;
    };
  }

  function cleanupGrokTooltipScrollDismiss() {
    if (grokTooltipScrollCleanup) {
      grokTooltipScrollCleanup();
    }
  }

  function getGrokTooltipAnchorSnapshot(button) {
    const rect = button.getBoundingClientRect();
    return {
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height,
      viewportWidth: window.innerWidth || document.documentElement.clientWidth || 0,
      viewportHeight: window.innerHeight || document.documentElement.clientHeight || 0,
      dpr: window.devicePixelRatio || 1
    };
  }

  function installGrokTooltipAnchorDismiss(button) {
    cleanupGrokTooltipAnchorDismiss();
    if (!button) {
      return;
    }
    let frame = 0;
    let snapshot = getGrokTooltipAnchorSnapshot(button);
    const moved = (current) => {
      return Math.abs(current.left - snapshot.left) > 1 ||
        Math.abs(current.top - snapshot.top) > 1 ||
        Math.abs(current.width - snapshot.width) > 1 ||
        Math.abs(current.height - snapshot.height) > 1;
    };
    const viewportChanged = (current) => {
      return Math.abs(current.viewportWidth - snapshot.viewportWidth) > 1 ||
        Math.abs(current.viewportHeight - snapshot.viewportHeight) > 1 ||
        Math.abs(current.dpr - snapshot.dpr) > 0.001;
    };
    const tick = () => {
      const isCurrentButton = grokTooltipTarget === button ||
        (activeGrokTooltip && activeGrokTooltip.button === button);
      if (!button.isConnected || !isCurrentButton) {
        cleanupGrokTooltipAnchorDismiss();
        return;
      }
      const current = getGrokTooltipAnchorSnapshot(button);
      if (viewportChanged(current)) {
        snapshot = current;
      } else if (moved(current)) {
        hideGrokOmniTooltip();
        return;
      }
      frame = window.requestAnimationFrame(tick);
    };
    frame = window.requestAnimationFrame(tick);
    grokTooltipAnchorCleanup = () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      frame = 0;
      grokTooltipAnchorCleanup = null;
    };
  }

  function cleanupGrokTooltipAnchorDismiss() {
    if (grokTooltipAnchorCleanup) {
      grokTooltipAnchorCleanup();
    }
  }

  function getGrokTooltipDelay(button) {
    return isGrokThreadTooltipButton(button) ? GROK_THREAD_TOOLTIP_DELAY_MS : GROK_TOOLTIP_DELAY_MS;
  }

  function scheduleGrokTooltipRemoval(tooltip) {
    let removed = false;
    let removalTimer = null;
    const remove = () => {
      if (removed) {
        return;
      }
      removed = true;
      if (removalTimer) {
        window.clearTimeout(removalTimer);
      }
      if (grokTooltipHideTimer === removalTimer) {
        grokTooltipHideTimer = null;
      }
      if (tooltip.content) {
        tooltip.content.removeEventListener('animationend', remove);
        tooltip.content.removeEventListener('animationcancel', remove);
      }
      removeGrokTooltipWrapper(tooltip.wrapper);
    };
    window.clearTimeout(grokTooltipHideTimer);
    tooltip.content.addEventListener('animationend', remove);
    tooltip.content.addEventListener('animationcancel', remove);
    removalTimer = window.setTimeout(remove, GROK_TOOLTIP_CLOSE_MS);
    grokTooltipHideTimer = removalTimer;
  }

  function removeGrokTooltipWrapper(wrapper) {
    if (wrapper && wrapper.parentNode) {
      wrapper.remove();
    }
  }

  function bindGrokOmniTooltip(button) {
    if (!button || button.hasAttribute(GROK_TOOLTIP_BOUND_ATTR)) {
      return;
    }
    button.setAttribute(GROK_TOOLTIP_BOUND_ATTR, 'true');
    button.removeAttribute('title');
    button.removeAttribute('aria-describedby');
    button.setAttribute('data-state', 'closed');

    const show = (event) => {
      if (event && event.pointerType && event.pointerType !== 'mouse') {
        return;
      }
      const cycle = grokTooltipCycle + 1;
      grokTooltipCycle = cycle;
      grokTooltipTarget = button;
      installGrokTooltipScrollDismiss(button);
      if (grokTooltipShowTimer) {
        window.clearTimeout(grokTooltipShowTimer);
      }
      grokTooltipShowTimer = window.setTimeout(() => {
        grokTooltipShowTimer = null;
        if (grokTooltipCycle === cycle && grokTooltipTarget === button && button.isConnected && button.matches(':hover')) {
          showGrokOmniTooltip(button);
        }
      }, getGrokTooltipDelay(button));
    };
    const hide = (event) => {
      if (event && event.pointerType && event.pointerType !== 'mouse') {
        return;
      }
      if (grokTooltipTarget === button || activeGrokTooltip) {
        hideGrokOmniTooltip();
      }
    };

    button.addEventListener('pointerenter', show);
    button.addEventListener('pointerleave', hide);
    button.addEventListener('mousedown', hide, true);
  }

  function setAttributeIfChanged(element, name, value) {
    if (element.getAttribute(name) !== value) {
      element.setAttribute(name, value);
    }
  }

  function syncGrokExportIconSpacing(button) {
    if (!button || !button.querySelectorAll) {
      return;
    }
    button.querySelectorAll('span, svg').forEach((node) => {
      node.style.setProperty('margin', '0', 'important');
      node.style.setProperty('padding', '0', 'important');
      node.style.setProperty('line-height', '0', 'important');
    });
  }

  function hasActiveGrokThreadContext() {
    return getGrokMessageRoots().some((root) => {
      return root &&
        root.isConnected &&
        !root.closest(GROK_HEADER_SELECTOR) &&
        (normalizeText(root.textContent || '') || nodeHasExportableImages(root));
    });
  }

  function removeGrokThreadButton(button) {
    if (button && button.remove) {
      button.remove();
    }
  }

  function isValidGrokThreadExportButton(button, header) {
    if (!button || !button.isConnected) {
      return false;
    }
    if (isGrokMessageScopedElement(button)) {
      return false;
    }
    if (header && !header.contains(button)) {
      return false;
    }
    if (!header && !button.closest(GROK_HEADER_SELECTOR)) {
      return false;
    }
    return isVisibleGrokElement(button);
  }

  function findGrokThreadHeader(root) {
    const actionHeader = findGrokThreadActionHeader(root);
    if (actionHeader) {
      return actionHeader;
    }

    if (root && root.closest) {
      const scopedHeader = root.closest(GROK_HEADER_SELECTOR);
      if (scopedHeader && isUsableGrokThreadHeader(scopedHeader)) {
        return scopedHeader;
      }
    }
    const exactHeader = document.querySelector(GROK_HEADER_SELECTOR);
    if (isUsableGrokThreadHeader(exactHeader)) {
      return exactHeader;
    }
    return findGrokThreadHeaderFallback(root);
  }

  function findGrokThreadActionHeader(root) {
    const scopes = [];
    if (root && root.querySelectorAll) {
      scopes.push(root);
    }
    scopes.push(document);

    for (const scope of scopes) {
      const candidates = [];
      if (scope.matches && scope.matches('.flex.shrink-0.flex-row.items-center.gap-1\\.5')) {
        candidates.push(scope);
      }
      candidates.push(...Array.from(scope.querySelectorAll('.flex.shrink-0.flex-row.items-center.gap-1\\.5')));
      const found = candidates.find(isGrokThreadActionContainer);
      if (found) {
        return found;
      }
    }
    return null;
  }

  function findGrokThreadHeaderFallback(root) {
    const candidates = [];
    const seen = new Set();
    const addCandidate = (node) => {
      if (!node || seen.has(node)) {
        return;
      }
      seen.add(node);
      candidates.push(node);
    };
    const addButtonParents = (scope) => {
      if (!scope || !scope.querySelectorAll) {
        return;
      }
      Array.from(scope.querySelectorAll('button')).forEach((button) => {
        let node = button.parentElement;
        for (let depth = 0; node && depth < 3; depth += 1, node = node.parentElement) {
          addCandidate(node);
        }
      });
    };

    if (root && root.querySelectorAll) {
      addButtonParents(root);
    }
    addButtonParents(document);

    return candidates
      .filter(isLikelyGrokThreadHeader)
      .sort((a, b) => {
        const rectA = getElementRectSafe(a);
        const rectB = getElementRectSafe(b);
        return ((rectA && rectA.top) || 0) - ((rectB && rectB.top) || 0);
      })[0] || null;
  }

  function findGrokHeaderReferenceButton(header) {
    if (!header || !header.querySelectorAll) {
      return null;
    }
    const buttons = Array.from(header.querySelectorAll('button')).filter(isUsableGrokActionButton);
    return buttons.find((button) => button.parentElement === header) || buttons[0] || null;
  }

  function isUsableGrokThreadHeader(node) {
    if (!node || !node.isConnected || !node.querySelector) {
      return false;
    }
    if (node.matches && node.matches('[data-sidebar]')) {
      return false;
    }
    if (node.closest && node.closest('[data-sidebar]')) {
      return false;
    }
    if (node.closest && node.closest('form, textarea, pre, code, [contenteditable="true"]')) {
      return false;
    }
    const buttons = Array.from(node.querySelectorAll('button')).filter(isUsableGrokActionButton);
    if (!buttons.length || buttons.length > 8) {
      return false;
    }
    if (buttons.every(isGrokMessageScopedElement)) {
      return false;
    }
    return isVisibleGrokElement(node);
  }

  function isLikelyGrokThreadHeader(node) {
    if (!isUsableGrokThreadHeader(node)) {
      return false;
    }
    if (isGrokThreadActionContainer(node)) {
      return true;
    }
    if (isGrokMessageScopedElement(node)) {
      return false;
    }
    const rect = getElementRectSafe(node);
    if (!rect || rect.top < -8 || rect.top > 140) {
      return false;
    }
    const className = ensureString(node.className);
    const classHints = ['absolute', 'fixed', 'sticky', 'ms-auto', 'right-', 'end-', 'top-'];
    return classHints.some((hint) => className.includes(hint));
  }

  function isGrokThreadActionContainer(node) {
    if (!isUsableGrokThreadHeader(node) || isGrokMessageScopedElement(node)) {
      return false;
    }
    const className = ensureString(node.className);
    if (
      !className.includes('flex') ||
      !className.includes('shrink-0') ||
      !className.includes('flex-row') ||
      !className.includes('items-center') ||
      !className.includes('gap-1.5')
    ) {
      return false;
    }
    const directButtons = Array.from(node.children).filter((child) => {
      return child && child.matches && child.matches('button') && isUsableGrokActionButton(child);
    });
    return directButtons.length >= 1 && directButtons.length <= 4;
  }

  function isVisibleGrokElement(node) {
    const rect = getElementRectSafe(node);
    if (!rect || rect.width <= 0 || rect.height <= 0) {
      return false;
    }
    try {
      const style = window.getComputedStyle(node);
      if (style && (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0')) {
        return false;
      }
    } catch (err) {
    }
    return true;
  }

  function getElementRectSafe(node) {
    try {
      return node && node.getBoundingClientRect ? node.getBoundingClientRect() : null;
    } catch (err) {
      return null;
    }
  }

  // ─────────────────────────────────────────────
  // Claude buttons
  // ─────────────────────────────────────────────

  function attachClaudeThreadButton(root) {
    const scope = root || document;
    const header = scope.matches && scope.matches(CLAUDE_HEADER_SELECTOR)
      ? scope
      : scope.querySelector(CLAUDE_HEADER_SELECTOR);
    if (!header) {
      return;
    }
    const existingButton = header.querySelector(`[${CLAUDE_THREAD_EXPORT_ATTR}]`);
    if (existingButton) {
      configureClaudeThreadExportButton(existingButton, header);
      return;
    }
    const shareButton = header.querySelector(CLAUDE_SHARE_SELECTOR);
    const button = buildExportButton('thread', {
      overrideClassName: getClaudeThreadExportButtonClass()
    });
    button.setAttribute(CLAUDE_THREAD_EXPORT_ATTR, 'true');
    configureClaudeThreadExportButton(button, header);
    if (shareButton) {
      shareButton.insertAdjacentElement('beforebegin', button);
    } else {
      header.insertAdjacentElement('afterbegin', button);
    }
  }

  function getClaudeThreadExportButtonClass() {
    return 'omni-exporter-btn cds-reset group/btn relative isolate inline-flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap select-none ' +
      'cursor-[var(--cds-cursor-interactive)] aria-disabled:cursor-default data-[disabled]:cursor-default border-0 outline-none rounded h-control ' +
      'font-sans text-body font-medium [&:disabled:not([aria-busy])]:opacity-50 disabled:pointer-events-none transition-shadow duration-fast ' +
      'focus-visible:shadow-focus text-primary aria-pressed:text-accent aspect-square w-control px-0';
  }

  function configureClaudeThreadExportButton(button, header) {
    if (!button) {
      return;
    }
    button.className = getClaudeThreadExportButtonClass();
    button.setAttribute('data-cds', 'Button');
    button.setAttribute('aria-pressed', 'false');
    button.setAttribute(CLAUDE_THREAD_EXPORT_ATTR, 'true');
    if (!button.querySelector('[data-cds="Icon"]') || !button.querySelector('.cds-btn-squish')) {
      renderClaudeThreadExportButton(button);
    }
    setExportIconStrokeWidth(button, '1.5');
    resetClaudeThreadExportButtonColor(button);
    attachClaudeThreadTooltip(button);
  }

  function attachClaudeThreadTooltip(button) {
    if (!button || button.hasAttribute(CLAUDE_TOOLTIP_BOUND_ATTR)) {
      return;
    }
    button.setAttribute(CLAUDE_TOOLTIP_BOUND_ATTR, 'true');
    attachClaudeTooltip(button, button, 'Export');
  }

  function resetClaudeThreadExportButtonColor(button) {
    if (!button || !button.querySelectorAll) {
      return;
    }
    if (button.style) {
      button.style.removeProperty('color');
      button.style.removeProperty('stroke');
    }
    button.querySelectorAll('svg, svg path, [data-cds="Icon"]').forEach((node) => {
      if (node.style) {
        node.style.removeProperty('color');
        node.style.removeProperty('stroke');
      }
      if (node.tagName && node.tagName.toLowerCase() === 'path') {
        node.setAttribute('stroke', 'currentColor');
      }
    });
  }

  function attachClaudeTurnButtons(root) {
    const scope = root || document;
    const containers = collectClaudeActionContainers(scope);
    containers.forEach((container) => {
      const existingButton = container.querySelector(`[${CLAUDE_TURN_EXPORT_ATTR}]`);
      if (existingButton) {
        configureClaudeTurnExportButton(existingButton);
        return;
      }
      const messageNode = findClaudeMessageForActions(container);
      const isUserContext = messageNode &&
        (messageNode.matches('[data-testid="user-message"]') ||
          messageNode.querySelector('[data-testid="user-message"]'));
      if (!messageNode || isUserContext) {
        return;
      }
      const copyButton = container.querySelector(CLAUDE_COPY_SELECTOR) ||
        container.querySelector('button:last-of-type') ||
        container.querySelector('button');
      if (!copyButton) {
        return;
      }
      const button = buildExportButton('turn', {
        overrideClassName: getClaudeTurnExportButtonClass()
      });
      button.setAttribute('aria-label', 'Export');
      button.setAttribute(CLAUDE_TURN_EXPORT_ATTR, 'true');
      configureClaudeTurnExportButton(button);
      const wrapper = document.createElement('div');
      wrapper.className = 'w-fit';
      wrapper.setAttribute('data-state', 'closed');
      attachClaudeTooltip(wrapper, button, 'Export');
      wrapper.appendChild(button);
      const parentWrapper = copyButton.closest('.w-fit');
      if (parentWrapper) {
        parentWrapper.insertAdjacentElement('afterend', wrapper);
      } else {
        copyButton.insertAdjacentElement('afterend', wrapper);
      }
    });
  }

  function getClaudeTurnExportButtonClass() {
    return 'omni-exporter-btn cds-reset group/btn relative isolate inline-flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap select-none ' +
      'cursor-[var(--cds-cursor-interactive)] aria-disabled:cursor-default data-[disabled]:cursor-default border-0 outline-none rounded h-control ' +
      'font-sans text-body font-medium [&:disabled:not([aria-busy])]:opacity-50 disabled:pointer-events-none transition-shadow duration-fast ' +
      'focus-visible:shadow-focus text-primary aria-pressed:text-accent aspect-square w-control px-0 !text-muted hover:!text-primary';
  }

  function configureClaudeTurnExportButton(button) {
    if (!button) {
      return;
    }
    button.className = getClaudeTurnExportButtonClass();
    button.setAttribute('data-cds', 'Button');
    button.setAttribute('data-size', 'xs');
    button.setAttribute('tabindex', '-1');
    button.setAttribute(CLAUDE_TURN_EXPORT_ATTR, 'true');
    if (!button.querySelector('[data-omni-claude-turn-icon]')) {
      renderClaudeTurnExportButton(button);
    }
  }

  function renderClaudeTurnExportButton(button) {
    button.innerHTML = `
<span aria-hidden="true" class="absolute -z-[1] rounded-[inherit] transition-colors duration-fast group-focus-visible/btn:shadow-[inset_0_0_0_1px_var(--cds-page-bg)] bg-transparent group-hover/btn:bg-fill-ghost-hover group-aria-expanded/btn:bg-fill-ghost-hover inset-0 group-aria-pressed/btn:bg-accent group-hover/btn:group-aria-pressed/btn:bg-accent cds-btn-squish "></span>
<span class="inline-flex items-center gap-1 ">
  <span data-omni-claude-turn-icon="true" data-cds="Icon" aria-hidden="true" style="line-height: 1; width: 1em; height: 1em; display: flex; align-items: center; justify-content: center; flex-shrink: 0; user-select: none; font-size: 16px;">
    ${buildExportIcon('16').replace('stroke-width="2"', 'stroke-width="1.5"')}
  </span>
</span>`;
  }

  // ─────────────────────────────────────────────
  // Claude tooltip system
  // ─────────────────────────────────────────────

  function attachClaudeTooltip(wrapper, button, label) {
    let tooltipEl = null;
    let tooltipId = null;
    let cleanupPositionListeners = null;
    let isTooltipTargetActive = false;
    let isTooltipHovered = false;
    let hideTimer = null;

    installClaudeTooltipBridge();

    const clearHideTimer = () => {
      if (!hideTimer) {
        return;
      }
      window.clearTimeout(hideTimer);
      hideTimer = null;
    };

    const relatedTargetIsTooltip = (event) => {
      const related = event && event.relatedTarget;
      return Boolean(tooltipEl && related && tooltipEl.contains && tooltipEl.contains(related));
    };

    const relatedTargetIsTrigger = (event) => {
      const related = event && event.relatedTarget;
      return Boolean(related && (
        related === button ||
        related === wrapper ||
        (button.contains && button.contains(related)) ||
        (wrapper.contains && wrapper.contains(related))
      ));
    };

    const closeTooltip = (markWarm) => {
      clearHideTimer();
      wrapper.setAttribute('data-state', 'closed');
      wrapper.removeAttribute('aria-describedby');
      if (cleanupPositionListeners) {
        cleanupPositionListeners();
        cleanupPositionListeners = null;
      }
      if (tooltipEl) {
        tooltipEl.remove();
        tooltipEl = null;
        tooltipId = null;
      }
      if (activeClaudeOmniTooltipCloser === closeTooltip) {
        activeClaudeOmniTooltipCloser = null;
      }
      if (markWarm) {
        markClaudeTooltipWarm();
      }
    };

    const scheduleHide = (event) => {
      cancelClaudeTooltipShow();
      clearHideTimer();
      const hadVisibleTooltip = Boolean(tooltipEl);
      if (!hadVisibleTooltip) {
        closeTooltip(false);
        return;
      }
      const nextClaudeButton = event && event.relatedTarget
        ? findClaudeNativeTooltipButton(event.relatedTarget)
        : null;
      if (nextClaudeButton) {
        closeTooltip(true);
        return;
      }
      hideTimer = window.setTimeout(() => {
        if (isTooltipTargetActive || isTooltipHovered) {
          return;
        }
        closeTooltip(true);
      }, CLAUDE_TOOLTIP_HIDE_DELAY_MS);
    };

    const show = () => {
      if (!isTooltipTargetActive && document.activeElement !== button) {
        return false;
      }
      if (tooltipEl) {
        return false;
      }
      dismissVisibleClaudeNativeTooltips();
      tooltipId = `omni_claude_export_tooltip_${Math.random().toString(36).slice(2, 9)}`;
      wrapper.setAttribute('data-state', 'delayed-open');
      wrapper.setAttribute('aria-describedby', tooltipId);

      const tooltipParts = createClaudeTooltipPortal(label, tooltipId);
      const portal = tooltipParts.portal;
      const popperWrapper = tooltipParts.popperWrapper;
      const tooltip = tooltipParts.tooltip;
      document.body.appendChild(portal);
      tooltipEl = portal;
      activeClaudeOmniTooltipCloser = closeTooltip;

      const reposition = () => positionClaudeTooltip(button, popperWrapper, tooltip);
      reposition();
      window.addEventListener('scroll', reposition, true);
      window.addEventListener('resize', reposition, true);
      cleanupPositionListeners = () => {
        window.removeEventListener('scroll', reposition, true);
        window.removeEventListener('resize', reposition, true);
      };
      portal.addEventListener('mouseenter', () => {
        isTooltipHovered = true;
        clearHideTimer();
      });
      portal.addEventListener('mouseleave', (event) => {
        isTooltipHovered = false;
        if (relatedTargetIsTrigger(event)) {
          return;
        }
        scheduleHide(event);
      });
      return true;
    };

    const scheduleShow = () => {
      isTooltipTargetActive = true;
      clearHideTimer();
      dismissVisibleClaudeNativeTooltips();
      if (tooltipEl) {
        return;
      }
      scheduleClaudeTooltipShow(show);
    };

    const hide = (event) => {
      isTooltipTargetActive = false;
      if (relatedTargetIsTooltip(event)) {
        return;
      }
      scheduleHide(event);
    };

    wrapper.addEventListener('mouseenter', scheduleShow);
    wrapper.addEventListener('mouseleave', hide);
    button.addEventListener('focus', scheduleShow);
    button.addEventListener('blur', hide);
  }

  function getClaudeTooltipNow() {
    return window.performance && typeof window.performance.now === 'function'
      ? window.performance.now()
      : Date.now();
  }

  function isClaudeTooltipWarm() {
    return getClaudeTooltipNow() < claudeTooltipWarmUntil;
  }

  function markClaudeTooltipWarm() {
    claudeTooltipWarmUntil = getClaudeTooltipNow() + CLAUDE_TOOLTIP_SKIP_DELAY_MS;
  }

  function scheduleClaudeTooltipShow(callback) {
    cancelClaudeTooltipShow();
    const delay = isClaudeTooltipWarm() || hasVisibleClaudeNativeTooltips() ? 0 : CLAUDE_TOOLTIP_DELAY_MS;
    claudeTooltipShowTimer = window.setTimeout(() => {
      claudeTooltipShowTimer = null;
      if (callback()) {
        markClaudeTooltipWarm();
      }
    }, delay);
  }

  function cancelClaudeTooltipShow() {
    if (!claudeTooltipShowTimer) {
      return;
    }
    window.clearTimeout(claudeTooltipShowTimer);
    claudeTooltipShowTimer = null;
  }

  function installClaudeTooltipBridge() {
    if (claudeTooltipBridgeInstalled || platform !== 'claude') {
      return;
    }
    claudeTooltipBridgeInstalled = true;

    document.addEventListener('mouseover', (event) => {
      if (!isClaudeTooltipWarm()) {
        return;
      }
      const button = findClaudeNativeTooltipButton(event.target);
      if (!button) {
        return;
      }
      showClaudeBridgeTooltip(button);
    }, true);

    document.addEventListener('mouseout', (event) => {
      if (!activeClaudeBridgeTooltip) {
        return;
      }
      const button = activeClaudeBridgeTooltip.button;
      const related = event.relatedTarget;
      if (button && related && button.contains && button.contains(related)) {
        return;
      }
      if (button && event.target && button.contains && button.contains(event.target)) {
        hideClaudeBridgeTooltip();
      }
    }, true);

    document.addEventListener('focusin', (event) => {
      if (!isClaudeTooltipWarm()) {
        return;
      }
      const button = findClaudeNativeTooltipButton(event.target);
      if (button) {
        showClaudeBridgeTooltip(button);
      }
    }, true);

    document.addEventListener('focusout', (event) => {
      if (activeClaudeBridgeTooltip && activeClaudeBridgeTooltip.button === event.target) {
        hideClaudeBridgeTooltip();
      }
    }, true);
  }

  function findClaudeNativeTooltipButton(target) {
    if (!target || !target.closest) {
      return null;
    }
    const button = target.closest('button[data-cds="Button"], button[data-testid^="action-bar-"], [data-message-action-bar] button');
    if (!button || button.hasAttribute(CLAUDE_TURN_EXPORT_ATTR) || button.classList.contains(EXPORT_BUTTON_CLASS)) {
      return null;
    }
    if (!button.closest('[data-message-action-bar]')) {
      return null;
    }
    return button;
  }

  function showClaudeBridgeTooltip(button) {
    if (!button || hasVisibleClaudeNativeTooltips()) {
      hideClaudeBridgeTooltip();
      return;
    }
    if (activeClaudeOmniTooltipCloser) {
      activeClaudeOmniTooltipCloser(true);
    }
    const label = getClaudeNativeTooltipLabel(button);
    if (!label) {
      return;
    }
    if (activeClaudeBridgeTooltip && activeClaudeBridgeTooltip.button === button) {
      activeClaudeBridgeTooltip.reposition();
      return;
    }
    hideClaudeBridgeTooltip();

    const tooltipId = `omni_claude_bridge_tooltip_${Math.random().toString(36).slice(2, 9)}`;
    const tooltipParts = createClaudeTooltipPortal(label, tooltipId);
    const portal = tooltipParts.portal;
    const popperWrapper = tooltipParts.popperWrapper;
    const tooltip = tooltipParts.tooltip;
    portal.setAttribute('data-omni-claude-bridge-tooltip', '');
    document.body.appendChild(portal);

    const reposition = () => positionClaudeTooltip(button, popperWrapper, tooltip);
    reposition();
    window.addEventListener('scroll', reposition, true);
    window.addEventListener('resize', reposition, true);

    let nativeCheckTimer = null;
    let nativeHideTimer = null;
    let nativeTooltipDetected = false;
    let remainingChecks = 18;
    nativeCheckTimer = window.setInterval(() => {
      remainingChecks -= 1;
      if (!activeClaudeBridgeTooltip || activeClaudeBridgeTooltip.portal !== portal) {
        window.clearInterval(nativeCheckTimer);
        return;
      }
      if (hasVisibleClaudeNativeTooltips()) {
        if (!nativeTooltipDetected) {
          nativeTooltipDetected = true;
          nativeHideTimer = window.setTimeout(() => {
            hideClaudeBridgeTooltip();
          }, 140);
        }
        return;
      }
      if (remainingChecks <= 0) {
        hideClaudeBridgeTooltip();
      }
    }, 50);

    activeClaudeBridgeTooltip = {
      button,
      portal,
      reposition,
      cleanup: () => {
        window.removeEventListener('scroll', reposition, true);
        window.removeEventListener('resize', reposition, true);
        if (nativeCheckTimer) {
          window.clearInterval(nativeCheckTimer);
          nativeCheckTimer = null;
        }
        if (nativeHideTimer) {
          window.clearTimeout(nativeHideTimer);
          nativeHideTimer = null;
        }
      }
    };
  }

  function hideClaudeBridgeTooltip() {
    if (!activeClaudeBridgeTooltip) {
      return;
    }
    activeClaudeBridgeTooltip.cleanup();
    activeClaudeBridgeTooltip.portal.remove();
    activeClaudeBridgeTooltip = null;
    markClaudeTooltipWarm();
  }

  function getClaudeNativeTooltipLabel(button) {
    const candidates = [
      button.getAttribute('aria-label'),
      button.getAttribute('title'),
      button.getAttribute('data-tooltip'),
      normalizeText(button.textContent || '')
    ];
    return candidates
      .map((candidate) => normalizeText(candidate || ''))
      .find((candidate) => candidate && candidate.length <= 80) || '';
  }

  function createClaudeTooltipPortal(label, tooltipId) {
    const mode = resolveClaudeTooltipMode();
    const portal = document.createElement('div');
    portal.setAttribute('data-base-ui-portal', '');
    portal.setAttribute('data-omni-claude-tooltip', '');

    const root = document.createElement('div');
    root.className = 'cds-root pointer-events-auto';
    root.setAttribute('data-cds-portal', '');
    root.setAttribute('data-density', 'comfortable');
    root.setAttribute('data-mode', mode);
    root.setAttribute('data-platform', 'web');
    root.setAttribute('data-font', 'anthropic');

    const popperWrapper = document.createElement('div');
    popperWrapper.setAttribute('data-open', '');
    popperWrapper.setAttribute('data-side', 'top');
    popperWrapper.setAttribute('data-align', 'center');
    popperWrapper.setAttribute('data-instant', 'delay');
    popperWrapper.setAttribute('role', 'presentation');
    popperWrapper.setAttribute('data-cds', 'Tooltip');
    popperWrapper.className = 'z-tooltip';
    popperWrapper.style.position = 'fixed';
    popperWrapper.style.left = '0px';
    popperWrapper.style.top = '0px';
    popperWrapper.style.willChange = 'transform';
    popperWrapper.style.zIndex = '50';

    const tooltip = document.createElement('div');
    tooltip.id = tooltipId;
    tooltip.setAttribute('data-open', '');
    tooltip.setAttribute('data-side', 'top');
    tooltip.setAttribute('data-align', 'center');
    tooltip.setAttribute('data-instant', 'delay');
    tooltip.setAttribute('tabindex', '-1');
    tooltip.setAttribute('data-base-ui-focusable', '');
    tooltip.setAttribute('role', 'tooltip');
    tooltip.className = 'px-2 rounded-[6px] bg-[var(--cds-tooltip-bg)] text-[var(--cds-tooltip-fg)] shadow-sm dark:shadow-panel-sm text-[13px]/[18px] origin-[var(--transform-origin)] transition-[opacity,scale] duration-snap ease-snap motion-reduce:transition-none data-[starting-style]:opacity-0 data-[starting-style]:scale-[0.98] data-[ending-style]:opacity-0 data-[ending-style]:scale-[0.98] data-[instant]:duration-0 inline-flex items-center whitespace-nowrap gap-2 h-6';

    const contentRoot = document.createElement('div');
    contentRoot.className = 'cds-root contents';
    contentRoot.setAttribute('data-mode', mode);
    contentRoot.setAttribute('data-density', 'comfortable');
    contentRoot.setAttribute('data-platform', 'web');
    contentRoot.setAttribute('data-font', 'anthropic');

    const text = document.createElement('span');
    text.textContent = label;
    contentRoot.appendChild(text);
    tooltip.appendChild(contentRoot);
    popperWrapper.appendChild(tooltip);
    root.appendChild(popperWrapper);
    portal.appendChild(root);

    return { portal, popperWrapper, tooltip };
  }

  function hasVisibleClaudeNativeTooltips() {
    return getVisibleClaudeNativeTooltipPortals().length > 0;
  }

  function dismissVisibleClaudeNativeTooltips() {
    const portals = getVisibleClaudeNativeTooltipPortals();
    portals.forEach((portal) => {
      portal.remove();
    });
    if (portals.length) {
      markClaudeTooltipWarm();
    }
  }

  function getVisibleClaudeNativeTooltipPortals() {
    if (platform !== 'claude') {
      return [];
    }
    const seen = new Set();
    const portals = [];
    document.querySelectorAll('[data-base-ui-portal] [role="tooltip"]').forEach((tooltip) => {
      const portal = tooltip.closest('[data-base-ui-portal]');
      if (!portal || portal.hasAttribute('data-omni-claude-tooltip') || seen.has(portal)) {
        return;
      }
      const rect = tooltip.getBoundingClientRect ? tooltip.getBoundingClientRect() : null;
      if (rect && rect.width > 0 && rect.height > 0) {
        seen.add(portal);
        portals.push(portal);
      }
    });
    return portals;
  }

  function resolveClaudeTooltipMode() {
    const root = document.querySelector('[data-mode]');
    const mode = root ? ensureString(root.getAttribute('data-mode')).trim() : '';
    return mode || 'dark';
  }

  function positionClaudeTooltip(button, popperWrapper, tooltip) {
    if (!button || !popperWrapper || !tooltip || !button.getBoundingClientRect) {
      return;
    }
    const rect = button.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();
    const width = tooltipRect.width || 96;
    const height = tooltipRect.height || 24;
    const padding = 8;
    const left = Math.max(padding, Math.min(window.innerWidth - width - padding, rect.left + (rect.width / 2) - (width / 2)));
    const isThreadTooltip = button.hasAttribute && button.hasAttribute(CLAUDE_THREAD_EXPORT_ATTR);
    const top = isThreadTooltip
      ? Math.min(window.innerHeight - height - padding, rect.bottom + 4)
      : Math.max(padding, rect.top - height - 5.4);
    const originX = Math.max(0, Math.min(width, rect.left + (rect.width / 2) - left));
    const side = isThreadTooltip ? 'bottom' : 'top';

    popperWrapper.setAttribute('data-side', side);
    tooltip.setAttribute('data-side', side);
    popperWrapper.style.setProperty('--available-width', `${Math.max(0, window.innerWidth - padding * 2)}px`);
    popperWrapper.style.setProperty('--available-height', `${Math.max(0, (isThreadTooltip ? window.innerHeight - rect.bottom : rect.top) - padding)}px`);
    popperWrapper.style.setProperty('--anchor-width', `${Math.round(rect.width)}px`);
    popperWrapper.style.setProperty('--anchor-height', `${Math.round(rect.height)}px`);
    popperWrapper.style.setProperty('--transform-origin', isThreadTooltip ? `${originX}px -4px` : `${originX}px calc(100% + 4px)`);
    popperWrapper.style.transform = `translate(${left}px, ${Math.max(padding, top)}px)`;
  }


  // ─────────────────────────────────────────────
  // DeepSeek buttons and tooltip system
  // ─────────────────────────────────────────────

  function attachDeepSeekButtons(root) {
    attachDeepSeekTurnButtons(root);
    attachDeepSeekThreadButton(root);
  }

  function isDeepSeekActionBar(container) {
    const group = container.querySelector(DEEPSEEK_GROUP_SELECTOR);
    if (!group) {
      return false;
    }
    const roleButtons = group.querySelectorAll(DEEPSEEK_ROLE_BUTTON_SELECTOR);
    if (roleButtons.length < 3) {
      return false;
    }
    const spacer = container.querySelector('div[style*="flex: 1 1 0%"]');
    if (!spacer) {
      return false;
    }
    return true;
  }

  function attachDeepSeekTurnButtons(root) {
    const containers = [];
    if (root.matches && root.matches(DEEPSEEK_ACTIONS_SELECTOR)) {
      containers.push(root);
    }
    containers.push(...root.querySelectorAll(DEEPSEEK_ACTIONS_SELECTOR));
    containers.forEach((container) => {
      if (container.querySelector(`[${DEEPSEEK_EXPORT_ATTR}]`)) {
        return;
      }
      if (!isDeepSeekActionBar(container)) {
        return;
      }
      const group = container.querySelector(DEEPSEEK_GROUP_SELECTOR) || container;
      const button = buildExportButton('turn', {
        overrideClassName: DEEPSEEK_TURN_BUTTON_CLASSNAME,
        useDeepSeekMarkup: true,
        tagName: 'div'
      });
      button.setAttribute(DEEPSEEK_EXPORT_ATTR, 'true');
      button.setAttribute('aria-label', 'Export');
      attachDeepSeekTurnTooltip(button);
      group.appendChild(button);
    });
  }

  function attachDeepSeekTurnTooltip(button) {
    let container = null;
    let wrapper = null;
    let cleanup = null;

    const hide = () => {
      if (cleanup) {
        cleanup();
        cleanup = null;
      }
      if (container) {
        container.remove();
        container = null;
        wrapper = null;
      }
      button.removeAttribute('aria-describedby');
    };

    const show = () => {
      if (container && wrapper) {
        positionDeepSeekTurnTooltip(button, wrapper);
        return;
      }

      const tooltipId = `omni-deepseek-export-tooltip-${++iconCounter}`;
      container = document.createElement('div');
      container.className = 'ds-floating-container';
      container.style.zIndex = '1024';

      wrapper = document.createElement('div');
      wrapper.className = 'ds-floating-position-wrapper ds-theme';
      wrapper.setAttribute('data-transform-origin', 'top');
      wrapper.id = tooltipId;
      wrapper.style.zIndex = '1024';
      applyDeepSeekTooltipTheme(wrapper);

      const tooltip = document.createElement('div');
      tooltip.className = 'ds-tooltip ds-tooltip--s ds-elevated ds-theme';
      tooltip.setAttribute('role', 'tooltip');
      applyDeepSeekTooltipTheme(tooltip);
      tooltip.textContent = 'Export';

      wrapper.appendChild(tooltip);
      container.appendChild(wrapper);
      document.body.appendChild(container);
      button.setAttribute('aria-describedby', tooltipId);

      const reposition = () => {
        positionDeepSeekTurnTooltip(button, wrapper);
      };
      reposition();

      window.addEventListener('scroll', reposition, true);
      window.addEventListener('resize', reposition, true);
      cleanup = () => {
        window.removeEventListener('scroll', reposition, true);
        window.removeEventListener('resize', reposition, true);
      };
    };

    button.addEventListener('mouseenter', show);
    button.addEventListener('mouseleave', hide);
    button.addEventListener('focus', show);
    button.addEventListener('blur', hide);
    button.addEventListener('mousedown', hide, true);
  }

  function applyDeepSeekTooltipTheme(element) {
    if (!element || !element.style) {
      return;
    }
    element.style.setProperty('--ds-rgb-hover', '255 255 255 / 8%');
    element.style.setProperty('--ds-notification-color', 'var(--dsw-alias-bg-layer-2)');
    element.style.setProperty('--ds-notification-title-color', 'var(--dsw-alias-label-primary)');
    element.style.setProperty('--ds-notification-content-color', 'var(--dsw-alias-label-secondary)');
    element.style.setProperty('--ds-notification-padding', '15px');
    element.style.setProperty('--ds-notification-corner', '16px');
    element.style.setProperty('--ds-notification-shadow', '0 0 1px 0 rgba(0, 0, 0, 0.20), 0 0 4px 0 rgba(0, 0, 0, 0.02), 0 12px 32px 0 rgba(0, 0, 0, 0.08)');
    element.style.setProperty('--ds-notification-title-margin', '0 0 8px 0');
    element.style.setProperty('--ds-notification-footer-margin', '20px 0 0 0');
    element.style.setProperty('--ds-notification-border', 'var(--dsw-alias-border-inverted)');
    element.style.setProperty('--ds-notification-title-font-size', '16px');
    element.style.setProperty('--ds-notification-title-line-height', '24px');
    element.style.setProperty('--ds-notification-content-font-size', '14px');
    element.style.setProperty('--ds-notification-content-line-height', '22px');
    element.style.setProperty('--nds-button-primary-fill', 'var(--dsw-alias-button-primary-fill)');
    element.style.setProperty('--ds-border-l2', 'var(--dsw-alias-border-l2)');
  }

  function positionDeepSeekTurnTooltip(button, wrapper) {
    if (!button || !wrapper) {
      return;
    }
    const rect = button.getBoundingClientRect();
    const tooltipNode = wrapper.firstElementChild || wrapper;
    const tooltipRect = tooltipNode.getBoundingClientRect();
    const tooltipWidth = tooltipRect.width || wrapper.getBoundingClientRect().width || 64;
    const tooltipHeight = tooltipRect.height || wrapper.getBoundingClientRect().height || 28;
    const padding = 8;
    let left = rect.left + (rect.width / 2) - (tooltipWidth / 2);
    let top = rect.bottom + 4;
    let origin = 'top';

    left = Math.max(padding, Math.min(window.innerWidth - padding - tooltipWidth, left));
    if (top + tooltipHeight > window.innerHeight - padding) {
      top = rect.top - tooltipHeight - 4;
      origin = 'bottom';
    }
    top = Math.max(padding, Math.min(window.innerHeight - padding - tooltipHeight, top));

    wrapper.setAttribute('data-transform-origin', origin);
    wrapper.style.left = `${left}px`;
    wrapper.style.top = `${top}px`;
  }

  function attachDeepSeekThreadButton(root) {
    if (document.querySelector(`[${DEEPSEEK_THREAD_EXPORT_ATTR}]`)) {
      return;
    }
    const candidates = [];
    if (root.matches && root.matches(DEEPSEEK_THREAD_BUTTON_SELECTOR)) {
      candidates.push(root);
    }
    candidates.push(...root.querySelectorAll(DEEPSEEK_THREAD_BUTTON_SELECTOR));
    for (const targetButton of candidates) {
      if (targetButton.closest(DEEPSEEK_ACTIONS_SELECTOR)) {
        continue;
      }
      const parent = targetButton.parentElement;
      if (!parent || parent.querySelector(`[${DEEPSEEK_THREAD_EXPORT_ATTR}]`)) {
        continue;
      }
      const button = buildExportButton('thread', {
        overrideClassName: DEEPSEEK_THREAD_BUTTON_CLASSNAME,
        useDeepSeekMarkup: true,
        tagName: 'div'
      });
      button.setAttribute(DEEPSEEK_THREAD_EXPORT_ATTR, 'true');
      button.setAttribute('aria-label', 'Export');
      attachDeepSeekTurnTooltip(button);
      button.style.setProperty('--dsl-button-height', '34px');
      button.style.marginRight = '0px';
      targetButton.insertAdjacentElement('beforebegin', button);
      break;
    }
  }

  // ─────────────────────────────────────────────
  // Shared export buttons and menu
  // ─────────────────────────────────────────────

  function attachHeaderButton(root) {
    const scope = root || document;
    const headerActions = scope.matches && scope.matches(HEADER_ACTIONS_SELECTOR)
      ? scope
      : scope.querySelector(HEADER_ACTIONS_SELECTOR);
    if (!headerActions) {
      return;
    }
    const existingButton = headerActions.querySelector(`[${HEADER_EXPORT_ATTR}]`);
    if (existingButton) {
      if (platform === 'chatgpt') {
        setExportIconStrokeWidth(existingButton, '1.6');
      }
      return;
    }
    const shareButton = headerActions.querySelector('[data-testid="share-chat-button"]');
    const button = buildExportButton('thread');
    button.setAttribute(HEADER_EXPORT_ATTR, 'true');

    if (platform === 'chatgpt') {
      button.className =
        'text-token-text-primary no-draggable hover:bg-token-surface-hover keyboard-focused:bg-token-surface-hover ' +
        'touch:h-10 touch:w-10 flex h-9 w-9 items-center justify-center rounded-lg ' +
        'focus:outline-none disabled:opacity-50';
      setExportIconStrokeWidth(button, '1.6');
    }


    if (shareButton) {
      shareButton.insertAdjacentElement('beforebegin', button);
    } else {
      headerActions.insertAdjacentElement('afterbegin', button);
    }
  }

  function setExportIconStrokeWidth(button, width) {
    if (!button || !button.querySelectorAll) {
      return;
    }
    button.querySelectorAll('svg path').forEach((path) => {
      path.setAttribute('stroke-width', width);
    });
  }

  function buildExportButton(scope, options) {
    const tagName = (options && options.tagName) || 'button';
    const button = document.createElement(tagName);
    configureExportButtonElement(button, tagName);
    button.setAttribute(EXPORT_SCOPE_ATTR, scope);
    configureExportButtonClass(button, scope, options);
    renderExportButtonContent(button, scope, options);
    bindExportButtonEvents(button, tagName);
    return button;
  }

  function configureExportButtonElement(button, tagName) {
    if (tagName === 'button') {
      button.type = 'button';
      button.setAttribute('aria-label', 'Exporter ce chat');
    } else {
      button.setAttribute('role', 'button');
      button.setAttribute('tabindex', '0');
      button.setAttribute('aria-label', 'Exporter ce chat');
    }
    if (platform === 'chatgpt' && tagName === 'button') {
      button.removeAttribute('title');
    }
  }

  function configureExportButtonClass(button, scope, options) {
    const extraClasses = options && options.extraClasses ? ` ${options.extraClasses}` : '';
    const overrideClassName = options && options.overrideClassName ? options.overrideClassName : '';
    button.className = overrideClassName || `${EXPORT_BUTTON_CLASS}${extraClasses}`;
    if (platform === 'chatgpt' && scope === 'turn' && !overrideClassName) {
      button.className = `${EXPORT_BUTTON_CLASS} text-token-text-secondary hover:bg-token-surface-hover rounded-lg`;
    }
  }

  function renderExportButtonContent(button, scope, options) {
    const usesChatGptTurnMarkup = platform === 'chatgpt' && scope === 'turn' &&
      !(options && options.overrideClassName);
    if (usesChatGptTurnMarkup) {
      button.innerHTML = `
      <span class="flex items-center justify-center touch:w-10 h-8 w-8">
        ${buildExportIcon()}
      </span>
    `;
      return;
    }
    if (options && options.useDeepSeekMarkup) {
      renderDeepSeekStyleExportButton(button);
      return;
    }
    if (platform === 'claude' && scope === 'thread') {
      renderClaudeThreadExportButton(button);
      return;
    }
    renderDefaultExportButtonIcon(button, scope);
  }

  function renderClaudeThreadExportButton(button) {
    button.innerHTML = `
<span aria-hidden="true" class="absolute -z-[1] rounded-[inherit] transition-colors duration-fast group-focus-visible/btn:shadow-[inset_0_0_0_1px_var(--cds-page-bg)] bg-transparent group-hover/btn:bg-fill-ghost-hover group-aria-expanded/btn:bg-fill-ghost-hover inset-0 group-aria-pressed/btn:bg-accent group-hover/btn:group-aria-pressed/btn:bg-accent cds-btn-squish "></span>
<span class="inline-flex items-center gap-1 ">
  <span data-cds="Icon" aria-hidden="true" style="line-height: 1; width: 1em; height: 1em; display: flex; align-items: center; justify-content: center; flex-shrink: 0; user-select: none; font-size: 20px;">
    ${buildExportIcon('20').replace('stroke-width="2"', 'stroke-width="1.5"')}
  </span>
</span>`;
  }

  function renderDeepSeekStyleExportButton(button) {
      button.innerHTML = `
<div class="ds-button__background"></div>
<div class="ds-button__icon ds-button__icon--last-child"><div class="ds-icon" style="font-size: inherit;">${platform === 'gemini' ? '' : buildExportIcon('16')}</div></div>`;
    if (platform === 'gemini') {
      const iconDiv = button.querySelector('.ds-icon');
      if (iconDiv) {
        iconDiv.appendChild(buildExportIconElement());
      }
    }
  }

  function renderDefaultExportButtonIcon(button, scope) {
    if (platform === 'gemini') {
      button.appendChild(buildExportIconElement());
      return;
    }
    if (platform === 'grok' && scope === 'turn') {
      button.innerHTML = `<span style="opacity: 1; transform: none;">${buildExportIcon()}</span>`;
      return;
    }
    button.innerHTML = buildExportIcon();
  }

  function bindExportButtonEvents(button, tagName) {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      toggleMenu(button);
    });
    if (tagName !== 'button') {
      button.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          button.click();
        }
      });
    }
  }

  function syncButtonSize(button, reference) {
    if (!reference) {
      return;
    }
    const rect = reference.getBoundingClientRect();
    if (rect.width) {
      button.style.width = `${rect.width}px`;
    }
    if (rect.height) {
      button.style.height = `${rect.height}px`;
    }
  }

  function toggleMenu(button) {
    if (activeMenu && activeMenuButton === button) {
      closeMenu();
      return;
    }
    closeMenu();
    openMenu(button);
  }

  function openMenu(button) {
    const menu = document.createElement('div');
    menu.className = MENU_CLASS;
    menu.setAttribute('role', 'menu');
    menu.setAttribute('data-omni-platform', platform);

    if (platform === 'gemini') {
      appendMenuItemsDOM(menu);
    } else {
      menu.innerHTML = buildMenuItems();
    }

    document.body.appendChild(menu);
    positionMenu(menu, button);
    requestAnimationFrame(() => {
      menu.classList.add(MENU_OPEN_CLASS);
    });

    menu.addEventListener('click', (event) => {
      const item = event.target.closest(`.${MENU_ITEM_CLASS}`);
      if (!item) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      const format = item.getAttribute('data-format');
      closeMenu();
      handleExportFormat(format, button);
    });

    const onPointerDown = (event) => {
      const target = event.target;
      if (menu.contains(target) || (button.contains && button.contains(target))) {
        return;
      }
      closeMenu();
    };
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };
    const onReposition = () => {
      if (activeMenu && activeMenuButton) {
        positionMenu(activeMenu, activeMenuButton);
      }
    };

    document.addEventListener('mousedown', onPointerDown, true);
    document.addEventListener('keydown', onKeyDown, true);
    window.addEventListener('resize', onReposition, true);
    window.addEventListener('scroll', onReposition, true);

    menuCleanup = () => {
      document.removeEventListener('mousedown', onPointerDown, true);
      document.removeEventListener('keydown', onKeyDown, true);
      window.removeEventListener('resize', onReposition, true);
      window.removeEventListener('scroll', onReposition, true);
    };

    if (!isGeminiNativeExportButton(button)) {
      button.setAttribute('aria-expanded', 'true');
    }
    activeMenu = menu;
    activeMenuButton = button;
  }

  function closeMenu() {
    if (menuCleanup) {
      menuCleanup();
      menuCleanup = null;
    }
    if (activeMenu) {
      activeMenu.remove();
      activeMenu = null;
    }
    if (activeMenuButton) {
      if (isGeminiNativeTurnExportButton(activeMenuButton)) {
        activeMenuButton.removeAttribute('aria-expanded');
        activeMenuButton.removeAttribute('aria-haspopup');
      } else if (isGeminiNativeExportButton(activeMenuButton)) {
        activeMenuButton.setAttribute('aria-expanded', 'false');
      } else {
        activeMenuButton.setAttribute('aria-expanded', 'false');
      }
      activeMenuButton = null;
    }
  }

  function isGeminiNativeTurnExportButton(button) {
    return Boolean(button && button.hasAttribute && button.hasAttribute(GEMINI_TURN_NATIVE_ATTR));
  }

  function isGeminiNativeExportButton(button) {
    return Boolean(
      button &&
      button.hasAttribute &&
      (button.hasAttribute(GEMINI_TURN_NATIVE_ATTR) || button.hasAttribute(GEMINI_THREAD_NATIVE_ATTR))
    );
  }

  function appendMenuItemsDOM(menu) {
    const formats = [
      { value: 'txt', label: 'TXT' },
      { value: 'pdf', label: 'PDF' },
      { value: 'json', label: 'JSON' },
      { value: 'md', label: 'Markdown (MD)' }
    ];

    formats.forEach(format => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = MENU_ITEM_CLASS;
      button.setAttribute('data-format', format.value);
      button.setAttribute('role', 'menuitem');
      button.textContent = format.label;
      menu.appendChild(button);
    });
  }

  function buildMenuItems() {
    return [
      '<button type="button" class="' + MENU_ITEM_CLASS + '" data-format="txt" role="menuitem">TXT</button>',
      '<button type="button" class="' + MENU_ITEM_CLASS + '" data-format="pdf" role="menuitem">PDF</button>',
      '<button type="button" class="' + MENU_ITEM_CLASS + '" data-format="json" role="menuitem">JSON</button>',
      '<button type="button" class="' + MENU_ITEM_CLASS + '" data-format="md" role="menuitem">Markdown (MD)</button>'
    ].join('');
  }

  function positionMenu(menu, button) {
    const rect = button.getBoundingClientRect();
    const padding = 8;
    const menuWidth = menu.offsetWidth || 160;
    const menuHeight = menu.offsetHeight || 180;
    let left = rect.left + window.scrollX;
    let top = rect.bottom + window.scrollY + padding;
    const minLeft = window.scrollX + padding;
    const maxLeft = window.scrollX + window.innerWidth - menuWidth - padding;
    if (left > maxLeft) {
      left = maxLeft;
    }
    if (left < minLeft) {
      left = minLeft;
    }
    const maxTop = window.scrollY + window.innerHeight - menuHeight - padding;
    if (top > maxTop) {
      top = rect.top + window.scrollY - menuHeight - padding;
    }
    const minTop = window.scrollY + padding;
    menu.style.left = `${Math.max(left, minLeft)}px`;
    menu.style.top = `${Math.max(top, minTop)}px`;
  }

  // ─────────────────────────────────────────────
  // Export workflow
  // ─────────────────────────────────────────────

  async function handleExportFormat(format, button) {
    const isPdfExport = format === 'pdf';
    if (isPdfExport) {
      await showInitialPdfExportLoader();
    }
    try {
      const context = await buildExportContext(button);
      if (!context) {
        return;
      }
      await exportMessagesInFormat(format, context, button);
    } catch (err) {
      console.error('OmniChat export error:', err);
      flashButton(button, 'Export failed', 'error');
    } finally {
      if (isPdfExport) {
        hidePdfExportLoader();
      }
    }
  }

  async function showInitialPdfExportLoader() {
    showPdfExportLoader({
      stage: 'Scanning chat content...',
      detail: 'Collecting messages before PDF generation.',
      progress: 0.06,
      progressText: 'Step 1 of 5',
      indeterminate: false
    });
    await waitForNextPaint();
  }

  async function buildExportContext(button) {
    const scope = button.getAttribute(EXPORT_SCOPE_ATTR) || 'turn';
    const anchorTurn = findAnchorTurn(button);
    if (scope !== 'thread' && !anchorTurn) {
      flashButton(button, 'Err: No message', 'error');
      return null;
    }

    const collected = await collectExportMessages(scope, anchorTurn);
    if (!collected.messages.length) {
      flashButton(button, 'Err: 0 messages found', 'error');
      console.warn('OmniChat: No messages found with selectors', collected.turns);
      return null;
    }

    return {
      scope,
      anchorTurn,
      turns: collected.turns,
      messages: collected.messages
    };
  }

  async function collectExportMessages(scope, anchorTurn) {
    let turns = [];
    let messages = [];
    if (platform === 'deepseek' && scope === 'thread') {
      messages = await collectDeepSeekThreadMessagesFromVirtualScroll();
      turns = getAllTurns();
      if (!messages.length) {
        messages = collectMessagesFromTurns(turns);
      }
    } else {
      turns = scope === 'thread' ? getAllTurns() : getRelatedTurns(anchorTurn);
      messages = collectMessagesFromTurns(turns);
    }

    if (platform === 'chatgpt' && scope === 'thread' && !messagesHaveExportableImages(messages)) {
      const apiMessages = await getChatGptConversationMessages();
      if (apiMessages && apiMessages.length) {
        messages = apiMessages;
      }
    }
    return { turns, messages };
  }

  async function exportMessagesInFormat(format, context, button) {
    if (format === 'pdf') {
      const exported = await exportPdf(context.messages);
      flashButton(button, exported ? 'Export ok' : 'Export unavailable', exported ? 'success' : 'error');
      return;
    }
    const filename = buildExportFilename(format, context.scope === 'thread' ? null : context.anchorTurn);
    const payload = buildExportPayload(format, context.messages);
    downloadText(payload.content, filename, payload.mimeType);
    flashButton(button, 'Export ok', 'success');
  }

  function buildExportPayload(format, messages) {
    if (format === 'json') {
      return { content: buildExportJson(messages), mimeType: 'application/json' };
    }
    if (format === 'txt') {
      return { content: buildExportText(messages), mimeType: 'text/plain' };
    }
    return { content: buildExportMarkdown(messages), mimeType: 'text/markdown' };
  }

  // ─────────────────────────────────────────────
  // Message collection and platform anchors
  // ─────────────────────────────────────────────

  function findAnchorTurn(button) {
    if (platform === 'chatgpt') {
      return button.closest(TURN_SELECTOR);
    }
    if (platform === 'grok') {
      return findGrokAnchor(button);
    }
    if (platform === 'gemini') {
      return findGeminiAnchor(button);
    }
    if (platform === 'claude') {
      return findClaudeAnchor(button);
    }
    if (platform === 'deepseek') {
      return findDeepSeekAnchor(button);
    }
    return null;
  }

  function getAllTurns() {
    if (platform === 'chatgpt') {
      return getConversationTurns();
    }
    if (platform === 'grok') {
      return getGrokMessageRoots();
    }
    if (platform === 'gemini') {
      return getGeminiMessageRoots();
    }
    if (platform === 'claude') {
      return getClaudeMessageRoots();
    }
    if (platform === 'deepseek') {
      return getDeepSeekMessageRoots();
    }
    return [];
  }

  function getConversationTurns() {
    return Array.from(document.querySelectorAll(TURN_SELECTOR));
  }

  function getTurnRole(turn) {
    const declaredRole = turn.getAttribute('data-turn');
    if (declaredRole) {
      return declaredRole;
    }
    const roleNode = turn.querySelector('[data-message-author-role]');
    if (roleNode) {
      return roleNode.getAttribute('data-message-author-role');
    }
    return inferRoleFromRoot(turn);
  }

  function findAdjacentTurn(turns, startIndex, direction, role) {
    const step = direction === 'prev' ? -1 : 1;
    for (let index = startIndex + step; index >= 0 && index < turns.length; index += step) {
      if (getTurnRole(turns[index]) === role) {
        return turns[index];
      }
    }
    return null;
  }

  function getRelatedTurns(anchorTurn) {
    const geminiTurns = getGeminiRelatedTurns(anchorTurn);
    if (geminiTurns) {
      return geminiTurns;
    }

    const turns = getAllTurns();
    const resolved = resolveIndexedAnchorTurn(anchorTurn, turns);
    if (resolved.index === -1) {
      return [resolved.anchor];
    }

    const role = getTurnRole(resolved.anchor);
    if (role === 'assistant') {
      return getAssistantRelatedTurns(turns, resolved.index, resolved.anchor);
    }
    if (role === 'user') {
      return getUserRelatedTurns(turns, resolved.index, resolved.anchor);
    }
    return getFallbackRelatedTurns(turns, resolved.index, resolved.anchor);
  }

  function getGeminiRelatedTurns(anchorTurn) {
    if (platform !== 'gemini') {
      return null;
    }
    const geminiConversation = resolveGeminiConversation(anchorTurn);
    if (!geminiConversation) {
      return null;
    }
    const geminiTurns = getGeminiRootsFromConversation(geminiConversation);
    return geminiTurns.length ? geminiTurns : [geminiConversation];
  }

  function resolveIndexedAnchorTurn(anchorTurn, turns) {
    let anchor = anchorTurn;
    let index = turns.indexOf(anchorTurn);
    if (index === -1 && platform === 'deepseek') {
      const deepSeekTurn = resolveDeepSeekTurn(anchorTurn);
      if (deepSeekTurn) {
        anchor = deepSeekTurn;
        index = turns.indexOf(deepSeekTurn);
      }
    }
    return { anchor, index };
  }

  function getAssistantRelatedTurns(turns, index, anchor) {
    const related = [];
    const previousUser = findAdjacentTurn(turns, index, 'prev', 'user');
    if (previousUser) {
      related.push(previousUser);
    }
    related.push(anchor);
    return related;
  }

  function getUserRelatedTurns(turns, index, anchor) {
    const related = [anchor];
    const nextAssistant = findAdjacentTurn(turns, index, 'next', 'assistant');
    if (nextAssistant) {
      related.push(nextAssistant);
    }
    return related;
  }

  function getFallbackRelatedTurns(turns, index, anchor) {
    if (platform === 'gemini' && anchor.matches && anchor.matches(GEMINI_CONVERSATION_SELECTOR)) {
      const geminiTurns = getGeminiRootsFromConversation(anchor);
      if (geminiTurns.length) {
        return geminiTurns;
      }
    }
    if (platform === 'grok' || platform === 'deepseek') {
      const previousTurn = turns[index - 1];
      if (previousTurn) {
        return [previousTurn, anchor];
      }
    }
    return [anchor];
  }

  function resolveGeminiConversation(anchorTurn) {
    if (!anchorTurn) {
      return null;
    }
    if (anchorTurn.matches && anchorTurn.matches(GEMINI_CONVERSATION_SELECTOR)) {
      return anchorTurn;
    }
    const directConversation = anchorTurn.closest && anchorTurn.closest(GEMINI_CONVERSATION_SELECTOR);
    if (directConversation) {
      return directConversation;
    }

    const byId = anchorTurn.id ? document.getElementById(anchorTurn.id) : null;
    if (byId && byId.matches && byId.matches(GEMINI_CONVERSATION_SELECTOR)) {
      return byId;
    }

    const siblingConversation = anchorTurn.previousElementSibling &&
      anchorTurn.previousElementSibling.matches &&
      anchorTurn.previousElementSibling.matches(GEMINI_CONVERSATION_SELECTOR)
      ? anchorTurn.previousElementSibling
      : null;
    if (siblingConversation) {
      return siblingConversation;
    }

    return null;
  }

  function resolveDeepSeekTurn(turn) {
    if (!turn) {
      return null;
    }
    if (turn.classList && turn.classList.contains('ds-message')) {
      return turn;
    }
    return turn.querySelector('.ds-message') || turn.closest('.ds-message');
  }

  function collectMessagesFromTurns(turns) {
    if (platform === 'chatgpt') {
      return collectChatGptMessages(turns);
    }
    const messages = [];
    turns.forEach((turn) => {
      if (!turn || !turn.querySelectorAll) {
        return;
      }
      const isClaudeMessage = turn.matches &&
        (turn.matches('[data-testid="assistant-message"]') ||
          turn.matches('[data-testid="user-message"]') ||
          turn.matches('.font-claude-response'));
      const nodes = isClaudeMessage
        ? [turn]
        : turn.querySelectorAll('[data-message-author-role], [data-testid="assistant-message"], [data-testid="user-message"]');
      if (nodes.length) {
        nodes.forEach((node) => {
          const role = node.getAttribute('data-message-author-role') ||
            (node.getAttribute('data-testid') === 'user-message' ? 'user' :
              node.getAttribute('data-testid') === 'assistant-message' ? 'assistant' :
                (node.matches && node.matches('.font-claude-response') ? 'assistant' : 'message'));
          const content = extractMessageContent(node);
          if (hasCollectedContent(content)) {
            messages.push(buildCollectedMessage(role, content));
          }
        });
        return;
      }
      const role = inferRoleFromRoot(turn) || 'message';
      const content = extractMessageContentFromRoot(turn);
      if (hasCollectedContent(content)) {
        messages.push(buildCollectedMessage(role, content));
      }
    });
    return messages;
  }

  function collectChatGptMessages(turns) {
    const messages = [];

    const collectFromScope = (scope) => {
      if (!scope || !scope.querySelectorAll) {
        return;
      }
      const roleNodes = filterTopLevelNodes(
        Array.from(scope.querySelectorAll('[data-message-author-role]'))
      );
      if (roleNodes.length) {
        roleNodes.forEach((node) => {
          const role = node.getAttribute('data-message-author-role') ||
            inferRoleFromRoot(node) || 'message';
          const content = extractMessageContent(node);
          if (hasCollectedContent(content)) {
            messages.push(buildCollectedMessage(role, content));
          }
        });
        return;
      }

      const contentNodes = filterTopLevelNodes(
        Array.from(scope.querySelectorAll('.markdown, [data-message-content], .prose, .whitespace-pre-wrap'))
      );
      let collectedFromContentNodes = false;
      contentNodes.forEach((node) => {
        const roleNode = node.closest('[data-message-author-role]');
        const role = roleNode ? roleNode.getAttribute('data-message-author-role') :
          inferRoleFromRoot(scope) || 'message';

        const content = extractMessageContent(node);
        if (hasCollectedContent(content)) {
          messages.push(buildCollectedMessage(role, content));
          collectedFromContentNodes = true;
        }
      });

      if (!collectedFromContentNodes && nodeHasExportableImages(scope)) {
        const role = inferRoleFromRoot(scope) || 'assistant';
        const content = extractMessageContentFromRoot(scope);
        if (hasCollectedContent(content)) {
          messages.push(buildCollectedMessage(role, content));
        }
      }
    };

    if (Array.isArray(turns)) {
      turns.forEach(collectFromScope);
    }

    if (messages.length && !isAssistantSparse(messages)) {
      return messages;
    }

    const fallback = collectChatGptMessagesFromDocument();
    if (fallback.length) {
      return fallback;
    }

    return messages;
  }

  async function getChatGptConversationMessages() {
    const conversationId = getChatGptConversationId();
    if (!conversationId) {
      return [];
    }
    const url = `${location.origin}/backend-api/conversation/${conversationId}`;
    let response;
    try {
      response = await fetch(url, { credentials: 'include' });
    } catch (err) {
      console.warn('OmniChat: fetch conversation failed', err);
      return [];
    }
    if (!response || !response.ok) {
      console.warn('OmniChat: fetch conversation non-ok', response && response.status);
      return [];
    }
    let data;
    try {
      data = await response.json();
    } catch (err) {
      console.warn('OmniChat: conversation JSON parse failed', err);
      return [];
    }
    if (!data || !data.mapping) {
      return [];
    }
    const mapping = data.mapping;
    const currentNode = data.current_node || data.currentNode || data.current_node_id;
    if (!currentNode || !mapping[currentNode]) {
      return [];
    }
    const orderedNodes = [];
    const visited = new Set();
    let nodeId = currentNode;
    while (nodeId && mapping[nodeId] && !visited.has(nodeId)) {
      visited.add(nodeId);
      orderedNodes.push(mapping[nodeId]);
      nodeId = mapping[nodeId].parent;
    }
    orderedNodes.reverse();

    const messages = [];
    orderedNodes.forEach((node) => {
      if (!node || !node.message) {
        return;
      }
      const author = node.message.author || {};
      const role = author.role || author.name || 'message';
      if (role === 'system' || role === 'tool') {
        return;
      }
      const content = extractChatGptMessageContent(node.message);
      if (hasCollectedContent(content)) {
        messages.push({ role, text: content.text, html: content.html });
      }
    });
    return messages;
  }

  function getChatGptConversationId() {
    const parts = location.pathname.split('/').filter(Boolean);
    if (!parts.length) {
      return null;
    }
    const last = parts[parts.length - 1];
    const prev = parts.length > 1 ? parts[parts.length - 2] : '';
    if (prev === 'c' && last) {
      return last;
    }
    if (last && last.length >= 8 && last !== 'c' && last !== 'chat') {
      return last;
    }
    return null;
  }

  function extractChatGptMessageContent(message) {
    if (!message) {
      return { text: '', html: '' };
    }
    const content = message.content || message.content_parts || {};
    let raw = '';

    if (Array.isArray(content.parts)) {
      raw = content.parts.filter(Boolean).join('\n');
    } else if (typeof content.text === 'string') {
      raw = content.text;
    } else if (typeof content === 'string') {
      raw = content;
    } else if (Array.isArray(message.parts)) {
      raw = message.parts.filter(Boolean).join('\n');
    }

    return { text: normalizeText(raw), html: raw };
  }

  function collectChatGptMessagesFromDocument() {
    const container = document.querySelector('main') || document.body;
    if (!container || !container.querySelectorAll) {
      return [];
    }
    const messages = [];
    const roleNodes = filterTopLevelNodes(
      Array.from(container.querySelectorAll('[data-message-author-role]'))
    );
    if (!roleNodes.length) {
      return [];
    }
    roleNodes.forEach((node) => {
      const role = node.getAttribute('data-message-author-role') ||
        inferRoleFromRoot(node) || 'message';
      const content = extractMessageContent(node);
      if (hasCollectedContent(content)) {
        messages.push(buildCollectedMessage(role, content));
      }
    });
    return messages;
  }

  function buildCollectedMessage(role, content) {
    const message = {
      role: role,
      text: ensureString(content && content.text),
      html: ensureString(content && content.html)
    };
    if (content && content.sourceNode && content.sourceNode.nodeType === Node.ELEMENT_NODE) {
      message.sourceNode = content.sourceNode;
    }
    return message;
  }

  function hasCollectedContent(content) {
    if (!content) {
      return false;
    }
    if (normalizeText(ensureString(content.text))) {
      return true;
    }
    if (htmlHasExportableImages(content.html)) {
      return true;
    }
    return nodeHasExportableImages(content.sourceNode);
  }

  function messagesHaveExportableImages(messages) {
    return (messages || []).some((message) => {
      return htmlHasExportableImages(message && message.html) ||
        nodeHasExportableImages(message && message.sourceNode);
    });
  }

  function htmlHasExportableImages(html) {
    return /<img\b/i.test(ensureString(html));
  }

  function isAssistantSparse(messages) {
    let users = 0;
    let assistants = 0;
    messages.forEach((message) => {
      const role = String(message.role || '').toLowerCase();
      if (role === 'user') {
        users += 1;
      } else if (role === 'assistant') {
        assistants += 1;
      }
    });
    if (users === 0) {
      return false;
    }
    return assistants === 0 || assistants < Math.ceil(users * 0.5);
  }

  function findClaudeAnchor(button) {
    const actions = getClaudeActionContainer(button);
    if (actions) {
      const fromActions = findClaudeMessageForActions(actions);
      if (fromActions) {
        return fromActions;
      }
    }
    const direct = button.closest('[data-testid="assistant-message"], [data-testid="user-message"], .font-claude-response');
    if (direct) {
      return direct;
    }
    const article = button.closest('article, section');
    return article || null;
  }

  function getClaudeActionContainer(element) {
    if (!element || typeof element.closest !== 'function') {
      return null;
    }
    const actionBar = element.closest('[data-message-action-bar]');
    if (actionBar) {
      return actionBar;
    }
    const copyButton = (element.matches && element.matches(CLAUDE_COPY_SELECTOR))
      ? element
      : element.closest(CLAUDE_COPY_SELECTOR);
    if (!copyButton) {
      return null;
    }
    return copyButton.closest('[data-message-action-bar]') ||
      copyButton.closest('[role="toolbar"], [role="group"]') ||
      copyButton.parentElement ||
      null;
  }

  function collectClaudeActionContainers(scope) {
    const containers = [];
    const seen = new Set();
    const pushContainer = (candidate) => {
      if (!candidate || seen.has(candidate)) {
        return;
      }
      seen.add(candidate);
      containers.push(candidate);
    };

    if (scope && scope.nodeType === Node.ELEMENT_NODE) {
      pushContainer(getClaudeActionContainer(scope));
      if (scope.matches && scope.matches(CLAUDE_ACTIONS_SELECTOR)) {
        pushContainer(scope);
      }
    }

    if (scope && typeof scope.querySelectorAll === 'function') {
      scope.querySelectorAll(CLAUDE_ACTIONS_SELECTOR).forEach(pushContainer);
      scope.querySelectorAll(CLAUDE_COPY_SELECTOR).forEach((button) => {
        pushContainer(getClaudeActionContainer(button));
      });
    }

    return containers;
  }

  function getClaudeMessageRoots() {
    const container = document.querySelector('main') || document.body;
    const selectors = [
      '[data-testid="assistant-message"]',
      '[data-testid="user-message"]',
      '.font-claude-response'
    ];
    let roots = Array.from(container.querySelectorAll(selectors.join(',')));
    if (!roots.length) {
      roots = Array.from(container.querySelectorAll('.font-claude-response, article, section'));
    }
    roots = roots.filter((node, index, self) => {
      const isNested = self.some((other, otherIndex) => otherIndex !== index && other.contains(node));
      return !isNested;
    });
    roots.sort((a, b) => {
      if (a === b) {
        return 0;
      }
      const position = a.compareDocumentPosition(b);
      if (position & Node.DOCUMENT_POSITION_FOLLOWING) {
        return -1;
      }
      if (position & Node.DOCUMENT_POSITION_PRECEDING) {
        return 1;
      }
      return 0;
    });
    return roots;
  }

  function findClaudeMessageForActions(actions) {
    const article = actions.closest('article');
    if (article) {
      const assistantInArticle = article.querySelector('.font-claude-response, [data-testid="assistant-message"]');
      if (assistantInArticle) {
        return assistantInArticle;
      }
      const userInArticle = article.querySelector('[data-testid="user-message"]');
      if (userInArticle) {
        return userInArticle;
      }
    }
    let sibling = actions.previousElementSibling;
    while (sibling) {
      if (sibling.matches('[data-testid="assistant-message"], [data-testid="user-message"], .font-claude-response, article, section')) {
        return sibling;
      }
      const nested = sibling.querySelector('[data-testid="assistant-message"], [data-testid="user-message"], .font-claude-response, article, section');
      if (nested) {
        return nested;
      }
      sibling = sibling.previousElementSibling;
    }
    const group = actions.closest('div.group');
    if (group) {
      const user = group.querySelector('[data-testid="user-message"]');
      if (user) {
        return user;
      }
      const assistant = group.querySelector('.font-claude-response');
      if (assistant) {
        return assistant;
      }
    }
    return null;
  }

  function findGrokAnchor(button) {
    const roots = getGrokMessageRoots();
    const direct = roots.find((root) => root.contains(button));
    if (direct) {
      return direct;
    }
    return button.closest('[data-message-id], [data-message-role], [data-role], article, section, .group');
  }

  function findGeminiAnchor(button) {
    const conversation = button.closest(GEMINI_CONVERSATION_SELECTOR);
    if (conversation) {
      return conversation;
    }
    const direct = button.closest('article, section, [data-test-render-count]');
    if (direct) {
      return direct;
    }
    const actions = button.closest(GEMINI_ACTIONS_SELECTOR);
    if (!actions) {
      return null;
    }
    const actionsConversation = actions.closest(GEMINI_CONVERSATION_SELECTOR);
    if (actionsConversation) {
      return actionsConversation;
    }
    let sibling = actions.previousElementSibling;
    while (sibling) {
      if (sibling.matches(GEMINI_CONVERSATION_SELECTOR) ||
        sibling.matches('article, section') ||
        sibling.querySelector('article, section, p')) {
        return sibling;
      }
      sibling = sibling.previousElementSibling;
    }
    return actions.parentElement || null;
  }

  function getGeminiMessageRoots() {
    const container = document.querySelector('main') || document.body;
    const conversationRoots = Array.from(container.querySelectorAll(GEMINI_CONVERSATION_SELECTOR));
    if (conversationRoots.length) {
      const roots = [];
      conversationRoots.forEach((conversation) => {
        roots.push(...getGeminiRootsFromConversation(conversation));
      });

      if (roots.length) {
        return roots;
      }
    }

    const selectors = [
      '[data-test-render-count]',
      'article',
      'section'
    ];
    const roots = Array.from(container.querySelectorAll(selectors.join(',')));
    return roots.filter((node, index, self) => {
      const isNested = self.some((other, otherIndex) => otherIndex !== index && other.contains(node));
      return !isNested;
    });
  }

  function getGeminiRootsFromConversation(conversation) {
    if (!conversation || !conversation.querySelectorAll) {
      return [];
    }
    const roots = [];
    const userRoot =
      conversation.querySelector('user-query-content .user-query-container') ||
      conversation.querySelector('user-query-content') ||
      conversation.querySelector('user-query') ||
      conversation.querySelector('user-query-content .query-content .query-text, user-query-content .query-content, user-query .query-text');
    if (userRoot && (normalizeText(userRoot.textContent || '') || nodeHasExportableImages(userRoot))) {
      roots.push(userRoot);
    }

    const assistantRoots = Array.from(conversation.querySelectorAll(
      'model-response message-content .markdown, model-response message-content'
    )).filter((node, index, self) => !self.some((other, otherIndex) => otherIndex !== index && other.contains(node)));

    assistantRoots.forEach((assistantRoot) => {
      if (normalizeText(assistantRoot.textContent || '') || nodeHasExportableImages(assistantRoot)) {
        roots.push(assistantRoot);
      }
    });

    return roots;
  }

  function getGrokMessageRoots() {
    const container = document.querySelector('main') || document.body;

    const primarySelectors = [
      'div[id^="response-"]',
      '.message-bubble',
      '.message-row'
    ];
    let roots = Array.from(container.querySelectorAll(primarySelectors.join(',')));

    if (roots.length === 0) {
      const contentSelectors = [
        '.prose',
        '.markdown',
        '.whitespace-pre-wrap'
      ];
      roots = Array.from(container.querySelectorAll(contentSelectors.join(',')));
    }

    const uniqueRoots = roots.filter((node, index, self) => {
      const isNested = self.some((other) => other !== node && other.contains(node));
      return !isNested;
    });

    return uniqueRoots;
  }

  function findDeepSeekAnchor(button) {
    const roots = getDeepSeekMessageRoots();
    const direct = roots.find((root) => root.contains(button));
    if (direct) {
      return direct;
    }
    const actionBar = button.closest(DEEPSEEK_ACTIONS_SELECTOR);
    if (actionBar && actionBar.parentElement) {
      const messageRoot = actionBar.parentElement.querySelector('.ds-message');
      if (messageRoot) {
        return messageRoot;
      }
      return actionBar.parentElement;
    }
    return button.closest('.ds-message, [data-message-id], [data-message-role], [data-role], article, section, .ds-chat-message');
  }

  function getDeepSeekMessageRoots() {
    const container = document.querySelector('main') || document.body;
    const messageSelectors = [
      'article',
      'section',
      '.ds-message',
      '[data-message-author-role]',
      '[data-message-id]',
      '[data-message-role]',
      '[data-role]',
      '[data-testid*="message"]',
      '.ds-chat-message'
    ];
    const userSelectors = [
      '[data-message-author-role="user"]',
      '[data-message-role="user"]',
      '[data-role="user"]',
      '[data-testid*="user"]'
    ];
    const contentSelectors = [
      '.markdown',
      '.prose',
      '.whitespace-pre-wrap',
      '.ds-markdown',
      '[data-message-content]',
      '[data-testid*="message-content"]'
    ];
    const roots = [];
    const collectRoots = (nodes) => {
      nodes.forEach((node) => {
        let root = node.closest('[data-message-id], [data-message-role], [data-role], article, section, .ds-chat-message');
        if (!root) {
          const fallback = node.closest('div');
          if (fallback && fallback !== container && fallback !== document.body && fallback !== document.documentElement) {
            root = fallback;
          }
        }
        if (root && !roots.includes(root)) {
          roots.push(root);
        }
      });
    };

    collectRoots(Array.from(container.querySelectorAll(messageSelectors.join(','))));
    collectRoots(Array.from(container.querySelectorAll(userSelectors.join(','))));
    collectRoots(Array.from(container.querySelectorAll(contentSelectors.join(','))));

    let uniqueRoots = roots.filter((node, index, self) => {
      const isContained = self.some((other, otherIndex) => otherIndex !== index && other.contains(node));
      return !isContained;
    });

    const addIfMissing = (node) => {
      if (node && !uniqueRoots.includes(node)) {
        uniqueRoots.push(node);
      }
    };

    const findSiblingMessage = (start, direction) => {
      let sibling = start;
      while (sibling) {
        sibling = direction < 0 ? sibling.previousElementSibling : sibling.nextElementSibling;
        if (!sibling) {
          return null;
        }
        const content = extractMessageContentFromRoot(sibling);
        if (hasCollectedContent(content)) {
          return sibling;
        }
      }
      return null;
    };

    uniqueRoots.forEach((root) => {
      const role = inferRoleFromRoot(root);
      if (role === 'assistant') {
        addIfMissing(findSiblingMessage(root, -1));
      } else if (role === 'user') {
        addIfMissing(findSiblingMessage(root, 1));
      }
    });

    uniqueRoots = uniqueRoots.filter((node, index, self) => {
      const isContained = self.some((other, otherIndex) => otherIndex !== index && other.contains(node));
      return !isContained;
    });

    uniqueRoots.sort((a, b) => {
      if (a === b) {
        return 0;
      }
      const position = a.compareDocumentPosition(b);
      if (position & Node.DOCUMENT_POSITION_FOLLOWING) {
        return -1;
      }
      if (position & Node.DOCUMENT_POSITION_PRECEDING) {
        return 1;
      }
      return 0;
    });

    return uniqueRoots;
  }

  async function collectDeepSeekThreadMessagesFromVirtualScroll() {
    const scroller = findDeepSeekConversationScroller();
    if (!scroller) {
      console.info('OmniChat DeepSeek thread export: no scroll container found, using visible DOM only');
      return collectMessagesFromTurns(getDeepSeekMessageRoots());
    }

    const originalTop = getScrollTop(scroller);
    const originalBehavior = scroller.style && scroller.style.scrollBehavior;
    if (scroller.style) {
      scroller.style.scrollBehavior = 'auto';
    }

    const collected = [];
    const seen = new Set();
    const captureVisibleMessages = () => {
      const roots = getDeepSeekMessageRoots();
      const messages = collectMessagesFromTurns(roots);
      let added = 0;
      messages.forEach((message) => {
        const key = buildDeepSeekCollectedMessageKey(message);
        if (!key || seen.has(key)) {
          return;
        }
        seen.add(key);
        collected.push(message);
        added += 1;
      });
      return added;
    };

    try {
      console.info('OmniChat DeepSeek thread export: scanning virtualized chat');
      await scrollDeepSeekScrollerToStableTop(scroller, captureVisibleMessages);

      let lastTop = -1;
      let stablePasses = 0;
      const viewportHeight = getScrollClientHeight(scroller);
      const step = Math.max(520, Math.floor(viewportHeight * DEEPSEEK_SCROLL_STEP_MULTIPLIER));
      const maxPasses = Math.min(72, Math.max(14, Math.ceil(getScrollMaxTop(scroller) / Math.max(1, step)) + 12));
      for (let pass = 0; pass < maxPasses; pass += 1) {
        const added = captureVisibleMessages();
        const currentTop = getScrollTop(scroller);
        const maxTop = getScrollMaxTop(scroller);
        if (currentTop >= maxTop - 4) {
          break;
        }
        if (Math.abs(currentTop - lastTop) < 2 && added === 0) {
          stablePasses += 1;
        } else {
          stablePasses = 0;
        }
        if (stablePasses >= 2) {
          break;
        }
        lastTop = currentTop;
        setScrollTop(scroller, Math.min(maxTop, currentTop + step));
        await waitForDeepSeekScrollSettle(scroller, { delay: DEEPSEEK_SCROLL_SETTLE_MS, queueScan: false });
      }
      captureVisibleMessages();
      console.info(`OmniChat DeepSeek thread export: collected ${collected.length} message(s)`);
      return collected;
    } finally {
      setScrollTop(scroller, originalTop);
      if (scroller.style) {
        scroller.style.scrollBehavior = originalBehavior || '';
      }
      await waitForDeepSeekScrollSettle(scroller, { delay: DEEPSEEK_SCROLL_RESTORE_SETTLE_MS, queueScan: true });
    }
  }

  function findDeepSeekConversationScroller() {
    const candidates = [];
    const addCandidate = (node) => {
      if (!node || candidates.includes(node)) {
        return;
      }
      candidates.push(node);
    };

    addCandidate(document.scrollingElement || document.documentElement);
    const scopedSelectors = [
      'main',
      '[class*="chat"]',
      '[class*="conversation"]',
      '[class*="scroll"]',
      '[data-virtual-list]',
      '[data-testid*="chat"]'
    ];
    scopedSelectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach(addCandidate);
    });

    let matches = candidates
      .filter(isDeepSeekConversationScroller)
      .sort((a, b) => {
        const aScore = scoreDeepSeekScroller(a);
        const bScore = scoreDeepSeekScroller(b);
        return bScore - aScore;
      });
    if (matches.length) {
      return matches[0];
    }

    document.querySelectorAll('div').forEach((node) => {
      if (node.scrollHeight > node.clientHeight + 80) {
        addCandidate(node);
      }
    });
    matches = candidates
      .filter(isDeepSeekConversationScroller)
      .sort((a, b) => {
        const aScore = scoreDeepSeekScroller(a);
        const bScore = scoreDeepSeekScroller(b);
        return bScore - aScore;
      });
    return matches[0] || null;
  }

  async function scrollDeepSeekScrollerToStableTop(scroller, captureVisibleMessages) {
    let lastMaxTop = -1;
    let stableTopPasses = 0;
    for (let pass = 0; pass < 7; pass += 1) {
      setScrollTop(scroller, 0);
      await waitForDeepSeekScrollSettle(scroller, { delay: DEEPSEEK_SCROLL_SETTLE_MS, queueScan: false });
      if (typeof captureVisibleMessages === 'function') {
        captureVisibleMessages();
      }
      const currentTop = getScrollTop(scroller);
      const maxTop = getScrollMaxTop(scroller);
      if (currentTop <= 2 && Math.abs(maxTop - lastMaxTop) < 2) {
        stableTopPasses += 1;
      } else {
        stableTopPasses = 0;
      }
      if (stableTopPasses >= 1) {
        break;
      }
      lastMaxTop = maxTop;
    }
  }

  function isDeepSeekConversationScroller(node) {
    if (!node || !node.querySelector) {
      return false;
    }
    if (node.closest && node.closest('.ds-markdown, .md-code-block, table')) {
      return false;
    }
    if (!node.querySelector('.ds-message, .ds-markdown, [data-virtual-list-item-key]')) {
      return false;
    }
    if (getScrollMaxTop(node) <= 80) {
      return false;
    }
    try {
      const style = window.getComputedStyle(node);
      const overflow = `${style.overflowY} ${style.overflow}`;
      if (!/(auto|scroll|overlay|visible)/i.test(overflow) && node !== document.scrollingElement) {
        return false;
      }
    } catch (err) {
    }
    return true;
  }

  function scoreDeepSeekScroller(node) {
    let score = getScrollMaxTop(node);
    if (node.matches && node.matches('main')) {
      score += 500;
    }
    if (node.querySelectorAll) {
      score += Math.min(1000, node.querySelectorAll('.ds-message, [data-virtual-list-item-key]').length * 120);
    }
    if (node === document.scrollingElement || node === document.documentElement || node === document.body) {
      score -= 150;
    }
    return score;
  }

  function buildDeepSeekCollectedMessageKey(message) {
    const role = ensureString(message && message.role);
    const text = normalizeText(ensureString(message && message.text)).slice(0, 600);
    const html = ensureString(message && message.html).slice(0, 600);
    return `${role}:${text || html}`;
  }

  function getScrollTop(scroller) {
    if (scroller === document.scrollingElement || scroller === document.documentElement || scroller === document.body) {
      return window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    }
    return scroller.scrollTop || 0;
  }

  function setScrollTop(scroller, top) {
    const value = Math.max(0, Number(top) || 0);
    if (scroller === document.scrollingElement || scroller === document.documentElement || scroller === document.body) {
      window.scrollTo(0, value);
      document.documentElement.scrollTop = value;
      document.body.scrollTop = value;
      return;
    }
    scroller.scrollTop = value;
  }

  function getScrollMaxTop(scroller) {
    if (scroller === document.scrollingElement || scroller === document.documentElement || scroller === document.body) {
      const scrolling = document.scrollingElement || document.documentElement;
      return Math.max(0, scrolling.scrollHeight - window.innerHeight);
    }
    return Math.max(0, scroller.scrollHeight - scroller.clientHeight);
  }

  function getScrollClientHeight(scroller) {
    if (scroller === document.scrollingElement || scroller === document.documentElement || scroller === document.body) {
      return window.innerHeight || document.documentElement.clientHeight || 600;
    }
    return scroller.clientHeight || 600;
  }

  async function waitForDeepSeekScrollSettle(scroller, options) {
    const delay = Math.max(0, Number(options && options.delay) || DEEPSEEK_SCROLL_SETTLE_MS);
    await waitForNextPaint();
    await waitMs(delay);
    if (!options || options.queueScan !== false) {
      queueScanForNode(scroller);
    }
    await waitForNextPaint();
  }

  function inferRoleFromRoot(root) {
    const directRole = root.getAttribute('data-message-author-role') ||
      root.getAttribute('data-message-role') ||
      root.getAttribute('data-role');
    if (directRole) {
      return directRole;
    }
    const platformRole = inferPlatformRoleFromRoot(root);
    if (platformRole) {
      return platformRole;
    }
    return inferGenericRoleFromRoot(root);
  }

  function inferPlatformRoleFromRoot(root) {
    if (platform === 'claude') {
      return inferClaudeRoleFromRoot(root);
    }
    if (platform === 'deepseek') {
      return inferDeepSeekRoleFromRoot(root);
    }
    if (platform === 'gemini') {
      return inferGeminiRoleFromRoot(root);
    }
    if (platform === 'grok') {
      return inferGrokRoleFromRoot(root);
    }
    return null;
  }

  function inferClaudeRoleFromRoot(root) {
    const testId = root.getAttribute('data-testid');
    if (testId === 'user-message') {
      return 'user';
    }
    if (testId === 'assistant-message') {
      return 'assistant';
    }
    if (root.matches && root.matches('.font-claude-response')) {
      return 'assistant';
    }
    if (root.querySelector && root.querySelector('[data-testid="user-message"]')) {
      return 'user';
    }
    if (root.querySelector && root.querySelector('.font-claude-response')) {
      return 'assistant';
    }
    return null;
  }

  function inferDeepSeekRoleFromRoot(root) {
    if (root.querySelector('.ds-markdown')) {
      return 'assistant';
    }
    if (root.querySelector('.fbb737a4, ._72b6158')) {
      return 'user';
    }
    return null;
  }

  function inferGeminiRoleFromRoot(root) {
    if (
      root.matches && (
        root.matches('user-query, user-query-content, .query-content, .query-text') ||
        root.closest('user-query')
      )
    ) {
      return 'user';
    }
    if (
      root.matches && (
        root.matches('model-response, message-content, .model-response-text, .markdown') ||
        root.closest('model-response')
      )
    ) {
      return 'assistant';
    }
    return null;
  }

  function inferGrokRoleFromRoot(root) {
    if (root.matches && root.matches('.items-end')) {
      return 'user';
    }
    if (root.matches && root.matches('.items-start')) {
      return 'assistant';
    }
    if (root.querySelector && root.querySelector('.message-bubble.bg-surface-l1')) {
      return 'user';
    }
    if (root.querySelector && root.querySelector('.response-content-markdown')) {
      return 'assistant';
    }
    return null;
  }

  function inferGenericRoleFromRoot(root) {
    const roleNode = root.querySelector('[data-message-author-role], [data-message-role], [data-role]');
    if (roleNode) {
      return roleNode.getAttribute('data-message-author-role') ||
        roleNode.getAttribute('data-message-role') ||
        roleNode.getAttribute('data-role');
    }
    const className = root.className || '';
    if (/\bassistant\b/i.test(className)) {
      return 'assistant';
    }
    if (/\buser\b/i.test(className)) {
      return 'user';
    }
    return null;
  }

  // ─────────────────────────────────────────────
  // DOM cleanup and content extraction
  // ─────────────────────────────────────────────

  function cleanHtml(node) {
    if (!node) return '';
    const clone = node.cloneNode(true);
    stripNonExportableNodes(clone);
    return clone.innerHTML;
  }

  function prepareNodeForExport(node) {
    if (!node || !node.cloneNode) {
      return node;
    }
    const clone = node.cloneNode(true);
    stripNonExportableNodes(clone);
    if (platform === 'grok') {
      normalizeGrokStrokeWidthInlineSpan(clone);
    }
    return clone;
  }

  function stripNonExportableNodes(root) {
    if (!root || !root.querySelectorAll) {
      return;
    }
    normalizeExportableImages(root);
    const unwanted = root.querySelectorAll(NON_EXPORTABLE_NODE_SELECTOR);
    unwanted.forEach((el) => {
      if (nodeHasExportableImages(el) && replaceNodeWithExportableImages(el)) {
        return;
      }
      el.remove();
    });
  }

  function normalizeExportableImages(root) {
    if (!root || !root.querySelectorAll) {
      return;
    }
    removeExportImageControls(root);
    replaceInteractiveImageContainers(root);
    wrapLooseExportableImages(root);
  }

  function removeExportImageControls(root) {
    const selector = [
      '[data-testid="image-gen-overlay-actions"]',
      '[data-testid="image-gen-overlay-left-actions"]',
      '[data-testid="image-gen-overlay-right-actions"]',
      '.generated-image-controls',
      '.overlay-container share-button',
      '.overlay-container copy-button',
      '.overlay-container download-generated-image-button',
      '[hide-from-message-actions]',
      '[overlay][hide-from-message-actions]'
    ].join(',');
    root.querySelectorAll(selector).forEach((node) => node.remove());
  }

  function replaceInteractiveImageContainers(root) {
    const containers = Array.from(root.querySelectorAll('button, [role="button"]'));
    containers.forEach((container) => {
      if (!container.parentNode || !nodeHasExportableImages(container)) {
        return;
      }
      replaceNodeWithExportableImages(container);
    });
  }

  function replaceNodeWithExportableImages(node) {
    if (!node || !node.parentNode) {
      return false;
    }
    const images = collectExportableImageElements(node);
    if (!images.length) {
      return false;
    }
    const fragment = document.createDocumentFragment();
    images.forEach((image) => {
      const figure = buildExportImageFigure(image);
      if (figure) {
        fragment.appendChild(figure);
      }
    });
    if (!fragment.childNodes.length) {
      return false;
    }
    node.parentNode.replaceChild(fragment, node);
    return true;
  }

  function wrapLooseExportableImages(root) {
    const images = collectExportableImageElements(root);
    images.forEach((image) => {
      if (!image.parentNode || image.closest('.omni-exporter-exported-image')) {
        return;
      }
      const figure = buildExportImageFigure(image);
      if (!figure) {
        return;
      }
      image.parentNode.replaceChild(figure, image);
    });
  }

  function collectExportableImageElements(root) {
    if (!root) {
      return [];
    }
    const images = [];
    if (root.matches && root.matches('img')) {
      images.push(root);
    }
    if (root.querySelectorAll) {
      images.push(...root.querySelectorAll('img'));
    }
    const seen = new Set();
    return images.filter((image) => {
      if (!isExportableImageElement(image)) {
        return false;
      }
      const key = normalizeImageSource(image);
      if (!key || seen.has(key)) {
        return false;
      }
      seen.add(key);
      return true;
    });
  }

  function nodeHasExportableImages(node) {
    return collectExportableImageElements(node).length > 0;
  }

  function isExportableImageElement(image) {
    if (!image || !image.getAttribute) {
      return false;
    }
    const src = normalizeImageSource(image);
    if (!src || /^data:image\/svg\+xml/i.test(src)) {
      return false;
    }
    if (image.closest && image.closest('nav, header, footer, menu, .omni-exporter-btn')) {
      return false;
    }
    const alt = normalizeText(ensureString(image.getAttribute('alt')).replace(/\u00a0/g, ' '));
    const className = ensureString(image.className);
    const width = Number(image.getAttribute('width')) || Number(image.naturalWidth) || 0;
    const height = Number(image.getAttribute('height')) || Number(image.naturalHeight) || 0;
    const generatedContext = image.closest && image.closest(
      '.attachment-container, .generated-images, generated-image, single-image, .image-container, ' +
      '.file-preview-container, user-query-file-preview, user-query-file-carousel, ' +
      '[data-testid="image-gen-overlay-actions"], [id^="image-"], img[data-test-id="uploaded-img"]'
    );
    if (generatedContext) {
      return true;
    }
    if (/image|generated|générée|généré|generated-image|loaded/i.test(`${alt} ${className}`)) {
      return true;
    }
    return width >= 64 && height >= 64;
  }

  function normalizeImageSource(image) {
    if (!image) {
      return '';
    }
    return ensureString(
      image.currentSrc ||
      (image.getAttribute && image.getAttribute('src')) ||
      image.src
    ).trim();
  }

  function buildExportImageFigure(image) {
    const src = normalizeImageSource(image);
    if (!src) {
      return null;
    }
    const figure = document.createElement('figure');
    figure.className = 'omni-exporter-exported-image';

    const clonedImage = document.createElement('img');
    clonedImage.src = src;
    clonedImage.alt = normalizeExportImageAlt(image.getAttribute('alt') || image.getAttribute('aria-label') || '');
    clonedImage.loading = 'eager';
    clonedImage.decoding = 'sync';

    const width = Number(image.getAttribute('width')) || Number(image.naturalWidth) || 0;
    const height = Number(image.getAttribute('height')) || Number(image.naturalHeight) || 0;
    if (width > 0) {
      clonedImage.setAttribute('width', String(Math.round(width)));
    }
    if (height > 0) {
      clonedImage.setAttribute('height', String(Math.round(height)));
    }

    figure.appendChild(clonedImage);

    const caption = normalizeExportImageCaption(clonedImage.alt);
    if (caption) {
      const figcaption = document.createElement('figcaption');
      figcaption.textContent = caption;
      figure.appendChild(figcaption);
    }

    return figure;
  }

  function normalizeExportImageAlt(value) {
    return normalizeText(ensureString(value).replace(/\u00a0/g, ' '))
      .replace(/^,\s*/, '')
      .trim();
  }

  function normalizeExportImageCaption(value) {
    const caption = normalizeExportImageAlt(value);
    if (!caption || caption.length < 8) {
      return '';
    }
    if (/^(g[eé]n[eé]r[eé] par ia|generated by ai|image generated|image g[eé]n[eé]r[eé]e?)$/i.test(caption)) {
      return '';
    }
    return caption;
  }

  function normalizeGrokStrokeWidthInlineSpan(root) {
    if (!root || !root.querySelectorAll) {
      return;
    }
    const spans = Array.from(root.querySelectorAll('span'));
    spans.forEach((span) => {
      if (!isTargetGrokStrokeWidthSpan(span)) {
        return;
      }
      span.textContent = ensureString(span.textContent)
        .replace(/\s*\n+\s*/g, ' ')
        .replace(/[ \t]{2,}/g, ' ')
        .trim();
      enforceSingleLineBreakAroundNode(span);
    });
  }

  function isTargetGrokStrokeWidthSpan(span) {
    if (!span) {
      return false;
    }
    const className = ensureString(span.className);
    const requiredClasses = [
      'text-sm',
      'px-1',
      'rounded-sm',
      '!font-mono',
      'bg-orange-400/10',
      'text-orange-500',
      'dark:bg-orange-300/10',
      'dark:text-orange-300'
    ];
    const hasAllClasses = requiredClasses.every((token) => className.includes(token));
    if (!hasAllClasses) {
      return false;
    }
    const compactText = ensureString(span.textContent).replace(/\s+/g, ' ').trim();
    return /stroke-width\s*=\s*["']?1\.5["']?/i.test(compactText);
  }

  function enforceSingleLineBreakAroundNode(node) {
    if (!node || !node.parentNode) {
      return;
    }
    trimSiblingBoundary(node, 'before');
    trimSiblingBoundary(node, 'after');
    const doc = node.ownerDocument || document;
    node.parentNode.insertBefore(doc.createTextNode('\n'), node);
    if (node.nextSibling) {
      node.parentNode.insertBefore(doc.createTextNode('\n'), node.nextSibling);
    } else {
      node.parentNode.appendChild(doc.createTextNode('\n'));
    }
  }

  function trimSiblingBoundary(node, direction) {
    const parent = node.parentNode;
    if (!parent) {
      return;
    }
    let sibling = direction === 'before' ? node.previousSibling : node.nextSibling;

    while (sibling && sibling.nodeType === Node.TEXT_NODE && /^\s*$/.test(sibling.textContent || '')) {
      const toRemove = sibling;
      sibling = direction === 'before' ? sibling.previousSibling : sibling.nextSibling;
      parent.removeChild(toRemove);
    }

    if (sibling && sibling.nodeType === Node.TEXT_NODE) {
      if (direction === 'before') {
        sibling.textContent = ensureString(sibling.textContent)
          .replace(/[ \t]*\n+[ \t]*$/g, '')
          .replace(/[ \t]+$/g, '');
      } else {
        sibling.textContent = ensureString(sibling.textContent)
          .replace(/^[ \t]*\n+[ \t]*/g, '')
          .replace(/^[ \t]+/g, '');
      }
      if (!sibling.textContent) {
        parent.removeChild(sibling);
      }
    }
  }

  function extractCleanTextForPdf(node) {
    const clone = node.cloneNode(true);

    clone.querySelectorAll('[class*="whitespace-pre-wrap"]').forEach(el => {
      el.style.whiteSpace = 'normal';
    });

    return clone.innerText
      .replace(/\s*\n+\s*/g, ' ')
      .replace(/[ \t]{2,}/g, ' ')
      .trim();
  }

  function extractMessageContentFromRoot(root) {
    if (!root) {
      return { text: '', html: '' };
    }
    const immediateContent = extractImmediatePlatformContent(root);
    if (immediateContent) {
      return immediateContent;
    }

    const selectors = getMessageContentSelectors();
    const allNodes = Array.from(root.querySelectorAll(selectors.join(',')));
    const nodes = filterMessageContentNodes(allNodes);
    const collectedContent = collectMessageContentFromNodes(nodes);
    if (collectedContent) {
      return collectedContent;
    }

    return buildFallbackMessageContent(root);
  }

  function extractImmediatePlatformContent(root) {
    if (platform === 'gemini') {
      return extractImmediateGeminiContent(root);
    }
    if (platform === 'grok') {
      return extractImmediateGrokContent(root);
    }
    return null;
  }

  function extractImmediateGeminiContent(root) {
    const GEMINI_LEAF_SELECTOR =
      'message-content, .markdown, ' +
      '.query-text, .query-content, .user-query-bubble-with-background';
    if (!root.matches || !root.matches(GEMINI_LEAF_SELECTOR)) {
      return null;
    }
    const preferredLeaf =
      (root.matches('.markdown, .query-text, .user-query-bubble-with-background') ? root : null) ||
      (root.querySelector && root.querySelector('.markdown, .query-text, .user-query-bubble-with-background')) ||
      root;
    return buildMessageContentFromNode(preferredLeaf, true);
  }

  function extractImmediateGrokContent(root) {
    const content = root.querySelector('.message-content, .message-row');
    if (!content) {
      return null;
    }
    return buildMessageContentFromNode(content, false);
  }

  function getMessageContentSelectors() {
    if (platform === 'deepseek') {
      return ['.ds-markdown', '.fbb737a4', '._72b6158', '.markdown', '.prose', '.whitespace-pre-wrap', '[data-message-content]', '[data-testid*="message-content"]'];
    }
    if (platform === 'claude') {
      return ['[data-testid="assistant-message"]', '[data-testid="user-message"]', '.font-claude-response-body', '.font-claude-response', '.standard-markdown', '.progressive-markdown', '.markdown', '.prose', '.whitespace-pre-wrap'];
    }
    if (platform === 'gemini') {
      return ['message-content .markdown', 'model-response message-content .markdown', 'user-query-content .query-content .query-text', 'user-query .query-text', '.query-content .query-text', '.query-text', '.user-query-bubble-with-background', 'model-response message-content', 'user-query-content .query-content'];
    }
    if (platform === 'grok') {
      return ['.response-content-markdown', '.message-bubble', '.markdown', '.prose', '.whitespace-pre-wrap', '[data-message-content]', '[data-testid*="message-content"]'];
    }
    return ['.markdown', '.prose', '.whitespace-pre-wrap', '[data-message-content]', '[data-testid*="message-content"]'];
  }

  function filterMessageContentNodes(nodes) {
    return nodes.filter((node, index, self) => {
      if (platform === 'gemini') {
        return !self.some((other) => other !== node && node.contains(other));
      }
      return !self.some((other) => other !== node && other.contains(node));
    });
  }

  function collectMessageContentFromNodes(nodes) {
    const parts = [];
    const htmlParts = [];
    const sourceNodes = [];
    nodes.forEach((node) => appendMessageContentPart(node, parts, htmlParts, sourceNodes));
    if (!parts.length) {
      return null;
    }
    return {
      text: parts.join('\n\n').trim(),
      html: htmlParts.join('<br><br>').trim(),
      sourceNode: sourceNodes.length === 1 ? sourceNodes[0] : null
    };
  }

  function appendMessageContentPart(node, parts, htmlParts, sourceNodes) {
    if (node.closest('button, nav, header, footer, svg')) {
      return;
    }
    const content = buildMessageContentFromNode(node, false);
    if (!hasCollectedContent(content)) {
      return;
    }
    parts.push(content.text);
    htmlParts.push(content.html);
    sourceNodes.push(node);
  }

  function buildMessageContentFromNode(node, includeSourceNode) {
    const exportNode = prepareNodeForExport(node);
    const text = normalizeText(exportNode.innerText || '');
    const html = cleanHtml(exportNode);
    if (!text && !htmlHasExportableImages(html)) {
      return null;
    }
    const content = { text, html };
    if (includeSourceNode) {
      content.sourceNode = node;
    }
    return content;
  }

  function buildFallbackMessageContent(root) {
    const fallbackNode = prepareNodeForExport(root);
    const fallbackText = normalizeText(fallbackNode.innerText || '');
    const fallbackHtml = cleanHtml(fallbackNode);
    return {
      text: stripActionLines(fallbackText, root),
      html: fallbackHtml,
      sourceNode: root
    };
  }

  function stripActionLines(text, root) {
    if (!text) {
      return '';
    }
    const blocked = collectActionLabels(root);
    if (!blocked.size) {
      return text.trim();
    }
    return text
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line && !blocked.has(line))
      .join('\n')
      .trim();
  }

  function collectActionLabels(root) {
    const blocked = new Set();
    if (!root || !root.querySelectorAll) {
      return blocked;
    }
    const actionNodes = root.querySelectorAll('button, [role="button"], [role="menuitem"], [aria-label], [mattooltip], [title]');
    actionNodes.forEach((node) => {
      const candidates = [
        node.getAttribute('aria-label'),
        node.getAttribute('mattooltip'),
        node.getAttribute('title'),
        node.getAttribute('data-tooltip')
      ];
      const text = normalizeText(extractCleanTextForPdf(node));
      if (text && text.length <= 80 && text.split('\n').length <= 2) {
        candidates.push(text);
      }
      candidates.forEach((candidate) => {
        if (!candidate) {
          return;
        }
        const normalized = normalizeText(candidate);
        normalized.split('\n').forEach((line) => {
          const clean = line.trim();
          if (clean && clean.length <= 80) {
            blocked.add(clean);
          }
        });
      });
    });
    return blocked;
  }

  function extractMessageContent(node) {
    const contentRoot =
      node.querySelector('.markdown') ||
      node.querySelector('[data-message-content]') ||
      node;
    if (!contentRoot) {
      return { text: '', html: '' };
    }
    const exportNode = prepareNodeForExport(contentRoot);
    const rawText = exportNode.innerText || '';
    const html = cleanHtml(exportNode);
    return {
      text: normalizeText(rawText),
      html: html,
      sourceNode: contentRoot
    };
  }

  function normalizeText(text) {
    return text
      .replace(/\r\n/g, '\n')
      .replace(/[ \t]+\n/g, '\n')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
  }

  function normalizePdfPipelineText(text) {
    const raw = ensureString(text);
    if (!raw) {
      return '';
    }
    if (platform === 'grok') {
      return normalizeGrokPdfText(raw);
    }
    return raw;
  }

  function normalizeGrokPdfText(text) {
    const PARAGRAPH_TOKEN = '__OMNI_GROK_PDF_PARAGRAPH__';
    return ensureString(text)
      .replace(/\r\n/g, '\n')
      .replace(/\n{2,}/g, PARAGRAPH_TOKEN)
      .replace(/\s*\n+\s*/g, ' ')
      .replace(/[ \t]{2,}/g, ' ')
      .replace(new RegExp(PARAGRAPH_TOKEN, 'g'), '\n\n')
      .replace(/[ \t]*\n\n[ \t]*/g, '\n\n');
  }

  function filterTopLevelNodes(nodes) {
    return nodes.filter((node, index, self) => {
      const isContained = self.some((other, otherIndex) =>
        otherIndex !== index && other.contains(node)
      );
      return !isContained;
    });
  }

  // ─────────────────────────────────────────────
  // Markdown and text export rendering
  // ─────────────────────────────────────────────

  function buildExportMarkdown(messages) {
    const title = `${getPlatformLabel()} Export`;
    const conversationTitle = getExportConversationTitle();
    const lines = [];
    lines.push(`# ${title}`);
    if (conversationTitle) {
      lines.push(`Conversation: ${conversationTitle}  `);
    }
    lines.push(`URL: ${location.href}  `);
    lines.push(`Exported: ${new Date().toISOString()}`);
    lines.push('');
    messages.forEach((message) => {
      const roleLabel = formatRoleLabel(message.role);
      lines.push(`## ${roleLabel}`);
      lines.push('');
      const markdownBody =
        platform === 'gemini' &&
        message &&
        message.sourceNode &&
        message.sourceNode.nodeType === Node.ELEMENT_NODE &&
        message.sourceNode.isConnected
          ? convertMessageNodeToMarkdown(message.sourceNode, message.text)
          : convertMessageHtmlToMarkdown(message.html, message.text);
      lines.push(markdownBody || ensureString(message.text));
      lines.push('');
    });
    return `${lines.join('\n').trim()}\n`;
  }

  function convertMessageNodeToMarkdown(sourceNode, fallbackText) {
    if (!sourceNode || sourceNode.nodeType !== Node.ELEMENT_NODE) {
      return normalizePlainMarkdownText(fallbackText);
    }
    const exportNode = prepareNodeForExport(sourceNode);
    const markdown = renderMarkdownChildren(exportNode, { listDepth: 0, inPre: false, inTable: false });
    return finalizeMarkdownOutput(markdown) || normalizePlainMarkdownText(fallbackText || exportNode.innerText || '');
  }

  function convertMessageHtmlToMarkdown(html, fallbackText) {
    const rawHtml = ensureString(html);
    if (!rawHtml || !/<[^>]+>/.test(rawHtml)) {
      return normalizePlainMarkdownText(fallbackText || rawHtml);
    }
    const container = parseHtmlContainer(rawHtml);
    if (!container) {
      return normalizePlainMarkdownText(stripHtmlToText(rawHtml) || fallbackText);
    }
    stripNonExportableNodes(container);
    const markdown = renderMarkdownChildren(container, { listDepth: 0, inPre: false, inTable: false });
    return finalizeMarkdownOutput(markdown) || normalizePlainMarkdownText(fallbackText);
  }

  function renderMarkdownChildren(parentNode, ctx) {
    return Array.from(parentNode.childNodes || [])
      .map((child) => renderMarkdownNode(child, ctx))
      .join('');
  }

  function renderMarkdownNode(node, ctx) {
    if (!node) {
      return '';
    }
    if (node.nodeType === Node.TEXT_NODE) {
      return renderMarkdownTextNode(node, ctx);
    }
    if (node.nodeType !== Node.ELEMENT_NODE) {
      return '';
    }
    if (node.matches && node.matches(NON_EXPORTABLE_NODE_SELECTOR)) {
      return '';
    }

    const tag = ensureString(node.tagName).toLowerCase();
    const mathResult = renderMarkdownMathNode(node, tag);
    if (mathResult !== null) {
      return mathResult;
    }
    const tagResult = renderMarkdownElementByTag(node, ctx, tag);
    if (tagResult !== null) {
      return tagResult;
    }
    return renderMarkdownDefaultElement(node, ctx, tag);
  }

  function renderMarkdownMathNode(node, tag) {
    const katexMode = detectKatexMode(node);
    if (katexMode === 'display') {
      const tex = extractLatexFromNode(node);
      return tex ? `\n\n$$\n${tex}\n$$\n\n` : '';
    }
    if (katexMode === 'inline') {
      const tex = extractLatexFromNode(node);
      return tex ? `$${tex}$` : '';
    }
    if (tag === 'annotation' && ensureString(node.getAttribute('encoding')).toLowerCase() === 'application/x-tex') {
      return '';
    }
    return null;
  }

  function renderMarkdownElementByTag(node, ctx, tag) {
    const simple = renderMarkdownSimpleElement(node, ctx, tag);
    if (simple !== null) {
      return simple;
    }
    const block = renderMarkdownBlockElement(node, ctx, tag);
    if (block !== null) {
      return block;
    }
    return renderMarkdownInlineElement(node, ctx, tag);
  }

  function renderMarkdownSimpleElement(node, ctx, tag) {
    const simpleRenderers = {
      br: () => '\n',
      hr: () => '\n\n---\n\n',
      pre: () => renderMarkdownCodeBlock(node),
      table: () => renderMarkdownTable(node, ctx),
      ul: () => renderMarkdownList(node, false, ctx),
      ol: () => renderMarkdownList(node, true, ctx),
      li: () => renderMarkdownListItem(node, ctx, '-')
    };
    if (Object.prototype.hasOwnProperty.call(simpleRenderers, tag)) {
      return simpleRenderers[tag]();
    }
    if (tag === 'input' && isMarkdownCheckboxInput(node)) {
      return renderMarkdownCheckboxInput(node);
    }
    if (tag === 'code') {
      return node.closest('pre') ? '' : wrapMarkdownInlineCode(node.textContent || '');
    }
    return null;
  }

  function renderMarkdownBlockElement(node, ctx, tag) {
    if (tag === 'blockquote') {
      return renderMarkdownBlockQuote(node, ctx);
    }
    if (/^h[1-6]$/.test(tag)) {
      return renderMarkdownHeading(node, ctx, tag);
    }
    if (tag === 'p') {
      const paragraph = normalizeInlineMarkdownChunk(renderMarkdownChildren(node, ctx));
      return paragraph ? `\n\n${paragraph}\n\n` : '';
    }
    return null;
  }

  function renderMarkdownBlockQuote(node, ctx) {
    const quoteBody = finalizeMarkdownOutput(renderMarkdownChildren(node, ctx));
    if (!quoteBody) {
      return '';
    }
    const quotedLines = quoteBody.split('\n').map((line) => line ? `> ${line}` : '>');
    return `\n\n${quotedLines.join('\n')}\n\n`;
  }

  function renderMarkdownHeading(node, ctx, tag) {
    const level = Number.parseInt(tag.slice(1), 10) || 1;
    const heading = normalizeInlineMarkdownChunk(renderMarkdownChildren(node, ctx));
    if (!heading) {
      return '';
    }
    return `\n\n${'#'.repeat(Math.max(1, Math.min(6, level)))} ${heading}\n\n`;
  }

  function renderMarkdownInlineElement(node, ctx, tag) {
    const content = normalizeInlineMarkdownChunk(renderMarkdownChildren(node, ctx));
    if (tag === 'strong' || tag === 'b') {
      return content ? `**${content}**` : '';
    }
    if (tag === 'em' || tag === 'i') {
      return content ? `*${content}*` : '';
    }
    if (tag === 'del' || tag === 's' || tag === 'strike') {
      return content ? `~~${content}~~` : '';
    }
    if (tag === 'a') {
      return renderMarkdownLink(node, content);
    }
    if (tag === 'img') {
      return renderMarkdownImage(node);
    }
    return null;
  }

  function renderMarkdownLink(node, content) {
    const href = ensureString(node.getAttribute('href')).trim();
    const label = content || href;
    return href ? `[${label}](${href})` : label;
  }

  function renderMarkdownImage(node) {
    const alt = escapeMarkdownText(ensureString(node.getAttribute('alt')).trim());
    const src = ensureString(node.getAttribute('src')).trim();
    return src ? `![${alt}](${src})` : alt;
  }

  function renderMarkdownDefaultElement(node, ctx, tag) {
    const inner = renderMarkdownChildren(node, ctx);
    if (isMarkdownBlockTag(tag)) {
      const block = finalizeMarkdownOutput(inner);
      return block ? `\n\n${block}\n\n` : '';
    }
    return inner;
  }

  function renderMarkdownTextNode(node, ctx) {
    const raw = ensureString(node.textContent).replace(/\u00a0/g, ' ');
    if (!raw) {
      return '';
    }
    if (ctx && ctx.inPre) {
      return raw;
    }
    return escapeMarkdownText(raw.replace(/[ \t\r\f\v]+/g, ' ').replace(/\n+/g, ' '));
  }

  function renderMarkdownCodeBlock(preNode) {
    const codeNode = preNode.querySelector('code') || preNode;
    const rawCode = ensureString(codeNode.textContent)
      .replace(/\r\n/g, '\n')
      .replace(/\u00a0/g, ' ')
      .replace(/\s+$/, '');
    const language = extractMarkdownCodeLanguage(preNode, codeNode);
    const fenceSize = Math.max(3, longestBacktickRun(rawCode) + 1);
    const fence = '`'.repeat(fenceSize);
    return `\n\n${fence}${language}\n${rawCode}\n${fence}\n\n`;
  }

  function wrapMarkdownInlineCode(text) {
    const value = ensureString(text).replace(/\r\n/g, ' ').replace(/\n/g, ' ');
    if (!value) {
      return '``';
    }
    const fenceSize = Math.max(1, longestBacktickRun(value) + 1);
    const fence = '`'.repeat(fenceSize);
    if (/^\s|\s$/.test(value) || value.includes(fence)) {
      return `${fence} ${value} ${fence}`;
    }
    return `${fence}${value}${fence}`;
  }

  function longestBacktickRun(text) {
    const runs = ensureString(text).match(/`+/g);
    if (!runs || !runs.length) {
      return 0;
    }
    return runs.reduce((max, entry) => Math.max(max, entry.length), 0);
  }

  function renderMarkdownList(listNode, isOrdered, ctx) {
    const depth = Number(ctx && ctx.listDepth) || 0;
    const items = Array.from(listNode.children || []).filter((child) => {
      return child && ensureString(child.tagName).toLowerCase() === 'li';
    });
    if (!items.length) {
      return '';
    }

    const start = isOrdered ? parseListStartValue(listNode) : 1;
    const nextCtx = Object.assign({}, ctx, { listDepth: depth });
    const rendered = items.map((item, index) => {
      const marker = isOrdered ? `${start + index}.` : '-';
      return renderMarkdownListItem(item, nextCtx, marker);
    }).filter(Boolean).join('\n');

    if (!rendered) {
      return '';
    }
    return depth > 0 ? rendered : `\n\n${rendered}\n\n`;
  }

  function renderMarkdownListItem(listItemNode, ctx, marker) {
    const depth = Number(ctx && ctx.listDepth) || 0;
    const indent = '  '.repeat(depth);
    const continuationIndent = `${indent}${' '.repeat(marker.length + 1)}`;
    const nestedCtx = Object.assign({}, ctx, { listDepth: depth + 1 });

    let inlineBuffer = '';
    const trailingBlocks = [];

    Array.from(listItemNode.childNodes || []).forEach((child) => {
      if (child.nodeType === Node.ELEMENT_NODE) {
        const tag = ensureString(child.tagName).toLowerCase();
        if (tag === 'ul' || tag === 'ol') {
          const nested = renderMarkdownList(child, tag === 'ol', nestedCtx).trimEnd();
          if (nested) {
            trailingBlocks.push({ kind: 'nested', value: nested });
          }
          return;
        }
        if (isMarkdownListItemBlockTag(tag)) {
          const block = finalizeMarkdownOutput(renderMarkdownNode(child, Object.assign({}, ctx, { listDepth: depth })));
          if (block) {
            trailingBlocks.push({ kind: 'block', value: block });
          }
          return;
        }
      }
      inlineBuffer += renderMarkdownNode(child, Object.assign({}, ctx, { listDepth: depth }));
    });

    const inlineText = normalizeInlineMarkdownChunk(inlineBuffer);
    let result = `${indent}${marker} ${inlineText}`.replace(/[ \t]+$/g, '');

    trailingBlocks.forEach((entry) => {
      if (!entry || !entry.value) {
        return;
      }
      if (entry.kind === 'nested') {
        result += `\n${entry.value}`;
        return;
      }
      const padded = entry.value
        .split('\n')
        .map((line) => line ? `${continuationIndent}${line}` : continuationIndent)
        .join('\n');
      result += `\n${padded}`;
    });

    return result.trimEnd();
  }

  function parseListStartValue(listNode) {
    const raw = ensureString(listNode && listNode.getAttribute && listNode.getAttribute('start')).trim();
    const value = Number.parseInt(raw, 10);
    return Number.isFinite(value) ? value : 1;
  }

  function isMarkdownCheckboxInput(node) {
    return node &&
      node.getAttribute &&
      ensureString(node.getAttribute('type')).toLowerCase() === 'checkbox';
  }

  function renderMarkdownCheckboxInput(node) {
    const ariaChecked = ensureString(node.getAttribute('aria-checked')).toLowerCase();
    const isChecked = node.checked ||
      node.hasAttribute('checked') ||
      ariaChecked === 'true' ||
      ariaChecked === 'mixed';
    return isChecked ? '[x] ' : '[ ] ';
  }

  function renderMarkdownTable(tableNode, ctx) {
    const rows = Array.from(tableNode.querySelectorAll('tr'));
    const parsedRows = rows.map((row) => {
      return Array.from(row.children || [])
        .filter((cell) => {
          const tag = ensureString(cell.tagName).toLowerCase();
          return tag === 'th' || tag === 'td';
        })
        .map((cell) => {
          const cellText = normalizeInlineMarkdownChunk(
            renderMarkdownChildren(cell, Object.assign({}, ctx, { inTable: true }))
          ).replace(/\n+/g, ' <br> ');
          return escapeMarkdownTableCell(cellText);
        });
    }).filter((row) => row.length > 0);

    if (!parsedRows.length) {
      return '';
    }

    const columnCount = parsedRows.reduce((max, row) => Math.max(max, row.length), 0);
    parsedRows.forEach((row) => {
      while (row.length < columnCount) {
        row.push('');
      }
    });

    const hasHeaderRow = rows.length > 0 && Array.from(rows[0].children || []).some((cell) => {
      return ensureString(cell.tagName).toLowerCase() === 'th';
    });
    const header = hasHeaderRow ? parsedRows[0] : parsedRows[0].map((_, index) => `Col ${index + 1}`);
    const bodyRows = hasHeaderRow ? parsedRows.slice(1) : parsedRows;
    const separator = new Array(columnCount).fill('---');

    const lines = [];
    lines.push(`| ${header.join(' | ')} |`);
    lines.push(`| ${separator.join(' | ')} |`);
    bodyRows.forEach((row) => {
      lines.push(`| ${row.join(' | ')} |`);
    });

    return `\n\n${lines.join('\n')}\n\n`;
  }

  function escapeMarkdownTableCell(value) {
    return ensureString(value)
      .replace(/\|/g, '\\|')
      .replace(/\r?\n/g, ' ')
      .trim();
  }

  function extractMarkdownCodeLanguage(preNode, codeNode) {
    const candidates = [
      codeNode,
      preNode,
      preNode && preNode.parentElement,
      preNode && preNode.closest && preNode.closest('[data-testid="code-block"], .md-code-block, code-block, .code-block')
    ].filter(Boolean);

    for (const candidate of candidates) {
      const className = ensureString(candidate.className);
      const classMatch = className.match(/(?:^|\s)language-([a-z0-9_+.-]+)/i);
      if (classMatch && classMatch[1]) {
        return sanitizeMarkdownLanguage(classMatch[1]);
      }
      const attr = ensureString(
        candidate.getAttribute && (
          candidate.getAttribute('data-language') ||
          candidate.getAttribute('lang')
        )
      ).trim();
      if (attr) {
        return sanitizeMarkdownLanguage(attr);
      }
    }

    const labelNode =
      (preNode && preNode.closest && preNode.closest('.md-code-block') &&
        preNode.closest('.md-code-block').querySelector('.md-code-block-banner .d813de27')) ||
      (preNode && preNode.closest && preNode.closest('.code-block') &&
        preNode.closest('.code-block').querySelector('.code-block-decoration span')) ||
      (preNode && preNode.closest && preNode.closest('[data-testid="code-block"]') &&
        preNode.closest('[data-testid="code-block"]').querySelector('.text-xs')) ||
      null;
    if (labelNode) {
      const label = sanitizeMarkdownLanguage(labelNode.textContent || '');
      if (label) {
        return label;
      }
    }
    return '';
  }

  function sanitizeMarkdownLanguage(value) {
    return ensureString(value).trim().replace(/[^a-z0-9_+.-]/gi, '');
  }

  function detectKatexMode(node) {
    if (!node || !node.classList) {
      return '';
    }
    if (node.classList.contains('katex-display')) {
      return 'display';
    }
    if (node.classList.contains('katex') && !node.closest('.katex-display')) {
      return 'inline';
    }
    return '';
  }

  function extractLatexFromNode(node) {
    if (!node || !node.querySelector) {
      return '';
    }
    const annotation =
      (node.matches &&
        node.matches('annotation[encoding="application/x-tex"]') &&
        node) ||
      node.querySelector('annotation[encoding="application/x-tex"]');
    if (!annotation) {
      return '';
    }
    return ensureString(annotation.textContent).replace(/\r\n/g, '\n').trim();
  }

  function escapeMarkdownText(text) {
    return ensureString(text)
      .replace(/\\/g, '\\\\')
      .replace(/([`*_{}[\]()#+!>|])/g, '\\$1');
  }

  function normalizeInlineMarkdownChunk(value) {
    return ensureString(value)
      .replace(/[ \t]+\n/g, '\n')
      .replace(/\n[ \t]+/g, '\n')
      .replace(/[ \t]{2,}/g, ' ')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
  }

  function normalizePlainMarkdownText(value) {
    return ensureString(value)
      .replace(/\r\n/g, '\n')
      .replace(/\u00a0/g, ' ')
      .replace(/[ \t]+\n/g, '\n')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
  }

  function finalizeMarkdownOutput(value) {
    return ensureString(value)
      .replace(/\r\n/g, '\n')
      .replace(/[ \t]+\n/g, '\n')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
  }

  function isMarkdownBlockTag(tag) {
    return tag === 'div' ||
      tag === 'section' ||
      tag === 'article' ||
      tag === 'main' ||
      tag === 'header' ||
      tag === 'footer' ||
      tag === 'aside';
  }

  function isMarkdownListItemBlockTag(tag) {
    return tag === 'p' ||
      tag === 'div' ||
      tag === 'pre' ||
      tag === 'blockquote' ||
      tag === 'table' ||
      tag === 'h1' ||
      tag === 'h2' ||
      tag === 'h3' ||
      tag === 'h4' ||
      tag === 'h5' ||
      tag === 'h6';
  }

  function buildExportText(messages) {
    const title = `${getPlatformLabel()} Export`;
    const conversationTitle = getExportConversationTitle();
    const lines = [];
    lines.push(title);
    if (conversationTitle) {
      lines.push(`Conversation: ${conversationTitle}`);
    }
    lines.push(`URL: ${location.href}`);
    lines.push(`Exported: ${new Date().toISOString()}`);
    lines.push('');
    messages.forEach((message) => {
      const roleLabel = formatRoleLabel(message.role);
      lines.push(`${roleLabel}:`);
      lines.push(ensureString(message.text));
      lines.push('');
    });
    return `${lines.join('\n').trim()}\n`;
  }

  function buildExportJson(messages) {
    const conversationTitle = getExportConversationTitle();
    const payload = {
      url: location.href,
      exportedAt: new Date().toISOString(),
      messages: messages.map((message) => ({
        role: ensureString(message.role),
        text: ensureString(message.text),
        html: ensureString(message.html)
      }))
    };
    if (conversationTitle) {
      payload.conversationTitle = conversationTitle;
    }
    return JSON.stringify(payload, null, 2);
  }

  function buildExportHtml(messages) {
    const title = `${getPlatformLabel()} Export`;
    const conversationTitle = getExportConversationTitle();
    const rows = messages.map((message) => {
      const roleLabel =
        message.role.charAt(0).toUpperCase() + message.role.slice(1);
      return `
        <section class="message">
          <h3>${escapeHtml(roleLabel)}</h3>
          <pre>${escapeHtml(message.text)}</pre>
        </section>
      `;
    }).join('');
    return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${escapeHtml(title)}</title>
  <style>
    :root { color-scheme: light; }
    body { font-family: "Segoe UI", system-ui, sans-serif; margin: 32px; color: #0f172a; }
    h1 { font-size: 20px; margin-bottom: 6px; }
    p.meta { color: #475569; font-size: 12px; margin-top: 0; }
    section.message { margin: 18px 0 22px; padding: 12px 14px; border: 1px solid #e2e8f0; border-radius: 12px; background: #f8fafc; }
    section.message h3 { margin: 0 0 8px; font-size: 13px; text-transform: capitalize; color: #1e293b; }
    section.message pre { margin: 0; white-space: pre-wrap; font-family: "Consolas", "SFMono-Regular", ui-monospace, monospace; font-size: 12px; line-height: 1.45; }
  </style>
</head>
<body>
  <h1>${escapeHtml(title)}</h1>
  <p class="meta">${conversationTitle ? `Conversation: ${escapeHtml(conversationTitle)}<br>` : ''}URL: ${escapeHtml(location.href)}<br>Exported: ${escapeHtml(new Date().toISOString())}</p>
  ${rows}
</body>
</html>`;
  }

  // ─────────────────────────────────────────────
  // PDF HTML parsing and pdfmake conversion
  // ─────────────────────────────────────────────

  function convertHtmlToPdfMake(htmlOrText) {
    if (!htmlOrText || typeof htmlOrText !== 'string') {
      return { text: '' };
    }

    if (!/<[^>]+>/.test(htmlOrText)) {
      return { text: formatPdfTextWithEmoji(htmlOrText), preserveLeadingSpaces: true };
    }

    const temp = parseHtmlContainer(htmlOrText);
    if (!temp) {
      return {
        text: formatPdfTextWithEmoji(normalizeText(stripHtmlToText(htmlOrText))),
        preserveLeadingSpaces: true
      };
    }

    const result = parseNodeToPdfMake(temp);

    if (Array.isArray(result) && result.length === 1) {
      return result[0];
    }

    return result;
  }

  function parseHtmlContainer(html) {
    const raw = ensureString(html);
    if (!raw) {
      return null;
    }
    const trustedHtml = createTrustedHtmlValue(raw);
    if (requiresTrustedHtmlValue() && !trustedHtml) {
      return null;
    }
    const htmlValue = trustedHtml || raw;
    if (typeof DOMParser !== 'undefined') {
      try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlValue, 'text/html');
        if (doc && doc.body) {
          return doc.body;
        }
      } catch (err) {
      }
    }
    const temp = document.createElement('div');
    try {
      temp.innerHTML = htmlValue;
      return temp;
    } catch (err) {
      return null;
    }
  }

  function requiresTrustedHtmlValue() {
    return typeof window !== 'undefined' &&
      window.trustedTypes &&
      typeof window.trustedTypes.createPolicy === 'function';
  }

  function createTrustedHtmlValue(value) {
    if (!requiresTrustedHtmlValue()) {
      return null;
    }
    if (trustedHtmlPolicyUnavailable) {
      return null;
    }
    try {
      if (!trustedHtmlPolicyRef) {
        trustedHtmlPolicyRef = createTrustedHtmlPolicy();
      }
      return trustedHtmlPolicyRef ? trustedHtmlPolicyRef.createHTML(ensureString(value)) : null;
    } catch (err) {
      trustedHtmlPolicyUnavailable = true;
      return null;
    }
  }

  function createTrustedHtmlPolicy() {
    const factory = window.trustedTypes;
    const policyOptions = {
      createHTML: (input) => input
    };
    const names = [
      'omniChatExporter',
      `omniChatExporter${Date.now()}${Math.round(Math.random() * 100000)}`
    ];
    for (const name of names) {
      try {
        return factory.createPolicy(name, policyOptions);
      } catch (err) {
      }
    }
    return null;
  }

  function stripHtmlToText(html) {
    if (!html) {
      return '';
    }
    const withLineBreaks = String(html)
      .replace(/<\s*br\b[^>]*>/gi, '\n')
      .replace(/<\/(p|div|h1|h2|h3|h4|h5|h6|li|blockquote|pre|tr)>/gi, '\n')
      .replace(/<li[^>]*>/gi, '- ');
    const withoutTags = withLineBreaks.replace(/<[^>]+>/g, '');
    return decodeHtmlEntities(withoutTags);
  }

  function decodeHtmlEntities(text) {
    if (!text) {
      return '';
    }
    return String(text)
      .replace(/&nbsp;/gi, ' ')
      .replace(/&amp;/gi, '&')
      .replace(/&lt;/gi, '<')
      .replace(/&gt;/gi, '>')
      .replace(/&quot;/gi, '"')
      .replace(/&#39;/gi, '\'')
      .replace(/&#(\d+);/g, (_, code) => {
        const value = Number(code);
        return Number.isFinite(value) ? String.fromCharCode(value) : '';
      });
  }

  function parseNodeToPdfMake(node) {
    const children = Array.from(node.childNodes);
    const content = [];

    children.forEach(child => {
      const parsed = parseNodeRecursive(child);
      if (parsed) {
        if (Array.isArray(parsed)) {
          content.push(...parsed);
        } else {
          content.push(parsed);
        }
      }
    });

    return content.length === 1 ? content[0] : content;
  }

  function parseNodeRecursive(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      return parsePdfTextNode(node);
    }
    if (node.nodeType === Node.ELEMENT_NODE) {
      return parsePdfElementNode(node);
    }
    return null;
  }

  function parsePdfTextNode(node) {
    const text = node.textContent;
    if (!text) {
      return null;
    }
    const normalized = text.replace(/\s*\n+\s*/g, ' ');
    if (normalized.trim() === '' && normalized.length > 0) {
      return { text: normalized };
    }
    return normalized.trim() ? { text: formatPdfTextWithEmoji(normalized) } : null;
  }

  function parsePdfElementNode(node) {
    if (node.matches && node.matches(NON_EXPORTABLE_NODE_SELECTOR)) {
      return null;
    }
    const specialCodeBlock = buildSpecialPdfCodeBlock(node);
    if (specialCodeBlock) {
      return specialCodeBlock;
    }
    if (isGrokInlineCodeLikeElement(node)) {
      return buildInlineCodeTextStyle(node.textContent || '', { noWrap: false });
    }
    const tagName = node.tagName.toLowerCase();
    const childContent = parsePdfChildContent(node);
    return parsePdfElementByTag(node, tagName, childContent);
  }

  function parsePdfChildContent(node) {
    const childContent = [];
    Array.from(node.childNodes).forEach((child) => {
      if (isDeepSeekScrollChromeNode(child)) {
        return;
      }
      const parsed = parseNodeRecursive(child);
      if (Array.isArray(parsed)) {
        childContent.push(...parsed);
      } else if (parsed) {
        childContent.push(parsed);
      }
    });
    return childContent;
  }

  function parsePdfElementByTag(node, tagName, childContent) {
    const inlineStyle = parsePdfInlineStyleElement(node, tagName, childContent);
    if (inlineStyle) {
      return inlineStyle;
    }
    const blockStyle = parsePdfBlockElement(node, tagName, childContent);
    if (blockStyle !== undefined) {
      return blockStyle;
    }
    return childContent;
  }

  function parsePdfInlineStyleElement(node, tagName, childContent) {
    if (tagName === 'strong' || tagName === 'b') {
      return childContent.map(c => ({ ...c, bold: true }));
    }
    if (tagName === 'em' || tagName === 'i') {
      return childContent.map(c => ({ ...c, italics: true }));
    }
    if (tagName === 'u') {
      return childContent.map(c => ({ ...c, decoration: 'underline' }));
    }
    if (tagName === 'del' || tagName === 's' || tagName === 'strike') {
      return childContent.map(c => ({ ...c, decoration: 'lineThrough' }));
    }
    if (tagName === 'a') {
      const href = node.getAttribute('href') || '';
      return childContent.map(c => ({ ...c, link: href, color: '#2563eb', decoration: 'underline' }));
    }
    if (tagName === 'code') {
      return buildInlineCodeTextStyle(node.textContent || '');
    }
    return null;
  }

  function parsePdfBlockElement(node, tagName, childContent) {
    if (tagName === 'pre') {
      return buildPdfPreBlock(node);
    }
    if (/^h[1-6]$/.test(tagName)) {
      return buildPdfHeading(node, tagName);
    }
    if (tagName === 'hr') {
      return buildPdfHorizontalRule();
    }
    if (tagName === 'table') {
      return buildPdfTableFromHtmlTable(node) || null;
    }
    if (tagName === 'ul' || tagName === 'ol') {
      return buildStructuredPdfList(node, tagName === 'ol');
    }
    if (tagName === 'li') {
      return buildListItemPdfContent(childContent, node.textContent || '');
    }
    if (tagName === 'p') {
      return withParagraphContent(childContent, node.textContent || '');
    }
    return parsePdfMediaOrContainerElement(node, tagName, childContent);
  }

  function buildPdfPreBlock(node) {
    const codeNode = node.querySelector('code');
    const text = (codeNode || node).textContent || '';
    return {
      text: formatPdfTextWithEmoji(text),
      font: 'monospace',
      fontSize: 9,
      background: '#f6f8fa',
      margin: [0, 6, 0, 6],
      preserveLeadingSpaces: true
    };
  }

  function buildPdfHeading(node, tagName) {
    const headingStyles = {
      h1: [18, [0, 12, 0, 6]],
      h2: [16, [0, 10, 0, 5]],
      h3: [14, [0, 8, 0, 4]],
      h4: [12, [0, 6, 0, 3]],
      h5: [11, [0, 4, 0, 2]],
      h6: [11, [0, 4, 0, 2]]
    };
    const style = headingStyles[tagName] || headingStyles.h6;
    return [{ text: formatPdfTextWithEmoji(node.textContent || ''), fontSize: style[0], bold: true, margin: style[1] }];
  }

  function buildPdfHorizontalRule() {
    return [{
      table: {
        widths: ['*'],
        body: [[{ text: ' ', border: [false, false, false, true], fontSize: 1, lineHeight: 1 }]]
      },
      layout: {
        hLineWidth: (i) => (i === 1 ? 0.5 : 0),
        hLineColor: () => '#cbd5e1',
        vLineWidth: () => 0,
        paddingLeft: () => 0,
        paddingRight: () => 0,
        paddingTop: () => 0,
        paddingBottom: () => 0
      },
      margin: [0, 6, 0, 8]
    }];
  }

  function parsePdfMediaOrContainerElement(node, tagName, childContent) {
    if (tagName === 'blockquote') {
      return buildPdfBlockQuote(node, childContent);
    }
    if (tagName === 'br') {
      return { text: '\n', preserveLeadingSpaces: true };
    }
    if (tagName === 'img') {
      return buildPdfImageNode(node);
    }
    if (tagName === 'figure') {
      return buildPdfFigure(childContent);
    }
    if (tagName === 'figcaption') {
      return buildPdfFigureCaption(node);
    }
    if (tagName === 'div' || tagName === 'span') {
      return childContent;
    }
    return undefined;
  }

  function buildPdfBlockQuote(node, childContent) {
    const unwrappedForQuote = childContent.flatMap((part) => {
      if (isPlainPdfStack(part)) {
        return part.stack;
      }
      return [part];
    });
    const quoteContent = composeMixedPdfStack(unwrappedForQuote, node.textContent || '');
    return {
      table: {
        widths: [0.01, '*'],
        body: [[
          { text: '', fillColor: '#e5e7eb', border: [false, false, false, false] },
          {
            stack: quoteContent,
            fillColor: '#f9fafb',
            color: '#475569',
            border: [false, false, false, false]
          }
        ]]
      },
      layout: {
        hLineWidth: () => 0,
        vLineWidth: () => 0,
        paddingLeft: (i) => (i === 0 ? 0 : 8),
        paddingRight: () => 8,
        paddingTop: () => 4,
        paddingBottom: () => 4
      },
      margin: [6, 2, 0, 6]
    };
  }

  function isPlainPdfStack(part) {
    return part &&
      typeof part === 'object' &&
      Array.isArray(part.stack) &&
      !Object.prototype.hasOwnProperty.call(part, 'ul') &&
      !Object.prototype.hasOwnProperty.call(part, 'ol') &&
      !Object.prototype.hasOwnProperty.call(part, 'image') &&
      !Object.prototype.hasOwnProperty.call(part, 'table');
  }

  function buildPdfFigure(childContent) {
    const figureStack = flattenPdfParts(childContent).filter(Boolean);
    if (!figureStack.length) {
      return null;
    }
    return {
      stack: figureStack,
      margin: [0, 6, 0, 10],
      unbreakable: true
    };
  }

  function buildPdfFigureCaption(node) {
    const caption = normalizeText(node.textContent || '');
    if (!caption) {
      return null;
    }
    return {
      text: formatPdfTextWithEmoji(caption),
      fontSize: 8,
      color: '#64748b',
      italics: true,
      alignment: 'center',
      margin: [0, -2, 0, 4]
    };
  }

  function isDeepSeekScrollChromeNode(node) {
    if (platform !== 'deepseek' || !node || node.nodeType !== Node.ELEMENT_NODE || !node.matches) {
      return false;
    }
    return node.matches('.ds-scroll-area__gutters, .ds-scroll-area__horizontal-gutter, .ds-scroll-area__vertical-gutter, .ds-scroll-area__horizontal-bar, .ds-scroll-area__vertical-bar');
  }

  function isGrokInlineCodeLikeElement(node) {
    if (!node || !node.className || platform !== 'grok') {
      return false;
    }
    const className = ensureString(node.className);
    return (
      className.includes('!font-mono') &&
      className.includes('rounded-sm') &&
      (className.includes('bg-orange-400/10') || className.includes('dark:bg-orange-300/10')) &&
      (className.includes('text-orange-500') || className.includes('dark:text-orange-300'))
    );
  }

  function buildPdfImageNode(node) {
    const src = normalizeImageSource(node);
    if (!src || !/^data:image\/(?:png|jpe?g);/i.test(src)) {
      return null;
    }
    const width = Number(node.getAttribute('width')) || Number(node.naturalWidth) || 0;
    const height = Number(node.getAttribute('height')) || Number(node.naturalHeight) || 0;
    const maxWidth = 430;
    const maxHeight = 360;
    const imageNode = {
      image: src,
      fit: [maxWidth, maxHeight],
      alignment: 'center',
      margin: [0, 4, 0, 6]
    };
    if (width > 0 && height > 0) {
      const ratio = width / height;
      if (ratio > 0 && ratio < 0.75) {
        imageNode.fit = [320, maxHeight];
      } else if (ratio > 1.65) {
        imageNode.fit = [maxWidth, 260];
      }
    }
    return imageNode;
  }

  function buildInlineCodeTextStyle(text, options) {
    const opts = options || {};
    const raw = ensureString(text).replace(/\r\n/g, '\n');
    const styled = {
      text: formatPdfTextWithEmoji(raw),
      font: 'monospace',
      fontSize: 9,
      color: '#1f2937',
      background: '#eef2ff'
    };
    styled.noWrap = false;
    if (opts.preserveLeadingSpaces || raw.includes('\n')) {
      styled.preserveLeadingSpaces = true;
    }
    return styled;
  }

  function withParagraphBreak(parts, fallbackText) {
    const inline = forceInlinePdfText(parts, fallbackText);
    return {
      stack: [inline],
      margin: [0, 0, 0, 6]
    };
  }

  function withParagraphContent(parts, fallbackText) {
    const flattened = flattenPdfParts(parts).filter(Boolean);
    const hasBlockChildren = flattened.some((part) => !isInlinePdfTextPart(part));
    if (!hasBlockChildren) {
      return withParagraphBreak(flattened, fallbackText);
    }
    const stack = composeMixedPdfStack(flattened, fallbackText);
    return {
      stack: stack.length ? stack : [{ text: '' }],
      margin: [0, 0, 0, 6]
    };
  }

  function getDirectListItems(listNode) {
    if (!listNode) {
      return [];
    }
    return Array.from(listNode.children || []).filter((child) => {
      return child && child.tagName && child.tagName.toLowerCase() === 'li';
    });
  }

  function buildStructuredPdfList(listNode, isOrdered) {
    const items = getDirectListItems(listNode);
    if (!items.length) {
      return null;
    }

    const start = getOrderedListStart(listNode);
    const listItems = items.map((li, index) => {
      const marker = isOrdered ? `${start + index}.` : '•';
      const stack = buildListItemStackFromNode(li);
      return buildPdfSelectableListItem(marker, stack, isOrdered);
    });

    return {
      stack: listItems,
      margin: [0, 2, 0, 2]
    };
  }

  function buildPdfSelectableListItem(marker, stack, isOrdered) {
    const content = stack && stack.length ? stack : [{ text: '' }];
    const normalizedContent = content.map(normalizePdfSelectableListItemPart).filter(Boolean);
    const hangingIndent = getPdfListHangingIndent(marker);
    const first = normalizedContent[0] || { text: '' };
    const rest = normalizedContent.slice(1).map((entry) => addPdfListContinuationIndent(entry, hangingIndent));

    if (isInlinePdfTextPart(first)) {
      const firstLine = Object.assign({}, first, {
        text: prefixPdfSelectableListText(marker, first.text, isOrdered),
        fontSize: first.fontSize || 11,
        lineHeight: first.lineHeight || 1.25,
        noWrap: false,
        margin: [hangingIndent, 0, 0, 0],
        leadingIndent: -hangingIndent
      });
      if (!rest.length) {
        firstLine.margin = [hangingIndent, 0, 0, 1];
        return firstLine;
      }
      return {
        stack: [firstLine, ...rest],
        margin: [0, 0, 0, 1]
      };
    }

    return {
      stack: [
        {
          text: prefixPdfSelectableListText(marker, '', isOrdered),
          fontSize: 11,
          lineHeight: 1.25,
          margin: [hangingIndent, 0, 0, 0],
          leadingIndent: -hangingIndent
        },
        addPdfListContinuationIndent(first, hangingIndent),
        ...rest
      ],
      margin: [0, 0, 0, 1]
    };
  }

  function normalizePdfSelectableListItemPart(entry) {
    if (!entry || typeof entry !== 'object') {
      return entry;
    }
    if (!isInlinePdfTextPart(entry)) {
      return entry;
    }
    return Object.assign({}, entry, {
      fontSize: entry.fontSize || 11,
      lineHeight: entry.lineHeight || 1.25,
      noWrap: false
    });
  }

  function prefixPdfSelectableListText(marker, textValue, isOrdered) {
    const markerPart = {
      text: `${marker} `,
      bold: Boolean(isOrdered),
      color: '#334155',
      fontSize: 11,
      lineHeight: 1.25,
      noWrap: true
    };
    if (Array.isArray(textValue)) {
      return [markerPart, ...textValue];
    }
    return [markerPart, { text: textValue || '' }];
  }

  function addPdfListContinuationIndent(entry, hangingIndent) {
    if (!entry || typeof entry !== 'object') {
      return entry;
    }
    const next = Object.assign({}, entry);
    const margin = Array.isArray(next.margin) ? next.margin.slice() : [0, 1, 0, 1];
    margin[0] = Math.max(Number(margin[0]) || 0, hangingIndent);
    next.margin = margin;
    return next;
  }

  function getPdfListHangingIndent(marker) {
    const length = ensureString(marker).length;
    return Math.max(9, Math.min(30, length * 4.4 + 4));
  }

  function getOrderedListStart(listNode) {
    if (!listNode || !listNode.getAttribute) {
      return 1;
    }
    const raw = listNode.getAttribute('start');
    if (!raw) {
      return 1;
    }
    const value = Number.parseInt(raw, 10);
    return Number.isFinite(value) ? value : 1;
  }

  function buildListItemStackFromNode(liNode) {
    const parts = [];
    Array.from(liNode.childNodes || []).forEach((child) => {
      const isParagraphNode =
        child &&
        child.nodeType === Node.ELEMENT_NODE &&
        child.tagName &&
        child.tagName.toLowerCase() === 'p';

      if (isParagraphNode) {
        Array.from(child.childNodes || []).forEach((paragraphChild) => {
          const parsed = parseNodeRecursive(paragraphChild);
          if (!parsed) {
            return;
          }
          if (Array.isArray(parsed)) {
            parts.push(...parsed);
          } else {
            parts.push(parsed);
          }
        });
        return;
      }

      const parsed = parseNodeRecursive(child);
      if (!parsed) {
        return;
      }
      if (Array.isArray(parsed)) {
        parts.push(...parsed);
      } else {
        parts.push(parsed);
      }
    });

    const mixed = composeMixedPdfStack(parts, liNode.textContent || '');
    return normalizeListItemStack(mixed);
  }

  function normalizeListItemStack(stack) {
    const items = Array.isArray(stack) ? stack : [];
    return items.map((item) => {
      if (!isParagraphStyleStack(item)) {
        return item;
      }
      if (item.stack.length === 1) {
        return item.stack[0];
      }
      return { stack: item.stack };
    }).filter(Boolean);
  }

  function isParagraphStyleStack(item) {
    if (!item || typeof item !== 'object' || !Array.isArray(item.stack)) {
      return false;
    }
    if (!Array.isArray(item.margin) || item.margin.length !== 4) {
      return false;
    }
    return item.margin[0] === 0 && item.margin[1] === 0 && item.margin[2] === 0 && item.margin[3] === 6;
  }

  function buildSpecialPdfCodeBlock(node) {
    if (!isSpecialCodeBlockElement(node)) {
      return null;
    }
    const codeText = extractCodeBlockText(node);
    if (!codeText) {
      return null;
    }
    const richCodeText =
      extractChatGptCodeRichInlines(node) ||
      extractGeminiCodeRichInlines(node) ||
      extractClaudeCodeRichInlines(node) ||
      extractGrokCodeRichInlines(node) ||
      extractDeepSeekCodeRichInlines(node);
    const language = extractCodeBlockLanguage(node) || 'Code';
    const headerLabel = language;
    return {
      table: {
        widths: [5, '*'],
        body: [
          [
            { text: '', fillColor: '#0ea5e9', border: [false, false, false, false] },
            {
              text: headerLabel,
              style: 'codeBlockHeader',
              fillColor: '#0f172a',
              border: [false, false, false, false]
            }
          ],
          [
            { text: '', fillColor: '#334155', border: [false, false, false, false] },
            {
              text: richCodeText || formatPdfTextWithEmoji(codeText),
              style: 'codeBlockBody',
              preserveLeadingSpaces: true,
              fillColor: '#1f2937',
              border: [false, false, false, false]
            }
          ]
        ]
      },
      layout: {
        hLineWidth: () => 0,
        vLineWidth: () => 0,
        paddingLeft: (i) => (i === 0 ? 0 : 12),
        paddingRight: () => 12,
        paddingTop: (i) => (i === 0 ? 8 : 10),
        paddingBottom: (i) => (i === 0 ? 7 : 10)
      },
      margin: [0, 8, 0, 12]
    };
  }

  function extractChatGptCodeRichInlines(node) {
    if (platform !== 'chatgpt' || !node || !node.querySelector) {
      return null;
    }
    const cmContent = node.querySelector('.cm-content');
    if (!cmContent) {
      return null;
    }
    const defaultColor = normalizePdfColorValue(
      ensureString(window.getComputedStyle(cmContent).color)
    ) || PDF_CODE_DEFAULT_TEXT_COLOR;
    const parts = [];
    appendChatGptCodeInlinesFromNode(cmContent, defaultColor, parts);
    const merged = mergeCodeRichInlines(parts);
    return merged.length ? merged : null;
  }

  function appendChatGptCodeInlinesFromNode(node, inheritedColor, out) {
    if (!node) {
      return;
    }
    if (node.nodeType === Node.TEXT_NODE) {
      appendChatGptCodeTextInline(node, inheritedColor, out);
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) {
      return;
    }

    const tagName = (node.tagName || '').toLowerCase();
    const nextColor = resolveChatGptCodeInlineColor(node, tagName, inheritedColor);

    if (tagName === 'br') {
      out.push({ text: '\n', color: nextColor });
      return;
    }

    if (appendChatGptCmLines(node, tagName, nextColor, out)) {
      return;
    }

    Array.from(node.childNodes || []).forEach((child) => {
      appendChatGptCodeInlinesFromNode(child, nextColor, out);
    });
  }

  function appendChatGptCodeTextInline(node, inheritedColor, out) {
    const text = node.textContent || '';
    if (!text) {
      return;
    }
    out.push({
      text: text,
      color: inheritedColor || PDF_CODE_DEFAULT_TEXT_COLOR
    });
  }

  function resolveChatGptCodeInlineColor(node, tagName, inheritedColor) {
    const fallbackColor = inheritedColor || PDF_CODE_DEFAULT_TEXT_COLOR;
    if (tagName !== 'span') {
      return fallbackColor;
    }
    return normalizePdfColorValue(
      ensureString(window.getComputedStyle(node).color)
    ) || fallbackColor;
  }

  function appendChatGptCmLines(node, tagName, nextColor, out) {
    if (tagName !== 'div' || !node.classList || !node.classList.contains('cm-content')) {
      return false;
    }
    const cmLines = Array.from(node.children || []).filter((child) => {
      return child && child.classList && child.classList.contains('cm-line');
    });
    if (!cmLines.length) {
      return false;
    }
    cmLines.forEach((lineNode, index) => {
      appendChatGptCodeInlinesFromNode(lineNode, nextColor, out);
      if (index < cmLines.length - 1) {
        out.push({ text: '\n', color: nextColor });
      }
    });
    return true;
  }

  function extractClaudeCodeRichInlines(node) {
    if (platform !== 'claude' || !node || !node.querySelector) {
      return null;
    }
    const codeRoot =
      querySelectorScoped(node, ':scope > .overflow-x-auto > pre > code') ||
      querySelectorScoped(node, ':scope > pre > code') ||
      node.querySelector('pre.code-block__code > code') ||
      node.querySelector('pre code');
    if (!codeRoot) {
      return null;
    }

    const defaultColor = resolveInlineColorFromStyleAttr(codeRoot) || PDF_CODE_DEFAULT_TEXT_COLOR;
    const parts = [];
    appendClaudeCodeInlinesFromNode(codeRoot, defaultColor, parts);
    const merged = mergeCodeRichInlines(parts);
    return merged.length ? merged : null;
  }

  function extractGeminiCodeRichInlines(node) {
    if (platform !== 'gemini' || !node || !node.querySelector) {
      return null;
    }
    const codeRoot =
      querySelectorScoped(node, ':scope > .code-block > .formatted-code-block-internal-container > pre > code[data-test-id="code-content"]') ||
      querySelectorScoped(node, ':scope > .formatted-code-block-internal-container > pre > code[data-test-id="code-content"]') ||
      querySelectorScoped(node, ':scope > pre > code[data-test-id="code-content"]') ||
      node.querySelector('code[data-test-id="code-content"]') ||
      querySelectorScoped(node, ':scope > pre > code') ||
      node.querySelector('pre code');
    if (!codeRoot) {
      return null;
    }

    const computedDefaultColor = normalizePdfColorValue(
      ensureString(window.getComputedStyle(codeRoot).color)
    );
    const defaultColor = computedDefaultColor && computedDefaultColor !== '#000000'
      ? computedDefaultColor
      : PDF_CODE_DEFAULT_TEXT_COLOR;
    const parts = [];
    appendGeminiCodeInlinesFromNode(codeRoot, defaultColor, parts);
    const merged = mergeCodeRichInlines(parts);
    return merged.length ? merged : null;
  }

  function extractGrokCodeRichInlines(node) {
    if (platform !== 'grok' || !node || !node.querySelector) {
      return null;
    }
    const codeRoot =
      querySelectorScoped(node, ':scope > .overflow-x-auto > pre > code') ||
      querySelectorScoped(node, ':scope > pre > code') ||
      node.querySelector('pre code');
    if (!codeRoot) {
      return null;
    }

    const defaultColor = resolveInlineColorFromStyleAttr(codeRoot) || PDF_CODE_DEFAULT_TEXT_COLOR;
    const parts = [];
    const lines = Array.from(codeRoot.querySelectorAll(':scope > span.line'));
    if (lines.length) {
      lines.forEach((lineNode, index) => {
        appendGrokCodeInlinesFromNode(lineNode, defaultColor, parts);
        if (index < lines.length - 1) {
          parts.push({ text: '\n', color: defaultColor });
        }
      });
    } else {
      appendGrokCodeInlinesFromNode(codeRoot, defaultColor, parts);
    }

    const merged = mergeCodeRichInlines(parts);
    return merged.length ? merged : null;
  }

  function extractDeepSeekCodeRichInlines(node) {
    if (platform !== 'deepseek' || !node || !node.querySelector) {
      return null;
    }
    const tagName = ensureString(node.tagName).toLowerCase();
    const deepSeekContainer = (node.closest && node.closest('.md-code-block')) || node;
    const codeRoot =
      (tagName === 'code' || tagName === 'pre' ? node : null) ||
      querySelectorScoped(deepSeekContainer, ':scope > pre') ||
      querySelectorScoped(node, ':scope > pre > code') ||
      querySelectorScoped(node, ':scope > pre') ||
      node.querySelector('pre code') ||
      node.querySelector('pre') ||
      node.querySelector('code');
    if (!codeRoot) {
      return null;
    }

    const computedDefaultColor = normalizePdfColorValue(
      ensureString(window.getComputedStyle(codeRoot).color)
    );
    const defaultColor = computedDefaultColor && computedDefaultColor !== '#000000'
      ? computedDefaultColor
      : PDF_CODE_DEFAULT_TEXT_COLOR;
    const parts = [];
    const directSpanChildren = Array.from(codeRoot.childNodes || []).filter((child) => {
      return child && child.nodeType === Node.ELEMENT_NODE && ensureString(child.tagName).toLowerCase() === 'span';
    });
    const allChildrenAreSpans =
      directSpanChildren.length > 0 &&
      directSpanChildren.length === (codeRoot.childNodes || []).length;
    if (allChildrenAreSpans) {
      directSpanChildren.forEach((lineNode, index) => {
        appendDeepSeekCodeInlinesFromNode(lineNode, defaultColor, parts);
        if (index < directSpanChildren.length - 1) {
          parts.push({ text: '\n', color: defaultColor });
        }
      });
    } else {
      appendDeepSeekCodeInlinesFromNode(codeRoot, defaultColor, parts);
    }
    const merged = mergeCodeRichInlines(parts);
    return merged.length ? merged : null;
  }

  function appendClaudeCodeInlinesFromNode(node, inheritedColor, out) {
    if (!node) {
      return;
    }
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent || '';
      if (!text) {
        return;
      }
      out.push({
        text: text,
        color: inheritedColor || PDF_CODE_DEFAULT_TEXT_COLOR
      });
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) {
      return;
    }

    const tagName = (node.tagName || '').toLowerCase();
    const inlineColor = resolveInlineColorFromStyleAttr(node);
    const nextColor = inlineColor || inheritedColor || PDF_CODE_DEFAULT_TEXT_COLOR;

    if (tagName === 'br') {
      out.push({
        text: '\n',
        color: nextColor
      });
      return;
    }

    Array.from(node.childNodes || []).forEach((child) => {
      appendClaudeCodeInlinesFromNode(child, nextColor, out);
    });
  }

  function appendGrokCodeInlinesFromNode(node, inheritedColor, out) {
    if (!node) {
      return;
    }
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent || '';
      if (!text) {
        return;
      }
      out.push({
        text: text,
        color: inheritedColor || PDF_CODE_DEFAULT_TEXT_COLOR
      });
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) {
      return;
    }

    const tagName = (node.tagName || '').toLowerCase();
    const inlineColor = resolveInlineColorFromStyleAttr(node);
    const nextColor = inlineColor || inheritedColor || PDF_CODE_DEFAULT_TEXT_COLOR;

    if (tagName === 'br') {
      out.push({
        text: '\n',
        color: nextColor
      });
      return;
    }

    Array.from(node.childNodes || []).forEach((child) => {
      appendGrokCodeInlinesFromNode(child, nextColor, out);
    });
  }

  function appendGeminiCodeInlinesFromNode(node, inheritedColor, out) {
    if (!node) {
      return;
    }
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent || '';
      if (!text) {
        return;
      }
      out.push({
        text: text,
        color: resolveCodeInlineColor(inheritedColor),
        bold: Boolean(inheritedColor && inheritedColor.bold),
        italics: Boolean(inheritedColor && inheritedColor.italics)
      });
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) {
      return;
    }

    const tagName = (node.tagName || '').toLowerCase();
    let nextStyle = resolveCodeInlineStyle(inheritedColor);
    const className = ensureString(node.className);
    if (/(?:^|\s)hljs-[\w-]+(?:\s|$)/.test(className)) {
      const tokenStyle = resolveGeminiHljsTokenStyle(className);
      if (tokenStyle) {
        nextStyle = Object.assign({}, nextStyle, tokenStyle);
      }
      const computedColor = normalizePdfColorValue(
        ensureString(window.getComputedStyle(node).color)
      );
      if (computedColor && computedColor !== '#000000') {
        nextStyle.color = computedColor;
      }
    }

    if (tagName === 'br') {
      out.push({
        text: '\n',
        color: resolveCodeInlineColor(nextStyle),
        bold: Boolean(nextStyle.bold),
        italics: Boolean(nextStyle.italics)
      });
      return;
    }

    Array.from(node.childNodes || []).forEach((child) => {
      appendGeminiCodeInlinesFromNode(child, nextStyle, out);
    });
  }

  function resolveGeminiHljsTokenStyle(className) {
    const classes = ensureString(className).split(/\s+/).filter(Boolean);
    for (const classEntry of classes) {
      const match = classEntry.match(/^hljs-(.+)$/);
      if (!match || !match[1]) {
        continue;
      }
      const tokenName = match[1].replace(/-/g, '_');
      if (PDF_GEMINI_HLJS_TOKEN_STYLES[tokenName]) {
        return PDF_GEMINI_HLJS_TOKEN_STYLES[tokenName];
      }
    }
    return null;
  }

  function resolveCodeInlineStyle(styleOrColor) {
    if (styleOrColor && typeof styleOrColor === 'object') {
      return {
        color: resolveCodeInlineColor(styleOrColor),
        bold: Boolean(styleOrColor.bold),
        italics: Boolean(styleOrColor.italics)
      };
    }
    return {
      color: resolveCodeInlineColor(styleOrColor),
      bold: false,
      italics: false
    };
  }

  function resolveCodeInlineColor(styleOrColor) {
    if (styleOrColor && typeof styleOrColor === 'object') {
      return styleOrColor.color || PDF_CODE_DEFAULT_TEXT_COLOR;
    }
    return styleOrColor || PDF_CODE_DEFAULT_TEXT_COLOR;
  }

  function appendDeepSeekCodeInlinesFromNode(node, inheritedColor, out) {
    if (!node) {
      return;
    }
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent || '';
      if (!text) {
        return;
      }
      out.push({
        text: text,
        color: resolveCodeInlineColor(inheritedColor),
        bold: Boolean(inheritedColor && inheritedColor.bold),
        italics: Boolean(inheritedColor && inheritedColor.italics)
      });
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) {
      return;
    }

    const tagName = (node.tagName || '').toLowerCase();
    let nextStyle = resolveCodeInlineStyle(inheritedColor);
    if (tagName === 'span') {
      const className = ensureString(node.className);
      const hasPrismTokenClass = /(?:^|\s)token(?:\s|$)/.test(className);
      if (hasPrismTokenClass) {
        const tokenStyle = resolvePrismTokenStyle(className);
        if (tokenStyle) {
          nextStyle = Object.assign({}, nextStyle, tokenStyle);
        }
      }
      if (hasPrismTokenClass || className) {
        const computedColor = normalizePdfColorValue(
          ensureString(window.getComputedStyle(node).color)
        );
        if (computedColor && computedColor !== '#000000') {
          nextStyle.color = computedColor;
        }
      }
    }

    if (tagName === 'br') {
      out.push({
        text: '\n',
        color: resolveCodeInlineColor(nextStyle),
        bold: Boolean(nextStyle.bold),
        italics: Boolean(nextStyle.italics)
      });
      return;
    }

    Array.from(node.childNodes || []).forEach((child) => {
      appendDeepSeekCodeInlinesFromNode(child, nextStyle, out);
    });
  }

  function resolvePrismTokenStyle(className) {
    const classes = ensureString(className).split(/\s+/).filter(Boolean);
    for (const classEntry of classes) {
      if (classEntry === 'token') {
        continue;
      }
      const tokenName = classEntry.replace(/-/g, '_');
      if (PDF_PRISM_TOKEN_STYLES[tokenName]) {
        return PDF_PRISM_TOKEN_STYLES[tokenName];
      }
    }
    return null;
  }

  function resolveInlineColorFromStyleAttr(node) {
    if (!node || !node.getAttribute) {
      return '';
    }
    const styleAttr = ensureString(node.getAttribute('style'));
    if (styleAttr) {
      const match = styleAttr.match(/(?:^|;)\s*color\s*:\s*([^;]+)/i);
      if (match && match[1]) {
        const normalized = normalizePdfColorValue(match[1]);
        if (normalized) {
          return normalized;
        }
      }
    }
    const inlineStyleColor = ensureString(node.style && node.style.color).trim();
    const normalizedInline = normalizePdfColorValue(inlineStyleColor);
    if (normalizedInline) {
      return normalizedInline;
    }
    try {
      const computedColor = ensureString(window.getComputedStyle(node).color).trim();
      return normalizePdfColorValue(computedColor);
    } catch (err) {
      return '';
    }
  }

  function normalizePdfColorValue(colorValue) {
    const raw = ensureString(colorValue).trim();
    if (!raw) {
      return '';
    }
    const hexMatch = raw.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
    if (hexMatch) {
      if (hexMatch[1].length === 3) {
        const shortHex = hexMatch[1].toLowerCase();
        return `#${shortHex[0]}${shortHex[0]}${shortHex[1]}${shortHex[1]}${shortHex[2]}${shortHex[2]}`;
      }
      return `#${hexMatch[1].toLowerCase()}`;
    }
    const rgbMatch = raw.match(/^rgba?\(([^)]+)\)$/i);
    if (!rgbMatch) {
      return '';
    }
    const channels = rgbMatch[1]
      .split(/[,\s/]+/)
      .map((entry) => entry.trim())
      .filter(Boolean);
    if (channels.length < 3) {
      return '';
    }
    const r = normalizeRgbChannel(channels[0]);
    const g = normalizeRgbChannel(channels[1]);
    const b = normalizeRgbChannel(channels[2]);
    if (r === null || g === null || b === null) {
      return '';
    }
    return `#${channelToHex(r)}${channelToHex(g)}${channelToHex(b)}`;
  }

  function normalizeRgbChannel(value) {
    const raw = ensureString(value).trim();
    if (!raw) {
      return null;
    }
    if (raw.endsWith('%')) {
      const percentage = Number.parseFloat(raw.slice(0, -1));
      if (!Number.isFinite(percentage)) {
        return null;
      }
      const scaled = Math.round((Math.max(0, Math.min(100, percentage)) / 100) * 255);
      return scaled;
    }
    const numeric = Number.parseFloat(raw);
    if (!Number.isFinite(numeric)) {
      return null;
    }
    return Math.max(0, Math.min(255, Math.round(numeric)));
  }

  function channelToHex(value) {
    return value.toString(16).padStart(2, '0');
  }

  function mergeCodeRichInlines(parts) {
    const merged = [];
    (parts || []).forEach((part) => {
      if (!part || typeof part.text !== 'string' || !part.text) {
        return;
      }
      const previous = merged[merged.length - 1];
      if (
        previous &&
        previous.color === part.color &&
        Boolean(previous.bold) === Boolean(part.bold) &&
        Boolean(previous.italics) === Boolean(part.italics) &&
        previous.text !== '\n' &&
        part.text !== '\n'
      ) {
        previous.text += part.text;
        return;
      }
      const mergedPart = {
        text: part.text,
        color: part.color || PDF_CODE_DEFAULT_TEXT_COLOR
      };
      if (part.bold) {
        mergedPart.bold = true;
      }
      if (part.italics) {
        mergedPart.italics = true;
      }
      merged.push(mergedPart);
    });
    return merged;
  }

  function isSpecialCodeBlockElement(node) {
    if (!node || !node.matches) {
      return false;
    }
    const className = ensureString(node.className);
    if (node.matches('div[data-testid="code-block"]')) {
      return true; // Grok
    }
    if (node.matches('pre[data-start][data-end]')) {
      return true; // ChatGPT
    }
    if (node.matches('#code-block-viewer')) {
      return true; // ChatGPT
    }
    if (
      platform === 'deepseek' &&
      node.matches('pre, code') &&
      (
        node.querySelector('span.token, span[class*="token "]') ||
        /(?:^|\s)language-[\w+.-]+(?:\s|$)/i.test(ensureString(node.className))
      )
    ) {
      return true; // DeepSeek
    }
    if (
      node.matches('code-block, div.code-block') &&
      (
        node.querySelector('code[data-test-id="code-content"]') ||
        node.querySelector('.formatted-code-block-internal-container pre code')
      )
    ) {
      return true; // Gemini
    }
    if (node.matches('div.md-code-block, div[class*="md-code-block"]')) {
      return true; // DeepSeek
    }
    if (
      className.includes('group/copy') &&
      (node.querySelector('pre.code-block__code') || node.querySelector('code.language-javascript, code[class*="language-"]'))
    ) {
      return true; // Claude
    }
    return false;
  }

  function extractCodeBlockLanguage(node) {
    const platformLanguage = extractPlatformCodeBlockLanguage(node);
    if (platformLanguage) {
      return platformLanguage;
    }
    return extractGenericCodeBlockLanguage(node);
  }

  function extractPlatformCodeBlockLanguage(node) {
    if (platform === 'chatgpt') {
      return extractTextFromFirstNode(node, [
        'div.text-token-text-primary',
        '.text-token-text-primary'
      ]);
    }
    if (platform === 'gemini') {
      return extractTextFromFirstNode(node, [
        ':scope > .code-block > .code-block-decoration span',
        ':scope > .code-block-decoration span',
        '.code-block-decoration.header-formatted span',
        '.code-block-decoration span',
        '.code-block-decoration'
      ]);
    }
    if (platform === 'deepseek') {
      const deepSeekContainer = (node.closest && node.closest('.md-code-block')) || node;
      return extractDeepSeekCodeLanguage(deepSeekContainer);
    }
    return '';
  }

  function extractTextFromFirstNode(root, selectors) {
    for (const selector of selectors) {
      const node = selector.startsWith(':scope')
        ? querySelectorScoped(root, selector)
        : root.querySelector(selector);
      const value = node ? normalizeText(node.textContent || '') : '';
      if (value) {
        return value;
      }
    }
    return '';
  }

  function extractGenericCodeBlockLanguage(node) {
    const explicitLanguage = extractTextFromFirstNode(node, [
      '.code-block-decoration span',
      '.text-text-500',
      '.md-code-block-banner .d813de27',
      '.md-code-block-banner [class*="d813de27"]',
      '[class*="code-info-language"]'
    ]);
    if (explicitLanguage) {
      return explicitLanguage;
    }
    return extractLanguageFromCodeClass(node) || extractLanguageFromCodeLabels(node);
  }

  function extractLanguageFromCodeClass(node) {
    const codeClassSource = node.querySelector('pre code, code');
    const classMatch = codeClassSource && codeClassSource.className
      ? String(codeClassSource.className).match(/(?:^|\s)language-([a-z0-9_+.-]+)/i)
      : null;
    return classMatch && classMatch[1] ? classMatch[1] : '';
  }

  function extractLanguageFromCodeLabels(node) {
    const labels = Array.from(node.querySelectorAll('span, div'))
      .filter((el) => !el.closest('pre, code, .cm-content, .cm-line'))
      .map((el) => normalizeText(el.textContent || ''))
      .filter(Boolean);
    return labels.find(isUsableCodeLanguageLabel) || '';
  }

  function isUsableCodeLanguageLabel(label) {
    const blocked = new Set(['Copier', 'Copy', 'Envelopper', 'Wrap', 'Exécuter', 'Run', 'Download', 'Télécharger']);
    return !blocked.has(label) &&
      label.length >= 2 &&
      label.length <= 24 &&
      /^[A-Za-z][A-Za-z0-9+#.\- ]*$/.test(label);
  }

  function extractDeepSeekCodeLanguage(node) {
    if (!node || !node.querySelector) {
      return '';
    }
    const container = (node.closest && node.closest('.md-code-block')) || node;
    const banner = container.querySelector('.md-code-block-banner') ||
      container.querySelector('.md-code-block-banner-wrap') ||
      container;
    const languageNodes = [
      querySelectorScoped(banner, ':scope .d813de27'),
      querySelectorScoped(banner, ':scope [class*="d813de27"]'),
      querySelectorScoped(banner, ':scope [class*="code-info-language"]'),
      querySelectorScoped(banner, ':scope span:first-child')
    ].filter(Boolean);

    for (const languageNode of languageNodes) {
      const value = normalizeDeepSeekLanguageLabel(languageNode.textContent || '');
      if (value) {
        return value;
      }
    }

    const preOrCode = container.querySelector('pre[class*="language-"], code[class*="language-"]');
    if (preOrCode) {
      const classMatch = ensureString(preOrCode.className).match(/(?:^|\s)language-([a-z0-9_+.-]+)/i);
      if (classMatch && classMatch[1]) {
        return normalizeDeepSeekLanguageLabel(classMatch[1]);
      }
    }

    return '';
  }

  function normalizeDeepSeekLanguageLabel(value) {
    const normalized = normalizeText(value || '')
      .replace(/\b(Copy|Download|Copier|Télécharger)\b/gi, '')
      .trim();
    if (!normalized || /^(text|plain\s*text)$/i.test(normalized)) {
      return '';
    }
    if (!/^[A-Za-z][A-Za-z0-9+#.\- ]{0,31}$/.test(normalized)) {
      return '';
    }
    return normalized;
  }

  function extractCodeBlockText(node) {
    const geminiCodeNode =
      querySelectorScoped(node, ':scope > .code-block > .formatted-code-block-internal-container > pre > code[data-test-id="code-content"]') ||
      querySelectorScoped(node, ':scope > .formatted-code-block-internal-container > pre > code[data-test-id="code-content"]') ||
      querySelectorScoped(node, ':scope > pre > code[data-test-id="code-content"]') ||
      node.querySelector('code[data-test-id="code-content"]');
    if (geminiCodeNode) {
      return normalizeCodeText(geminiCodeNode.innerText || geminiCodeNode.textContent || '');
    }

    const scopedCodeNode =
      querySelectorScoped(node, ':scope > .overflow-x-auto > pre > code') ||
      querySelectorScoped(node, ':scope > pre > code') ||
      node.querySelector('pre.code-block__code > code') ||
      node.querySelector('pre code');
    if (scopedCodeNode) {
      const lines = Array.from(scopedCodeNode.querySelectorAll(':scope > span.line'));
      if (lines.length) {
        return normalizeCodeText(lines.map((line) => line.textContent || '').join('\n'));
      }
      return normalizeCodeText(scopedCodeNode.innerText || scopedCodeNode.textContent || '');
    }

    const cmContent = node.querySelector('.cm-content');
    if (cmContent) {
      return normalizeCodeText(cmContent.innerText || cmContent.textContent || '');
    }

    const scopedPre =
      querySelectorScoped(node, ':scope > .overflow-x-auto > pre') ||
      querySelectorScoped(node, ':scope > pre') ||
      node.querySelector('pre.code-block__code') ||
      node.querySelector('pre');
    if (scopedPre) {
      return normalizeCodeText(scopedPre.innerText || scopedPre.textContent || '');
    }

    return normalizeCodeText(node.innerText || node.textContent || '');
  }

  function querySelectorScoped(node, selector) {
    try {
      return node.querySelector(selector);
    } catch (err) {
      return null;
    }
  }

  function normalizeCodeText(value) {
    return ensureString(value)
      .replace(/\r\n/g, '\n')
      .replace(/\u00a0/g, ' ')
      .replace(/\n{3,}/g, '\n\n')
      .replace(/\s+$/g, '');
  }

  function forceInlinePdfText(parts, fallbackText) {
    const inline = buildInlinePdfText(parts);
    if (inline) {
      return inline;
    }
    const raw = ensureString(fallbackText)
      .replace(/\s*\n+\s*/g, ' ')
      .replace(/[ \t]{2,}/g, ' ')
      .trim();
    return { text: formatPdfTextWithEmoji(raw) };
  }

  function buildListItemPdfContent(parts, fallbackText) {
    const flattened = flattenPdfParts(parts).filter(Boolean);
    const hasBlockChildren = flattened.some((part) => !isInlinePdfTextPart(part));
    if (!hasBlockChildren) {
      return forceInlinePdfText(flattened, fallbackText);
    }
    const stack = composeMixedPdfStack(flattened, fallbackText);
    if (stack.length === 1) {
      return stack[0];
    }
    return { stack: stack };
  }

  function composeMixedPdfStack(parts, fallbackText) {
    const flattened = flattenPdfParts(parts).filter(Boolean);
    const stack = [];
    let inlineBuffer = [];

    const flushInline = () => {
      if (!inlineBuffer.length) {
        return;
      }
      const inline = buildInlinePdfText(inlineBuffer);
      if (inline) {
        stack.push(inline);
      } else {
        const fallbackInlineText = normalizeText(extractPlainTextFromPdfParts(inlineBuffer));
        if (fallbackInlineText) {
          stack.push({ text: formatPdfTextWithEmoji(fallbackInlineText) });
        }
      }
      inlineBuffer = [];
    };

    flattened.forEach((part) => {
      if (isInlinePdfTextPart(part)) {
        inlineBuffer.push(part);
        return;
      }
      flushInline();
      stack.push(part);
    });

    flushInline();

    if (!stack.length) {
      const raw = normalizeText(ensureString(fallbackText));
      if (raw) {
        stack.push({ text: formatPdfTextWithEmoji(raw) });
      }
    }

    return stack;
  }

  function extractPlainTextFromPdfParts(parts) {
    return (parts || [])
      .map((part) => extractPlainTextFromPdfValue(part))
      .join(' ');
  }

  function extractPlainTextFromPdfValue(value) {
    if (value === null || value === undefined) {
      return '';
    }
    if (typeof value === 'string') {
      return value;
    }
    if (Array.isArray(value)) {
      return value.map((entry) => extractPlainTextFromPdfValue(entry)).join('');
    }
    if (typeof value === 'object') {
      if (Object.prototype.hasOwnProperty.call(value, 'text')) {
        return extractPlainTextFromPdfValue(value.text);
      }
      return '';
    }
    return '';
  }

  function buildPdfTableFromHtmlTable(tableNode) {
    if (!tableNode || !tableNode.querySelectorAll) {
      return null;
    }
    let rows = [];
    try {
      rows = Array.from(tableNode.querySelectorAll(':scope > thead > tr, :scope > tbody > tr, :scope > tfoot > tr, :scope > tr'));
    } catch (err) {
      rows = Array.from(tableNode.querySelectorAll('tr'));
    }
    if (!rows.length) {
      return null;
    }

    const body = [];
    let maxCols = 0;

    rows.forEach((row, rowIndex) => {
      const cells = Array.from(row.children).filter((cell) => {
        const tag = (cell.tagName || '').toLowerCase();
        return tag === 'th' || tag === 'td';
      });
      if (!cells.length) {
        return;
      }
      maxCols = Math.max(maxCols, cells.length);
      const isHeaderRow = isTableHeaderRow(row, rowIndex);
      const mapped = cells.map((cell) => {
        const content = parseTableCellContent(cell);
        return {
          stack: Array.isArray(content) ? content : [content],
          fillColor: isHeaderRow ? '#f1f5f9' : '#ffffff',
          color: '#0f172a',
          bold: isHeaderRow
        };
      });
      body.push(mapped);
    });

    if (!body.length || !maxCols) {
      return null;
    }

    body.forEach((row) => {
      while (row.length < maxCols) {
        row.push({ text: '' });
      }
    });

    const compact = maxCols >= 5;
    return {
      table: {
        widths: buildPdfTableColumnWidths(maxCols),
        dontBreakRows: false,
        body: body
      },
      layout: {
        hLineWidth: () => 0.5,
        vLineWidth: () => 0.5,
        hLineColor: () => '#cbd5e1',
        vLineColor: () => '#cbd5e1',
        paddingLeft: () => (compact ? 4 : 6),
        paddingRight: () => (compact ? 4 : 6),
        paddingTop: () => (compact ? 4 : 5),
        paddingBottom: () => (compact ? 4 : 5)
      },
      fontSize: compact ? 7.5 : 8.5,
      margin: [0, 8, 0, 12]
    };
  }

  function buildPdfTableColumnWidths(columnCount) {
    const count = Math.max(1, Number(columnCount) || 1);
    if (count <= 4) {
      return new Array(count).fill('*');
    }
    const availableWidth = Math.max(220, PDF_CONTENT_WIDTH_PT - PDF_TABLE_SAFE_RIGHT_MARGIN_PT - 24);
    const columnWidth = Math.max(46, Math.floor(availableWidth / count));
    return new Array(count).fill(columnWidth);
  }

  function isTableHeaderRow(row, rowIndex) {
    const parentTag = ((row.parentElement && row.parentElement.tagName) || '').toLowerCase();
    if (parentTag === 'thead') {
      return true;
    }
    const cells = Array.from(row.children).filter((cell) => {
      const tag = (cell.tagName || '').toLowerCase();
      return tag === 'th' || tag === 'td';
    });
    if (!cells.length) {
      return false;
    }
    const allTh = cells.every((cell) => (cell.tagName || '').toLowerCase() === 'th');
    if (allTh) {
      return true;
    }
    return rowIndex === 0 && cells.some((cell) => (cell.tagName || '').toLowerCase() === 'th');
  }

  function parseTableCellContent(cell) {
    const parsed = parseNodeToPdfMake(cell);
    if (!parsed) {
      return { text: '' };
    }
    if (Array.isArray(parsed)) {
      const normalizedParts = normalizePdfTableCellContent(parsed);
      const inline = buildInlinePdfText(normalizedParts);
      if (inline) {
        return inline;
      }
      return { stack: Array.isArray(normalizedParts) ? normalizedParts : [normalizedParts] };
    }
    return normalizePdfTableCellContent(parsed);
  }

  function normalizePdfTableCellContent(content) {
    if (Array.isArray(content)) {
      return content.map((entry) => normalizePdfTableCellContent(entry)).filter(Boolean);
    }
    if (!content || typeof content !== 'object') {
      return content;
    }
    const next = Object.assign({}, content);
    if (Object.prototype.hasOwnProperty.call(next, 'text')) {
      next.text = normalizePdfTableCellTextValue(next.text);
      next.noWrap = false;
      if (next.font === 'monospace' && !next.fontSize) {
        next.fontSize = 7;
      }
    }
    if (Array.isArray(next.stack)) {
      next.stack = normalizePdfTableCellContent(next.stack);
    }
    if (Array.isArray(next.ul)) {
      next.ul = normalizePdfTableCellContent(next.ul);
    }
    if (Array.isArray(next.ol)) {
      next.ol = normalizePdfTableCellContent(next.ol);
    }
    if (Array.isArray(next.columns)) {
      next.columns = normalizePdfTableCellContent(next.columns);
    }
    return next;
  }

  function normalizePdfTableCellTextValue(value) {
    if (typeof value === 'string') {
      return addPdfTableBreakOpportunities(value);
    }
    if (Array.isArray(value)) {
      return value.map((entry) => normalizePdfTableCellTextValue(entry));
    }
    if (value && typeof value === 'object') {
      const next = Object.assign({}, value);
      if (Object.prototype.hasOwnProperty.call(next, 'text')) {
        next.text = normalizePdfTableCellTextValue(next.text);
        next.noWrap = false;
      }
      return next;
    }
    return value;
  }

  function addPdfTableBreakOpportunities(text) {
    return ensureString(text).replace(/([/._?=&:#-])/g, '$1\u200b');
  }

  function buildInlinePdfText(parts) {
    const flattened = flattenPdfParts(parts).filter(Boolean);
    if (!flattened.length) {
      return null;
    }
    const inlineParts = [];
    for (const part of flattened) {
      if (!isInlinePdfTextPart(part)) {
        return null;
      }
      const normalizedPart = normalizeInlinePdfPart(part);
      if (!normalizedPart.text && normalizedPart.text !== 0) {
        continue;
      }
      inlineParts.push(normalizedPart);
    }
    if (!inlineParts.length) {
      return null;
    }
    stabilizeInlineCodeSpacing(inlineParts);
    ensureGeminiInlineCodeTrailingSpaces(inlineParts);
    if (inlineParts.length === 1) {
      return inlineParts[0];
    }
    return { text: inlineParts };
  }

  function ensureGeminiInlineCodeTrailingSpaces(parts) {
    if (platform !== 'gemini' || !Array.isArray(parts) || !parts.length) {
      return;
    }
    for (let index = parts.length - 1; index >= 0; index -= 1) {
      const current = parts[index];
      if (!isInlineCodeStyledPart(current) || index >= parts.length - 1) {
        continue;
      }
      const next = parts[index + 1];
      const nextText = extractPlainTextFromPdfValue(next);
      if (!nextText || /^\s/.test(nextText) || /^[.,;:!?)}\]\u00bb]/.test(nextText)) {
        continue;
      }
      parts.splice(index + 1, 0, { text: ' ' });
    }
  }

  function stabilizeInlineCodeSpacing(parts) {
    for (let index = 0; index < parts.length; index += 1) {
      const current = parts[index];
      if (!isInlineCodeStyledPart(current)) {
        continue;
      }
      if (index > 0) {
        replaceTrailingSpaceWithNbsp(parts[index - 1]);
      }
      if (index < parts.length - 1) {
        replaceLeadingSpaceWithNbsp(parts[index + 1]);
      }
    }
  }

  function isInlineCodeStyledPart(part) {
    if (!part || typeof part !== 'object') {
      return false;
    }
    return (part.font === 'Courier' || part.font === 'monospace') && typeof part.background === 'string';
  }

  function replaceTrailingSpaceWithNbsp(part) {
    updateBoundarySpace(part, true);
  }

  function replaceLeadingSpaceWithNbsp(part) {
    updateBoundarySpace(part, false);
  }

  function updateBoundarySpace(value, fromEnd) {
    if (typeof value === 'string') {
      return fromEnd
        ? value.replace(/ $/, '\u00a0')
        : value.replace(/^ /, '\u00a0');
    }
    if (Array.isArray(value)) {
      if (!value.length) {
        return value;
      }
      if (fromEnd) {
        for (let i = value.length - 1; i >= 0; i -= 1) {
          const next = updateBoundarySpace(value[i], true);
          value[i] = next;
          if (valueHasVisibleText(next)) {
            break;
          }
        }
      } else {
        for (let i = 0; i < value.length; i += 1) {
          const next = updateBoundarySpace(value[i], false);
          value[i] = next;
          if (valueHasVisibleText(next)) {
            break;
          }
        }
      }
      return value;
    }
    if (value && typeof value === 'object' && Object.prototype.hasOwnProperty.call(value, 'text')) {
      value.text = updateBoundarySpace(value.text, fromEnd);
      return value;
    }
    return value;
  }

  function valueHasVisibleText(value) {
    if (typeof value === 'string') {
      return value.length > 0;
    }
    if (Array.isArray(value)) {
      return value.some((entry) => valueHasVisibleText(entry));
    }
    if (value && typeof value === 'object' && Object.prototype.hasOwnProperty.call(value, 'text')) {
      return valueHasVisibleText(value.text);
    }
    return false;
  }

  function normalizeInlinePdfPart(part) {
    const clone = Object.assign({}, part);
    clone.text = normalizeInlinePdfTextValue(clone.text, Boolean(clone.preserveLeadingSpaces));
    return clone;
  }

  function normalizeInlinePdfTextValue(value, keepWhitespace) {
    if (typeof value === 'string') {
      if (keepWhitespace) {
        return value;
      }
      return value
        .replace(/\s*\n+\s*/g, ' ')
        .replace(/[ \t]{2,}/g, ' ');
    }
    if (Array.isArray(value)) {
      return value.map((entry) => normalizeInlinePdfTextValue(entry, keepWhitespace));
    }
    if (value && typeof value === 'object' && Object.prototype.hasOwnProperty.call(value, 'text')) {
      const entry = Object.assign({}, value);
      entry.text = normalizeInlinePdfTextValue(
        entry.text,
        keepWhitespace || Boolean(entry.preserveLeadingSpaces)
      );
      return entry;
    }
    return value;
  }

  function flattenPdfParts(parts) {
    const output = [];
    (parts || []).forEach((part) => {
      if (!part) {
        return;
      }
      if (Array.isArray(part)) {
        output.push(...flattenPdfParts(part));
        return;
      }
      output.push(part);
    });
    return output;
  }

  function isInlinePdfTextPart(part) {
    if (!part || typeof part !== 'object') {
      return false;
    }
    if (!Object.prototype.hasOwnProperty.call(part, 'text')) {
      return false;
    }
    if (Object.prototype.hasOwnProperty.call(part, 'canvas')) {
      return false;
    }
    if (Object.prototype.hasOwnProperty.call(part, 'table')) {
      return false;
    }
    if (Object.prototype.hasOwnProperty.call(part, 'ul')) {
      return false;
    }
    if (Object.prototype.hasOwnProperty.call(part, 'ol')) {
      return false;
    }
    if (Object.prototype.hasOwnProperty.call(part, 'stack')) {
      return false;
    }
    if (Object.prototype.hasOwnProperty.call(part, 'columns')) {
      return false;
    }
    if (Object.prototype.hasOwnProperty.call(part, 'image')) {
      return false;
    }
    return true;
  }

  function normalizePdfContentForPlatform(content) {
    if (platform !== 'grok') {
      return content;
    }
    return normalizeGrokPdfContentNode(content, false);
  }

  function normalizePdfContentForMessageBox(content) {
    return normalizePdfMessageBoxNode(content, false);
  }

  function normalizePdfMessageBoxNode(node, inCodeBlock) {
    if (node === null || node === undefined) {
      return node;
    }
    if (typeof node === 'string') {
      return inCodeBlock ? addPdfCodeBreakOpportunities(node) : addPdfMessageBreakOpportunities(node);
    }
    if (Array.isArray(node)) {
      return node.map((entry) => normalizePdfMessageBoxNode(entry, inCodeBlock));
    }
    if (typeof node !== 'object') {
      return node;
    }

    const next = Object.assign({}, node);
    const thisIsCodeBlock = inCodeBlock || isPdfCodeBlockNode(next);
    if (Object.prototype.hasOwnProperty.call(next, 'text')) {
      next.text = normalizePdfMessageTextValue(next.text, thisIsCodeBlock);
      if (!thisIsCodeBlock) {
        next.noWrap = false;
      }
    }
    if (Array.isArray(next.stack)) {
      next.stack = next.stack.map((entry) => normalizePdfMessageBoxNode(entry, thisIsCodeBlock));
    }
    if (Array.isArray(next.ul)) {
      next.ul = next.ul.map((entry) => normalizePdfMessageBoxNode(entry, thisIsCodeBlock));
    }
    if (Array.isArray(next.ol)) {
      next.ol = next.ol.map((entry) => normalizePdfMessageBoxNode(entry, thisIsCodeBlock));
    }
    if (Array.isArray(next.columns)) {
      next.columns = next.columns.map((entry) => normalizePdfMessageBoxNode(entry, thisIsCodeBlock));
    }
    if (next.table && Array.isArray(next.table.body)) {
      next.table = Object.assign({}, next.table, {
        body: next.table.body.map((row) => {
          if (!Array.isArray(row)) {
            return row;
          }
          return row.map((cell) => normalizePdfMessageBoxNode(cell, thisIsCodeBlock));
        })
      });
    }
    return next;
  }

  function normalizePdfMessageTextValue(value, inCodeBlock) {
    if (value === null || value === undefined) {
      return value;
    }
    if (typeof value === 'string') {
      return inCodeBlock ? addPdfCodeBreakOpportunities(value) : addPdfMessageBreakOpportunities(value);
    }
    if (Array.isArray(value)) {
      return value.map((entry) => normalizePdfMessageTextValue(entry, inCodeBlock));
    }
    if (typeof value === 'object') {
      const next = Object.assign({}, value);
      const nestedCodeBlock = inCodeBlock || isPdfCodeBlockNode(next);
      if (Object.prototype.hasOwnProperty.call(next, 'text')) {
        next.text = normalizePdfMessageTextValue(next.text, nestedCodeBlock);
        if (!nestedCodeBlock) {
          next.noWrap = false;
        }
      }
      return next;
    }
    return value;
  }

  function addPdfMessageBreakOpportunities(text) {
    return ensureString(text).replace(/[^\s\u200b]{28,}/gu, (token) => {
      if (containsEmojiForPdf(token)) {
        return token;
      }
      const punctuated = token.replace(/([/._?=&:#%+-])/g, '$1\u200b');
      const chars = Array.from(punctuated);
      let output = '';
      let sinceBreak = 0;
      chars.forEach((char) => {
        output += char;
        if (char === '\u200b') {
          sinceBreak = 0;
          return;
        }
        sinceBreak += 1;
        if (sinceBreak >= 18) {
          output += '\u200b';
          sinceBreak = 0;
        }
      });
      return output;
    });
  }

  function addPdfCodeBreakOpportunities(text) {
    return ensureString(text).replace(/[^\s\u200b]{42,}/gu, (token) => {
      const chars = Array.from(token);
      let output = '';
      chars.forEach((char, index) => {
        output += char;
        if ((index + 1) % 24 === 0 && index < chars.length - 1) {
          output += '\u200b';
        }
      });
      return output;
    });
  }

  function normalizeGrokPdfContentNode(node, inCodeBlock) {
    if (node === null || node === undefined) {
      return node;
    }
    if (typeof node === 'string') {
      return inCodeBlock ? node : normalizePdfPipelineText(node);
    }
    if (Array.isArray(node)) {
      return node.map((entry) => normalizeGrokPdfContentNode(entry, inCodeBlock));
    }
    if (typeof node !== 'object') {
      return node;
    }

    const next = Object.assign({}, node);
    const thisIsCodeBlock = inCodeBlock || isPdfCodeBlockNode(next);

    if (Object.prototype.hasOwnProperty.call(next, 'text')) {
      next.text = normalizePdfTextValue(
        next.text,
        thisIsCodeBlock,
        Boolean(next.preserveLeadingSpaces)
      );
    }
    if (Array.isArray(next.stack)) {
      next.stack = next.stack.map((entry) => normalizeGrokPdfContentNode(entry, thisIsCodeBlock));
    }
    if (Array.isArray(next.ul)) {
      next.ul = next.ul.map((entry) => normalizeGrokPdfContentNode(entry, thisIsCodeBlock));
    }
    if (Array.isArray(next.ol)) {
      next.ol = next.ol.map((entry) => normalizeGrokPdfContentNode(entry, thisIsCodeBlock));
    }
    if (Array.isArray(next.columns)) {
      next.columns = next.columns.map((entry) => normalizeGrokPdfContentNode(entry, thisIsCodeBlock));
    }
    if (next.table && Array.isArray(next.table.body)) {
      next.table = Object.assign({}, next.table, {
        body: next.table.body.map((row) => {
          if (!Array.isArray(row)) {
            return row;
          }
          return row.map((cell) => normalizeGrokPdfContentNode(cell, thisIsCodeBlock));
        })
      });
    }

    return next;
  }

  function normalizePdfTextValue(value, inCodeBlock, keepWhitespace) {
    if (value === null || value === undefined) {
      return value;
    }
    if (typeof value === 'string') {
      if (inCodeBlock || keepWhitespace) {
        return value;
      }
      return normalizePdfPipelineText(value);
    }
    if (Array.isArray(value)) {
      return value.map((entry) => normalizePdfTextValue(entry, inCodeBlock, keepWhitespace));
    }
    if (typeof value === 'object') {
      const next = Object.assign({}, value);
      const nestedCodeBlock = inCodeBlock || isPdfCodeBlockNode(next);
      if (Object.prototype.hasOwnProperty.call(next, 'text')) {
        const keepTextWhitespace = keepWhitespace || Boolean(next.preserveLeadingSpaces);
        next.text = normalizePdfTextValue(next.text, nestedCodeBlock, keepTextWhitespace);
      }
      return next;
    }
    return value;
  }

  function isPdfCodeBlockNode(node) {
    if (!node || typeof node !== 'object') {
      return false;
    }
    if (node.style === 'codeBlockBody') {
      return true;
    }
    if ((node.font === 'Courier' || node.font === 'monospace') && node.preserveLeadingSpaces && node.noWrap !== false) {
      return true;
    }
    return false;
  }

  // ─────────────────────────────────────────────
  // PDF images, remote resources, and fonts
  // ─────────────────────────────────────────────

  async function requestRemoteText(url, label) {
    if (typeof GM_xmlhttpRequest === 'function') {
      return gmXmlHttpRequestPromise({
        method: 'GET',
        url: url,
        responseType: 'text',
        label: label
      });
    }
    const response = await fetch(url, {
      cache: 'force-cache',
      credentials: 'omit'
    });
    if (!response || !response.ok) {
      throw new Error(`${label || 'Remote text'} HTTP ${response && response.status}`);
    }
    return await response.text();
  }

  async function requestRemoteArrayBuffer(url, label, onProgress) {
    if (typeof GM_xmlhttpRequest === 'function') {
      return gmXmlHttpRequestPromise({
        method: 'GET',
        url: url,
        responseType: 'arraybuffer',
        label: label,
        onProgress: onProgress
      });
    }
    const response = await fetch(url, {
      cache: 'force-cache',
      credentials: 'omit'
    });
    if (!response || !response.ok) {
      throw new Error(`${label || 'Remote binary'} HTTP ${response && response.status}`);
    }
    return await readRemoteFontBuffer(response, onProgress);
  }

  async function prepareMessagesForPdfImages(messages) {
    const prepared = [];
    for (const message of messages || []) {
      let html = ensureString(message && message.html);
      let pdfNode = null;
      if (message && message.sourceNode && message.sourceNode.nodeType === Node.ELEMENT_NODE) {
        const sourceImages = buildSourceImageLookup(message.sourceNode);
        pdfNode = prepareNodeForExport(message.sourceNode);
        await inlinePdfImagesInNode(pdfNode, sourceImages);
        html = pdfNode.innerHTML || html;
      } else if (htmlHasExportableImages(html)) {
        const parsedNode = await inlinePdfImagesInHtml(html);
        if (parsedNode) {
          pdfNode = parsedNode;
          html = parsedNode.innerHTML || html;
        }
      }
      prepared.push(Object.assign({}, message, {
        html: html,
        pdfNode: pdfNode,
        sourceNode: null
      }));
    }
    return prepared;
  }

  async function inlinePdfImagesInHtml(html) {
    const container = parseHtmlContainer(html);
    if (!container) {
      return null;
    }
    await inlinePdfImagesInNode(container);
    return container;
  }

  async function inlinePdfImagesInNode(container, sourceImages) {
    if (!container || !container.querySelectorAll) {
      return container;
    }
    normalizeExportableImages(container);
    const images = collectExportableImageElements(container);
    for (const image of images) {
      const src = normalizeImageSource(image);
      if (!src || /^data:image\//i.test(src)) {
        continue;
      }
      try {
        const dataUrl = /^blob:/i.test(src)
          ? await convertLoadedImageElementToPngDataUrl(resolveLiveImageForSource(src, sourceImages) || image)
          : await loadPdfImageDataUrl(src);
        if (dataUrl) {
          image.setAttribute('src', dataUrl);
          image.removeAttribute('srcset');
          image.removeAttribute('sizes');
          image.setAttribute('loading', 'eager');
          image.setAttribute('decoding', 'sync');
        }
      } catch (err) {
        console.warn('OmniChat: failed to inline PDF image', src, err);
        if (/not a part of the @connect list|refused to connect/i.test(ensureString(err && err.message))) {
          updatePdfExportLoader({
            stage: 'Preparing images...',
            detail: `Image host blocked by userscript permissions: ${extractHostnameFromUrl(src)}.`,
            progress: 0.86,
            progressText: 'Step 4 of 5',
            indeterminate: false
          });
          await waitForNextPaint();
        }
      }
    }
    return container;
  }

  function buildSourceImageLookup(sourceNode) {
    const lookup = Object.create(null);
    collectExportableImageElements(sourceNode).forEach((image) => {
      const src = normalizeImageSource(image);
      if (src && !lookup[src]) {
        lookup[src] = image;
      }
    });
    return lookup;
  }

  function resolveLiveImageForSource(src, sourceImages) {
    const key = ensureString(src);
    if (sourceImages && sourceImages[key]) {
      return sourceImages[key];
    }
    if (!key || typeof document === 'undefined' || !document.querySelectorAll) {
      return null;
    }
    const images = Array.from(document.querySelectorAll('img'));
    return images.find((image) => normalizeImageSource(image) === key) || null;
  }

  function extractHostnameFromUrl(value) {
    try {
      return new URL(ensureString(value), location.href).hostname || 'unknown host';
    } catch (err) {
      return 'unknown host';
    }
  }

  async function loadPdfImageDataUrl(src) {
    const url = ensureString(src).trim();
    if (!url) {
      return '';
    }
    if (/^data:image\//i.test(url)) {
      return url;
    }
    if (!pdfImageDataUrlPromises[url]) {
      pdfImageDataUrlPromises[url] = fetchPdfImageDataUrl(url);
    }
    return pdfImageDataUrlPromises[url];
  }

  async function fetchPdfImageDataUrl(src) {
    if (/^blob:/i.test(ensureString(src))) {
      return convertImageSrcToPngDataUrl(src);
    }
    try {
      const response = await fetch(src, {
        cache: 'force-cache',
        credentials: 'include'
      });
      if (response && response.ok) {
        const blob = await response.blob();
        if (blob && blob.size) {
          if (!isPdfMakeSupportedImageMime(blob.type)) {
            return await convertBlobToPngDataUrl(blob);
          }
          const dataUrl = await blobToDataUrl(blob);
          if (/^data:image\//i.test(dataUrl)) {
            return dataUrl;
          }
          const buffer = await blob.arrayBuffer();
          const base64 = await arrayBufferToBase64(buffer);
          return `data:${inferImageMimeType(src, blob.type)};base64,${base64}`;
        }
      }
    } catch (err) {
    }

    const buffer = await requestRemoteImageArrayBuffer(src);
    if (!buffer || !buffer.byteLength) {
      return '';
    }
    const mimeType = inferImageMimeTypeFromBuffer(buffer) || inferImageMimeType(src, '');
    if (!isPdfMakeSupportedImageMime(mimeType)) {
      return await convertBlobToPngDataUrl(new Blob([buffer], { type: mimeType }));
    }
    const base64 = await arrayBufferToBase64(buffer);
    return `data:${mimeType};base64,${base64}`;
  }

  async function requestRemoteImageArrayBuffer(url) {
    if (typeof GM_xmlhttpRequest === 'function') {
      return gmXmlHttpRequestPromise({
        method: 'GET',
        url: url,
        responseType: 'arraybuffer',
        label: 'PDF image',
        anonymous: false
      });
    }
    return requestRemoteArrayBuffer(url, 'PDF image');
  }

  function isPdfMakeSupportedImageMime(mimeType) {
    return /^image\/(?:png|jpe?g)$/i.test(ensureString(mimeType).split(';')[0].trim());
  }

  function inferImageMimeTypeFromBuffer(buffer) {
    if (!buffer || !buffer.byteLength) {
      return '';
    }
    const bytes = new Uint8Array(buffer.slice(0, Math.min(16, buffer.byteLength)));
    if (bytes.length >= 4 && bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47) {
      return 'image/png';
    }
    if (bytes.length >= 3 && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) {
      return 'image/jpeg';
    }
    if (
      bytes.length >= 12 &&
      bytes[0] === 0x52 && bytes[1] === 0x49 && bytes[2] === 0x46 && bytes[3] === 0x46 &&
      bytes[8] === 0x57 && bytes[9] === 0x45 && bytes[10] === 0x42 && bytes[11] === 0x50
    ) {
      return 'image/webp';
    }
    if (bytes.length >= 3 && bytes[0] === 0x47 && bytes[1] === 0x49 && bytes[2] === 0x46) {
      return 'image/gif';
    }
    return '';
  }

  async function convertBlobToPngDataUrl(blob) {
    const objectUrl = URL.createObjectURL(blob);
    try {
      return await convertImageSrcToPngDataUrl(objectUrl);
    } finally {
      URL.revokeObjectURL(objectUrl);
    }
  }

  async function convertLoadedImageElementToPngDataUrl(image) {
    if (!image) {
      return '';
    }
    if (!image.complete || !(image.naturalWidth || image.width)) {
      await waitForImageReady(image);
    }
    const dataUrl = drawImageElementToPngDataUrl(image);
    if (dataUrl) {
      return dataUrl;
    }
    const src = normalizeImageSource(image);
    return src ? convertImageSrcToPngDataUrl(src) : '';
  }

  async function convertImageSrcToPngDataUrl(src) {
    const image = await loadImageElement(src);
    return drawImageElementToPngDataUrl(image);
  }

  function drawImageElementToPngDataUrl(image) {
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, image.naturalWidth || image.width || 1);
    canvas.height = Math.max(1, image.naturalHeight || image.height || 1);
    const context = canvas.getContext('2d');
    if (!context) {
      return '';
    }
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL('image/png');
  }

  function waitForImageReady(image) {
    return new Promise((resolve, reject) => {
      if (!image) {
        reject(new Error('Image element missing'));
        return;
      }
      if (image.complete && (image.naturalWidth || image.width)) {
        resolve(image);
        return;
      }
      let timeoutId = null;
      const cleanup = () => {
        if (timeoutId) {
          window.clearTimeout(timeoutId);
        }
        image.removeEventListener('load', onLoad);
        image.removeEventListener('error', onError);
      };
      const onLoad = () => {
        cleanup();
        resolve(image);
      };
      const onError = () => {
        cleanup();
        reject(new Error('Image decode failed'));
      };
      image.addEventListener('load', onLoad, { once: true });
      image.addEventListener('error', onError, { once: true });
      timeoutId = window.setTimeout(() => {
        cleanup();
        reject(new Error('Image load timed out'));
      }, 5000);
    });
  }

  function loadImageElement(src) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error('Image decode failed'));
      image.src = src;
    });
  }

  function blobToDataUrl(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(ensureString(reader.result));
      reader.onerror = () => reject(reader.error || new Error('Image FileReader failed'));
      reader.readAsDataURL(blob);
    });
  }

  function inferImageMimeType(src, contentType) {
    const type = ensureString(contentType).split(';')[0].trim().toLowerCase();
    if (type && /^image\//i.test(type)) {
      return type;
    }
    const cleanSrc = ensureString(src).split(/[?#]/)[0].toLowerCase();
    if (cleanSrc.endsWith('.jpg') || cleanSrc.endsWith('.jpeg')) {
      return 'image/jpeg';
    }
    if (cleanSrc.endsWith('.webp')) {
      return 'image/webp';
    }
    if (cleanSrc.endsWith('.gif')) {
      return 'image/gif';
    }
    if (cleanSrc.endsWith('.png')) {
      return 'image/png';
    }
    return 'image/png';
  }

  function gmXmlHttpRequestPromise(options) {
    return new Promise((resolve, reject) => {
      try {
        GM_xmlhttpRequest({
          method: options.method || 'GET',
          url: options.url,
          responseType: options.responseType,
          anonymous: options.anonymous !== false,
          onprogress: (event) => {
            if (typeof options.onProgress === 'function') {
              const loaded = Number(event && event.loaded) || 0;
              const total = Number(event && event.total) || 0;
              options.onProgress(loaded, total, !(event && event.lengthComputable && total > 0));
            }
          },
          onload: (response) => {
            const status = Number(response && response.status) || 0;
            if (status < 200 || status >= 300) {
              reject(new Error(`${options.label || 'Remote request'} HTTP ${status || 'error'}`));
              return;
            }
            if (options.responseType === 'arraybuffer') {
              resolve(response.response);
              return;
            }
            resolve(response.responseText != null ? response.responseText : response.response);
          },
          onerror: (error) => {
            reject(new Error(`${options.label || 'Remote request'} failed: ${formatRemoteRequestError(error)}`));
          },
          ontimeout: () => {
            reject(new Error(`${options.label || 'Remote request'} timed out`));
          }
        });
      } catch (err) {
        reject(err);
      }
    });
  }

  function formatRemoteRequestError(error) {
    if (!error) {
      return 'unknown network error';
    }
    if (typeof error === 'string') {
      return error;
    }
    const parts = [
      error.error,
      error.message,
      error.statusText,
      error.status ? `HTTP ${error.status}` : ''
    ].map(ensureString).filter(Boolean);
    if (parts.length) {
      return parts.join(' - ');
    }
    try {
      const json = JSON.stringify(error);
      return json && json !== '{}' ? json : Object.prototype.toString.call(error);
    } catch (err) {
      return Object.prototype.toString.call(error);
    }
  }

  function encodeBase64Utf8(value) {
    const input = ensureString(value);
    if (!input) {
      return '';
    }
    if (typeof TextEncoder === 'function') {
      const bytes = new TextEncoder().encode(input);
      const chunkSize = 0x8000;
      let binary = '';
      for (let index = 0; index < bytes.length; index += chunkSize) {
        const chunk = bytes.subarray(index, index + chunkSize);
        binary += String.fromCharCode.apply(null, chunk);
      }
      return btoa(binary);
    }
    return btoa(unescape(encodeURIComponent(input)));
  }

  async function importFrancLanguageDetectorFromSource(source) {
    const raw = ensureString(source)
      .replace(/\/\/# sourceMappingURL=.*$/gm, '')
      .trim();
    if (!raw) {
      throw new Error('Language detector source is empty');
    }
    const dataUrl = `data:text/javascript;base64,${encodeBase64Utf8(raw)}`;
    const blobUrl = URL.createObjectURL(new Blob([raw], { type: 'text/javascript' }));
    try {
      try {
        return await import(blobUrl);
      } catch (blobErr) {
        return await import(dataUrl);
      }
    } finally {
      window.setTimeout(() => URL.revokeObjectURL(blobUrl), 0);
    }
  }

  async function loadPdfLanguageDetector() {
    if (!languageDetectorModulePromise) {
      languageDetectorModulePromise = (async () => {
        try {
          const source = await requestRemoteText(PDF_LANGUAGE_DETECTOR_URL, 'Language detector');
          const imported = await importFrancLanguageDetectorFromSource(source);
          if (imported && typeof imported.francAll === 'function') {
            return imported;
          }
          throw new Error('Language detector module is missing francAll');
        } catch (err) {
          console.warn('OmniChat: language detector unavailable for PDF export', err);
          return null;
        }
      })();
    }
    return languageDetectorModulePromise;
  }

  function buildPdfLanguageProfile(messages, detectorModule, extraTexts) {
    const detectedScripts = new Set();
    const sampleCandidates = [];
    let containsEmoji = false;

    const scanText = (rawText) => {
      const value = ensureString(rawText);
      if (!value) {
        return;
      }
      detectPdfScriptsInText(value, detectedScripts);
      if (!containsEmoji && containsEmojiForPdf(value)) {
        containsEmoji = true;
      }
      collectPdfLanguageSamples(value, sampleCandidates);
    };

    messages.forEach((message) => {
      scanText(message && message.text);
    });
    (extraTexts || []).forEach((entry) => {
      scanText(entry);
    });

    if (!detectedScripts.size) {
      detectedScripts.add('latin');
    }

    const languageScores = Object.create(null);
    const detector = detectorModule && typeof detectorModule.francAll === 'function'
      ? detectorModule.francAll
      : null;

    if (detector) {
      const selectedSamples = selectPdfLanguageSamples(sampleCandidates, PDF_LANGUAGE_SAMPLE_LIMIT);
      selectedSamples.forEach((sample) => {
        const results = detector(sample.text, { minLength: PDF_LANGUAGE_MIN_LENGTH });
        if (!Array.isArray(results) || !results.length) {
          return;
        }
        results.slice(0, 3).forEach((entry, index) => {
          if (!Array.isArray(entry) || entry.length < 2) {
            return;
          }
          const lang = ensureString(entry[0]).trim();
          const score = Number(entry[1]);
          if (!lang || lang === 'und' || !Number.isFinite(score) || score < 0.15) {
            return;
          }
          const weight = sample.weight * score * (index === 0 ? 1 : 0.35);
          languageScores[lang] = (languageScores[lang] || 0) + weight;
        });
      });
    }

    const detectedLanguages = Object.entries(languageScores)
      .sort((a, b) => b[1] - a[1])
      .map((entry) => mapFrancLanguageCode(entry[0]))
      .filter((value, index, self) => value && self.indexOf(value) === index)
      .slice(0, 8);

    addFallbackLanguagesFromScripts(detectedLanguages, detectedScripts);

    const mainLanguage = detectedLanguages[0] || fallbackLanguageFromScripts(detectedScripts) || 'und';
    const profile = {
      mainLanguage: mainLanguage,
      detectedLanguages: detectedLanguages,
      detectedScripts: Array.from(detectedScripts),
      containsEmoji: containsEmoji
    };

    console.info('OmniChat PDF language detection:', {
      mainLanguage: profile.mainLanguage,
      detectedLanguages: profile.detectedLanguages,
      detectedScripts: profile.detectedScripts
    });

    return profile;
  }

  function detectPdfScriptsInText(text, detectedScripts) {
    const value = ensureString(text);
    if (!value) {
      return;
    }
    const segments = value.split(/\n+/);
    segments.forEach((segment) => {
      if (!segment) {
        return;
      }
      const hasJapanese = PDF_SCRIPT_DETECTION_PATTERNS.japanese.test(segment);
      const hasKorean = PDF_SCRIPT_DETECTION_PATTERNS.korean.test(segment);
      const hasHan = PDF_HAN_PATTERN.test(segment);
      const hasCjkSymbols = PDF_CJK_SYMBOL_PATTERN.test(segment);

      if (PDF_SCRIPT_DETECTION_PATTERNS.latin.test(segment) || PDF_SCRIPT_DETECTION_PATTERNS.latinExtended.test(segment)) {
        detectedScripts.add('latin');
      }
      if (containsPdfSymbolTextNeedingSymbolsFont(segment, hasHan || hasJapanese || hasKorean || hasCjkSymbols)) {
        detectedScripts.add('symbolsText');
      }
      PDF_DIRECT_SCRIPT_SCAN_ORDER.forEach((script) => {
        if (script === 'symbolsText' && !containsPdfSymbolTextNeedingSymbolsFont(segment, hasHan || hasJapanese || hasKorean || hasCjkSymbols)) {
          return;
        }
        const pattern = PDF_SCRIPT_DETECTION_PATTERNS[script];
        if (pattern && pattern.test(segment)) {
          detectedScripts.add(script);
        }
      });
      if (hasJapanese) {
        detectedScripts.add('japanese');
      }
      if (hasKorean) {
        detectedScripts.add('korean');
      }
      if (hasHan && !hasJapanese && !hasKorean) {
        detectedScripts.add('chinese');
      } else if (hasCjkSymbols && !hasJapanese && !hasKorean) {
        detectedScripts.add('chinese');
      }
    });
  }

  function collectPdfLanguageSamples(text, target) {
    const normalized = normalizePdfLanguageSample(text);
    if (!normalized) {
      return;
    }
    const maxSegmentsPerMessage = normalized.length > PDF_LANGUAGE_SAMPLE_LENGTH * 2 ? 2 : 1;
    let added = 0;

    for (let start = 0; start < normalized.length && added < maxSegmentsPerMessage; start += PDF_LANGUAGE_SAMPLE_LENGTH) {
      const segment = normalized.slice(start, start + PDF_LANGUAGE_SAMPLE_LENGTH).trim();
      if (segment.length < PDF_LANGUAGE_MIN_LENGTH) {
        continue;
      }
      target.push({
        text: segment,
        weight: Math.min(segment.length, PDF_LANGUAGE_SAMPLE_LENGTH)
      });
      added += 1;
    }
  }

  function normalizePdfLanguageSample(text) {
    return ensureString(text)
      .replace(/```[\s\S]*?```/g, ' ')
      .replace(/`[^`]*`/g, ' ')
      .replace(/https?:\/\/\S+/gi, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function selectPdfLanguageSamples(candidates, limit) {
    if (candidates.length <= limit) {
      return candidates;
    }
    const selected = [];
    const lastIndex = candidates.length - 1;
    const step = lastIndex / Math.max(1, limit - 1);
    const seen = new Set();

    for (let index = 0; index < limit; index += 1) {
      const candidateIndex = Math.min(lastIndex, Math.round(index * step));
      if (seen.has(candidateIndex)) {
        continue;
      }
      seen.add(candidateIndex);
      selected.push(candidates[candidateIndex]);
    }

    return selected;
  }

  function mapFrancLanguageCode(code) {
    const normalized = ensureString(code).trim().toLowerCase();
    return PDF_LANGUAGE_CODE_MAP[normalized] || normalized || 'und';
  }

  function addFallbackLanguagesFromScripts(detectedLanguages, detectedScripts) {
    Object.keys(PDF_SCRIPT_FALLBACK_LANGUAGE_MAP).forEach((script) => {
      if (!detectedScripts.has(script)) {
        return;
      }
      const code = PDF_SCRIPT_FALLBACK_LANGUAGE_MAP[script];
      if (detectedLanguages.indexOf(code) === -1) {
        detectedLanguages.push(code);
      }
    });
  }

  function fallbackLanguageFromScripts(detectedScripts) {
    for (const script of PDF_SCRIPT_FALLBACK_PRIORITY) {
      if (!detectedScripts.has(script)) {
        continue;
      }
      if (script === 'latin') {
        return 'en';
      }
      if (PDF_SCRIPT_FALLBACK_LANGUAGE_MAP[script]) {
        return PDF_SCRIPT_FALLBACK_LANGUAGE_MAP[script];
      }
    }
    if (detectedScripts.has('latin')) {
      return 'en';
    }
    return 'und';
  }

  function formatPdfDetectionSummary(languageProfile) {
    if (!languageProfile || typeof languageProfile !== 'object') {
      return 'Using local language and script detection.';
    }
    const languages = Array.isArray(languageProfile.detectedLanguages)
      ? languageProfile.detectedLanguages.filter(Boolean)
      : [];
    const scripts = Array.isArray(languageProfile.detectedScripts)
      ? languageProfile.detectedScripts.filter(Boolean)
      : [];
    const languageText = languages.length ? languages.join(', ') : ensureString(languageProfile.mainLanguage || 'und');
    const scriptText = scripts.length ? scripts.join(', ') : 'latin';
    return `Main language: ${ensureString(languageProfile.mainLanguage || 'und')} | Languages: ${languageText} | Scripts: ${scriptText}`;
  }

  function formatPdfResourceLabel(resourceKey) {
    if (PDF_SCRIPT_RESOURCE_LABELS[resourceKey]) {
      return PDF_SCRIPT_RESOURCE_LABELS[resourceKey];
    }
    return `${ensureString(resourceKey || 'PDF')} font`;
  }

  function clonePdfFontContext(context) {
    if (!context || typeof context !== 'object') {
      return null;
    }
    const next = {
      baseFont: ensureString(context.baseFont),
      mainLanguage: ensureString(context.mainLanguage || 'und'),
      detectedLanguages: Array.isArray(context.detectedLanguages) ? context.detectedLanguages.slice() : [],
      detectedScripts: Array.isArray(context.detectedScripts) ? context.detectedScripts.slice() : [],
      safeSegmentationScripts: Array.isArray(context.safeSegmentationScripts) ? context.safeSegmentationScripts.slice() : [],
      scriptFonts: Object.create(null),
      emojiFontFamily: ensureString(context.emojiFontFamily)
    };
    Object.keys(context.scriptFonts || {}).forEach((script) => {
      if (context.scriptFonts[script]) {
        next.scriptFonts[script] = context.scriptFonts[script];
      }
    });
    return next;
  }

  function isRecoverablePdfFontError(error) {
    const details = [
      ensureString(error && error.message),
      ensureString(error && error.stack)
    ].filter(Boolean).join('\n');
    if (!details) {
      return false;
    }
    return /advanceWidth|xCoordinate|EmbeddedFont|GPOSProcessor|getAnchor|TTFFont\.layout|FontProvider\.provideFont/i.test(details);
  }

  function formatRecoverablePdfFontError(error) {
    const message = ensureString(error && error.message).trim();
    return message || 'PDF font layout issue';
  }

  function buildPdfFontFallbackPlans(fontContext) {
    if (!fontContext) {
      return [];
    }
    const hasEmojiFont = Boolean(fontContext.emojiFontFamily);
    const availableScripts = Object.keys(fontContext.scriptFonts).filter((script) => Boolean(fontContext.scriptFonts[script]));
    if (!availableScripts.length && !hasEmojiFont) {
      return [];
    }
    const existingSafeScripts = Array.isArray(fontContext.safeSegmentationScripts)
      ? fontContext.safeSegmentationScripts
      : [];
    const recommendedSafeScripts = availableScripts.filter((script) => {
      return PDF_SAFE_SEGMENTATION_SCRIPTS.indexOf(script) !== -1 && existingSafeScripts.indexOf(script) === -1;
    });
    const plans = [];
    if (hasEmojiFont) {
      plans.push({
        disabledScripts: [],
        disableEmojiFont: true,
        detail: 'Retrying PDF generation without the emoji font.'
      });
    }
    if (recommendedSafeScripts.length) {
      plans.push({
        disabledScripts: [],
        safeSegmentationScripts: existingSafeScripts.concat(recommendedSafeScripts),
        detail: 'Retrying PDF generation with safer complex-script layout.'
      });
    }
    const orderedScripts = PDF_SCRIPT_FONT_RETRY_ORDER
      .filter((script) => availableScripts.indexOf(script) !== -1)
      .concat(availableScripts.filter((script) => PDF_SCRIPT_FONT_RETRY_ORDER.indexOf(script) === -1));
    plans.push(...orderedScripts.map((script) => ({
      disabledScripts: [script],
      detail: `Retrying PDF generation without ${formatPdfResourceLabel(script).toLowerCase()}.`
    })));
    if (availableScripts.length > 1) {
      plans.push({
        disabledScripts: availableScripts.slice(),
        disableEmojiFont: hasEmojiFont,
        detail: 'Retrying PDF generation without extra language fonts.'
      });
    }
    return plans;
  }

  function buildPdfFontContextVariant(fontContext, disabledScripts, safeSegmentationScripts, disableEmojiFont) {
    const baseContext = clonePdfFontContext(fontContext);
    if (!baseContext) {
      return null;
    }
    const disabled = new Set(Array.isArray(disabledScripts) ? disabledScripts : []);
    const scriptFonts = Object.create(null);
    Object.keys(baseContext.scriptFonts || {}).forEach((script) => {
      if (!disabled.has(script) && baseContext.scriptFonts[script]) {
        scriptFonts[script] = baseContext.scriptFonts[script];
      }
    });
    baseContext.scriptFonts = scriptFonts;
    baseContext.detectedScripts = baseContext.detectedScripts.filter((script) => !disabled.has(script));
    baseContext.safeSegmentationScripts = (
      Array.isArray(safeSegmentationScripts) ? safeSegmentationScripts : baseContext.safeSegmentationScripts
    ).filter((script, index, list) => {
      return !disabled.has(script) && list.indexOf(script) === index;
    });
    if (disableEmojiFont) {
      baseContext.emojiFontFamily = '';
    }
    return baseContext;
  }

  async function exportPdf(messages) {
    updatePdfExportLoader({
      stage: 'Detecting languages and scripts...',
      detail: 'Analyzing the full chat locally before preparing the PDF.',
      progress: 0.18,
      progressText: 'Step 2 of 5',
      indeterminate: false
    });
    await waitForNextPaint();
    const title = `${getPlatformLabel()} Export`;
    const conversationTitle = getExportConversationTitle();
    const filename = buildExportFilename('pdf', null);
    const metaDate = new Date().toLocaleString('fr-FR');
    const metaUrl = location.href;
    const metaLines = [];
    if (conversationTitle) {
      metaLines.push(`Conversation: ${conversationTitle}`);
    }
    metaLines.push(`URL: ${metaUrl}`);
    metaLines.push(`Exported: ${metaDate}`);
    if (!pdfMakeRef) {
      pdfMakeRef = resolvePdfMake();
    }
    const pdfMakeInstance = pdfMakeRef || resolvePdfMake();
    if (!pdfMakeInstance || typeof pdfMakeInstance.createPdf !== 'function') {
      return false;
    }
    const detectorModule = await loadPdfLanguageDetector();
    const languageProfile = buildPdfLanguageProfile(messages, detectorModule, [title, conversationTitle, metaLines.join('\n')]);
    updatePdfExportLoader({
      stage: 'Detecting languages and scripts...',
      detail: formatPdfDetectionSummary(languageProfile),
      progress: 0.28,
      progressText: 'Step 2 of 5',
      indeterminate: false
    });
    await waitForNextPaint();
    updatePdfExportLoader({
      stage: 'Loading PDF fonts...',
      detail: formatPdfDetectionSummary(languageProfile),
      progress: 0.34,
      progressText: 'Step 3 of 5',
      indeterminate: false
    });
    await waitForNextPaint();
    const fontName = await ensurePdfMakeFonts(pdfMakeInstance, languageProfile);
    if (!fontName) {
      return false;
    }
    updatePdfExportLoader({
      stage: 'Preparing images...',
      detail: 'Embedding generated images from the chat into the PDF document.',
      progress: 0.86,
      progressText: 'Step 4 of 5',
      indeterminate: false
    });
    await waitForNextPaint();
    const pdfMessages = await prepareMessagesForPdfImages(messages);
    const pageMargins = PDF_PAGE_MARGINS;
    const dividerWidth = PDF_CONTENT_WIDTH_PT;
    const wrapRoleLabel = (role) => {
      if (!role) return 'MESSAGE';
      const lowered = String(role).toLowerCase();
      if (lowered === 'user') return 'UTILISATEUR';
      if (lowered === 'assistant') return 'ASSISTANT';
      return String(role).toUpperCase();
    };
    const roleTheme = (role) => {
      const lowered = String(role || '').toLowerCase();
      if (lowered === 'user') {
        return { fill: '#f1f5f9', border: '#e2e8f0', text: '#0f766e', accent: '#14b8a6' };
      }
      if (lowered === 'assistant') {
        return { fill: '#f8fafc', border: '#e2e8f0', text: '#1d4ed8', accent: '#60a5fa' };
      }
      return { fill: '#f8fafc', border: '#e2e8f0', text: '#334155', accent: '#94a3b8' };
    };
    const buildDocDefinition = () => {
      const content = [
        { text: title, style: 'title' },
        { text: formatPdfTextWithEmoji(metaLines.join('\n')), style: 'meta' },
        {
          canvas: [
            { type: 'line', x1: 0, y1: 0, x2: dividerWidth, y2: 0, lineWidth: 1, lineColor: '#e2e8f0' }
          ],
          margin: [0, 2, 0, 14]
        }
      ];

      pdfMessages.forEach((message) => {
        const theme = roleTheme(message.role);
        const roleLabel = wrapRoleLabel(message.role);
        const messageText = ensureString(message.text);
        const htmlContent = message.html || messageText;
        const preparedNode =
          message &&
          message.pdfNode &&
          message.pdfNode.nodeType === Node.ELEMENT_NODE
            ? message.pdfNode
            : null;
        const richContent = preparedNode
          ? parseNodeToPdfMake(preparedNode)
          : convertHtmlToPdfMake(htmlContent);
        const normalizedRichContent = normalizePdfContentForMessageBox(
          normalizePdfContentForPlatform(richContent)
        );
        const emojiRichContent = applyEmojiFontToTree(normalizedRichContent);
        const richContentStack = Array.isArray(emojiRichContent) ? emojiRichContent : [emojiRichContent];

        content.push({
          table: {
            widths: [3, '*'],
            body: [[
              {
                stack: [
                  { text: '' }
                ],
                fillColor: theme.accent
              },
              {
                stack: [
                  { text: formatPdfTextWithEmoji(roleLabel), style: 'role', color: theme.text },
                  ...richContentStack
                ],
                fillColor: theme.fill
              }
            ]]
          },
          layout: {
            hLineWidth: () => 0,
            vLineWidth: () => 0,
            paddingLeft: (i) => (i === 0 ? 0 : 12),
            paddingRight: () => 12,
            paddingTop: () => 10,
            paddingBottom: () => 10
          },
          margin: [0, 0, 0, 14]
        });
      });

      return {
        info: { title: title },
        pageSize: 'A4',
        pageMargins: pageMargins,
        content: content,
        defaultStyle: {
          font: fontName,
          fontSize: 10,
          color: '#0f172a'
        },
        footer: function (currentPage, pageCount) {
          return {
            columns: [
              {
                text: [
                  { text: 'Generated with ' },
                  {
                    text: 'OmniChat Exporter',
                    link: PROJECT_URL,
                    decoration: 'underline'
                  }
                ],
                alignment: 'left'
              },
              {
                text: `${currentPage} / ${pageCount}`,
                alignment: 'right'
              }
            ],
            margin: [40, 6, 40, 10],
            relativePosition: { x: 0, y: 6 },
            fontSize: 8,
            color: '#94a3b8'
          };
        },
        styles: {
          title: { fontSize: 18, bold: true, margin: [0, 0, 0, 6], color: '#0f172a' },
          meta: { fontSize: 9, color: '#64748b', margin: [0, 0, 0, 12] },
          role: { fontSize: 9, bold: true, margin: [0, 0, 0, 11] },
          message: { fontSize: 11, lineHeight: 1.45 },
          codeBlockHeader: { fontSize: 9, bold: true, color: '#f8fafc' },
          codeBlockBody: { fontSize: 9, color: '#f8fafc', font: 'monospace', lineHeight: 1.35 }
        }
      };
    };

    const originalFontContext = clonePdfFontContext(activePdfFontContext);
    const attemptPdfDownload = async function (fontContextOverride) {
      activePdfFontContext = clonePdfFontContext(fontContextOverride);
      activePdfEmojiFontFamily = activePdfFontContext && activePdfFontContext.emojiFontFamily
        ? activePdfFontContext.emojiFontFamily
        : '';
      await downloadPdfDocument(pdfMakeInstance, buildDocDefinition(), filename);
    };

    try {
      updatePdfExportLoader({
        stage: 'Generating PDF...',
        detail: 'Finalizing layout and preparing the download.',
        progress: 0.92,
        progressText: 'Step 5 of 5',
        indeterminate: false
      });
      await waitForNextPaint();
      await attemptPdfDownload(originalFontContext);
      updatePdfExportLoader({
        stage: 'PDF export ready.',
        detail: 'The document has been generated and the download has been triggered.',
        progress: 1,
        progressText: 'Completed',
        indeterminate: false
      });
      await waitForNextPaint();
      return true;
    } catch (err) {
      const fallbackPlans = isRecoverablePdfFontError(err) ? buildPdfFontFallbackPlans(originalFontContext) : [];
      if (fallbackPlans.length) {
        console.info(`OmniChat PDF export: recoverable font layout issue, retrying with safer fallbacks (${formatRecoverablePdfFontError(err)}).`);
        for (let index = 0; index < fallbackPlans.length; index += 1) {
          const plan = fallbackPlans[index];
          updatePdfExportLoader({
            stage: 'Generating PDF...',
            detail: plan.detail,
            progress: Math.min(0.97, 0.93 + ((index + 1) / (fallbackPlans.length + 1)) * 0.04),
            progressText: 'Retrying with fallback fonts',
            indeterminate: false
          });
          await waitForNextPaint();
          try {
            const retryContext = buildPdfFontContextVariant(
              originalFontContext,
              plan.disabledScripts,
              plan.safeSegmentationScripts,
              plan.disableEmojiFont
            );
            await attemptPdfDownload(retryContext);
            updatePdfExportLoader({
              stage: 'PDF export ready.',
              detail: 'The PDF was generated after applying a safer font fallback.',
              progress: 1,
              progressText: 'Completed',
              indeterminate: false
            });
            await waitForNextPaint();
            return true;
          } catch (retryErr) {
            console.info(`OmniChat PDF export: fallback retry failed for ${plan.disabledScripts.join(', ') || 'current fonts'} (${formatRecoverablePdfFontError(retryErr)}).`);
          }
        }
      }
      console.error('PDF export error:', err);
      return false;
    } finally {
      activePdfEmojiFontFamily = '';
      activePdfFontContext = null;
    }
  }

  async function downloadPdfDocument(pdfMakeInstance, docDefinition, filename) {
    const instance = pdfMakeInstance.createPdf(docDefinition);
    if (instance && typeof instance.getBlob === 'function') {
      const blob = await getPdfBlobWithCapturedErrors(instance);
      downloadBlob(blob, filename, 'application/pdf');
      return;
    }
    await runPdfMakeDownloadWithCapturedErrors(instance, filename);
  }

  function getPdfBlobWithCapturedErrors(instance) {
    return capturePdfMakeAsyncErrors(() => {
      return new Promise((resolve, reject) => {
        try {
          const result = instance.getBlob((blob) => {
            if (!blob) {
              reject(new Error('PDF blob generation failed'));
              return;
            }
            resolve(blob);
          });
          if (result && typeof result.then === 'function') {
            result.then(resolve, reject);
          }
        } catch (err) {
          reject(err);
        }
      });
    });
  }

  function runPdfMakeDownloadWithCapturedErrors(instance, filename) {
    return capturePdfMakeAsyncErrors(() => {
      return new Promise((resolve, reject) => {
        try {
          const result = instance.download(filename);
          if (result && typeof result.then === 'function') {
            result.then(resolve, reject);
            return;
          }
          resolve();
        } catch (err) {
          reject(err);
        }
      });
    });
  }

  function capturePdfMakeAsyncErrors(task) {
    return new Promise((resolve, reject) => {
      let settled = false;
      const cleanup = () => {
        window.removeEventListener('unhandledrejection', onUnhandledRejection);
        window.removeEventListener('error', onWindowError);
      };
      const finish = (callback, value) => {
        if (settled) {
          return;
        }
        settled = true;
        cleanup();
        callback(value);
      };
      const rejectIfPdfMakeFontError = (error, event) => {
        if (!isRecoverablePdfFontError(error)) {
          return false;
        }
        if (event && typeof event.preventDefault === 'function') {
          event.preventDefault();
        }
        finish(reject, error);
        return true;
      };
      const onUnhandledRejection = (event) => {
        rejectIfPdfMakeFontError(event && event.reason, event);
      };
      const onWindowError = (event) => {
        rejectIfPdfMakeFontError((event && event.error) || event, event);
      };

      window.addEventListener('unhandledrejection', onUnhandledRejection);
      window.addEventListener('error', onWindowError);

      try {
        Promise.resolve(task()).then(
          (value) => finish(resolve, value),
          (err) => finish(reject, err)
        );
      } catch (err) {
        finish(reject, err);
      }
    });
  }

  function downloadBlob(blob, filename, mime) {
    const payload = blob instanceof Blob
      ? blob
      : new Blob([blob], { type: mime || 'application/octet-stream' });
    const url = URL.createObjectURL(payload);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 0);
  }

  // ─────────────────────────────────────────────
  // Download helpers and general utilities
  // ─────────────────────────────────────────────

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function buildExportFilename(extension, anchorTurn) {
    const slug = sanitizeFilename(getConversationSlug());
    const turnId = anchorTurn ? anchorTurn.getAttribute('data-turn-id') : '';
    const turnSlug = turnId ? sanitizeFilename(turnId).slice(0, 24) : '';
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const suffix = turnSlug ? `-${turnSlug}` : '';
    const prefix = platform || 'chat';
    return `${prefix}-${slug || 'chat'}${suffix}-${timestamp}.${extension}`;
  }

  function getConversationSlug() {
    const conversationTitle = getExportConversationTitle();
    if (conversationTitle) {
      return conversationTitle;
    }
    const parts = location.pathname.split('/').filter(Boolean);
    return parts[parts.length - 1] || 'chat';
  }

  function getExportConversationTitle() {
    const rawTitle = ensureString(document.title).trim();
    if (!rawTitle) {
      return '';
    }
    if (platform === 'chatgpt') {
      return rawTitle
        .replace(' – ChatGPT', '')
        .replace(/\s+[–-]\s+ChatGPT$/i, '')
        .trim();
    }
    if (platform === 'claude') {
      return rawTitle.replace(/\s*[-–]\s*Claude/gi, '').trim();
    }
    if (platform === 'grok') {
      return rawTitle
        .replace(/\s*[-–]\s*Grok.*$/i, '')
        .trim();
    }
    if (platform === 'deepseek') {
      return rawTitle
        .replace(/\s*[-–]\s*DeepSeek.*$/i, '')
        .trim();
    }
    if (platform === 'gemini') {
      const candidate =
        ensureString(document.querySelector('[aria-current="true"]')?.innerText).trim() ||
        ensureString(document.querySelector('h1')?.innerText).trim();
      const geminiTitle = candidate && candidate !== 'Google Gemini' ? candidate : rawTitle;
      return geminiTitle.trim();
    }
    return '';
  }

  function sanitizeFilename(value) {
    return ensureString(value)
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9-_]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 80);
  }

  function downloadText(text, filename, mime) {
    const blob = new Blob([text], { type: `${mime};charset=utf-8` });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 0);
  }

  function formatRoleLabel(role) {
    if (!role) {
      return 'Message';
    }
    const value = String(role);
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  function ensureString(value) {
    if (value === null || value === undefined) {
      return '';
    }
    return String(value);
  }

  function flashButton(button, label, status) {
    const previousLabel = button.getAttribute('aria-label') || 'Exporter ce chat';
    button.disabled = true;
    button.setAttribute('data-omni-status', status);
    button.setAttribute('aria-label', label);
    window.setTimeout(() => {
      button.setAttribute('aria-label', previousLabel);
      button.removeAttribute('data-omni-status');
      button.disabled = false;
    }, STATUS_DURATION_MS);
  }

  function detectPlatform(hostname) {
    if (hostname === 'chat.openai.com' || hostname === 'chatgpt.com') {
      return 'chatgpt';
    }
    if (hostname === 'gemini.google.com') {
      return 'gemini';
    }
    if (hostname === 'grok.com' || hostname === 'grok.x.ai') {
      return 'grok';
    }
    if (hostname === 'claude.ai') {
      return 'claude';
    }
    if (hostname === 'chat.deepseek.com') {
      return 'deepseek';
    }
    return null;
  }

  function getPlatformLabel() {
    if (platform === 'chatgpt') {
      return 'ChatGPT';
    }
    if (platform === 'gemini') {
      return 'Gemini';
    }
    if (platform === 'grok') {
      return 'Grok';
    }
    if (platform === 'claude') {
      return 'Claude';
    }
    if (platform === 'deepseek') {
      return 'DeepSeek';
    }
    return 'Chat';
  }

  function resolvePdfMake() {
    const localPdfMake = getLocalPdfMake();
    const candidates = [
      localPdfMake,
      window.pdfMake,
      window.pdfmake,
      window.pdfMake && window.pdfMake.default,
      window.pdfmake && window.pdfmake.default,
      window.pdfMake && window.pdfMake.pdfMake,
      window.pdfmake && window.pdfmake.pdfMake
    ];
    for (const candidate of candidates) {
      if (candidate && typeof candidate.createPdf === 'function') {
        return candidate;
      }
    }
    return null;
  }

  async function ensurePdfMakeFonts(pdfMakeInstance, languageProfile) {
    const vfs = resolvePdfMakeVfs(pdfMakeInstance);
    if (hasPdfVfsEntries(vfs)) {
      mergePdfVfs(pdfMakeInstance, vfs);
    }

    const baseFont = ensureBaseFont(pdfMakeInstance);
    if (!baseFont) {
      return null;
    }

    activePdfFontContext = buildPdfFontContext(baseFont, languageProfile);
    activePdfEmojiFontFamily = '';

    const scriptLoadList = getPdfScriptLoadList(activePdfFontContext);
    activePdfFontContext.safeSegmentationScripts = getSafePdfSegmentationScripts(scriptLoadList);
    const pendingResources = getPendingPdfFontResources(pdfMakeInstance, scriptLoadList, languageProfile);
    if (!pendingResources.length) {
      await showPdfFontsAlreadyCached();
    }

    await loadPdfScriptFonts(pdfMakeInstance, scriptLoadList, pendingResources);
    await loadPdfEmojiFontIfNeeded(pdfMakeInstance, languageProfile, pendingResources);
    await showPdfFontsReady(pendingResources);
    return baseFont;
  }

  function resolvePdfMakeVfs(pdfMakeInstance) {
    const localPdfMake = getLocalPdfMake();
    const vfsCandidates = [
      pdfMakeInstance.vfs,
      localPdfMake && localPdfMake.vfs,
      window.pdfMake && window.pdfMake.vfs,
      window.pdfmake && window.pdfmake.vfs,
      window.pdfFonts && window.pdfFonts.pdfMake && window.pdfFonts.pdfMake.vfs,
      window.pdfFonts && window.pdfFonts.vfs
    ];
    return vfsCandidates.find((candidate) => candidate && typeof candidate === 'object') || null;
  }

  function hasPdfVfsEntries(vfs) {
    return Boolean(vfs && Object.keys(vfs).length);
  }

  function buildPdfFontContext(baseFont, languageProfile) {
    return {
      baseFont: baseFont,
      mainLanguage: languageProfile && languageProfile.mainLanguage ? languageProfile.mainLanguage : 'und',
      detectedLanguages: languageProfile && Array.isArray(languageProfile.detectedLanguages)
        ? languageProfile.detectedLanguages.slice()
        : [],
      detectedScripts: languageProfile && Array.isArray(languageProfile.detectedScripts)
        ? languageProfile.detectedScripts.slice()
        : ['latin'],
      safeSegmentationScripts: [],
      scriptFonts: Object.create(null),
      emojiFontFamily: ''
    };
  }

  function getPdfScriptLoadList(fontContext) {
    return fontContext.detectedScripts.filter((script) => Boolean(PDF_SCRIPT_FONT_SPECS[script]));
  }

  function getSafePdfSegmentationScripts(scriptLoadList) {
    return [];
  }

  function getPendingPdfFontResources(pdfMakeInstance, scriptLoadList, languageProfile) {
    const existingVfs = pdfMakeInstance.vfs || {};
    const pendingResources = scriptLoadList
      .filter((script) => {
        const spec = PDF_SCRIPT_FONT_SPECS[script];
        return spec && !existingVfs[spec.file];
      })
      .map((script) => ({ key: script, kind: 'script' }));
    if (shouldLoadPdfEmojiFont(existingVfs, languageProfile)) {
      pendingResources.push({ key: 'emoji', kind: 'emoji' });
    }
    return pendingResources;
  }

  function shouldLoadPdfEmojiFont(existingVfs, languageProfile) {
    return Boolean(
      PDF_ENABLE_EMOJI_FONT &&
      languageProfile &&
      languageProfile.containsEmoji &&
      !existingVfs[PDF_EMOJI_FONT_FILE]
    );
  }

  async function showPdfFontsAlreadyCached() {
    updatePdfExportLoader({
      stage: 'Loading PDF fonts...',
      detail: 'All required fonts are already cached locally.',
      progress: 0.84,
      progressText: 'Step 3 of 5',
      indeterminate: false
    });
    await waitForNextPaint();
  }

  async function loadPdfScriptFonts(pdfMakeInstance, scriptLoadList, pendingResources) {
    for (let index = 0; index < scriptLoadList.length; index += 1) {
      const script = scriptLoadList[index];
      const family = await ensureScriptFont(pdfMakeInstance, script, buildPdfFontProgressState(script, pendingResources));
      if (script && family) {
        activePdfFontContext.scriptFonts[script] = family;
      }
    }
  }

  function buildPdfFontProgressState(key, pendingResources) {
    return {
      resourceIndex: pendingResources.findIndex((entry) => entry.key === key),
      totalResources: pendingResources.length,
      pendingResources: pendingResources
    };
  }

  async function loadPdfEmojiFontIfNeeded(pdfMakeInstance, languageProfile, pendingResources) {
    if (!PDF_ENABLE_EMOJI_FONT || !languageProfile || !languageProfile.containsEmoji) {
      return;
    }
    const emojiFont = await ensureEmojiFont(pdfMakeInstance, buildPdfFontProgressState('emoji', pendingResources));
    if (emojiFont) {
      activePdfEmojiFontFamily = emojiFont;
      activePdfFontContext.emojiFontFamily = emojiFont;
    }
  }

  async function showPdfFontsReady(pendingResources) {
    updatePdfExportLoader({
      stage: 'Loading PDF fonts...',
      detail: pendingResources.length
        ? 'Required language fonts are ready for the PDF renderer.'
        : 'No extra font download was needed.',
      progress: 0.84,
      progressText: 'Step 3 of 5',
      indeterminate: false
    });
    await waitForNextPaint();
  }

  function mergePdfVfs(pdfMakeInstance, vfs) {
    if (!vfs || typeof vfs !== 'object') {
      return;
    }
    if (typeof pdfMakeInstance.addVirtualFileSystem === 'function') {
      pdfMakeInstance.addVirtualFileSystem(vfs);
    } else {
      pdfMakeInstance.vfs = Object.assign({}, pdfMakeInstance.vfs || {}, vfs);
    }
    if (window.pdfMake && window.pdfMake !== pdfMakeInstance) {
      window.pdfMake.vfs = Object.assign({}, window.pdfMake.vfs || {}, vfs);
    }
  }

  async function ensureScriptFont(pdfMakeInstance, script, progressState) {
    const spec = PDF_SCRIPT_FONT_SPECS[script];
    if (!spec) {
      return '';
    }
    try {
      const vfs = pdfMakeInstance.vfs || {};
      if (vfs[spec.file]) {
        registerPdfFont(pdfMakeInstance, spec.family, spec.file);
        return spec.family;
      }
      const base64 = await loadRemoteFontBase64(spec.file, spec.urls, script, progressState);
      if (!base64) {
        return '';
      }
      const nextVfs = {};
      nextVfs[spec.file] = base64;
      mergePdfVfs(pdfMakeInstance, nextVfs);
      registerPdfFont(pdfMakeInstance, spec.family, spec.file);
      return spec.family;
    } catch (err) {
      console.warn(`OmniChat: ${script} PDF font unavailable`, err);
      return '';
    }
  }

  async function ensureEmojiFont(pdfMakeInstance, progressState) {
    try {
      const vfs = pdfMakeInstance.vfs || {};
      if (vfs[PDF_EMOJI_FONT_FILE]) {
        registerPdfFont(pdfMakeInstance, PDF_EMOJI_FONT_FAMILY, PDF_EMOJI_FONT_FILE);
        return PDF_EMOJI_FONT_FAMILY;
      }
      const base64 = await loadRemoteFontBase64(PDF_EMOJI_FONT_FILE, PDF_EMOJI_FONT_URLS, 'emoji', progressState);
      if (!base64) {
        return '';
      }
      const nextVfs = {};
      nextVfs[PDF_EMOJI_FONT_FILE] = base64;
      mergePdfVfs(pdfMakeInstance, nextVfs);
      registerPdfFont(pdfMakeInstance, PDF_EMOJI_FONT_FAMILY, PDF_EMOJI_FONT_FILE);
      return PDF_EMOJI_FONT_FAMILY;
    } catch (err) {
      console.warn('OmniChat: emoji font unavailable for PDF export', err);
      return '';
    }
  }

  function registerPdfFont(pdfMakeInstance, family, filename) {
    const existing = pdfMakeInstance.fonts || {};
    pdfMakeInstance.fonts = Object.assign({}, existing, {
      [family]: {
        normal: filename,
        bold: filename,
        italics: filename,
        bolditalics: filename
      }
    });
  }

  async function loadRemoteFontBase64(cacheKey, urls, label, progressState) {
    if (!pdfFontBase64Promises[cacheKey]) {
      pdfFontBase64Promises[cacheKey] = (async function () {
        for (const url of urls) {
          try {
            updatePdfFontDownloadProgress(progressState, label, 0, 0, true);
            const buffer = await requestRemoteArrayBuffer(url, `${label || 'PDF'} font`, (loaded, total, indeterminate) => {
              updatePdfFontDownloadProgress(progressState, label, loaded, total, indeterminate);
            });
            if (!buffer || !buffer.byteLength) {
              continue;
            }
            updatePdfFontDownloadProgress(progressState, label, buffer.byteLength, buffer.byteLength, false);
            return await arrayBufferToBase64(buffer);
          } catch (err) {
            const details = String((err && err.message) || err || '');
            const isCspBlocked = /content security policy|csp|failed to fetch/i.test(details);
            if (isCspBlocked) {
              return '';
            }
            console.warn(`OmniChat: failed loading ${label || 'pdf'} font URL`, url, err);
          }
        }
        return '';
      })();
    }
    return pdfFontBase64Promises[cacheKey];
  }

  function updatePdfFontDownloadProgress(progressState, label, loaded, total, indeterminate) {
    const state = normalizePdfFontProgressState(progressState);
    const resourceLabel = formatPdfResourceLabel(label);
    const resourceProgress = getPdfFontResourceProgress(resourceLabel, loaded, total);

    updatePdfExportLoader({
      stage: 'Loading PDF fonts...',
      detail: buildPdfFontProgressDetail(resourceLabel, state),
      progress: calculatePdfFontOverallProgress(state, resourceProgress.withinResource),
      progressText: buildPdfFontProgressText(state, resourceProgress.meta),
      indeterminate: Boolean(indeterminate && !(Number.isFinite(total) && total > 0))
    });
  }

  function normalizePdfFontProgressState(progressState) {
    return {
      totalResources: Math.max(0, Number(progressState && progressState.totalResources) || 0),
      resourceIndex: Math.max(0, Number(progressState && progressState.resourceIndex) || 0),
      pendingResources: progressState && Array.isArray(progressState.pendingResources)
        ? progressState.pendingResources
        : []
    };
  }

  function getPdfFontResourceProgress(resourceLabel, loaded, total) {
    if (Number.isFinite(total) && total > 0 && Number.isFinite(loaded)) {
      const withinResource = Math.max(0, Math.min(1, loaded / total));
      return {
        withinResource,
        meta: `${resourceLabel} ${Math.round(withinResource * 100)}%`
      };
    }
    if (Number.isFinite(loaded) && loaded > 0) {
      return {
        withinResource: 0,
        meta: `${resourceLabel} ${formatPdfByteSize(loaded)} downloaded`
      };
    }
    return {
      withinResource: 0,
      meta: `${resourceLabel}...`
    };
  }

  function calculatePdfFontOverallProgress(state, withinResource) {
    const overallBase = 0.34;
    const overallSpan = 0.5;
    if (state.totalResources <= 0) {
      return overallBase;
    }
    return overallBase + (((state.resourceIndex + withinResource) / state.totalResources) * overallSpan);
  }

  function buildPdfFontProgressDetail(resourceLabel, state) {
    const remainingLabels = state.pendingResources
      .slice(Math.min(state.resourceIndex, state.pendingResources.length))
      .map((entry) => formatPdfResourceLabel(entry.key));
    return remainingLabels.length
      ? `Loading ${resourceLabel}. Remaining resources: ${remainingLabels.join(', ')}.`
      : `Loading ${resourceLabel}.`;
  }

  function buildPdfFontProgressText(state, meta) {
    const resourceCountText = state.totalResources > 0
      ? `${Math.min(state.resourceIndex + 1, state.totalResources)} / ${state.totalResources} resources`
      : 'Step 3 of 5';
    return meta ? `${resourceCountText} | ${meta}` : resourceCountText;
  }

  async function readRemoteFontBuffer(response, onProgress) {
    if (!response || !response.body || typeof response.body.getReader !== 'function') {
      const directBuffer = await response.arrayBuffer();
      if (typeof onProgress === 'function') {
        onProgress(directBuffer.byteLength, directBuffer.byteLength, false);
      }
      return directBuffer;
    }

    const contentLength = Number.parseInt(response.headers.get('content-length') || '', 10);
    const total = Number.isFinite(contentLength) && contentLength > 0 ? contentLength : 0;
    const reader = response.body.getReader();
    const chunks = [];
    let loaded = 0;
    let nextYieldAt = 256 * 1024;

    while (true) {
      const result = await reader.read();
      if (!result || result.done) {
        break;
      }
      const value = result.value;
      if (!value || !value.byteLength) {
        continue;
      }
      chunks.push(value);
      loaded += value.byteLength;
      if (typeof onProgress === 'function') {
        onProgress(loaded, total, !total);
      }
      if (loaded >= nextYieldAt) {
        nextYieldAt += 256 * 1024;
        await waitForNextPaint();
      }
    }

    const merged = mergeUint8ArrayChunks(chunks, loaded);
    if (typeof onProgress === 'function') {
      onProgress(loaded, total || loaded, false);
    }
    return merged.buffer;
  }

  function mergeUint8ArrayChunks(chunks, totalLength) {
    const output = new Uint8Array(totalLength);
    let offset = 0;
    chunks.forEach((chunk) => {
      output.set(chunk, offset);
      offset += chunk.byteLength;
    });
    return output;
  }

  async function arrayBufferToBase64(buffer) {
    if (typeof FileReader === 'function') {
      return await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const result = ensureString(reader.result);
          const commaIndex = result.indexOf(',');
          resolve(commaIndex >= 0 ? result.slice(commaIndex + 1) : result);
        };
        reader.onerror = () => reject(reader.error || new Error('FileReader failed'));
        reader.readAsDataURL(new Blob([buffer]));
      });
    }
    const bytes = new Uint8Array(buffer);
    const chunkSize = 0x8000;
    let binary = '';
    for (let index = 0; index < bytes.length; index += chunkSize) {
      const chunk = bytes.subarray(index, index + chunkSize);
      binary += String.fromCharCode.apply(null, chunk);
    }
    return btoa(binary);
  }

  function formatPdfByteSize(bytes) {
    const value = Number(bytes);
    if (!Number.isFinite(value) || value <= 0) {
      return '0 B';
    }
    if (value < 1024) {
      return `${Math.round(value)} B`;
    }
    if (value < 1024 * 1024) {
      return `${(value / 1024).toFixed(1)} KB`;
    }
    return `${(value / (1024 * 1024)).toFixed(1)} MB`;
  }

  function applyEmojiFontToTree(node) {
    if (!activePdfEmojiFontFamily && !activePdfFontContext) {
      return node;
    }
    if (typeof node === 'string') {
      return formatPdfTextWithEmoji(node);
    }
    if (Array.isArray(node)) {
      return node.map(applyEmojiFontToTree);
    }
    if (!node || typeof node !== 'object') {
      return node;
    }
    const next = Object.assign({}, node);
    if (Object.prototype.hasOwnProperty.call(next, 'text')) {
      next.text = applyPdfFontsToTextValue(next.text);
    }
    if (Array.isArray(next.stack)) {
      next.stack = next.stack.map(applyEmojiFontToTree);
    }
    if (Array.isArray(next.ul)) {
      next.ul = next.ul.map(applyEmojiFontToTree);
    }
    if (Array.isArray(next.ol)) {
      next.ol = next.ol.map(applyEmojiFontToTree);
    }
    if (Array.isArray(next.columns)) {
      next.columns = next.columns.map(applyEmojiFontToTree);
    }
    if (next.table && Array.isArray(next.table.body)) {
      next.table = Object.assign({}, next.table, {
        body: next.table.body.map((row) =>
          Array.isArray(row) ? row.map(applyEmojiFontToTree) : row
        )
      });
    }
    return next;
  }

  function applyPdfFontsToTextValue(value) {
    if (typeof value === 'string') {
      return formatPdfTextWithEmoji(value);
    }
    if (Array.isArray(value)) {
      const output = [];
      value.forEach((entry) => {
        appendPdfTextValue(output, entry);
      });
      return output.length === 1 && typeof output[0] === 'string' ? output[0] : output;
    }
    if (value && typeof value === 'object') {
      return applyEmojiFontToTree(value);
    }
    return value;
  }

  function appendPdfTextValue(target, value) {
    if (value === null || value === undefined) {
      return;
    }
    if (typeof value === 'string') {
      const formatted = formatPdfTextWithEmoji(value);
      if (Array.isArray(formatted)) {
        target.push(...formatted);
      } else {
        target.push(formatted);
      }
      return;
    }
    if (Array.isArray(value)) {
      value.forEach((entry) => appendPdfTextValue(target, entry));
      return;
    }
    if (typeof value === 'object') {
      target.push(applyEmojiFontToTree(value));
      return;
    }
    target.push(value);
  }

  function formatPdfTextWithEmoji(text) {
    const raw = ensureString(text);
    if (!raw) {
      return '';
    }
    const fontContext = activePdfFontContext;
    const hasScriptFonts = Boolean(
      fontContext &&
      fontContext.scriptFonts &&
      Object.keys(fontContext.scriptFonts).length
    );
    if (!activePdfEmojiFontFamily && !hasScriptFonts) {
      return raw;
    }
    const textUnits = splitPdfTextForFontRouting(raw, fontContext);
    const chunks = [];
    let currentText = '';
    let currentFont = null;
    let currentForceSeparate = false;

    textUnits.forEach((unit) => {
      const segment = unit && typeof unit === 'object' ? ensureString(unit.text) : ensureString(unit);
      const nextFont = resolvePdfFontFamilyForTextUnit(unit, fontContext);
      const forceSeparate = Boolean(unit && typeof unit === 'object' && unit.forceSeparate);
      if (currentFont === null) {
        currentText = segment;
        currentFont = nextFont;
        currentForceSeparate = forceSeparate;
        return;
      }
      if (currentFont === nextFont && !currentForceSeparate && !forceSeparate) {
        currentText += segment;
        currentFont = nextFont;
        return;
      }
      chunks.push({ text: currentText, font: currentFont || '' });
      currentText = segment;
      currentFont = nextFont;
      currentForceSeparate = forceSeparate;
    });

    if (currentText) {
      chunks.push({ text: currentText, font: currentFont || '' });
    }

    if (chunks.length === 1 && !chunks[0].font) {
      return chunks[0].text;
    }

    return chunks.map((chunk) => {
      if (chunk.font) {
        return buildPdfFontRoutedTextChunk(chunk.text, chunk.font);
      }
      return { text: chunk.text };
    });
  }

  function buildPdfFontRoutedTextChunk(text, font) {
    const chunk = {
      text: text,
      font: font,
      lineHeight: 1,
      noWrap: false,
      verticalAlign: 'baseline',
      alignmentBaseline: 'baseline'
    };
    return chunk;
  }

  function splitPdfTextForFontRouting(text, fontContext) {
    const graphemes = splitGraphemes(text);
    const output = [];

    graphemes.forEach((segment, index) => {
      const scriptHint = detectPdfScriptForSegment(segment, graphemes, index, fontContext);
      const forceSeparate = shouldUseSafePdfScriptSegmentation(scriptHint, fontContext);
      if (!forceSeparate) {
        output.push({ text: segment, scriptHint: scriptHint, forceSeparate: false });
        return;
      }
      Array.from(segment).forEach((codePoint) => {
        if (codePoint) {
          output.push({ text: codePoint, scriptHint: scriptHint, forceSeparate: true });
        }
      });
    });

    return output;
  }

  function shouldUseSafePdfScriptSegmentation(script, fontContext) {
    if (!script || !fontContext || !Array.isArray(fontContext.safeSegmentationScripts)) {
      return false;
    }
    return fontContext.safeSegmentationScripts.indexOf(script) !== -1;
  }

  function resolvePdfFontFamilyForTextUnit(unit, fontContext) {
    const segment = unit && typeof unit === 'object' ? ensureString(unit.text) : ensureString(unit);
    if (!fontContext || !fontContext.scriptFonts) {
      return resolveFallbackEmojiPdfFont(segment);
    }
    const script = unit && typeof unit === 'object' ? ensureString(unit.scriptHint) : '';
    const symbolFont = resolvePdfSymbolFont(script, fontContext);
    if (symbolFont) {
      return symbolFont;
    }
    if (script && fontContext.scriptFonts[script]) {
      return fontContext.scriptFonts[script];
    }
    return resolveFallbackEmojiPdfFont(segment);
  }

  function resolveFallbackEmojiPdfFont(segment) {
    return activePdfEmojiFontFamily && containsEmojiStyleForPdf(segment)
      ? activePdfEmojiFontFamily
      : '';
  }

  function resolvePdfSymbolFont(script, fontContext) {
    if (script === 'symbols') {
      return activePdfEmojiFontFamily || fontContext.scriptFonts.symbolsExtra || fontContext.scriptFonts.symbolsText || '';
    }
    if (script === 'symbolsExtra') {
      return fontContext.scriptFonts.symbolsExtra || fontContext.scriptFonts.symbolsText || activePdfEmojiFontFamily || '';
    }
    if (script === 'symbolsText') {
      return fontContext.scriptFonts.symbolsText || fontContext.scriptFonts.symbolsExtra || activePdfEmojiFontFamily || '';
    }
    return '';
  }

  function detectPdfScriptForSegment(segment, graphemes, index, fontContext) {
    const priorityScript = detectPriorityPdfScript(segment, graphemes, index, fontContext);
    if (priorityScript) {
      return priorityScript;
    }
    return detectDirectPdfScript(segment);
  }

  function detectPriorityPdfScript(segment, graphemes, index, fontContext) {
    if (PDF_SCRIPT_DETECTION_PATTERNS.latinExtended.test(segment) ||
      PDF_LATIN_COMBINING_MARK_PATTERN.test(segment) && hasLatinExtendedContext(graphemes, index) ||
      PDF_SCRIPT_DETECTION_PATTERNS.latin.test(segment) && hasLatinExtendedContext(graphemes, index)) {
      return 'latinExtended';
    }
    if (PDF_SCRIPT_DETECTION_PATTERNS.japanese.test(segment)) {
      return 'japanese';
    }
    if (PDF_SCRIPT_DETECTION_PATTERNS.korean.test(segment)) {
      return 'korean';
    }
    if (PDF_CJK_SYMBOL_PATTERN.test(segment) || PDF_HAN_PATTERN.test(segment)) {
      return resolveCjkPdfScript(graphemes, index, fontContext);
    }
    return '';
  }

  function detectDirectPdfScript(segment) {
    if (containsEmojiStyleForPdf(segment)) {
      return 'symbols';
    }
    if (containsEmojiForPdf(segment)) {
      return 'symbols';
    }
    if (PDF_SCRIPT_DETECTION_PATTERNS.sinhala.test(segment)) {
      return 'sinhala';
    }
    for (const script of PDF_DIRECT_SCRIPT_SCAN_ORDER) {
      const pattern = PDF_SCRIPT_DETECTION_PATTERNS[script];
      if (pattern && pattern.test(segment)) {
        return script;
      }
    }
    if (containsPdfSymbolTextForRouting(segment)) {
      return 'symbolsText';
    }
    return '';
  }

  function hasLatinExtendedContext(graphemes, index) {
    return collectPdfTokenAroundIndex(graphemes, index, 12).some((segment) => {
      return PDF_SCRIPT_DETECTION_PATTERNS.latinExtended.test(segment) || PDF_LATIN_COMBINING_MARK_PATTERN.test(segment);
    });
  }

  function containsPdfSymbolTextForRouting(text) {
    return PDF_SYMBOL_TEXT_PATTERN.test(ensureString(text));
  }

  function containsPdfSymbolTextNeedingSymbolsFont(text, hasCjkContext) {
    const value = ensureString(text);
    if (!value) {
      return false;
    }
    if (PDF_NON_CJK_SYMBOL_TEXT_PATTERN.test(value)) {
      return true;
    }
    return !hasCjkContext && PDF_SYMBOL_TEXT_PATTERN.test(value);
  }

  function containsEmojiStyleForPdf(text) {
    return PDF_EMOJI_STYLE_PATTERN.test(ensureString(text));
  }

  function collectPdfTokenAroundIndex(graphemes, index, maxLength) {
    const output = [];
    const start = Math.max(0, index - maxLength);
    const end = Math.min(graphemes.length - 1, index + maxLength);
    for (let cursor = start; cursor <= end; cursor += 1) {
      const value = ensureString(graphemes[cursor]);
      if (!value) {
        continue;
      }
      if (cursor !== index && PDF_TOKEN_BREAK_PATTERN.test(value)) {
        if (cursor < index) {
          output.length = 0;
          continue;
        }
        break;
      }
      output.push(value);
    }
    return output;
  }

  function resolveCjkPdfScript(graphemes, index, fontContext) {
    const around = [
      graphemes[index - 2] || '',
      graphemes[index - 1] || '',
      graphemes[index + 1] || '',
      graphemes[index + 2] || ''
    ].join('');
    if (PDF_SCRIPT_DETECTION_PATTERNS.japanese.test(around)) {
      return 'japanese';
    }
    if (PDF_SCRIPT_DETECTION_PATTERNS.korean.test(around)) {
      return 'korean';
    }

    const context = getCjkPdfLanguageContext(fontContext);
    return resolveCjkScriptFromMainLanguage(context) ||
      resolveCjkScriptFromDetectedLanguages(context) ||
      resolveCjkScriptFromDetectedScripts(context);
  }

  function getCjkPdfLanguageContext(fontContext) {
    return {
      detectedScripts: new Set(
        fontContext && Array.isArray(fontContext.detectedScripts) ? fontContext.detectedScripts : []
      ),
      detectedLanguages: fontContext && Array.isArray(fontContext.detectedLanguages)
        ? fontContext.detectedLanguages
        : [],
      mainLanguage: fontContext && fontContext.mainLanguage ? fontContext.mainLanguage : ''
    };
  }

  function resolveCjkScriptFromMainLanguage(context) {
    const languageMap = { ja: 'japanese', ko: 'korean', zh: 'chinese' };
    const script = languageMap[context.mainLanguage];
    return script && context.detectedScripts.has(script) ? script : '';
  }

  function resolveCjkScriptFromDetectedLanguages(context) {
    const languageChecks = [
      ['ja', 'japanese'],
      ['ko', 'korean'],
      ['zh', 'chinese']
    ];
    const match = languageChecks.find(([language, script]) => {
      return context.detectedLanguages.indexOf(language) !== -1 && context.detectedScripts.has(script);
    });
    return match ? match[1] : '';
  }

  function resolveCjkScriptFromDetectedScripts(context) {
    const scripts = context.detectedScripts;
    if (scripts.has('chinese') && !scripts.has('japanese')) {
      return 'chinese';
    }
    if (scripts.has('japanese') && !scripts.has('chinese')) {
      return 'japanese';
    }
    return ['chinese', 'japanese', 'korean'].find((script) => scripts.has(script)) || '';
  }

  function splitGraphemes(text) {
    if (!graphemeSegmenterRef && typeof Intl !== 'undefined' && typeof Intl.Segmenter === 'function') {
      try {
        graphemeSegmenterRef = new Intl.Segmenter(undefined, { granularity: 'grapheme' });
      } catch (err) {
        graphemeSegmenterRef = null;
      }
    }
    if (graphemeSegmenterRef) {
      return Array.from(graphemeSegmenterRef.segment(text), part => part.segment);
    }
    return Array.from(text);
  }

  function containsEmojiForPdf(text) {
    if (!emojiRegexRef) {
      try {
        emojiRegexRef = new RegExp(
          '(?:\\p{Extended_Pictographic}|\\p{Regional_Indicator}|\\p{Emoji_Modifier}|\\u{FE0F}|\\u{20E3}|\\u{200D})',
          'u'
        );
      } catch (err) {
        emojiRegexRef = /[\uD83C-\uDBFF][\uDC00-\uDFFF]|[\u2600-\u27BF]|\uFE0F/;
      }
    }
    return emojiRegexRef.test(text);
  }

  // ─────────────────────────────────────────────
  // PDF font routing
  // ─────────────────────────────────────────────

  function ensureBaseFont(pdfMakeInstance) {
    const vfs = pdfMakeInstance.vfs || {};
    const regular = vfs['Roboto-Regular.ttf'] ? 'Roboto-Regular.ttf' :
      (vfs['Roboto-Medium.ttf'] ? 'Roboto-Medium.ttf' : null);
    if (!regular) {
      pdfMakeInstance.fonts = Object.assign({}, pdfMakeInstance.fonts, {
        Helvetica: {
          normal: 'Helvetica',
          bold: 'Helvetica-Bold',
          italics: 'Helvetica-Oblique',
          bolditalics: 'Helvetica-BoldOblique'
        },
        monospace: {
          normal: 'Helvetica',
          bold: 'Helvetica-Bold',
          italics: 'Helvetica-Oblique',
          bolditalics: 'Helvetica-BoldOblique'
        }
      });
      return 'Helvetica';
    }
    const italic = vfs['Roboto-Italic.ttf'] ? 'Roboto-Italic.ttf' : regular;
    const bold = vfs['Roboto-Medium.ttf'] ? 'Roboto-Medium.ttf' : regular;
    const bolditalic = vfs['Roboto-MediumItalic.ttf'] ? 'Roboto-MediumItalic.ttf' : italic;

    pdfMakeInstance.fonts = Object.assign({}, pdfMakeInstance.fonts, {
      Roboto: {
        normal: regular,
        bold: bold,
        italics: italic,
        bolditalics: bolditalic
      },
      Courier: {
        normal: regular,
        bold: bold,
        italics: italic,
        bolditalics: bolditalic
      },
      monospace: {
        normal: regular,
        bold: bold,
        italics: italic,
        bolditalics: bolditalic
      }
    });
    return 'Roboto';
  }


  function getLocalPdfMake() {
    try {
      if (typeof pdfMake !== 'undefined') {
        return pdfMake;
      }
    } catch (err) {
      return null;
    }
    return null;
  }

  // ─────────────────────────────────────────────
  // Startup and observers
  // ─────────────────────────────────────────────

  function startObserver() {
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          queueScanForNode(node);
        });
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
    if (platform === 'gemini') {
      logGeminiThreadInjection('observer', 'MutationObserver started');
    }
  }

  function startViewportWatcher() {
    let resizeTimer = null;
    const scheduleRescan = () => {
      if (resizeTimer) {
        clearTimeout(resizeTimer);
      }
      resizeTimer = setTimeout(() => {
        resizeTimer = null;
        attachButtons(document);
      }, 120);
    };
    window.addEventListener('resize', scheduleRescan, { passive: true });
    window.addEventListener('orientationchange', scheduleRescan, { passive: true });
  }

  injectStyles();
  attachButtons(document);
  startObserver();
  startViewportWatcher();

})();
