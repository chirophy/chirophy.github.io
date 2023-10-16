# 软件部分
## 系统选择
1. unraid
2. truenas
3. 黑群晖

考虑到激发 `D1581`的性能，最终选择了`unraid`。同时，还能在`unraid`下使用虚拟机安装黑群晖，这种套娃行为也挺哈哈哈哈哈哈哈。  

## 安装 unraid
### 下载系统
可以选择从官网上直接下载`6.12.0`的系统。说实话，不敢使用特别新的系统，所以就使用了不是特别新的系统。  
[unraid下载地址](https://unraid.net/zh/%E4%B8%8B%E8%BD%BD)  
或者直接点击[unRAIDServer-6.12.0-x86_64.zip](https://www.yuque.com/attachments/yuque/0/2023/zip/38960578/1695194201141-dcd3381e-baea-47eb-8d99-cc5fefaa55f2.zip?_lake_card=%7B%22src%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fattachments%2Fyuque%2F0%2F2023%2Fzip%2F38960578%2F1695194201141-dcd3381e-baea-47eb-8d99-cc5fefaa55f2.zip%22%2C%22name%22%3A%22unRAIDServer-6.12.0-x86_64.zip%22%2C%22size%22%3A443184194%2C%22ext%22%3A%22zip%22%2C%22source%22%3A%22%22%2C%22status%22%3A%22done%22%2C%22download%22%3Atrue%2C%22taskId%22%3A%22u033915f1-27b1-4084-bcd1-fbb32cf79e5%22%2C%22taskType%22%3A%22upload%22%2C%22type%22%3A%22application%2Fx-zip-compressed%22%2C%22__spacing%22%3A%22both%22%2C%22mode%22%3A%22title%22%2C%22id%22%3A%22ua71b0284%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%2C%22card%22%3A%22file%22%7D)进行下载  
PS：系统是需要花钱的，要想入正的话，有优惠码！  
Unraid55折优惠码：`大鹏YYDS`   
### 写入U盘
可以使用经典的`rufus-4.2`，也可以使用大佬写的程序，将下载的系统写入U盘。  
[UNRAID国内制作工具-1694500523.7z](https://www.yuque.com/attachments/yuque/0/2023/7z/38960578/1695197749386-21bb095d-05a1-4cb2-8e1c-676912396420.7z?_lake_card=%7B%22src%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fattachments%2Fyuque%2F0%2F2023%2F7z%2F38960578%2F1695197749386-21bb095d-05a1-4cb2-8e1c-676912396420.7z%22%2C%22name%22%3A%22UNRAID%E5%9B%BD%E5%86%85%E5%88%B6%E4%BD%9C%E5%B7%A5%E5%85%B7-1694500523.7z%22%2C%22size%22%3A5261213%2C%22ext%22%3A%227z%22%2C%22source%22%3A%22%22%2C%22status%22%3A%22done%22%2C%22download%22%3Atrue%2C%22taskId%22%3A%22u07c8d855-89dd-4a70-bb68-3ab45e33d4e%22%2C%22taskType%22%3A%22upload%22%2C%22type%22%3A%22%22%2C%22__spacing%22%3A%22both%22%2C%22mode%22%3A%22title%22%2C%22id%22%3A%22uf1b1b9b6%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%2C%22card%22%3A%22file%22%7D)  
大佬写的这个程序可以避免系统下载慢的问题，也可以直接格式化好U盘，直接转化为`FAT32`格式。  

### 注意事项
使用大佬的程序写入系统时，会显示U盘的`GUID`，建议及时保存一下，以防后期U盘损坏之类的。  
## unraid操作手册
### 切换中文
直接前往`APPS`搜索`language`即可发现，直接下载安装。  
![搜索结果](https://cdn.nlark.com/yuque/0/2023/png/38960578/1697097349605-7c4fa725-d984-4237-9460-612abddfd7eb.png#averageHue=%23ebe9e8&clientId=uefe86863-3b39-4&from=paste&height=699&id=u10420c7a&originHeight=699&originWidth=1673&originalType=binary&ratio=1&rotation=0&showTitle=true&size=170401&status=done&style=none&taskId=u890e5d65-52a6-49af-82a5-bb98dea0723&title=%E6%90%9C%E7%B4%A2%E7%BB%93%E6%9E%9C&width=1673 "搜索结果")
随后前往`SETTINGS`- `User Preferences`-`Display Settings`切换为`简体中文`即可。  
### 安装插件
目前常用的插件也就几款：
1. `Unassigned Devices` 挂载硬盘
2. `Unassigned Devices Plus` 包含破坏性的Plus版
3. `Dynamix File Manager` 文件管理
4. `Dynamix System Temperature` 温度监测
5. `unBALANCE` 更换硬盘
6. `User Scripts` 脚本
7. `Docker Compose Manager` docker管理器
8. 待补充

常规的也就这几款了，也做了简单说明。具体的使用方法可以参考其他资料了，都算简单，就不做赘述。  
### 组建磁盘阵列
在`主界面`的最下方会发现`磁盘阵列操作`，插入硬盘挂载硬盘后在`主界面`的最上方选定各个硬盘即可启动阵列。  
### 更新磁盘阵列
在**停止磁盘阵列**后，可以更新磁盘阵列，或者更换硬盘。  
需要前往`工具`-`Unraid OS`-`新配置`即可重置磁盘阵列配置，更换硬盘或者重新配置。  
### 玩转docker
个人比较常用的几款都不尽相同：

1. `plex` 视频播放器
2. `qbittorrent` 下载器
3. `zerotier` 内网穿透
### 玩转虚拟机
#### 安装黑裙

1. 选择引导

选择的是[GitHub - wjz304/arpl-i18n: Automated Redpill Loader(i18n)](https://github.com/wjz304/arpl-i18n)的引导，非常友好！  
引导界面美观便捷，系统更新快速，简直完美！  
直接下载 `arpl.img`文件即可，上传到对应镜像文件夹。  

可参考：[arpl i18n 群晖全功能中文引导说明书 - Tank电玩&米多贝克](https://www.mi-d.cn/6802)  

2. 创建虚拟机

![参考配置](https://cdn.nlark.com/yuque/0/2023/png/38960578/1697096215054-7ea29476-1d2c-4ef3-a5ea-052c734ac3ba.png#averageHue=%23f2eeed&clientId=ueb2d2e8b-1e7b-4&from=paste&height=790&id=ue98c9682&originHeight=790&originWidth=727&originalType=binary&ratio=1&rotation=0&showTitle=true&size=58509&status=done&style=none&taskId=ud9e5aef2-adb1-4627-8a18-48c79f03bd2&title=%E5%8F%82%E8%80%83%E9%85%8D%E7%BD%AE&width=727 "参考配置")  
重点在于：选择的`主要虚拟磁盘位置`为你的 **引导文件 **所在位置。  

3. 安装群晖系统

在完成引导后，使用`VNC`即可看到下图状态：
![完成引导](https://cdn.nlark.com/yuque/0/2023/png/38960578/1697096479693-b50d8da0-08cb-4c05-9228-37a0e5de3cbf.png#averageHue=%230e0a07&clientId=uefe86863-3b39-4&from=paste&height=466&id=u66a90412&originHeight=466&originWidth=708&originalType=binary&ratio=1&rotation=0&showTitle=true&size=76796&status=done&style=none&taskId=uae3eeb7e-ad04-4034-b46b-1fe32490cfa&title=%E5%AE%8C%E6%88%90%E5%BC%95%E5%AF%BC&width=708 "完成引导")  
这时我们可以发现新的nas是拥有了新IP的，可以直接登录。  
如果没有显示新的IP，就需要使用 [https://find.synology.com](https://find.synology.com) 或者 [Synology Aaaistant](https://cndl.synology.cn/download/Utility/Assistant/7.0.4-50051/Windows/synology-assistant-7.0.4-50051.exe) 进行查找。  

4. 完成

#### 使用黑裙

1. 取消自动更新
2. 创建共享文件夹


## 参考资料
主要参考资料：  
[unRAID-新手教程_RSG-人生观](https://www.lxg2016.com/unraid/unraid-%e6%96%b0%e6%89%8b%e6%95%99%e7%a8%8b)  
[NAS最强攻略：使用UNRAID系统，搭建ALL IN ONE全过程！超万字教程，绝对干货！](https://zhuanlan.zhihu.com/p/152203435)  
[NAS折腾纪实_Ⅲ：系统篇 | unraid系统的介绍、安装及常用软件、插件的设置（挂载ntfs盘、自适应散热风扇转速、app商城）以及使用解疑](https://zhuanlan.zhihu.com/p/469079872)  
[Unraid最值得入正之Unraid Connect完全使用指南](https://www.bilibili.com/read/cv23316817/)  
[Unraid中文教程汇总 （2022/05/11更新）](https://forums.unraid.net/topic/122770-unraid%E4%B8%AD%E6%96%87%E6%95%99%E7%A8%8B%E6%B1%87%E6%80%BB-%EF%BC%8820220511%E6%9B%B4%E6%96%B0%EF%BC%89/)  


