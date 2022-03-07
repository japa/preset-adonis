# AdonisJS Preset
> Bundled with opinionated plugins and reporters.

[![github-actions-image]][github-actions-url] [![npm-image]][npm-url] [![license-image]][license-url] [![typescript-image]][typescript-url]

Instead of installing individual plugins and reporters, this preset bundles them within a single package.

## Installation
Install the package from the npm registry as follows:

```sh
npm i @japa/preset-adonis
```

## Usage

Use the plugins as follows.

```ts
import { assert, specReporter, runFailedTests } from '@japa/preset-adonis'

configure({
  plugins: [assert(), runFailedTests()],
  reporters: [specReporter()]
})
```

[github-actions-image]: https://github.com/japa/preset-adonis/actions/workflows/test.yml
[github-actions-url]: https://img.shields.io/github/workflow/status/japa/preset-adonis/test?style=for-the-badge "github-actions"

[npm-image]: https://img.shields.io/npm/v/@japa/preset-adonis.svg?style=for-the-badge&logo=npm
[npm-url]: https://npmjs.org/package/@japa/preset-adonis "npm"

[license-image]: https://img.shields.io/npm/l/@japa/preset-adonis?color=blueviolet&style=for-the-badge
[license-url]: LICENSE.md "license"

[typescript-image]: https://img.shields.io/badge/Typescript-294E80.svg?style=for-the-badge&logo=typescript
[typescript-url]:  "typescript"
