<div align="center">

  # OmniChat Exporter

<a href="https://greasyfork.org/scripts/567743-omnichat-exporter-export-any-ai-chat-instantly">
    <img height="32" alt="OmniChat Exporter" src="https://img.shields.io/badge/GreasyFork-OmniChat%20Exporter-960000?style=for-the-badge&logo=greasyfork&logoColor=white"></a>
<a href="https://greasyfork.org/scripts/567743-omnichat-exporter-export-any-ai-chat-instantly">
    <img height="32" alt="Installs" src="https://img.shields.io/greasyfork/dt/567743?label=Installs&style=for-the-badge&color=960000"></a>
<a href="https://greasyfork.org/scripts/567743-omnichat-exporter-export-any-ai-chat-instantly/versions">
    <img height="32" alt="Version" src="https://img.shields.io/greasyfork/v/567743?label=Version&style=for-the-badge&color=3b82f6"></a>

<br>

<a href="https://github.com/DREwX-code/omnichat-exporter/stargazers">
    <img height="32" alt="GitHub Stars" src="https://img.shields.io/github/stars/DREwX-code/omnichat-exporter?style=for-the-badge&logo=github&color=FFD700"></a>
<a href="https://github.com/DREwX-code/omnichat-exporter/commits/main">
    <img height="32" alt="Last Commit" src="https://img.shields.io/github/last-commit/DREwX-code/omnichat-exporter?style=for-the-badge&logo=github&color=FF9800"></a>
<a href="https://github.com/DREwX-code/omnichat-exporter/issues">
    <img height="32" alt="GitHub Issues" src="https://img.shields.io/github/issues/DREwX-code/omnichat-exporter?style=for-the-badge&logo=github&color=22c55e"></a>
<a href="./LICENSE">
    <img height="32" alt="License" src="https://img.shields.io/github/license/DREwX-code/omnichat-exporter?style=for-the-badge&color=64748b"></a>
</div>
<br>

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
- Support for AI-generated images (embedded directly in the PDF output)

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

The PDF export system supports many writing systems, including:

Latin, Extended Latin, Cyrillic, Greek, Arabic, Syriac, Hebrew, Chinese, Japanese, Korean,  
Devanagari, Bengali, Gurmukhi, Gujarati, Odia, Tamil, Telugu, Kannada, Malayalam,  
Sinhala, Thai, Khmer, Lao, Myanmar, Georgian, Armenian, Ethiopic, Canadian Aboriginal syllabics,  
Tangut, Avestan, Runic, Glagolitic, Cuneiform, Egyptian hieroglyphs, emoji, and extended symbols.

Fonts are automatically loaded based on detected scripts to keep the export lightweight and reliable.

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

| Library | Purpose | Source / Website | License |
|---------|---------|------------------|---------|
| pdfmake | Generates PDF files directly in the browser | [Website](https://pdfmake.github.io/docs/) · [Source](https://github.com/bpampuch/pdfmake) | MIT |
| franc-min | Performs local language detection before PDF generation | [Source](https://github.com/wooorm/franc) | MIT |
| Noto Fonts | Provides multilingual font support for PDF rendering when required | [Noto Fonts](https://github.com/notofonts) · [Google Fonts](https://github.com/google/fonts) | SIL Open Font License 1.1 · Apache License 2.0 |

---

## Installation

[![Install](https://img.shields.io/badge/Install-OmniChat%20Exporter-2f7d32?style=for-the-badge&logo=greasyfork&logoColor=white)](https://update.greasyfork.org/scripts/567743/OmniChat%20Exporter%20-%20Export%20Any%20AI%20Chat%20Instantly.user.js)
[![View Source](https://img.shields.io/badge/View-Source%20Code-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/DREwX-code/omnichat-exporter/blob/main/src/omnichat-exporter.user.js)

1. Install a userscript manager such as **Tampermonkey** or **Violentmonkey**.
2. Click **Install OmniChat Exporter** above or install from [GreasyFork](https://greasyfork.org/scripts/567743-omnichat-exporter-export-any-ai-chat-instantly).
3. Open a supported AI platform.
4. Use the export controls directly in the interface.

For detailed installation instructions, see the **[Installation Guide](./docs/INSTALLATION.md)**.

---

## Feedback & Contributions

Feedback, bug reports, ideas, and contributions are welcome.

| Channel | Best for |
|---------|----------|
| [GitHub Discussions](https://github.com/DREwX-code/omnichat-exporter/discussions) | Ideas, questions, feedback, and general discussion |
| [GitHub Issues](https://github.com/DREwX-code/omnichat-exporter/issues) | Bug reports and technical problems |
| [GreasyFork Feedback](https://greasyfork.org/scripts/567743-omnichat-exporter-export-any-ai-chat-instantly/feedback) | General feedback from users |
| [Contributing Guide](./CONTRIBUTING.md) | Contribute code, documentation, platform support, or improvements |

> Before opening a bug report, include the platform, browser, userscript manager, export format, and clear steps to reproduce the issue.

---

## Author

Developed and maintained by **Dℝ∃wX**  
GitHub: [DREwX-code](https://github.com/DREwX-code)

---

## License

This project is licensed under the **Apache License 2.0**.  
You are free to use, modify, and redistribute it under the terms of the license.
