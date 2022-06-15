---
sidebar_position: 2
keywords: [华硕路由器,AX86U,固件,梅林,官改,koolshare,koolcenter]
---

# 华硕路由固件
AX86U没发布多久，没忍住  
AC86U换到**AX86U**，狗东的货，刚收到就降价40，立刻申请保价，小赚一波~  
全文疯狂感谢 **[KoolCenter](https://www.koolcenter.com/)**！

:::info
本文通篇以 `AX86U` 为标准。 
:::

## 官改固件
### 固件介绍
>为**koolshare**开发组在本帖发布的基于华硕官方RT-AX86U 386源代码修改而来的带软件中心的RT-AX86U官改固件，版本号为官方固件版本号后加上 `_koolshare` 后缀，如RT-AX86U官改固件版本：`3.0.0.4.386_46061_koolshare`。
>官改固件的开发初衷是在尽量保持ASUS官方固件原汁原味的基础上，增加软件中心及对应插件的支持  

**官改固件 = 官方固件 + 为了软件中心进行必要的最小化改动 + 软件中心**

### 固件信息
- 点击 **[官改固件](https://www.koolcenter.com/posts/135)** 查看相关固件信息  

### 固件下载
- 点击 **[官改固件下载](https://fw.koolcenter.com/KoolCenter_ASUS_Official_Mod/RT-AX86U/RT-AX86U_386_46061_koolshare_cferom_pureubi_koolcenter_20220402.w)** 即可直接下载`RT-AX86U_386_46061` 固件

### 注意事项
- 官改固件 → 改版梅林固件  
- 如果使用了 `USB2JFFS` 插件，建议先卸载掉USB的挂载后再进行刷机，刷机后再进行挂载。不然会出现软件中心无法匹配的情况  

## 梅林固件
### 固件介绍
>加拿大独立开发者 **Eric Sauvageau** 在华硕RT-AX86U官方源码上二次开发的第三方固件，其版本号为 `386.x_y`，如：`386.5_2`；

### 固件信息
- 点击 **[梅林固件](https://github.com/RMerl/asuswrt-merlin.ng)** 查看相关固件信息  

### 注意事项
- 原版梅林固件 → 改版梅林固件  

## 梅林改固件
### 固件信息
>为**koolshare**开发组基于梅林固件源码**再次开发**而来的带软件中心的RT-AX86U梅林改版固件，其版本号和梅林原版固件保持一致，如RT-AX86U梅林改版固件版本：`386.5_2`。

### 固件信息
- 点击 **[梅林改固件](https://www.koolcenter.com/posts/130)** 查看相关固件信息  

### 固件下载
- 点击 **[梅林改固件下载](https://fw.koolcenter.com/KoolCenter_Merlin_New_Gen_386/RT-AX86U/RT-AX86U_386.5_2_cferom_pureubi_c0ade21_koolcenter.w)** 即可直接下载

### 注意事项
- 改版梅林固件 → 官改固件  
- 改版梅林固件 → 原厂固件/原版梅林固件  
- 如果使用了 `USB2JFFS` 插件，建议先卸载掉USB的挂载后再进行刷机，刷机后再进行挂载。不然会出现软件中心无法匹配的情况  

## 原厂固件
点击 **[华硕官方固件](https://www.asus.com.cn/networking-iot-servers/wifi-routers/asus-gaming-routers/rt-ax86u/HelpDesk_BIOS/)** 下载  


## 固件下载服务器
[KoolCenter固件下载服务器](https://fw.koolcenter.com/)

## 一些命令
1. 软件中心重置
```bash
koolshare-reset
```

2. 清空jffs空间
**注意：**此操作会删除 `jffs` 分区内的所有文件，包括但不限于：软件中心、安装的证书、TrafficAnalyzer的数据库、自定义的设备图标等
```bash
kill -9 $(pidof skipd)
cd /jffs && rm -r .[a-zA-Z_]* *
reboot
```

3. 删除软件中心
适用于官改固件刷回原厂固件，需要删除留在 `jffs` 分区内软件中心，而不删除其它文件。  
如果是在官改固件下删除软件中心，重启路由，路由会自动重新安装软件中心。  
```bash
kill -9 $(pidof skipd)
cd /jffs
rm -rf .asusrouter .koolshare db ksdb config/* etc/profile scripts/*
reboot
```

4. 重启软件中心
当软件中心相关进程挂掉的时候，输入以下命令重启软件中心：
```bash
sh /koolshare/perp/perp.sh
```