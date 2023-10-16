---
sidebar_position: 1
---

# 创建页面

添加 **Markdown or React** 文件到`src/pages`来创建一个 **单独的页面**:

- `src/pages/index.js` -> `localhost:3000/`
- `src/pages/foo.md` -> `localhost:3000/foo`
- `src/pages/foo/bar.js` -> `localhost:3000/foo/bar`

## 创建 React 页面

在`src/pages/my-react-page.js`新建一个文件:

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```

新的页面将在`http://localhost:3000/my-react-page`展示.

## 新建 Markdown 页面

在`src/pages/my-markdown-page.md`新建文件:

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```

新的页面将在`http://localhost:3000/my-markdown-page`展示.
