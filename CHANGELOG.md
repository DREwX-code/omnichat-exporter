# Changelog

All notable changes to this project will be documented in this file.

The format is based on Keep a Changelog
and this project adheres to Semantic Versioning.

---

## [1.3.0] - 2026-10-20

### Added

- PDF support for rendered diagrams, nested task lists, and richer mathematical notation
- Translation coverage for export progress states across supported interface languages

### Improved

- More resilient conversation collection for virtualized, lazy-loaded, and long conversations
- PDF rendering for Markdown, rich HTML content, code blocks, nested lists, quotes, diagrams, multilingual text, and complex mathematical expressions
- Code-block presentation with language labels, syntax-color preservation, compact headers, and safer pagination
- Export button styling and placement across supported platforms
- Export menu styling for better visual consistency with each platform interface
- Platform integration using structural DOM anchors instead of localized action labels where possible
- Export menu and PDF progress UI isolation to prevent host-page styles from affecting the exporter

### Fixed

- Message ordering issues in Claude exports
- Missing or incomplete content in exported conversations
- Missing export controls on ChatGPT and Claude
- Generated images not being correctly included in some PDF exports
- Mathematical rendering issues affecting matrices, systems of equations, boxed formulas, and complex notation
- Font selection and rendering issues affecting mathematical and multilingual PDF content
- Per-message exports that could omit the related user prompt or select adjacent content
- Removed obsolete CSS classes and legacy export rendering styles

## [1.2.1] - 2026-08-22

### Fixed

- Incorrect rendering of Unicode box-drawing and diagram characters in PDF exports

## [1.2.0] - 2026-08-04

### Added

- Print-friendly mode for PDF exports, reducing background and accent ink usage
- Export content options for headers, user instructions, and assistant responses
- Ability to cancel an export in progress, including conversation scrolling and resource downloads

### Improved

- Syntax highlighting and theme adaptation for code blocks in PDF exports
- Export menu organization, consistency, and overall usability

### Fixed

- Incomplete exports caused by unloaded content in long or virtualized conversations
- Incorrect export button placement in the ChatGPT header


## [1.1.5] - 2026-07-07

### Added
- Native-style export tooltips on supported platforms
- Strikethrough support in PDF exports

### Improved
- Markdown export formatting for checkboxes, conversation title, URL line breaks, and nested lists
- PDF list rendering with cleaner indentation, wrapping, numbered lists, and nested lists
- Horizontal rule rendering in PDF exports
- PDF compatibility with multilingual text, RTL content, Unicode symbols, and fallback fonts
- Native-looking export button styling across ChatGPT, Claude, Gemini, Grok, and DeepSeek
- Light/dark theme consistency for export buttons and icons
- Tooltip positioning, closing behavior, scroll handling, and export menu consistency
- Gemini loading behavior to reduce export button flickering
- Overall UI stability with fewer unnecessary refreshes and visual glitches

### Fixed
- Language-dependent selectors on several platforms
- Gemini floating export button appearing in unwanted contexts
- Button recreation and flickering issues
- Tooltip repositioning issues
- Tooltips remaining visible behind export menus
- Outdated button styles after native interface updates
- Grok global export button placement
- Several light/dark theme inconsistencies

## [1.1.4] - 2026-05-29

### Fixed
- Fixed export button styling issues on Grok and Gemini


## [1.1.3] - 2026-05-24

### Improved
- Improved spacing consistency in Gemini PDF exports after inline code snippets

### Fixed
- Fixed Grok top export button placement across localized interfaces
- Fixed Gemini top export button alignment beside the native action menu
- Fixed Gemini page brightness shift when opening the export menu


## [1.1.2] - 2026-05-09

### Added
- Added export hover tooltips for DeepSeek message and top export buttons
- Added PDF font support for Assyrian/Syriac, Inuktut, Avestan, and Tangut

### Improved
- More natural Claude export hover behavior and positioning
- Improved Gemini export button visual integration
- Better DeepSeek thread collection and export reliability with faster virtualized scroll handling
- Improved PDF compatibility for multilingual fonts, languages, images, long text, tables, and code blocks
- Improved PDF fallback handling for multilingual fonts

### Fixed
- Fixed PDF export failures caused by recoverable font rendering issues
- Fixed export menu reopening when clicking the same export button


## [1.1.1] - 2026-04-26

### Added
- Support for AI-generated images in PDF export across supported platforms

### Improved
- Enhanced syntax highlighting consistency in PDF exports following recent AI interface updates
- Improved Gemini export button injection reliability for dynamic UI environments
- Reduced internal code complexity for better maintainability and stability

### Fixed
- Fixed Grok top-right export button not triggering full thread export correctly
- Fixed DeepSeek PDF rendering for wide tables (no more horizontal clipping, full content preserved)


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
