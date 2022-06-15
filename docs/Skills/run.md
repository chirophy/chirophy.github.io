---
sidebar_position: 3
keywords: [华硕路由器,AX86U,固件,梅林,官改,koolshare,koolcenter,科学上网,外出,SS,SSR,V2ray,clash]
---

# 华硕路由外出办法

## 科学上网插件
拥有**软件中心**之后就可以愉快的安装各类插件了  
1. 下载科学上网离线安装包
直接点击 **[下载地址](https://github.com/hq450/fancyss_history_package)** 根据 **机型/固件下载**、**固件类型**下载对应的插件即可。  

2. 删除对离线安装包名称的检测
需要通过ssh删除检测屏蔽词
```bash
sed -i 's/\tdetect_package/\t# detect_package/g' /koolshare/scripts/ks_tar_install.sh
```
之后即可正常安装  

3. 正常订阅SS、SSR、V2ray即可

4. 存在问题
- 该科学上网插件的 `gfwlist` 模式更新有点慢
- 白名单模式对部分游戏有影响，会定位为外服，十分影响游戏体验

## MerlinClash
官方更新在 `telegram` 的频道中  
>频道地址：https://t.me/merlinclashcat  

当然也可以点击 **[此处](./MCKP_HND_220520.tar.gz)** 进行下载  
然后进行离线安装即可  
`clash`更多操作可以参考 **[MerlinClash Wiki](https://mcreadme.gitbook.io/mc/)**  


支持KoolCenter（KoolShare）固件：  
**ARM v8 HND版本**          -- 支持`AC86U/GT5300/AX68U/AX86U/AX88U/AX92U/AX1100/RAX80`等  
**ARM v7 AX32版本**         -- 支持`AX3000/AX6600/AX82/AX56/AX56Uv2/AX58U/AX89X/RAX50`等  
**ARM v7 384/6版本**       --  支持使用384/386版本固件的`AC68U/AC88U/RT5300/斐讯K3 G大固件`等  
**ARM v7 380版本**           --  支持使用380版本固件的ARM v7路由器  

开心上网就完事了
