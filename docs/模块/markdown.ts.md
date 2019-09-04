---
title: markdown.ts
nav_order: 1
parent: 模块
---

# 概述

`Document`的 markdown 实例

基于 github

---

<h2 class="text-delta">目录</h2>

- [markdown (常量)](#markdown-%E5%B8%B8%E9%87%8F)
- [article (函数)](#article-%E5%87%BD%E6%95%B0)
- [blockquote (函数)](#blockquote-%E5%87%BD%E6%95%B0)
- [bold (函数)](#bold-%E5%87%BD%E6%95%B0)
- [br (函数)](#br-%E5%87%BD%E6%95%B0)
- [cite (函数)](#cite-%E5%87%BD%E6%95%B0)
- [code (函数)](#code-%E5%87%BD%E6%95%B0)
- [del (函数)](#del-%E5%87%BD%E6%95%B0)
- [dfn (函数)](#dfn-%E5%87%BD%E6%95%B0)
- [em (函数)](#em-%E5%87%BD%E6%95%B0)
- [h1 (函数)](#h1-%E5%87%BD%E6%95%B0)
- [h1](#h1)
- [h2 (函数)](#h2-%E5%87%BD%E6%95%B0)
  - [h2](#h2)
- [h3 (函数)](#h3-%E5%87%BD%E6%95%B0)
  - [h3](#h3)
- [h4 (函数)](#h4-%E5%87%BD%E6%95%B0) - [h4](#h4)
- [h5 (函数)](#h5-%E5%87%BD%E6%95%B0) \* [h5](#h5)
- [h6 (函数)](#h6-%E5%87%BD%E6%95%B0) + [h6](#h6)
- [hr (函数)](#hr-%E5%87%BD%E6%95%B0)
- [img (函数)](#img-%E5%87%BD%E6%95%B0)
- [ins (函数)](#ins-%E5%87%BD%E6%95%B0)
- [italic (函数)](#italic-%E5%87%BD%E6%95%B0)
- [link (函数)](#link-%E5%87%BD%E6%95%B0)
- [mark (函数)](#mark-%E5%87%BD%E6%95%B0)
- [ol (函数)](#ol-%E5%87%BD%E6%95%B0)
- [p (函数)](#p-%E5%87%BD%E6%95%B0)
- [q (函数)](#q-%E5%87%BD%E6%95%B0)
- [section (函数)](#section-%E5%87%BD%E6%95%B0)
- [table (函数)](#table-%E5%87%BD%E6%95%B0)
- [ul (函数)](#ul-%E5%87%BD%E6%95%B0)

---

# markdown (常量)

基于 github markdown

**签名**

```ts

export const markdown: Document = ...

```

# article (函数)

article

**签名**

```ts

export const article: Document['article'] = text => ...

```

v0.2.0 中添加

# blockquote (函数)

> blockquote 1
> blockquote 2"

**签名**

```ts

export const blockquote: Document['blockquote'] = as => as.map(a => ...

```

v0.2.0 中添加

# bold (函数)

**bold**

**签名**

```ts

export const bold: Document['bold'] = text => ...

```

v0.2.0 中添加

# br (函数)

br

**签名**

```ts

export const br: Document['br'] = (text) => ...

```

v0.2.0 中添加

# cite (函数)

**cite**

**签名**

```ts

export const cite: Document['cite'] = text => ...

```

v0.2.0 中添加

# code (函数)

```ts
import a from 'a'
```

**签名**

```ts

export const code: Document['code'] = language => a => ...

```

v0.2.0 中添加

# del (函数)

~~del~~

**签名**

```ts

export const del: Document['del'] = text => ...

```

v0.2.0 中添加

# dfn (函数)

**dfn**

**签名**

```ts

export const dfn: Document['dfn'] = text => ...

```

v0.2.0 中添加

# em (函数)

**em**

**签名**

```ts

export const em: Document['em'] = text => ...

```

v0.2.0 中添加

# h1 (函数)

# h1

**签名**

```ts

export const h1: Document['h1'] = title => ...

```

v0.2.0 中添加

# h2 (函数)

## h2

**签名**

```ts

export const h2: Document['h2'] = title => ...

```

v0.2.0 中添加

# h3 (函数)

### h3

**签名**

```ts

export const h3: Document['h3'] = title => ...

```

v0.2.0 中添加

# h4 (函数)

#### h4

**签名**

```ts

export const h4: Document['h4'] = title => ...

```

v0.2.0 中添加

# h5 (函数)

##### h5

**签名**

```ts

export const h5: Document['h5'] = title => ...

```

v0.2.0 中添加

# h6 (函数)

###### h6

**签名**

```ts

export const h6: Document['h6'] = title => ...

```

v0.2.0 中添加

# hr (函数)

---

**签名**

```ts

export const hr: Document['hr'] = () => ...

```

v0.2.0 中添加

# img (函数)

![img](https://cdn.pixabay.com/photo/2019/08/12/14/23/wedding-4401383_960_720.jpg)

**签名**

```ts

export const img: Document['img'] = (text, href) => ...

```

v0.2.0 中添加

# ins (函数)

**ins**

**签名**

```ts

export const ins: Document['ins'] = text => ...

```

v0.2.0 中添加

# italic (函数)

_italic_

**签名**

```ts

export const italic: Document['italic'] = text => ...

```

v0.2.0 中添加

# link (函数)

[link](/link)

**签名**

```ts

export const link: Document['link'] = (text, href) => ...

```

v0.2.0 中添加

# mark (函数)

**mark**

**签名**

```ts

export const mark: Document['mark'] = text => ...

```

v0.2.0 中添加

# ol (函数)

1. ol1
1. ol2"

**签名**

```ts

export const ol: Document['ol'] = as => as.map(a => ...

```

v0.2.0 中添加

# p (函数)

p

**签名**

```ts

export const p: Document['p'] = text => ...

```

v0.2.0 中添加

# q (函数)

'q'

**签名**

```ts

export const q: Document['q'] = text => ...

```

v0.2.0 中添加

# section (函数)

section

**签名**

```ts

export const section: Document['section'] = text => ...

```

v0.2.0 中添加

# table (函数)

| head1 | head2 |
| ----- | ----- |
| 11    | 12    |
| 21    | 22    |

**签名**

```ts

export const table: Document['table'] = (as: string[][]) => ...

```

v0.2.0 中添加

# ul (函数)

- ul1
- ul2"

**签名**

```ts

export const ul: Document['ul'] = as => as.map(a => ...

```

v0.2.0 中添加
