# Changelog

All notable changes to this project will be documented in this file.

The format is based on Keep a Changelog
and this project adheres to Semantic Versioning.

---

## [1.1.0] - 2026-03-14

### Added
- Local language detection using `franc-min` before PDF generation
- Smart loading of Noto fonts based on detected writing scripts
- Added emoji support in PDF export (rendered in black and white)
- PDF preparation popup with a progress bar

### Improved
- Major overhaul of the PDF export pipeline
- Significantly expanded multilingual support in PDF exports
- More accurate Markdown export with improved DOM reconstruction
- Improved export fidelity on Gemini conversations
- Better compatibility with CSP and Trusted Types policies

### Fixed
- Potential display issues affecting export buttons on some interfaces


## [1.0.1] - 2026-02-28

### Added
- Implemented full Gemini code block rendering
- Added syntax color styling for code across all supported AIs
- Added support for `<br>` and `<blockquote>` in PDF rendering

### Improved
- Major PDF rendering upgrade
- Improved block code display in PDF
- Refined JSON export structure

### Fixed
- Fixed invisible text issue in ChatGPT lists
- Corrected list bullet formatting in PDF output
- Regex issues related to emoji character classes
- Formatting inconsistencies in PDF output


## [1.0.0] - 2026-02-27

### Added
- Initial public release
- Full conversation export support
- Per-message export support
- Support for TXT, PDF, JSON, and Markdown formats
- Native UI integration on supported AI platforms
- Client-side PDF generation using pdfmake
- Local-only processing (no external data transmission)

### Supported Platforms
- ChatGPT
- Gemini
- Claude
- Grok
- DeepSeek
