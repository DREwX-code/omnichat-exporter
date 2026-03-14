# OmniChat Exporter

[![GreasyFork](https://img.shields.io/static/v1?label=%20&message=GreasyFork&style=flat-square&labelColor=7B0000&color=960000&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3ggEBCQHM3fXsAAAAVdJREFUOMudkz2qwkAUhc/goBaGJBgUtBCZyj0ILkpwAW7Bws4yO3AHLiCtEFD8KVREkoiFxZzX5A2KGfN4F04zMN+ce+5c4LMUgDmANYBnrnV+plBSi+FwyHq9TgA2LQpvCiEiABwMBtzv95RSfoNEHy8DYBzHrNVqVEr9BWKcqNFoxF6vx3a7zc1mYyC73a4MogBg7vs+z+czO50OW60Wt9stK5UKp9Mpj8cjq9WqDTBHnjAdxzGQZrPJw+HA31oulzbAWgLoA0CWZVBKIY5jzGYzdLtdE9DlcrFNrY98zobqOA6TJKHW2jg4nU5sNBpFDp6mhVe5rsvVasUwDHm9Xqm15u12o+/7Hy0gD8KatOd5vN/v1FozTVN6nkchxFuI6hsAAIMg4OPxMJCXdtTbR7JJCMEgCJhlGUlyPB4XfumozInrupxMJpRSRtZlKoNYl+m/6/wDuWAjtPfsQuwAAAAASUVORK5CYII=)](https://greasyfork.org/scripts/567743-omnichat-exporter-export-any-ai-chat-instantly)
[![GreasyFork installs](https://img.shields.io/greasyfork/dt/567743?style=flat-square&label=installs&color=3b82f6)](https://greasyfork.org/scripts/567743-omnichat-exporter-export-any-ai-chat-instantly)
[![Version](https://img.shields.io/badge/dynamic/json?style=flat-square&label=version&color=8b5cf6&query=%24.version&url=https%3A%2F%2Fapi.greasyfork.org%2Fscripts%2F567743.json)](https://greasyfork.org/scripts/567743-omnichat-exporter-export-any-ai-chat-instantly/versions)
[![GitHub license](https://img.shields.io/github/license/DREwX-code/omnichat-exporter?style=flat-square)](./LICENSE)

![OmniChat Exporter Preview](./assets/preview.png)


## Export conversations from major AI platforms in multiple formats

[OmniChat Exporter](https://greasyfork.org/scripts/567743-omnichat-exporter-export-any-ai-chat-instantly) allows you to export conversations from **ChatGPT, Gemini, Claude, Grok, and DeepSeek** in **TXT, Markdown, JSON, or PDF**.

**Fast. Clean. Reliable.**

---

## What OmniChat Exporter does

- Adds export controls directly inside supported AI platforms
- Allows exporting a full conversation thread
- Allows exporting individual messages
- Generates structured and clean output files
- Works instantly in the browser

Everything runs locally.

---

## Main Features

### Export Control

- Full conversation export
- Per-message export
- Clean file structure depending on format
- Native UI integration on each supported platform

---

## Supported Formats

<details>
<summary><b>TXT</b> – simple and universal</summary>

- Plain text export
- Preserves message roles and readable chat structure
- Lightweight and compatible with any text editor
- Suitable for quick backups and simple archiving

</details>

<details>
<summary><b>Markdown</b> – perfect for documentation and reuse</summary>

- Converts chat content into clean and reusable Markdown
- Preserves headings, paragraphs, lists, quotes and code blocks
- Supports links, tables and inline code
- Supports math conversion for KaTeX / LaTeX content
- Suitable for documentation, notes, publishing and reuse in other tools

</details>

<details>
<summary><b>JSON</b> – structured data for automation</summary>

- Structured export format designed for automation and processing
- Exports message roles, plain text and HTML content
- Preserves message order and conversation structure
- Suitable for scripts, pipelines, backups and data analysis

</details>

<details open>
<summary><b>PDF</b> – browser-generated document, ready to share</summary>

### Core features

- Client-side PDF generation using **pdfmake**
- Automatic conversation scan before PDF generation
- Local language and script detection
- Smart loading of fonts based on detected scripts
- Multilingual text support with mixed-script rendering
- Script-aware font routing to ensure correct character rendering

### Content rendering

- Per-message PDF rendering with preserved role blocks
- Conversation metadata included in the document header
- Support for formatted text, lists, quotes, code blocks, tables and HTML-derived content
- Syntax-highlighted code rendering

### Character support

- Support for emoji, symbols and extended Unicode characters (rendered in black and white when necessary)

### Reliability and compatibility

- Built-in PDF generation popup with progress indicator
- Progressive preparation stages: scan → detection → font loading → generation
- Automatic fallback and retry strategy when a font triggers a rendering error
- No conversation data is sent to external services
- Improved compatibility with strict CSP environments through Tampermonkey requests

---

### Multilingual PDF Support

The PDF export system supports many writing systems including:

Latin, Extended Latin, Cyrillic, Greek, Arabic, Hebrew, Chinese, Japanese, Korean,  
Devanagari, Bengali, Gurmukhi, Gujarati, Odia, Tamil, Telugu, Kannada, Malayalam,  
Sinhala, Thai, Khmer, Lao, Myanmar, Georgian, Armenian, Ethiopic and Egyptian hieroglyphs.

Fonts are automatically loaded depending on detected scripts to keep the export lightweight and reliable.

</details>

---

## Export Characteristics

All export formats share the following properties:

- Includes the source URL
- Includes the export date / timestamp
- Includes the conversation title when available
- Keeps a readable conversation structure with message roles
- Generated locally in the browser
- No external API used

---

## Supported Platforms

- ChatGPT
- Gemini
- Claude
- Grok
- DeepSeek

---

## Privacy

All export operations are performed **locally in the browser**.
No conversation data is sent to external servers.

---

## Third-Party Libraries

### pdfmake

Used for generating PDF files directly in the browser.

- Website: <https://pdfmake.github.io/docs/>
- Source: <https://github.com/bpampuch/pdfmake>
- License: MIT

No chat content is transmitted to any external PDF service.

### franc-min

Used for local language detection before PDF generation.

Source: https://github.com/wooorm/franc  
License: MIT

### Noto Fonts

Used for multilingual PDF rendering when required.

Sources:
- https://github.com/notofonts
- https://github.com/google/fonts

Licenses:
- SIL Open Font License 1.1
- Apache License 2.0

---

## Installation

[![Install](https://img.shields.io/badge/Install-OmniChat%20Exporter-2f7d32?style=for-the-badge&logo=greasyfork&logoColor=white)](https://update.greasyfork.org/scripts/567743/OmniChat%20Exporter%20-%20Export%20Any%20AI%20Chat%20Instantly.user.js)
[![View Source](https://img.shields.io/badge/View-Source%20Code-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/DREwX-code/omnichat-exporter/blob/main/src/omnichat-exporter.user.js)

1. Install a userscript manager such as **Tampermonkey**  
   https://www.tampermonkey.net/

2. Click **Install OmniChat Exporter** above or install from [GreasyFork](https://greasyfork.org/scripts/567743-omnichat-exporter-export-any-ai-chat-instantly).

3. Open a supported AI platform.

4. Use the export controls directly in the interface.

---

## Feedback and Contributions

Feedback and improvement suggestions are welcome via:

- [GreasyFork feedback](https://greasyfork.org/scripts/567743-omnichat-exporter-export-any-ai-chat-instantly/feedback)  
- [GitHub Issues](https://github.com/DREwX-code/omnichat-exporter/issues) 

---

## Author

Developed and maintained by **Dℝ∃wX** (GitHub: [DREwX-code](https://github.com/DREwX-code)).  
Engineered for performance, precision, and long-term evolution.

---

## License

This project is licensed under the **Apache License 2.0**.  
You are free to use, modify, and redistribute it under the terms of the license.
