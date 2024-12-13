---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "tempo"
  text: "Programmatically build markdown."
  tagline: A set of TypeScript libraries for building markdown.
  image:
    src: /images/tempo-icon.png
    alt: VitePress
  actions:
    - theme: brand
      text: Getting Started
      link: /markdown-examples
    - theme: alt
      text: Real-world Examples
      link: /api-examples

features:
  - icon: 
      src: /images/icons/markdown.png
    title: Markdown
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - icon: 
      src: /images/icons/typescript.png
    title: TypeScript
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - icon: 
      src: /images/icons/gha-blue.png
    title: CI Ready
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

## Usage

::: code-group

```typescript [render: TS/JS]
import tempo from '@tempo/js';

export default tempo()
  .h1('Hello, World!')
  .p('This is a paragraph.')
  .code('console.log("Hello, World!")')
  .toMarkdown();
```

```typescript [template: TS/JS]
import tempo from '@tempo/js-templates';

export default tempo()
  .h1()
  .p({ placeholder: 'foobar' })
  .code({ placeholder: 'foobar' })
  .compile();
```

```tsx [template: MDX]
import { Heading, Paragraph } from '@tempo/mdx';

<Heading />

<Paragraph placeholder="foobar" />

<Code placeholder="foobar" />
```

:::