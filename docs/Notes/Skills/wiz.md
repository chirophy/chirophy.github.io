# 为知笔记

## 介绍
对我而言 这就是个 `网页版` 的 **笔记本**  
在使用 `zerotier` 打通各个设备后  
可以很便捷的在不同设备上使用 `Markdown` 进行文本编辑  
这就很方便的可以直接复制粘贴到需要的地方  

## 价格
在官网上的价格 如图所示：
![](https://img-1255648810.cos.ap-guangzhou.myqcloud.com/wiki/为知笔记.png)  
是做出了 **免费版** 同 **VIP** 的区别的  
但是！这个免费版 是在他官网注册帐号来使用的免费版  

那么 自己部署是否还要钱呢？  
答案是！  
**不需要！！！**  

>5 用户以下免费使用，超出 5 用户，按照用户数的方式按年收取费用.

因为在自己的树莓派上部署至今也才一个多月  
用的倒是蛮开心的 没有注意到费用的问题  
直到来写这篇wiki的才发现  

## 使用 `docker` 部署
:::tip 

为知笔记服务端提供了docker镜像  
并且上线了适配 `ARM64`、`ARM32(v7)` 的镜像  
这就意味着是支持 `树莓派4B` 的

:::
镜像名称为：**[`wiznote/wizserver`](https://hub.docker.com/r/wiznote/wizserver)**  
之后的事情就很熟练了  
```sh
mkdir wizdata
docker run --name wiz --restart=always -it -d -v ~/wizdata:/wiz/storage -v /etc/localtime:/etc/localtime -p 80:80  wiznote/wizserver

# 建议更换80口
# docker run --name wiz -it -d -v  ~/wizdata:/wiz/storage -p 8080:80 wiznote/wizserver
```
or  
有 `Portainer` 等可视化界面也可直接  
```sh
docker pull wiznote/wizserver
```

因为需要下载镜像 并且初始化数据 第一次速度要慢一些(根据网络状况，可能需要10分钟或者更长时间)  
在下载完成后 第一次启动镜像大概需要2-3分钟时间  

## 使用
>默认管理员账号：admin@wiz.cn  
>密码：123456  

在部署完成后 使用这个账号登录网页版  
然后修改管理员邮箱及密码  
其他用户自行注册  
免费版本可以注册5个用户（不包含管理员账号）  
简直良心！  
![](https://img-1255648810.cos.ap-guangzhou.myqcloud.com/wiki/为知笔记1.png)  
![](https://img-1255648810.cos.ap-guangzhou.myqcloud.com/wiki/为知笔记2.png)  

## 自定义内容
私有部署版本 可以自定义网页版语言、首页内容、favicon等  
- 自己定义网页版/首页的语言  注意，语言是 `JSON` 格式
- 更改浏览器 `TAB` 前面的图标
- 自定义首页内容  格式是 `Markdown` 可以按照 `Markdown` 格式修改里面的内容

## 常用命令行
```sh showLineNumbers
# 启动服务
docker start wiz

# 停止服务
docker stop wiz

# 删除容器
docker rm wiz

# 修改参数，例如修改映射端口
docker run --name wiz --restart=always -it -d -v  ~/wizdata:/wiz/storage -v  /etc/localtime:/etc/localtime -p 80:80 -p 9269:9269/udp  wiznote/wizserver

# 更新为知笔记
docker pull wiznote/wizserver:latest
docker run --name wiz --restart=always -it -d -v  ~/wizdata:/wiz/storage -v  /etc/localtime:/etc/localtime -p 80:80 -p 9269:9269/udp  wiznote/wizserver
```


参考：[官方文档](https://www.wiz.cn/zh-cn/docker)