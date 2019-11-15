# @moda/om

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) [![](https://img.shields.io/npm/v/@moda/om)](https://www.npmjs.com/package/@moda/om) [![](https://img.shields.io/circleci/build/gh/ModaOperandi/om/master)](https://circleci.com/gh/ModaOperandi/om)

Moda Operandi's design system expressed as React components.

## Meta

- **State**: development
- **Point people**: [@dzucconi](https://github.com/dzucconi), [@SamJacobs](https://github.com/SamJacobs)
- **URLS**:
  - **Documentation**: https://moda-om-documentation.netlify.com/
  - **Storybook**: https://moda-om-storybook.netlify.com/

## Getting Started

```
yarn add @moda/om
```

Import the Component/Molecule CSS in your global SCSS file:

```scss
@import '~@moda/om/dist/css';
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
