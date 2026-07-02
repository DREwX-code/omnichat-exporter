# Contributing to OmniChat Exporter

First off, thank you for considering contributing to OmniChat Exporter.

Whether you're reporting a bug, suggesting an idea, improving documentation, improving platform support, or submitting code, every contribution helps improve the project.

## Ways to Contribute

You can help by:

* Reporting bugs → [GitHub Issues](../../issues/new?template=bug_report.yml)
* Suggesting features → [GitHub Discussions](../../discussions)
* Improving documentation
* Improving platform compatibility
* Improving export formats
* Improving PDF rendering
* Improving multilingual support
* Submitting code improvements

## Development Setup

1. Fork the repository
2. Clone your fork
3. Make your changes
4. Test your changes on supported platforms when possible
5. Submit a Pull Request

## Pull Request Process

Before submitting a Pull Request:

1. Ensure your changes are tested.
2. Update documentation if necessary.
3. Keep commits focused and descriptive.
4. Link related issues when applicable.
5. Explain which platform, browser, and userscript manager you tested.

## Testing Checklist

When possible, test changes with:

* ChatGPT
* Gemini
* Claude
* Grok
* DeepSeek

And verify export behavior for:

* TXT
* Markdown
* JSON
* PDF

If you cannot test every platform or format, mention what you tested in the Pull Request description.

## Code Style

* Use modern JavaScript
* Keep code readable and maintainable
* Use meaningful variable and function names
* Follow the existing project structure
* Avoid unnecessary dependencies
* Write comments in English when they clarify non-obvious logic

## Platform Compatibility

AI platforms can change their interface at any time.

When improving platform support, try to make selectors and detection logic as resilient as possible. Avoid overly fragile assumptions based on temporary layout details.

## Privacy

OmniChat Exporter is designed to process conversation content locally in the browser.

Contributions should preserve this privacy-first approach. Do not add external data collection, tracking, analytics, or server-side export processing.

## Community

Please remain respectful, clear, and constructive when interacting with other contributors.

Feedback, ideas, and improvements are welcome.

Thank you for helping make OmniChat Exporter better.
