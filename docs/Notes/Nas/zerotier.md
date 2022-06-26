---
sidebar_position: 1
keywords: [ZeroTier,zt,群晖NAS,nas,frp,内网穿透]
---

# zerotier相关

:::tip 

***本篇着重介绍在群晖Nas上使用zerotier的方法。***

:::

## 介绍
**ZeroTier**是一个全球智能网络交换机。  

它是一个分布式网络管理程序，构建在加密安全的全球点对点网络之上。它提供了先进的网络虚拟化和管理能力，与企业SDN交换机相当，但跨越局域网和广域网，并连接几乎任何类型的应用程序或设备。  

简而言之，`zerotier` 是一个同 `frp` 一样的内网穿透工具，用来 `“打洞”` 。

## 作用
1. 以更快的速度远程连接，体验远胜于 `frp`。  
2. 给Nas内网穿透。(这也是我为什么把zerotier放在Nas分类中的原因)  

## 安装
:::info
Synology DSM7.0后不允许第三方软件使用 `root` 权限，所以需要结合 `docker` 来使用 `zerotier`。  
如果是DSM6.x，则可以直接使用官方提供的 [`.spk安装包`](http://download.zerotier.com/dist/synology/)。
:::
### 创建一个持续的TUN
以下操作都需在 `root` 权限下进行。
1. 编写脚本 `/usr/local/etc/rc.d/tun.sh`,并在启动时设置 `/dev/net/tun`
```bash
echo -e '#!/bin/sh -e \ninsmod /lib/modules/tun.ko' > /usr/local/etc/rc.d/tun.sh
```

2. 设置脚本的可执行权限
```bash
chmod a+x /usr/local/etc/rc.d/tun.sh
```

3. 运行脚本来新建一个TUN
```bash
/usr/local/etc/rc.d/tun.sh
```

4. 检查TUN是否正常
```bash
ls /dev/net/tun

# 显示以下内容则为正常
/dev/net/tun
```

### 在docker中安装zerotier镜像
在图形界面操作，就不多赘述。  
直接搜索 `zerotier`，就会出现官方最新的 `synology`版镜像。

### 在docker中设置容器
1. 新建一个文件夹存储zerotier的文件和配置
```bash
mkdir /var/lib/zerotier-one
```
:::caution
建议放在 `/var/lib/` 目录中，**非常不建议**放在nas的*共享目录*中。
:::

2. 创建容器名为 `zt` 的容器
```bash
docker run -d           \
  --name zt             \
  --restart=always      \
  --device=/dev/net/tun \
  --net=host            \
  --cap-add=NET_ADMIN   \
  --cap-add=SYS_ADMIN   \
  -v /var/lib/zerotier-one:/var/lib/zerotier-one zerotier/zerotier-synology:latest
```

### 使用
1. 查看状态
```bash
docker exec -it zt zerotier-cli status
```

2. 加入网络
```bash
docker exec -it zt zerotier-cli join [Network ID]
```
:::tip
如此步骤加入网络不成功，可使用手动添加的方式进行添加：  
在 **[ZeroTier Central](https://my.zerotier.com/)** 控制页面 `Member` - `MANUALLY ADD MEMBER` 中输入对应的 `Address` 进行 **`Add New Member`** 即可  
:::
3. 给Nas授权，并查看网络状态
```bash
docker exec -it zt zerotier-cli listnetworks
```
会显示你的IP地址

~~**注：**在[ZeroTier Central](https://my.zerotier.com/)页面的 `Members` 项中并不会显示出相关授权信息，但确实已连上！~~

4. 显示正在运行的容器(可选项)
```bash
docker ps
```

5. 进入 `zt` 容器(可选项)
```bash
docker exec -it zt bash
```

## 更新
1. 显示正在运行的容器
```bash
docker ps
```

2. 停止容器
根据显示的 `CONTAINER ID` 来终止对应容器
```bash
docker stop [CONTAINER ID]
```

3. 删除容器
```bash
docker container rm [CONTAINER ID]
```

4. pull最新更新
```bash
docker pull zerotier/zerotier-synology:latest
```

## 问题
刚开始启动 `zerotier` 时，就会出现报错。  
报错如下：
```
ERROR: unable to configure virtual network port: could not open TUN/TAP device: No such file or directory
```

**[解决办法](./tunproblem.md)**