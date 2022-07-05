---
sidebar_position: 5
keywords: [Debian,Linux]
---
# Debian使用记录
🗓2020-08-06  
下午搞公司的服务器搞的终端打不开了23333  
然后发现居然是之前装输入法引发的问题，需要改一下语言设置，然后设置里面居然没有language选项，那么就...  
打开locale文件：  
```sh
vi /etc/default/locale
```
显示的居然是
```sh
LANG=C.UTF-8
```
就很迷哦 然后就顺便趁机改一下中文2333  
```sh
LANG=en_US.UTF-8
LANGUAGE=zh_CN:zh
```
改完就重启reboot呗 然后终端就顺利打卡了 收工！  

记得日常apt升级：
```sh
apt-get update
```
卸载软件：
```sh
apt-get remove xxxx
```
卸载没用的依赖包：
```sh
apt-get autoremove
```
删除已经安装的软件安装包和没安装的软件软件包：
```sh
apt-get autoclean
```
以上记录备忘。