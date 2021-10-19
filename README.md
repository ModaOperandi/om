# @moda/om

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) [![](https://img.shields.io/npm/v/@moda/om)](https://www.npmjs.com/package/@moda/om) [![](https://img.shields.io/circleci/build/gh/ModaOperandi/om/master)](https://circleci.com/gh/ModaOperandi/om)

Moda Operandi's design system expressed as React components.

## Meta

- **State**: development
- **Point people**: [@jmcriffey](https://github.com/jmcriffey)
- **URLS**:
  - **Documentation**: https://moda-om-documentation.netlify.com/
  - **Storybook**: https://moda-om-storybook.netlify.com/

## Developing

### Getting Started

Clone this repository and install dependencies:

```
git clone git@github.com:ModaOperandi/om.git
cd om
yarn install
```

This repo includes scaffolders for generating folder/file structure for: React Components, as well as SASS mixins and functions.

```
yarn scaffold:component FooBar
# => Wrote: ./src/components/FooBar/index.ts
# => Wrote: ./src/components/FooBar/FooBar.scss
# => Wrote: ./src/components/FooBar/FooBar.stories.tsx
# => Wrote: ./src/components/FooBar/FooBar.tsx
# => Wrote: ./src/components/FooBar/FooBar.test.tsx
# => Updated index.
# => ✨Done in 0.10s.
```

This creates a folder in the correct place in addition to immediately runnable test and story. The React component it generates has some reasonable defaults, such as extending the base HTML element types as well as ensuring the component can be extended using CSS. It updates the `components/index.ts` with it's own export so that when built the component is importable via named import.

The SASS scaffolders functions in a similar manner.

```
yarn scaffold:mixin foobar
# => Wrote: ./src/mixins/foobar/_foobar.scss
# => Wrote: ./src/mixins/foobar/foobar.stories.scss
# => Wrote: ./src/mixins/foobar/foobar.stories.tsx
# => Updated index.
# => ✨Done in 0.10s.
```

### Developing

Once you've scaffolded out the file structure, boot up Storybook to drive out the component's development.

```
yarn storybook
# => Local: http://localhost:6006/
```

You'll see your scaffolded story in the appropriate place in the story tree.

### Committing and Releasing

We are using [semantic release](https://github.com/semantic-release/semantic-release) to automate versioning and publishing the package, and [commitizen](https://github.com/commitizen/cz-cli) to assist with formatting commits conforming to [conventional changelog](https://github.com/conventional-changelog/conventional-changelog).

Once you want to commit something, `git add` it then run the commitizen CLI. If you have it installed globally (`yarn global add commitizen`), you can run `git cz` and it will walk you through the steps. Alternatively you can run `yarn commit`.

When you're happy push to a feature branch and once the code is in `master`, semantic release will detect how to version it and automatically publish it to NPM.

## Usage

### Getting Started

```
yarn add @moda/om
```

Import the Component CSS in your global SCSS file:

```scss
@import '~@moda/om/dist/styles';
```

Import and use components:

```typescript
import { Button } from '@moda/om';

<Button>Click me</Button>;
```

Import and use the mixins/functions library:

```scss
@import '~@moda/om';

body {
  @include text(body1);
  padding: spacing(2, 4);
}
```

