# 部署rsshub

## 官方手册
[RSSHub](https://docs.rsshub.app/)

## 介绍
`RSSHub` 是一个开源、简单易用、易于扩展的 `RSS` 生成器，可以给任何奇奇怪怪的内容生成 `RSS` 订阅源。`RSSHub` 借助于开源社区的力量快速发展中，目前已适配数百家网站的上千项内容。  

可以配合浏览器扩展 [RSSHub Radar](https://github.com/DIYgod/RSSHub-Radar) 和 移动端辅助 App [RSSBud](https://github.com/Cay-Zhang/RSSBud)(iOS) 与 [RSSAid](https://github.com/LeetaoGoooo/RSSAid)(Android) 食用。  

## 安装
运行下面的命令下载 `RSSHub` 镜像  
```bash
docker pull diygod/rsshub
```

然后运行 `RSSHub` 即可  
```bash
docker run -d --name rsshub -p 1200:1200 diygod/rsshub
```

在浏览器中打开 [http://127.0.0.1:1200/](http://127.0.0.1:1200/) ，enjoy it! ✅  

您可以使用下面的命令来关闭 `RSSHub`  
```bash
docker stop rsshub
```

其他的安装方式请自行查阅 **[官方部署文档](https://docs.rsshub.app/install/)** 查看  

## 更新
删除旧容器
```bash
docker stop rsshub
docker rm rsshub
```

然后重复**[安装](#安装)**步骤

## 添加配置
配置运行在 `docker` 中的 `RSSHub`，最便利的方法是使用 `docker` 环境变量  

以设置缓存时间为 `1` 小时举例，只需要在运行时增加参数：`-e CACHE_EXPIRE=3600`  
```bash
docker run -d --name rsshub -p 1200:1200 -e CACHE_EXPIRE=3600 -e GITHUB_ACCESS_TOKEN=example diygod/rsshub
```

该部署方式不包括 `puppeteer`（除非改用 `diygod/rsshub:chromium-bundled`）和 `redis` 依赖，如有需要请改用 `Docker Compose` 部署方式或自行部署外部依赖

## 路由
自行设置或使用官方 `rss` 链接  
但如果直接可以用官方 为啥还要费老大劲自己部署呢？  
[官方路由](https://docs.rsshub.app/)