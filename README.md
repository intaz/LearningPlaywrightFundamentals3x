# Learning Playwright Fundamentals

A hands-on project for learning [Playwright](https://playwright.dev/) end-to-end testing fundamentals.

## Overview

This repository contains exercises and examples for automating browser tests with Playwright. It covers the basics of writing, running, and debugging tests across modern browsers.

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (bundled with Node.js)

## Installation

```bash
npm install
```

This installs `@playwright/test` and its TypeScript type definitions. Then install the browser binaries:

```bash
npx playwright install
```

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run a single test file:

```bash
npx playwright test tests/webtable2.spec.ts
```

Run tests matching a specific title:

```bash
npx playwright test -g "Login Page"
```

Run tests with the UI runner:

```bash
npx playwright test --ui
```

Open the HTML report after a run:

```bash
npx playwright show-report
```

## Topics Covered

- `tests/example.spec.ts` — basic navigation and assertions
- `tests/task1.spec.ts` — form filling, checkboxes, and URL assertions
- `tests/testAnnotations.spec.ts` — test annotations (`test.skip`, `test.only`, `test.fail`, `test.fixme`, `test.slow`)
- `tests/testDescribe.spec.ts` — grouping tests with `test.describe`
- `tests/webtable1.spec.ts` — reading web table rows and columns
- `tests/webtable2.spec.ts` — dynamic XPath table traversal and checkbox selection
- `tests/dynamicWebTable.spec.ts` — dynamic table handling with `following-sibling` axes

## Project Structure

- `tests/` — Playwright test files
- `playwright.config.ts` — Playwright configuration (browsers, reporters, etc.)
- `.gitignore` — Ignored build and cache artifacts

## Browsers

The default configuration runs tests against Chromium, Firefox, and WebKit, with headless mode disabled (`headless: false`).

## Resources

- [Playwright documentation](https://playwright.dev/docs/intro)
- [Writing tests](https://playwright.dev/docs/writing-tests)
