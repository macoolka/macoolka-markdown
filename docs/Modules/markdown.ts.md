---
title: markdown.ts
nav_order: 1
parent: Modules
---

# Overview

markdown instance on github for `Document`

---

<h2 class="text-delta">Table of contents</h2>

- [markdown (constant)](#markdown-constant)
- [article (function)](#article-function)
- [blockquote (function)](#blockquote-function)
- [bold (function)](#bold-function)
- [br (function)](#br-function)
- [cite (function)](#cite-function)
- [code (function)](#code-function)
- [del (function)](#del-function)
- [dfn (function)](#dfn-function)
- [em (function)](#em-function)
- [h1 (function)](#h1-function)
- [h1](#h1)
- [h2 (function)](#h2-function)
  - [h2](#h2)
- [h3 (function)](#h3-function)
  - [h3](#h3)
- [h4 (function)](#h4-function) - [h4](#h4)
- [h5 (function)](#h5-function) \* [h5](#h5)
- [h6 (function)](#h6-function) + [h6](#h6)
- [hr (function)](#hr-function)
- [img (function)](#img-function)
- [ins (function)](#ins-function)
- [italic (function)](#italic-function)
- [link (function)](#link-function)
- [mark (function)](#mark-function)
- [ol (function)](#ol-function)
- [p (function)](#p-function)
- [q (function)](#q-function)
- [section (function)](#section-function)
- [table (function)](#table-function)
- [ul (function)](#ul-function)

---

# markdown (constant)

markdown instance on github

**Signature**

```ts

export const markdown: Document = ...

```

# article (function)

article

**Signature**

```ts

export const article: Document['article'] = text => ...

```

Added in v0.2.0

# blockquote (function)

> blockquote 1
> blockquote 2"

**Signature**

```ts

export const blockquote: Document['blockquote'] = as => as.map(a => ...

```

Added in v0.2.0

# bold (function)

**bold**

**Signature**

```ts

export const bold: Document['bold'] = text => ...

```

Added in v0.2.0

# br (function)

br

**Signature**

```ts

export const br: Document['br'] = (text) => ...

```

Added in v0.2.0

# cite (function)

**cite**

**Signature**

```ts

export const cite: Document['cite'] = text => ...

```

Added in v0.2.0

# code (function)

```ts
import a from 'a'
```

**Signature**

```ts

export const code: Document['code'] = language => a => ...

```

Added in v0.2.0

# del (function)

~~del~~

**Signature**

```ts

export const del: Document['del'] = text => ...

```

Added in v0.2.0

# dfn (function)

**dfn**

**Signature**

```ts

export const dfn: Document['dfn'] = text => ...

```

Added in v0.2.0

# em (function)

**em**

**Signature**

```ts

export const em: Document['em'] = text => ...

```

Added in v0.2.0

# h1 (function)

# h1

**Signature**

```ts

export const h1: Document['h1'] = title => ...

```

Added in v0.2.0

# h2 (function)

## h2

**Signature**

```ts

export const h2: Document['h2'] = title => ...

```

Added in v0.2.0

# h3 (function)

### h3

**Signature**

```ts

export const h3: Document['h3'] = title => ...

```

Added in v0.2.0

# h4 (function)

#### h4

**Signature**

```ts

export const h4: Document['h4'] = title => ...

```

Added in v0.2.0

# h5 (function)

##### h5

**Signature**

```ts

export const h5: Document['h5'] = title => ...

```

Added in v0.2.0

# h6 (function)

###### h6

**Signature**

```ts

export const h6: Document['h6'] = title => ...

```

Added in v0.2.0

# hr (function)

---

**Signature**

```ts

export const hr: Document['hr'] = () => ...

```

Added in v0.2.0

# img (function)

![img](https://cdn.pixabay.com/photo/2019/08/12/14/23/wedding-4401383_960_720.jpg)

**Signature**

```ts

export const img: Document['img'] = (text, href) => ...

```

Added in v0.2.0

# ins (function)

**ins**

**Signature**

```ts

export const ins: Document['ins'] = text => ...

```

Added in v0.2.0

# italic (function)

_italic_

**Signature**

```ts

export const italic: Document['italic'] = text => ...

```

Added in v0.2.0

# link (function)

[link](/link)

**Signature**

```ts

export const link: Document['link'] = (text, href) => ...

```

Added in v0.2.0

# mark (function)

**mark**

**Signature**

```ts

export const mark: Document['mark'] = text => ...

```

Added in v0.2.0

# ol (function)

1. ol1
1. ol2"

**Signature**

```ts

export const ol: Document['ol'] = as => as.map(a => ...

```

Added in v0.2.0

# p (function)

p

**Signature**

```ts

export const p: Document['p'] = text => ...

```

Added in v0.2.0

# q (function)

'q'

**Signature**

```ts

export const q: Document['q'] = text => ...

```

Added in v0.2.0

# section (function)

section

**Signature**

```ts

export const section: Document['section'] = text => ...

```

Added in v0.2.0

# table (function)

| head1 | head2 |
| ----- | ----- |
| 11    | 12    |
| 21    | 22    |

**Signature**

```ts

export const table: Document['table'] = (as: string[][]) => ...

```

Added in v0.2.0

# ul (function)

- ul1
- ul2"

**Signature**

```ts

export const ul: Document['ul'] = as => as.map(a => ...

```

Added in v0.2.0
