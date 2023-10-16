---
sidebar_position: 3
---

# 创建博文

Docusaurus 不仅为**每个博客**创建了页面, 还创建了**博客索引页**,**标签系统**和**RSS** 订阅...

## 新建第一页博客

创建一个文件 `blog/2021-02-28-greetings.md`:

```md title="blog/2021-02-28-greetings.md"
---
slug: greetings
title: Greetings!
authors:
  - name: Joel Marcey
    title: Co-creator of Docusaurus 1
    url: https://github.com/JoelMarcey
    image_url: https://github.com/JoelMarcey.png
  - name: Sébastien Lorber
    title: Docusaurus maintainer
    url: https://sebastienlorber.com
    image_url: https://github.com/slorber.png
tags: [greetings]
---

Congratulations, you have made your first post!

Feel free to play around and edit this post as much you like.
```

新的博客现在可以在 `http://localhost:3000/blog/greetings` 展示.
