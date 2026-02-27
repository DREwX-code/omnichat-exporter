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
// @version      1.0.0
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

// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.9/pdfmake.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.9/vfs_fonts.js
// @run-at       document-idle
// @tag          utilities
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

---

Third-Party Libraries:

PDF Generation (pdfmake):

This project uses pdfmake to generate PDF files directly in the browser.
No chat content is sent to any external PDF service.

Website: https://pdfmake.github.io/docs/
CDN: https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.9/pdfmake.min.js
Source: https://github.com/bpampuch/pdfmake
License: MIT

*/


(function () {
  'use strict';

  const host = location.hostname;
  const platform = detectPlatform(host);
  if (!platform) {
    return;
  }

  const STYLE_ID = 'omni-exporter-style';
  const EXPORT_BUTTON_CLASS = 'omni-exporter-btn';
  const SHARE_BUTTON_SELECTOR = '[aria-label="Partager"], [aria-label="Share"]';
  const TURN_SELECTOR = '[data-testid^="conversation-turn"]';
  const HEADER_ACTIONS_SELECTOR = '#conversation-header-actions';
  const HEADER_EXPORT_ATTR = 'data-omni-export-header';
  const EXPORT_SCOPE_ATTR = 'data-omni-scope';
  const GROK_SHARE_BUTTON_SELECTOR =
    'button[aria-label*="lien de partage"], button[aria-label*="share link"], button[aria-label*="share"], button[aria-label*="partager"]';
  const GROK_EXPORT_ATTR = 'data-omni-export-grok';
  const GROK_HEADER_SELECTOR = '.absolute.flex.flex-row.items-center.gap-0\\.5.ms-auto.end-3';
  const GROK_THREAD_EXPORT_ATTR = 'data-omni-export-grok-thread';
  const GROK_THREAD_EXPORT_CLASS =
    `inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium leading-[normal] ` +
    `cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-100 ` +
    `[&_svg]:shrink-0 select-none hover:bg-button-ghost-hover hover:text-fg-primary disabled:hover:bg-transparent border border-transparent rounded-full overflow-hidden ` +
    `h-10 w-10 p-2 text-fg-primary`;
  const GEMINI_ACTIONS_SELECTOR = '.actions-container-v2';
  const GEMINI_CONVERSATION_SELECTOR = '.conversation-container';
  const GEMINI_TURN_EXPORT_ATTR = 'data-omni-export-gemini-turn';
  const GEMINI_TURN_NATIVE_ATTR = 'data-omni-gemini-native-turn';
  const GEMINI_TURN_HOST_ATTR = 'data-omni-gemini-turn-host';
  const GEMINI_SHARE_BUTTON_SELECTOR =
    'button[data-test-id="share-and-export-menu-button"], button[data-test-id="share-button"], button[aria-label*="Partager et exporter"], button[aria-label*="Share and export"], button[aria-label*="Partager la conversation"], button[aria-label*="Share conversation"]';
  const GEMINI_HEADER_SELECTOR = '.buttons-container.share';
  const GEMINI_THREAD_EXPORT_ATTR = 'data-omni-export-gemini-thread';
  const GEMINI_THREAD_NATIVE_ATTR = 'data-omni-gemini-native-thread';
  const CLAUDE_HEADER_SELECTOR = '[data-testid="wiggle-controls-actions"]';
  const CLAUDE_SHARE_SELECTOR = '[data-testid="wiggle-controls-actions-share"]';
  const CLAUDE_THREAD_EXPORT_ATTR = 'data-omni-export-claude-thread';
  const CLAUDE_ACTIONS_SELECTOR = '[role="group"][aria-label="Message actions"]';
  const CLAUDE_COPY_SELECTOR = '[data-testid="action-bar-copy"], button[aria-label="Copy"]';
  const CLAUDE_TURN_EXPORT_ATTR = 'data-omni-export-claude-turn';
  const DEEPSEEK_ACTIONS_SELECTOR = 'div.ds-flex._0a3d93b';
  const DEEPSEEK_GROUP_SELECTOR = 'div.ds-flex._965abe9';
  const DEEPSEEK_ROLE_BUTTON_SELECTOR = '[role="button"]';
  const DEEPSEEK_TURN_BUTTON_CLASSNAME =
    'db183363 ds-icon-button ds-icon-button--m ds-icon-button--sizing-container';
  const DEEPSEEK_THREAD_BUTTON_CLASSNAME =
    '_57370c5 _5dedc1e ds-icon-button ds-icon-button--l ds-icon-button--sizing-container';
  const DEEPSEEK_EXPORT_ATTR = 'data-omni-export-deepseek';
  const DEEPSEEK_THREAD_BUTTON_SELECTOR =
    'div._57370c5._5dedc1e.ds-icon-button.ds-icon-button--l.ds-icon-button--sizing-container[role="button"]';
  const DEEPSEEK_THREAD_EXPORT_ATTR = 'data-omni-export-deepseek-thread';
  const MENU_CLASS = 'omni-exporter-menu';
  const MENU_ITEM_CLASS = 'omni-exporter-menu-item';
  const MENU_OPEN_CLASS = 'omni-exporter-menu-open';
  const STATUS_DURATION_MS = 1400;
  const PDF_EMOJI_FONT_FAMILY = 'NotoEmoji';
  const PDF_EMOJI_FONT_FILE = 'NotoEmoji-Regular.ttf';
  const PDF_EMOJI_FONT_URLS = [
    'https://raw.githubusercontent.com/googlefonts/noto-emoji/main/fonts/NotoEmoji-Regular.ttf'
  ];
  let iconCounter = 0;
  let activeMenu = null;
  let activeMenuButton = null;
  let menuCleanup = null;
  let pdfMakeRef = null;
  let activePdfEmojiFontFamily = '';
  let emojiFontBase64Promise = null;
  let emojiRegexRef = null;
  let graphemeSegmenterRef = null;

  const styles = `
.${EXPORT_BUTTON_CLASS}:not(.omni-exporter-grok) {
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

.${EXPORT_BUTTON_CLASS}:not(.omni-exporter-grok) svg {
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
  width: 18px;
  height: 18px;
  display: block;
  color: currentColor;
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

.omni-exporter-btn:not(.omni-exporter-grok) { color: #f3f3f3 !important; }
.omni-exporter-btn[data-omni-scope="turn"] svg path {
  stroke-width: 1.6;
}

.omni-exporter-btn[data-omni-scope="thread"]:hover {
  background-color: var(--token-bg-secondary);
  border-radius: 8px;
}

.omni-exporter-btn[data-omni-export-claude-turn] {
  color: #9c9a92 !important;
}

.omni-exporter-btn[data-omni-export-claude-turn]:hover {
  color: #faf9f5 !important;
  background-color: rgba(156, 154, 146, 0.15);
}

`;

  function buildExportIcon() {
    return `
<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" class="icon">
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

      if (roots.length > 50) {
        attachButtons(document);
      } else {
        roots.forEach((root) => attachButtons(root));
      }
    }, 80);
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
      return element.closest(GROK_HEADER_SELECTOR) ||
        element.closest(GROK_SHARE_BUTTON_SELECTOR) ||
        element;
    }
    if (platform === 'gemini') {
      return element.closest(GEMINI_ACTIONS_SELECTOR) || element;
    }
    if (platform === 'claude') {
      return element.closest(CLAUDE_ACTIONS_SELECTOR) ||
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
      if (turn.querySelector(`.${EXPORT_BUTTON_CLASS}`)) {
        turn.setAttribute('data-omni-processed', 'true');
        return;
      }
      const button = buildExportButton('turn');
      shareButton.insertAdjacentElement('afterend', button);
      turn.setAttribute('data-omni-processed', 'true');
    });
  }

  function attachGrokButtons(root) {
    const shareButtons = [];
    if (root.matches && root.matches(GROK_SHARE_BUTTON_SELECTOR)) {
      shareButtons.push(root);
    }
    shareButtons.push(...root.querySelectorAll(GROK_SHARE_BUTTON_SELECTOR));
    shareButtons.forEach((shareButton) => {
      if (shareButton.closest(GROK_HEADER_SELECTOR)) {
        return;
      }
      const actionBar = shareButton.parentElement;
      if (!actionBar || actionBar.querySelector(`[${GROK_EXPORT_ATTR}]`)) {
        return;
      }
      const button = buildGrokNativeTurnButton(shareButton);
      button.setAttribute(GROK_EXPORT_ATTR, 'true');
      shareButton.insertAdjacentElement('afterend', button);
    });
  }

  function buildGrokNativeTurnButton(referenceButton) {
    const button = referenceButton.cloneNode(true);
    button.removeAttribute('id');
    button.removeAttribute('aria-controls');
    button.removeAttribute('aria-describedby');
    button.removeAttribute('data-radix-collection-item');
    button.setAttribute('type', 'button');
    button.setAttribute('aria-label', 'Exporter ce chat');
    button.setAttribute(EXPORT_SCOPE_ATTR, 'turn');
    button.setAttribute('aria-haspopup', 'menu');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('data-state', 'closed');
    button.innerHTML = `<span style="opacity: 1; transform: none;">${buildExportIcon()}</span>`;
    button.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      toggleMenu(button);
    });
    return button;
  }

  function attachGeminiTurnButtons(root) {
    const scope = root || document;
    if (!scope.querySelectorAll) {
      return;
    }
    const containers = [];
    if (scope.matches && scope.matches(GEMINI_ACTIONS_SELECTOR)) {
      containers.push(scope);
    }
    containers.push(...scope.querySelectorAll(GEMINI_ACTIONS_SELECTOR));
    containers.forEach((container) => {
      const shareButton = container.querySelector(GEMINI_SHARE_BUTTON_SELECTOR);
      const referenceButton = shareButton || getGeminiTurnReferenceButton(container);
      if (!referenceButton) {
        return;
      }
      const shareAnchor = shareButton ? shareButton.closest('.tooltip-anchor-point') : null;
      const moreMenuBlock = getGeminiTurnMenuBlock(container);
      const referenceAnchor = referenceButton.closest('.tooltip-anchor-point');
      const existingButton = container.querySelector(`[${GEMINI_TURN_EXPORT_ATTR}]`);
      const existingNative = existingButton && existingButton.hasAttribute(GEMINI_TURN_NATIVE_ATTR);

      if (existingButton && !existingNative) {
        const staleWrapper = existingButton.closest('.tooltip-anchor-point');
        if (staleWrapper && staleWrapper !== shareAnchor && staleWrapper.childElementCount === 1) {
          staleWrapper.remove();
        } else {
          existingButton.remove();
        }
      }

      if (!existingNative) {
        const nativeButton = buildGeminiNativeTurnButton(referenceButton);
        if (shareAnchor) {
          const wrapper = shareAnchor.cloneNode(false);
          wrapper.setAttribute(GEMINI_TURN_HOST_ATTR, 'true');
          wrapper.appendChild(nativeButton);
          shareAnchor.insertAdjacentElement('afterend', wrapper);
        } else if (moreMenuBlock) {
          if (moreMenuBlock.matches('button')) {
            moreMenuBlock.insertAdjacentElement('beforebegin', nativeButton);
          } else {
            const wrapper = moreMenuBlock.cloneNode(false);
            wrapper.setAttribute(GEMINI_TURN_HOST_ATTR, 'true');
            wrapper.appendChild(nativeButton);
            moreMenuBlock.insertAdjacentElement('beforebegin', wrapper);
          }
        } else if (referenceAnchor) {
          const wrapper = referenceAnchor.cloneNode(false);
          wrapper.setAttribute(GEMINI_TURN_HOST_ATTR, 'true');
          wrapper.appendChild(nativeButton);
          referenceAnchor.insertAdjacentElement('beforebegin', wrapper);
        } else {
          referenceButton.insertAdjacentElement('beforebegin', nativeButton);
        }
        return;
      }

      const existingWrapper = existingButton.closest(`[${GEMINI_TURN_HOST_ATTR}]`) ||
        existingButton.closest('.tooltip-anchor-point');
      if (shareAnchor) {
        const correctTarget = shareAnchor.nextElementSibling;
        if (existingWrapper) {
          if (correctTarget !== existingWrapper) {
            shareAnchor.insertAdjacentElement('afterend', existingWrapper);
          }
        } else if (correctTarget !== existingButton) {
          shareAnchor.insertAdjacentElement('afterend', existingButton);
        }
      } else if (moreMenuBlock) {
        let nodeToPlace = existingWrapper || existingButton;
        if (!existingWrapper && !moreMenuBlock.matches('button')) {
          const wrapper = moreMenuBlock.cloneNode(false);
          wrapper.setAttribute(GEMINI_TURN_HOST_ATTR, 'true');
          wrapper.appendChild(existingButton);
          nodeToPlace = wrapper;
        }
        if (moreMenuBlock.previousElementSibling !== nodeToPlace) {
          moreMenuBlock.insertAdjacentElement('beforebegin', nodeToPlace);
        }
      } else if (shareButton && shareButton.nextElementSibling !== existingButton) {
        shareButton.insertAdjacentElement('afterend', existingButton);
      } else if (referenceAnchor) {
        const correctTarget = referenceAnchor.previousElementSibling;
        if (existingWrapper) {
          if (correctTarget !== existingWrapper) {
            referenceAnchor.insertAdjacentElement('beforebegin', existingWrapper);
          }
        } else if (correctTarget !== existingButton) {
          referenceAnchor.insertAdjacentElement('beforebegin', existingButton);
        }
      } else if (referenceButton.previousElementSibling !== existingButton) {
        referenceButton.insertAdjacentElement('beforebegin', existingButton);
      }
    });
  }

  function getGeminiTurnMenuBlock(container) {
    if (!container || !container.querySelector) {
      return null;
    }
    const moreButton = container.querySelector('button[data-test-id="more-menu-button"]');
    if (!moreButton) {
      return null;
    }
    const menuWrapper = moreButton.closest('.menu-button-wrapper');
    if (menuWrapper && menuWrapper.parentElement && menuWrapper.parentElement !== container) {
      return menuWrapper.parentElement;
    }
    return menuWrapper || moreButton;
  }

  function getGeminiTurnReferenceButton(container) {
    if (!container || !container.querySelectorAll) {
      return null;
    }
    const buttons = Array.from(container.querySelectorAll('button'));
    if (!buttons.length) {
      return null;
    }
    const menuButton = buttons.find((button) => button.getAttribute('data-test-id') === 'more-menu-button');
    if (menuButton) {
      return menuButton;
    }
    return buttons.find((button) => !button.hasAttribute(GEMINI_TURN_EXPORT_ATTR)) || null;
  }

  function buildGeminiNativeTurnButton(referenceButton) {
    const button = referenceButton.cloneNode(true);
    button.removeAttribute('data-test-id');
    button.removeAttribute('aria-describedby');
    button.removeAttribute('cdk-describedby-host');
    button.removeAttribute('jslog');
    button.setAttribute('type', 'button');
    button.setAttribute('aria-label', 'Exporter ce chat');
    button.setAttribute(EXPORT_SCOPE_ATTR, 'turn');
    button.setAttribute(GEMINI_TURN_EXPORT_ATTR, 'true');
    button.setAttribute(GEMINI_TURN_NATIVE_ATTR, 'true');
    button.setAttribute('aria-haspopup', 'menu');
    button.setAttribute('aria-expanded', 'false');

    const matIcon = button.querySelector('mat-icon');
    if (matIcon) {
      while (matIcon.firstChild) {
        matIcon.removeChild(matIcon.firstChild);
      }
      matIcon.removeAttribute('fonticon');
      matIcon.removeAttribute('data-mat-icon-name');
      matIcon.appendChild(buildExportIconElement());
    } else {
      button.appendChild(buildExportIconElement());
    }

    button.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      toggleMenu(button);
    });

    return button;
  }

  function attachGeminiThreadButton(root) {
    const shareContainer = document.querySelector(GEMINI_HEADER_SELECTOR);
    if (!shareContainer) {
      return;
    }

    const shareButton = shareContainer.querySelector(GEMINI_SHARE_BUTTON_SELECTOR);
    if (!shareButton) {
      return;
    }

    const existingButton = shareContainer.querySelector(`[${GEMINI_THREAD_EXPORT_ATTR}]`);
    const existingNative = existingButton && existingButton.hasAttribute(GEMINI_THREAD_NATIVE_ATTR);

    if (existingButton && !existingNative) {
      existingButton.remove();
    }

    if (!existingNative) {
      const button = buildGeminiNativeThreadButton(shareButton);
      shareContainer.insertBefore(button, shareButton);
      return;
    }

    if (existingButton && existingButton.nextElementSibling !== shareButton) {
      shareContainer.insertBefore(existingButton, shareButton);
    }
  }

  function buildGeminiNativeThreadButton(referenceButton) {
    const button = referenceButton.cloneNode(true);
    button.removeAttribute('data-test-id');
    button.removeAttribute('aria-describedby');
    button.removeAttribute('cdk-describedby-host');
    button.removeAttribute('jslog');
    button.setAttribute('type', 'button');
    button.setAttribute('aria-label', 'Exporter la conversation');
    button.setAttribute(EXPORT_SCOPE_ATTR, 'thread');
    button.setAttribute(GEMINI_THREAD_EXPORT_ATTR, 'true');
    button.setAttribute(GEMINI_THREAD_NATIVE_ATTR, 'true');
    button.setAttribute('aria-haspopup', 'menu');
    button.setAttribute('aria-expanded', 'false');

    const matIcon = button.querySelector('mat-icon');
    if (matIcon) {
      while (matIcon.firstChild) {
        matIcon.removeChild(matIcon.firstChild);
      }
      matIcon.removeAttribute('fonticon');
      matIcon.removeAttribute('data-mat-icon-name');
      matIcon.appendChild(buildExportIconElement());
    } else {
      button.appendChild(buildExportIconElement());
    }

    button.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      toggleMenu(button);
    });

    return button;
  }

  function attachGrokThreadButton(root) {
    if (document.querySelector(`[${GROK_THREAD_EXPORT_ATTR}]`)) {
      return;
    }

    const header = document.querySelector(GROK_HEADER_SELECTOR);
    if (!header) {
      return;
    }

    const shareButton = header.querySelector('button[aria-label="Créer un lien de partage"], button[aria-label="Partager"]');
    const plusButton = header.querySelector('button[aria-label="Plus"]');
    const referenceButton = shareButton || plusButton || header.querySelector('button');
    if (!referenceButton) {
      return;
    }

    const button = buildExportButton('thread', {
      overrideClassName: GROK_THREAD_EXPORT_CLASS
    });

    button.setAttribute(GROK_THREAD_EXPORT_ATTR, 'true');

    if (shareButton) {
      shareButton.insertAdjacentElement('beforebegin', button);
    } else {
      header.insertBefore(button, header.firstChild);
    }
  }

  function attachClaudeThreadButton(root) {
    const scope = root || document;
    const header = scope.matches && scope.matches(CLAUDE_HEADER_SELECTOR)
      ? scope
      : scope.querySelector(CLAUDE_HEADER_SELECTOR);
    if (!header || header.querySelector(`[${CLAUDE_THREAD_EXPORT_ATTR}]`)) {
      return;
    }
    const shareButton = header.querySelector(CLAUDE_SHARE_SELECTOR);
    const referenceButton = shareButton || header.querySelector('button');
    const button = buildExportButton('thread', {
      extraClasses: referenceButton ? referenceButton.className : ''
    });
    button.setAttribute(CLAUDE_THREAD_EXPORT_ATTR, 'true');
    if (shareButton) {
      shareButton.insertAdjacentElement('beforebegin', button);
    } else {
      header.insertAdjacentElement('afterbegin', button);
    }
  }

  function attachClaudeTurnButtons(root) {
    const scope = root || document;
    const containers = [];
    if (scope.matches && scope.matches(CLAUDE_ACTIONS_SELECTOR)) {
      containers.push(scope);
    }
    containers.push(...scope.querySelectorAll(CLAUDE_ACTIONS_SELECTOR));
    containers.forEach((container) => {
      if (container.querySelector(`[${CLAUDE_TURN_EXPORT_ATTR}]`)) {
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
        extraClasses: copyButton.className
      });
      button.setAttribute('aria-label', 'Export');
      button.setAttribute(CLAUDE_TURN_EXPORT_ATTR, 'true');
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

  function attachClaudeTooltip(wrapper, button, label) {
    let tooltipEl = null;
    let tooltipId = null;
    const show = () => {
      if (tooltipEl) {
        return;
      }
      tooltipId = `radix_${Math.random().toString(36).slice(2, 9)}`;
      wrapper.setAttribute('data-state', 'delayed-open');
      wrapper.setAttribute('aria-describedby', tooltipId);
      const popperWrapper = document.createElement('div');
      popperWrapper.setAttribute('data-radix-popper-content-wrapper', '');
      popperWrapper.style.position = 'fixed';
      popperWrapper.style.left = '0px';
      popperWrapper.style.top = '0px';
      popperWrapper.style.transform = 'translate(0px, -200%)';
      popperWrapper.style.minWidth = 'max-content';
      popperWrapper.style.willChange = 'transform';
      popperWrapper.style.zIndex = '50';
      const tooltip = document.createElement('div');
      tooltip.setAttribute('data-side', 'top');
      tooltip.setAttribute('data-align', 'center');
      tooltip.setAttribute('data-state', 'delayed-open');
      tooltip.className = 'px-2 py-1 text-xs font-normal font-ui leading-tight rounded-md shadow-md text-always-white bg-always-black/80 backdrop-blur break-words z-tooltip max-w-[13rem] text-pretty [*:disabled_&]:hidden';
      tooltip.textContent = label;
      const sr = document.createElement('span');
      sr.id = tooltipId;
      sr.setAttribute('role', 'tooltip');
      sr.style.position = 'absolute';
      sr.style.border = '0px';
      sr.style.width = '1px';
      sr.style.height = '1px';
      sr.style.padding = '0px';
      sr.style.margin = '-1px';
      sr.style.overflow = 'hidden';
      sr.style.clip = 'rect(0px, 0px, 0px, 0px)';
      sr.style.whiteSpace = 'nowrap';
      sr.style.overflowWrap = 'normal';
      sr.textContent = label;
      tooltip.appendChild(sr);
      popperWrapper.appendChild(tooltip);
      document.body.appendChild(popperWrapper);
      tooltipEl = popperWrapper;

      const rect = button.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.bottom;
      popperWrapper.style.transform = `translate(${Math.round(x)}px, ${Math.round(y + 8)}px) translate(-50%, 0)`;
    };

    const hide = () => {
      wrapper.setAttribute('data-state', 'closed');
      wrapper.removeAttribute('aria-describedby');
      if (tooltipEl) {
        tooltipEl.remove();
        tooltipEl = null;
        tooltipId = null;
      }
    };

    wrapper.addEventListener('mouseenter', show);
    wrapper.addEventListener('mouseleave', hide);
    button.addEventListener('focus', show);
    button.addEventListener('blur', hide);
  }


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
      group.appendChild(button);
    });
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
      button.style.marginRight = '50px';
      targetButton.insertAdjacentElement('beforebegin', button);
      break;
    }
  }

  function attachHeaderButton(root) {
    const scope = root || document;
    const headerActions = scope.matches && scope.matches(HEADER_ACTIONS_SELECTOR)
      ? scope
      : scope.querySelector(HEADER_ACTIONS_SELECTOR);
    if (!headerActions || headerActions.querySelector(`[${HEADER_EXPORT_ATTR}]`)) {
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
    }
    if (platform === 'chatgpt') {
      button.setAttribute('data-state', 'closed');
      button.setAttribute('data-radix-tooltip-trigger', '');
    }


    if (shareButton) {
      shareButton.insertAdjacentElement('beforebegin', button);
    } else {
      headerActions.insertAdjacentElement('afterbegin', button);
    }
  }

  function buildExportButton(scope, options) {
    const tagName = (options && options.tagName) || 'button';
    const button = document.createElement(tagName);

    if (tagName === 'button') {
      button.type = 'button';
      button.setAttribute('aria-label', 'Exporter ce chat');
    } else {
      button.setAttribute('role', 'button');
      button.setAttribute('tabindex', '0');
      button.setAttribute('aria-label', 'Exporter ce chat');
    }

    button.setAttribute(EXPORT_SCOPE_ATTR, scope);

    if (platform === 'chatgpt' && tagName === 'button') {
      button.setAttribute('data-state', 'closed');
      button.setAttribute('data-radix-tooltip-trigger', '');
    }

    const extraClasses = options && options.extraClasses ? ` ${options.extraClasses}` : '';
    const overrideClassName = options && options.overrideClassName ? options.overrideClassName : '';

    button.className = overrideClassName || `${EXPORT_BUTTON_CLASS}${extraClasses}`;

    if (platform === 'chatgpt' && scope === 'turn' && !overrideClassName) {
      button.className = `${EXPORT_BUTTON_CLASS} text-token-text-secondary hover:bg-token-bg-secondary rounded-lg`;
      button.innerHTML = `
      <span class="flex items-center justify-center touch:w-10 h-8 w-8">
        ${buildExportIcon()}
      </span>
    `;
    } else if (options && options.useDeepSeekMarkup) {
      button.innerHTML = `
<div class="ds-icon-button__hover-bg"></div>
<div class="ds-icon">${platform === 'gemini' ? '' : buildExportIcon()}</div>
<div class="ds-focus-ring"></div>`;
      if (platform === 'gemini') {
        const iconDiv = button.querySelector('.ds-icon');
        if (iconDiv) {
          iconDiv.appendChild(buildExportIconElement());
        }
      }
    } else {
      if (platform === 'gemini') {
        button.appendChild(buildExportIconElement());
      } else if (platform === 'grok' && scope === 'turn') {
        button.innerHTML = `<span style="opacity: 1; transform: none;">${buildExportIcon()}</span>`;
      } else {
        button.innerHTML = buildExportIcon();
      }
    }

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
    return button;
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
      if (menu.contains(event.target) || event.target === button) {
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

    button.setAttribute('aria-expanded', 'true');
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
      activeMenuButton.setAttribute('aria-expanded', 'false');
      activeMenuButton = null;
    }
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

  async function handleExportFormat(format, button) {
    try {
      const scope = button.getAttribute(EXPORT_SCOPE_ATTR) || 'turn';
      const anchorTurn = findAnchorTurn(button);
      if (scope !== 'thread' && !anchorTurn) {
        flashButton(button, 'Err: Pas de message', 'error');
        return;
      }
      const turns = scope === 'thread' ? getAllTurns() : getRelatedTurns(anchorTurn);
      let messages = collectMessagesFromTurns(turns);

      if (platform === 'chatgpt' && scope === 'thread') {
        const apiMessages = await getChatGptConversationMessages();
        if (apiMessages && apiMessages.length) {
          messages = apiMessages;
        }
      }

      if (!messages.length) {
        flashButton(button, 'Err: 0 messages trouvés', 'error');
        console.warn('OmniChat: No messages found with selectors', turns);
        return;
      }
      if (format === 'pdf') {
        const exported = await exportPdf(messages);
        if (!exported) {
          flashButton(button, 'Export indisponible', 'error');
          return;
        }
        flashButton(button, 'Export ok', 'success');
        return;
      }
      if (format === 'json') {
        const content = buildExportJson(messages);
        const filename = buildExportFilename('json', scope === 'thread' ? null : anchorTurn);
        downloadText(content, filename, 'application/json');
        flashButton(button, 'Export ok', 'success');
        return;
      }
      if (format === 'txt') {
        const content = buildExportText(messages);
        const filename = buildExportFilename('txt', scope === 'thread' ? null : anchorTurn);
        downloadText(content, filename, 'text/plain');
        flashButton(button, 'Export ok', 'success');
        return;
      }
      const content = buildExportMarkdown(messages);
      const filename = buildExportFilename('md', scope === 'thread' ? null : anchorTurn);
      downloadText(content, filename, 'text/markdown');
      flashButton(button, 'Export ok', 'success');
    } catch (err) {
      console.error('OmniChat export error:', err);
      flashButton(button, 'Export échoué', 'error');
    }
  }

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
    if (platform === 'gemini') {
      const geminiConversation = resolveGeminiConversation(anchorTurn);
      if (geminiConversation) {
        const geminiTurns = getGeminiRootsFromConversation(geminiConversation);
        if (geminiTurns.length) {
          return geminiTurns;
        }
        return [geminiConversation];
      }
    }

    const turns = getAllTurns();
    let resolvedAnchor = anchorTurn;
    let index = turns.indexOf(anchorTurn);
    if (index === -1 && platform === 'deepseek') {
      const resolved = resolveDeepSeekTurn(anchorTurn);
      if (resolved) {
        resolvedAnchor = resolved;
        index = turns.indexOf(resolved);
      }
    }
    if (index === -1) {
      return [resolvedAnchor];
    }
    const role = getTurnRole(resolvedAnchor);
    const related = [];
    if (role === 'assistant') {
      const previousUser = findAdjacentTurn(turns, index, 'prev', 'user');
      if (previousUser) {
        related.push(previousUser);
      }
      related.push(resolvedAnchor);
    } else if (role === 'user') {
      related.push(resolvedAnchor);
      const nextAssistant = findAdjacentTurn(turns, index, 'next', 'assistant');
      if (nextAssistant) {
        related.push(nextAssistant);
      }
    } else {
      if (platform === 'gemini' && resolvedAnchor.matches && resolvedAnchor.matches(GEMINI_CONVERSATION_SELECTOR)) {
        const geminiTurns = getGeminiRootsFromConversation(resolvedAnchor);
        if (geminiTurns.length) {
          return geminiTurns;
        }
      }
      if (platform === 'grok' || platform === 'deepseek') {
        const previousTurn = turns[index - 1];
        if (previousTurn) {
          related.push(previousTurn, resolvedAnchor);
          return related;
        }
      }
      related.push(resolvedAnchor);
    }
    return related;
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
          if (content && content.text) {
            messages.push({ role, text: content.text, html: content.html, pdf: content.pdf });
          }
        });
        return;
      }
      const role = inferRoleFromRoot(turn) || 'message';
      const content = extractMessageContentFromRoot(turn);
      if (content && content.text) {
        messages.push({ role, text: content.text, html: content.html, pdf: content.pdf });
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
          if (content && content.text) {
            messages.push({ role, text: content.text, html: content.html, pdf: content.pdf });
          }
        });
        return;
      }

      const contentNodes = filterTopLevelNodes(
        Array.from(scope.querySelectorAll('.markdown, [data-message-content], .prose, .whitespace-pre-wrap'))
      );
      contentNodes.forEach((node) => {
        const roleNode = node.closest('[data-message-author-role]');
        const role = roleNode ? roleNode.getAttribute('data-message-author-role') :
          inferRoleFromRoot(scope) || 'message';

        const content = extractMessageContent(node);
        if (content && content.text) {
          messages.push({ role, text: content.text, html: content.html, pdf: content.pdf });
        }
      });
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
      if (content && content.text) {
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
      if (content && content.text) {
        messages.push({ role, text: content.text, html: content.html, pdf: content.pdf });
      }
    });
    return messages;
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
    const direct = button.closest('[data-testid="assistant-message"], [data-testid="user-message"], .font-claude-response, article, section');
    if (direct) {
      return direct;
    }
    const actions = button.closest(CLAUDE_ACTIONS_SELECTOR);
    if (!actions) {
      return null;
    }
    return findClaudeMessageForActions(actions);
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
    const userRoot = conversation.querySelector(
      'user-query-content .query-content .query-text, user-query-content .query-content, user-query .query-text'
    );
    if (userRoot && normalizeText(userRoot.innerText || '')) {
      roots.push(userRoot);
    }

    const assistantRoots = Array.from(conversation.querySelectorAll(
      'model-response message-content .markdown, model-response .model-response-text message-content .markdown, model-response .model-response-text'
    )).filter((node, index, self) => !self.some((other, otherIndex) => otherIndex !== index && other.contains(node)));

    assistantRoots.forEach((assistantRoot) => {
      if (normalizeText(assistantRoot.innerText || '')) {
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
        if (content && content.text) {
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

  function inferRoleFromRoot(root) {
    const directRole = root.getAttribute('data-message-author-role') ||
      root.getAttribute('data-message-role') ||
      root.getAttribute('data-role');
    if (directRole) {
      return directRole;
    }
    if (platform === 'claude') {
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
    }
    if (platform === 'deepseek') {
      if (root.querySelector('.ds-markdown')) {
        return 'assistant';
      }
      if (root.querySelector('.fbb737a4, ._72b6158')) {
        return 'user';
      }
    }
    if (platform === 'gemini') {
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
    }
    if (platform === 'grok') {
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
    }
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

  function cleanHtml(node) {
    if (!node) return '';
    const clone = node.cloneNode(true);
    const unwanted = clone.querySelectorAll('button, svg, [role="button"], script, style, .omni-exporter-btn, [data-test-id="action-bar-copy"]');
    unwanted.forEach(el => el.remove());
    return clone.innerHTML;
  }

  function prepareNodeForExport(node) {
    if (!node || !node.cloneNode) {
      return node;
    }
    const clone = node.cloneNode(true);
    if (platform === 'grok') {
      normalizeGrokStrokeWidthInlineSpan(clone);
    }
    return clone;
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

    let selectors;
    if (platform === 'deepseek') {
      selectors = [
        '.ds-markdown',
        '.fbb737a4',
        '._72b6158',
        '.markdown',
        '.prose',
        '.whitespace-pre-wrap',
        '[data-message-content]',
        '[data-testid*="message-content"]'
      ];
    } else if (platform === 'claude') {
      selectors = [
        '[data-testid="assistant-message"]',
        '[data-testid="user-message"]',
        '.font-claude-response-body',
        '.font-claude-response',
        '.standard-markdown',
        '.progressive-markdown',
        '.markdown',
        '.prose',
        '.whitespace-pre-wrap'
      ];
    } else if (platform === 'gemini') {
      const GEMINI_LEAF_SELECTOR =
        'message-content, .markdown, .model-response-text, ' +
        '.query-text, .query-content, .user-query-bubble-with-background';
      if (root.matches && root.matches(GEMINI_LEAF_SELECTOR)) {
        const exportNode = prepareNodeForExport(root);
        const text = normalizeText(exportNode.innerText || '');
        if (text) {
          return {
            text,
            html: cleanHtml(exportNode),
            pdf: parseNodeToPdfMake(exportNode)
          };
        }
      }
      selectors = [
        'message-content .markdown',
        '.model-response-text message-content .markdown',
        '.model-response-text',
        'user-query-content .query-content .query-text',
        'user-query-content .query-content',
        'user-query .query-text',
        '.query-content .query-text',
        '.query-text',
        '.user-query-bubble-with-background'
      ];
    } else if (platform === 'grok') {
      const content = root.querySelector('.message-content, .message-row');
      if (content) {
        const exportContent = prepareNodeForExport(content);
        return {
          text: normalizeText(exportContent.innerText || ''),
          html: cleanHtml(exportContent),
          pdf: parseNodeToPdfMake(exportContent)
        };
      }
      selectors = [
        '.response-content-markdown',
        '.message-bubble',
        '.markdown',
        '.prose',
        '.whitespace-pre-wrap',
        '[data-message-content]',
        '[data-testid*="message-content"]'
      ];
    } else {
      selectors = [
        '.markdown',
        '.prose',
        '.whitespace-pre-wrap',
        '[data-message-content]',
        '[data-testid*="message-content"]'
      ];
    }
    const allNodes = Array.from(root.querySelectorAll(selectors.join(',')));

    const nodes = allNodes.filter((node, index, self) => {
      const isContained = self.some(other => other !== node && other.contains(node));
      return !isContained;
    });

    const parts = [];
    const htmlParts = [];
    const pdfParts = [];

    nodes.forEach((node) => {
      if (node.closest('button, nav, header, footer, svg')) {
        return;
      }
      const exportNode = prepareNodeForExport(node);
      const text = normalizeText(exportNode.innerText || '');
      const html = cleanHtml(exportNode);
      const pdf = parseNodeToPdfMake(exportNode);
      if (text) {
        parts.push(text);
        htmlParts.push(html);
        pdfParts.push(pdf);
      }
    });

    if (parts.length) {
      return {
        text: parts.join('\n\n').trim(),
        html: htmlParts.join('<br><br>').trim(),
        pdf: pdfParts.length === 1 ? pdfParts[0] : { stack: pdfParts.flat().filter(Boolean) }
      };
    }

    const fallbackNode = prepareNodeForExport(root);
    const fallbackText = normalizeText(fallbackNode.innerText || '');
    const fallbackHtml = cleanHtml(fallbackNode);
    const fallbackPdf = parseNodeToPdfMake(fallbackNode);
    return {
      text: stripActionLines(fallbackText, root),
      html: fallbackHtml,
      pdf: fallbackPdf
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
    const rawText = contentRoot.innerText || '';
    const html = cleanHtml(contentRoot);
    const pdf = parseNodeToPdfMake(contentRoot);
    return {
      text: normalizeText(rawText),
      html: html,
      pdf: pdf
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

  function buildExportMarkdown(messages) {
    const title = `${getPlatformLabel()} Export`;
    const conversationTitle = getExportConversationTitle();
    const lines = [];
    lines.push(`# ${title}`);
    if (conversationTitle) {
      lines.push(`Conversation: ${conversationTitle}`);
    }
    lines.push(`URL: ${location.href}`);
    lines.push(`Exported: ${new Date().toISOString()}`);
    lines.push('');
    messages.forEach((message) => {
      const roleLabel = formatRoleLabel(message.role);
      lines.push(`## ${roleLabel}`);
      lines.push('');
      lines.push(ensureString(message.text));
      lines.push('');
    });
    return `${lines.join('\n').trim()}\n`;
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
      messages: messages
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
    if (typeof DOMParser !== 'undefined') {
      try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(raw, 'text/html');
        if (doc && doc.body) {
          return doc.body;
        }
      } catch (err) {
      }
    }
    const temp = document.createElement('div');
    try {
      temp.innerHTML = raw;
      return temp;
    } catch (err) {
      return null;
    }
  }

  function stripHtmlToText(html) {
    if (!html) {
      return '';
    }
    const withLineBreaks = String(html)
      .replace(/<\s*br\s*\/?>/gi, '\n')
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
      const text = node.textContent;
      if (!text) {
        return null;
      }

      const normalized = text.replace(/\s*\n+\s*/g, ' ');
      if (normalized.trim() === '' && normalized.length > 0) {
        return { text: normalized };
      }
      if (!normalized.trim()) {
        return null;
      }
      return { text: formatPdfTextWithEmoji(normalized) };
    }

    if (node.nodeType === Node.ELEMENT_NODE) {
      if (node.matches && node.matches('button, svg, [role="button"], script, style, .omni-exporter-btn, [data-test-id="action-bar-copy"]')) {
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
      const children = Array.from(node.childNodes);

      const childContent = [];
      children.forEach(child => {
        const parsed = parseNodeRecursive(child);
        if (parsed) {
          if (Array.isArray(parsed)) {
            childContent.push(...parsed);
          } else {
            childContent.push(parsed);
          }
        }
      });

      switch (tagName) {
        case 'strong':
        case 'b':
          return childContent.map(c => ({ ...c, bold: true }));

        case 'em':
        case 'i':
          return childContent.map(c => ({ ...c, italics: true }));

        case 'u':
          return childContent.map(c => ({ ...c, decoration: 'underline' }));

        case 'a': {
          const href = node.getAttribute('href') || '';
          return childContent.map(c => ({
            ...c,
            link: href,
            color: '#2563eb',
            decoration: 'underline'
          }));
        }

        case 'code': {
          return buildInlineCodeTextStyle(node.textContent || '');
        }

        case 'pre': {
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

        case 'h1':
          return [{ text: formatPdfTextWithEmoji(node.textContent || ''), fontSize: 18, bold: true, margin: [0, 12, 0, 6] }];
        case 'h2':
          return [{ text: formatPdfTextWithEmoji(node.textContent || ''), fontSize: 16, bold: true, margin: [0, 10, 0, 5] }];
        case 'h3':
          return [{ text: formatPdfTextWithEmoji(node.textContent || ''), fontSize: 14, bold: true, margin: [0, 8, 0, 4] }];
        case 'h4':
          return [{ text: formatPdfTextWithEmoji(node.textContent || ''), fontSize: 12, bold: true, margin: [0, 6, 0, 3] }];
        case 'h5':
        case 'h6':
          return [{ text: formatPdfTextWithEmoji(node.textContent || ''), fontSize: 11, bold: true, margin: [0, 4, 0, 2] }];
        case 'hr':
          return [{
            canvas: [
              { type: 'line', x1: 0, y1: 0, x2: 505, y2: 0, lineWidth: 0.5, lineColor: '#cbd5e1' }
            ],
            margin: [0, 6, 0, 8]
          }];
        case 'table': {
          const table = buildPdfTableFromHtmlTable(node);
          return table || null;
        }

        case 'ul': {
          const items = Array.from(node.querySelectorAll('li')).map(li => {
            const content = parseNodeToPdfMake(li);
            return Array.isArray(content) ? { text: content } : (content || { text: '' });
          });
          return { ul: items, margin: [0, 4, 0, 4] };
        }

        case 'ol': {
          const items = Array.from(node.querySelectorAll('li')).map(li => {
            const content = parseNodeToPdfMake(li);
            return Array.isArray(content) ? { text: content } : (content || { text: '' });
          });
          return { ol: items, margin: [0, 4, 0, 4] };
        }

        case 'li':
          return forceInlinePdfText(childContent, node.textContent || '');

        case 'p':
          return withParagraphBreak(childContent, node.textContent || '');

        case 'br':
          return { text: '\n' };

        case 'div':
        case 'span':
          return childContent;

        default:
          return childContent;
      }
    }

    return null;
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
    if (opts.noWrap !== false) {
      styled.noWrap = true;
    }
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

  function buildSpecialPdfCodeBlock(node) {
    if (!isSpecialCodeBlockElement(node)) {
      return null;
    }
    const codeText = extractCodeBlockText(node);
    if (!codeText) {
      return null;
    }
    const language = extractCodeBlockLanguage(node) || 'Code';
    return {
      table: {
        widths: [5, '*'],
        body: [
          [
            { text: '', fillColor: '#0ea5e9', border: [false, false, false, false] },
            {
              text: `Code : ${language}`,
              style: 'codeBlockHeader',
              fillColor: '#0f172a',
              border: [false, false, false, false]
            }
          ],
          [
            { text: '', fillColor: '#334155', border: [false, false, false, false] },
            {
              text: formatPdfTextWithEmoji(codeText),
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
      return true; // ChatGPT fallback
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
    const explicitLanguage =
      node.querySelector('.text-text-500') ||
      node.querySelector('.md-code-block-banner .d813de27') ||
      node.querySelector('.md-code-block-banner [class*="d813de27"]') ||
      node.querySelector('[class*="code-info-language"]');
    if (explicitLanguage) {
      const value = normalizeText(explicitLanguage.textContent || '');
      if (value) {
        return value;
      }
    }

    const codeClassSource = node.querySelector('pre code, code');
    if (codeClassSource && codeClassSource.className) {
      const classMatch = String(codeClassSource.className).match(/(?:^|\s)language-([a-z0-9_+.-]+)/i);
      if (classMatch && classMatch[1]) {
        return classMatch[1];
      }
    }

    const labels = Array.from(node.querySelectorAll('span, div'))
      .filter((el) => !el.closest('pre, code, .cm-content, .cm-line'))
      .map((el) => normalizeText(el.textContent || ''))
      .filter(Boolean);

    const blocked = new Set(['Copier', 'Copy', 'Envelopper', 'Wrap', 'Exécuter', 'Run', 'Download', 'Télécharger']);
    for (const label of labels) {
      if (blocked.has(label)) {
        continue;
      }
      if (label.length < 2 || label.length > 24) {
        continue;
      }
      if (!/^[A-Za-z][A-Za-z0-9+#.\- ]*$/.test(label)) {
        continue;
      }
      return label;
    }
    return '';
  }

  function extractCodeBlockText(node) {
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

    return {
      table: {
        widths: new Array(maxCols).fill('*'),
        body: body
      },
      layout: {
        hLineWidth: () => 0.5,
        vLineWidth: () => 0.5,
        hLineColor: () => '#cbd5e1',
        vLineColor: () => '#cbd5e1',
        paddingLeft: () => 6,
        paddingRight: () => 6,
        paddingTop: () => 5,
        paddingBottom: () => 5
      },
      margin: [0, 8, 0, 12]
    };
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
      const inline = buildInlinePdfText(parsed);
      if (inline) {
        return inline;
      }
      return { stack: parsed };
    }
    return parsed;
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
    if (inlineParts.length === 1) {
      return inlineParts[0];
    }
    return { text: inlineParts };
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
      next.text = normalizePdfTextValue(next.text, thisIsCodeBlock);
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

  function normalizePdfTextValue(value, inCodeBlock) {
    if (value === null || value === undefined) {
      return value;
    }
    if (typeof value === 'string') {
      return inCodeBlock ? value : normalizePdfPipelineText(value);
    }
    if (Array.isArray(value)) {
      return value.map((entry) => normalizePdfTextValue(entry, inCodeBlock));
    }
    if (typeof value === 'object') {
      const next = Object.assign({}, value);
      const nestedCodeBlock = inCodeBlock || isPdfCodeBlockNode(next);
      if (Object.prototype.hasOwnProperty.call(next, 'text')) {
        next.text = normalizePdfTextValue(next.text, nestedCodeBlock);
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

  async function exportPdf(messages) {
    if (!pdfMakeRef) {
      pdfMakeRef = resolvePdfMake();
    }
    const pdfMakeInstance = pdfMakeRef || resolvePdfMake();
    if (!pdfMakeInstance || typeof pdfMakeInstance.createPdf !== 'function') {
      return false;
    }
    const fontName = await ensurePdfMakeFonts(pdfMakeInstance);
    if (!fontName) {
      return false;
    }
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
    const pageMargins = [42, 38, 42, 50];
    const pageWidthPt = 595.28;
    const dividerWidth = pageWidthPt - pageMargins[0] - pageMargins[2];
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

      messages.forEach((message) => {
        const theme = roleTheme(message.role);
        const roleLabel = wrapRoleLabel(message.role);
        const messageText = ensureString(message.text);
        const htmlContent = message.html || messageText;
        const richContent = message.pdf || convertHtmlToPdfMake(htmlContent);
        const normalizedRichContent = normalizePdfContentForPlatform(richContent);
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
                text: 'Generated with OmniChat Exporter',
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

    try {
      await downloadPdfDocument(pdfMakeInstance, buildDocDefinition(), filename);
      return true;
    } catch (err) {
      if (activePdfEmojiFontFamily) {
        console.warn('PDF export with emoji font failed, retrying without emoji font', err);
        activePdfEmojiFontFamily = '';
        try {
          await downloadPdfDocument(pdfMakeInstance, buildDocDefinition(), filename);
          return true;
        } catch (retryErr) {
          console.error('PDF export error:', retryErr);
          return false;
        }
      }
      console.error('PDF export error:', err);
      return false;
    } finally {
      activePdfEmojiFontFamily = '';
    }
  }

  async function downloadPdfDocument(pdfMakeInstance, docDefinition, filename) {
    const instance = pdfMakeInstance.createPdf(docDefinition);
    const result = instance.download(filename);
    if (result && typeof result.then === 'function') {
      await result;
    }
  }

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

  async function ensurePdfMakeFonts(pdfMakeInstance) {
    const localPdfMake = getLocalPdfMake();
    const vfsCandidates = [
      pdfMakeInstance.vfs,
      localPdfMake && localPdfMake.vfs,
      window.pdfMake && window.pdfMake.vfs,
      window.pdfmake && window.pdfmake.vfs,
      window.pdfFonts && window.pdfFonts.pdfMake && window.pdfFonts.pdfMake.vfs,
      window.pdfFonts && window.pdfFonts.vfs
    ];
    let vfs = null;
    for (const candidate of vfsCandidates) {
      if (candidate && typeof candidate === 'object') {
        vfs = candidate;
        break;
      }
    }
    if (vfs && Object.keys(vfs).length) {
      if (typeof pdfMakeInstance.addVirtualFileSystem === 'function') {
        pdfMakeInstance.addVirtualFileSystem(vfs);
      } else {
        pdfMakeInstance.vfs = vfs;
      }
      if (window.pdfMake && window.pdfMake !== pdfMakeInstance) {
        window.pdfMake.vfs = vfs;
      }
    }

    const baseFont = ensureBaseFont(pdfMakeInstance);
    if (!baseFont) {
      return null;
    }
    activePdfEmojiFontFamily = '';
    const emojiFont = await ensureEmojiFont(pdfMakeInstance);
    if (emojiFont) {
      activePdfEmojiFontFamily = emojiFont;
    }
    return baseFont;
  }

  async function ensureEmojiFont(pdfMakeInstance) {
    try {
      const vfs = pdfMakeInstance.vfs || {};
      if (vfs[PDF_EMOJI_FONT_FILE]) {
        registerPdfFont(pdfMakeInstance, PDF_EMOJI_FONT_FAMILY, PDF_EMOJI_FONT_FILE);
        return PDF_EMOJI_FONT_FAMILY;
      }
      const base64 = await loadEmojiFontBase64();
      if (!base64) {
        return '';
      }
      const nextVfs = {};
      nextVfs[PDF_EMOJI_FONT_FILE] = base64;
      if (typeof pdfMakeInstance.addVirtualFileSystem === 'function') {
        pdfMakeInstance.addVirtualFileSystem(nextVfs);
      } else {
        pdfMakeInstance.vfs = Object.assign({}, pdfMakeInstance.vfs || {}, nextVfs);
      }
      if (window.pdfMake && window.pdfMake !== pdfMakeInstance) {
        window.pdfMake.vfs = Object.assign({}, window.pdfMake.vfs || {}, nextVfs);
      }
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

  async function loadEmojiFontBase64() {
    if (!emojiFontBase64Promise) {
      emojiFontBase64Promise = (async function () {
        for (const url of PDF_EMOJI_FONT_URLS) {
          try {
            const response = await fetch(url, {
              cache: 'force-cache',
              credentials: 'omit'
            });
            if (!response || !response.ok) {
              continue;
            }
            const buffer = await response.arrayBuffer();
            if (!buffer || !buffer.byteLength) {
              continue;
            }
            return arrayBufferToBase64(buffer);
          } catch (err) {
            const details = String((err && err.message) || err || '');
            const isCspBlocked = /content security policy|csp|failed to fetch/i.test(details);
            if (isCspBlocked) {
              return '';
            }
            console.warn('OmniChat: failed loading emoji font URL', url, err);
          }
        }
        return '';
      })();
    }
    return emojiFontBase64Promise;
  }

  function arrayBufferToBase64(buffer) {
    const bytes = new Uint8Array(buffer);
    const chunkSize = 0x8000;
    let binary = '';
    for (let index = 0; index < bytes.length; index += chunkSize) {
      const chunk = bytes.subarray(index, index + chunkSize);
      binary += String.fromCharCode.apply(null, chunk);
    }
    return btoa(binary);
  }

  function applyEmojiFontToTree(node) {
    if (!activePdfEmojiFontFamily) {
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
    if (node.font === 'Courier' || node.font === 'monospace') {
      return node;
    }
    const next = Object.assign({}, node);
    if (Object.prototype.hasOwnProperty.call(next, 'text')) {
      next.text = applyEmojiFontToTree(next.text);
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

  function formatPdfTextWithEmoji(text) {
    const raw = ensureString(text);
    if (!raw) {
      return '';
    }
    if (!activePdfEmojiFontFamily) {
      return raw;
    }
    if (!containsEmojiForPdf(raw)) {
      return raw;
    }
    const graphemes = splitGraphemes(raw);
    const chunks = [];
    let currentText = '';
    let currentEmoji = null;

    graphemes.forEach((segment) => {
      const isEmoji = containsEmojiForPdf(segment);
      if (currentEmoji === null || currentEmoji === isEmoji) {
        currentText += segment;
        currentEmoji = isEmoji;
        return;
      }
      chunks.push({ text: currentText, isEmoji: currentEmoji });
      currentText = segment;
      currentEmoji = isEmoji;
    });

    if (currentText) {
      chunks.push({ text: currentText, isEmoji: currentEmoji });
    }

    return chunks.map((chunk) => {
      if (chunk.isEmoji) {
        return { text: chunk.text, font: activePdfEmojiFontFamily };
      }
      return { text: chunk.text };
    });
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
          '[\\p{Extended_Pictographic}\\u{1F1E6}-\\u{1F1FF}\\u{1F3FB}-\\u{1F3FF}\\u{FE0F}\\u{20E3}\\u{200D}]',
          'u'
        );
      } catch (err) {
        emojiRegexRef = /[\uD83C-\uDBFF][\uDC00-\uDFFF]|[\u2600-\u27BF]|\uFE0F/;
      }
    }
    return emojiRegexRef.test(text);
  }

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

  function startObserver() {
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          queueScanForNode(node);
        });
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
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