---
sidebar_position: 2
---

# 创建文档

整个文档是通过**多个页面**构成的:

- a **侧边栏**
- **上/下 导航**
- **版本控制**

## 新建第一个文档

创建一个markdown文件`docs/hello.md`:

```md title="docs/hello.md"
# Hello

This is my **first Docusaurus document**!
```

刚刚创建的文档页面就展示在`http://localhost:3000/docs/hello`.

## 配置侧边栏

Docusaurus 可以自动从`docs`**生成侧边栏**.

添加元数据以自定义侧边栏标签和位置:  

```md title="docs/hello.md" {1-4}
---
sidebar_label: 'Hi!'
sidebar_position: 3
---

# Hello

This is my **first Docusaurus document**!
```

It is also possible to create your sidebar explicitly in `sidebars.js`:

```js title="sidebars.js"
module.exports = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      // highlight-next-line
      items: ['hello'],
    },
  ],
};
```
