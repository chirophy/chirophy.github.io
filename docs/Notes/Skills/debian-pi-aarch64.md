# Debian-Pi-Aarch64 
★ 全新树莓派64位系统

## 1. 系统相关
### 1.1 系统环境
- 基础系统(无桌面基础版)
>标准基础系统镜像，没有X-WINDOWS桌面环境。  
**镜像名称：OPENFANS-Debian-Buster-Aarch64-XXXXXX.img  

- 基础系统Plus++(无桌面加强版)
>在标准基础系统之上，加入了可视化的WebUI管理界面支持。  
**镜像名称：OPENFANS-Debian-Buster-Aarch64-XXXXXX-plus++.img  

- MacOS_Mojave主题定制桌面(全功能版)
>在标准基础系统之上基于XFCE深度定制的树莓派爱好者基地的独家系统镜像，具备所有系统的全部功能！！  
**镜像名称： OPENFANS-Debian-Buster-Desktop-Aarch64-XXXXXX.img

- 深度(Deepin)桌面
>基于我们自己的基础系统镜像，移植了完整的深度Deepin 15.5专业版桌面，
这是目前第一个基于完整的Debian Aarch64架构而构建的适配于树莓派3B/3B+/3A/4B/CM3/CM4的64位深度ARM64镜像。  
**镜像名称：OPENFANS-Deepin-Professional-Desktop-Aarch64-XXXXXX.img

- 固件升级包
>一般命名规则方式为(以 "upkg" 开头)：  
upkg-xxxx(年)-xx(月)-xx(日)-vxxxx-x.x-zip/zip.xz

### 1.2 系统相关
2.0正式版使用 `ext4` 文件系统，默认使用清华源，基于 **Debian Buster 10 Arm64** 构建。

### 1.3 系统服务
#### Docker容器  
```
手动开启：systemctl start docker.service
手动停止：systemctl stop docker.service
启用开机启动：systemctl enable docker.service
禁用开机启动：systemctl disable docker.service
```

#### CecOS CaaS容器云（服务端口：8443）
```
手动开启：systemctl start cecos-caas.service
手动停止：systemctl stop cecos-caas.service
启用开机启动：systemctl enable cecos-caas.service
禁用开机启动：systemctl disable cecos-caas.service
```

#### WebGUI管理平台（服务端口：9090）
```
手动开启：systemctl start cockpit.socket
手动停止：systemctl stop cockpit.socket
启用开机启动：systemctl enable cockpit.socket
禁用开机启动：systemctl disable cockpit.socket
```

#### Web SSH客户端（服务端口：4200）
```
手动开启：systemctl start shellinabox.service
手动停止：systemctl stop shellinabox.service
启用开机启动：systemctl enable shellinabox.service
禁用开机启动：systemctl disable shellinabox.service
```

### 1.4 系统比较
|项目|无桌面基础版|无桌面增强版|桌面全功能版|深度桌面|
|---|---|---|---|---|
|KVM硬件虚拟化支持|★|★|★|★|
|虚拟机图形化控制端|X|X|★|X|
|Docker容器支持|☆|★|☆|☆|
|CecOS CaaS容器云支持|☆|☆|☆|X|
|WebGUI管理平台|X|★|★|X|
|Web SSH 客户端支持|★|★|★|★|
|标准虚拟机套件|★|★|★|X|
|宝塔虚拟机套件|★|★|★|X|

----
**说明：**

**★ ：** 表示支持，并以默认启用，可直接使用。

**☆ ：** 表示支持，但默认未启用该服务，需要用户手动启动。（关于如果启用相关服务，在本文档中有说明。）

**X ：** 表示不支持。




## 2. 特性说明
### 2.1 Web可视化管理
Web管理支持：  
>1.  新增全功能版的支持
>2.  全面开启Web管理时代，省去终端工具的麻烦，Anytime,Anywhere, 直接使用浏览器管理
>3.  默认开启容器服务，开箱即用 (2.0正式版请通过 CecOS CaaS 容器云 管理和使用容器)
>4.  集成WEB界面的全方位监控
>5.  支持WEB界面查看系统状况、硬件信息、情况等信息
>6.  支持WEB界面设置主机名
>7.  支持WEB界面设置主机域
>8.  支持WEB界面设置主机时间、NTP服务器，更新方式
>9.  支持WEB界面关机、重启
>10. 支持WEB界面系统日志管理
>11. 支持WEB界面系统存储及相关外设管理，在线分区、挂载设备等功能
>12. 支持WEB界面网络管理
>13. 支持WEB界面系统账户管理
>14. 支持WEB界面系统服务管理
>15. 支持WEB界面系统更新管理
>16. WEB界面集成Shell终端，可以在网页上直接进行终端相关操作
>17. 支持跨节点和统一管理：一个界面管理多台设备，大幅度提升管理和工作效率
>18. WEB管理通信使用SSL证书加密，保证会话数据的安全性

**WEB SSH 客户端支持，使用独立的 webshell(ShellinaBox)套件，提供独立的 web ssh 登录支持。**

### 2.2 QEMU-KVM 虚拟化支持
这是原生Aarch64架构的QEMU虚拟机，支持KVM硬件加速。  

**什么是KSM ？**
KSM的原理，是多个进程中，Linux将内核相似的内存页合并成一个内存页。  
这个特性，被KVM用来减少多个相似的虚拟机的内存占用，提高内存的使用效率由于内存是共享的，所以多个虚拟机使用的内存减少了，这个特性，对于虚拟机使用相同镜像和操作系统时，效果更加明显。  
为了更好的优化虚拟机的内存使用效率，我们所有系统的内核默认都支持KSM。  
目前2.0系统正式版已全部默认开启虚拟化支持，图形桌面提供可视化的“Virt-Manager”虚拟机管理程序。  
### 2.3 Docker 容器支持
Docker这里就不做过多介绍了，本次我们重新编译内核，加入了对Dcoker全特性的各项支持，这可能是目前在 **树莓派Aarch64位系统架构** 下对Docker特性支持最完善的版本 ，其他的绝大多数版本都还是32位系统配上32位docker，原生的64位系统内核缺少了很多对Docker特性的内核支持。  

就连大名鼎鼎的32位树莓派Docker系统 **hypriot** 最新版也不能完整支持 **Dcoker Swarm** 。  

由于 **Hypriot** 不支持 **bridge vlan/vxlan netfiler** , 你将得到以下错误信息:
```
reexec to set bridge default vlan fialed exit status 1
```
这将导致不能完全正常使用Dcoker Swarm集群，网络缺少相关特性支持，会存在一些功能缺失的问题。  

你可以通过 **systemctl status containerd** 和 **systemctl status docker** 以及查看日志的方式在原生的64位ARM系统上发现不少错误和警告信息，拒不完全统计，原生的系统内核至少包括以下特性的缺失：
```
 1. cgroup memory limit
 2. cgroup swap limit
 3. cgroup rt period
 4. cgroup rt runtime
 5. cgroup pid support
 6. cgroup memory sysfs
 7. cgroup rdma
 8. cgroup perf
 9. cgroup bridge vlan/vxlan
10. cgroup netfiler
11. cgroup net prio
12. cgroup cfs bandwidth limit
13. bridge vlan ilter
14. ipvs
15. ipvs ipv6
16. memory sysfs
17. kernel KSM
...
```
**Docker Compose**
Docker官方没有提供基于arm的docker-compose可运行二进制程序，因此我们重新编译并提供了可运行的aarch64位二进制程序，现在默认已加入到系统镜像中，你可以直接使用。  

### 2.4 MacOS_Mojave主题桌面
默认桌面主题使用仿 **MacOS Mojave** 主题的桌面。

### 2.5 CecOS_CaaS容器云
我们在2.0正式版的系统中移除了原WebUI管理界面的容器管理支持，而是用了OPENFANS基于开源项目"Portainer"并专门针对国人进行了再次深度定制的二次开发、提供的 **CecOS CaaS 容器云** ，这是 **完整的容器云平台** 的支持，完整具备了管理整个 **Docker Swarm** 集群环境的所有功能！

包括但不限于对 **容器节点、集群、存储、网络、镜像仓库、模板、堆栈、任务计划、用户组、权限控制** ... 等太多太多的功能支持！！


## 3. 使用说明
### 3.1 账户密码
系统默认账户：pi ，默认密码：raspberry  

默认账户 `pi` 账户支持ssh登录，`root` 账户密码请登陆后使用命令 `sudo passwd root` 执行设置，  

或使用命令 `sudo -i` 来切换到root用户。

### 3.2 Web登录接口说明
```
1.Web可视化管理界面
登录地址 https://树莓派IP地址:9090
说明：请使用系统默认账户pi登录

2.WEB SSH 客户端 入口界面
登录地址 https://树莓派IP地址:4200
说明：使用具有控制台登录权限的帐户登录，例如：pi

3.CecOS CaaS 容器云管理平台 登录界面
登录地址 https://树莓派IP地址:8443
说明：默认管理账户 admin , 默认密码：password 。请登录后立即修改默认密码！！
```

### 3.3 预配置项
系统提供网络和自动开机任务的预配置，相关配置文件的路径和对应关系如下：  
| 预配置项 | 预配置文件路径 | 对应链接到的系统文件路径 |
| --- | --- | --- |
| 无线网络 | /boot/wpa_supplicant.conf | /etc/wpa_supplicant/wpa_supplicant.conf |
| 有线网络 | /boot/interfaces | /etc/network/interfaces |
| DHCP客户端 | /boot/dhclient.conf | /etc/dhcp/dhclient.conf |
| 自定义启动脚本 | /boot/rc-local | /etc/rc.local |

### 3.4 无线配置说明
桌面化环境可以登录到桌面环境后通过图形化界面设置，这里提供配置文件的修改方式。  
修改 **`/boot/wpa_supplicant.conf`** 文件
```
## To use this file, you should run command "systemctl disable network-manager" and reboot system. 
## (Do not uncomment this line and above!) ##
## 除第一行外，第一行可以删除，去掉以下每行只有单个“#”的注释符号，两个“#”注释符号的行位说明内容，请不要修改
## 中文内容是注释，删除或不要取消前面的“#”符号

## country是设置无线的国家地区，CN是中国
#country=CN
#ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
#update_config=1

## 下面的 "WIFI 1" 、"WIFI 2" 代表多个无线网络的设置
## 除非你要设置多个无线网络，否则只需要设置 "WIFI 1" 这部分的设置即可
## WIFI 1 (Do not uncomment this line!)

## 除了取消需要生效的内容注释以外，以下仅需要修改 "ssid" 和 "psk" 后面引号内的内容即可
## ssid是你的无线Wifi名称，psk是你无线Wifi的密码
#network={
#    ssid="your-wifi1-ssid"
#    psk="wifi1-password"
#    priority=1
#    id_str="wifi-1"
#}


## WIFI 2 (Do not uncomment this line!)

#network={
#    ssid="your-wifi2-ssid"
#    psk="wifi2-password"
#    priority=2
#    id_str="wifi-2"
#}
```

**无线地区码设置：**
编辑 **`/etc/default/crda`** 文件，编辑 **`REGDOMAIN=`** 后面的内容，默认已设置为 **“CN”中国** ，一般情况下无需设置。

**附无线常用地区码：**
```
AU 澳大利亚
CA 加拿大
CN 中国
GB 英国
HK 香港
JP 日本
KR 韩国
DE 德国
US 美国
TW 台湾
```

### 3.5 有线网络配置
修改 **`/boot/interfaces`** 文件
```
# interfaces(5) file used by ifup(8) and ifdown(8)
# Include files from /etc/network/interfaces.d:
source-directory /etc/network/interfaces.d
## Used dhcp ip address set eth0 inet to dhcp,
## or used static ip address set eth0 to static
## and change other ip settings.
## If you wanna let settings to take effect,
## uncomment symbol in front.

#auto eth0
#allow-hotplug eth0

#iface eth0 inet dhcp
#iface eth0 inet static
#address 172.16.192.168
#netmask 255.255.255.0
#gateway 172.16.192.1
#dns-nameservers 8.8.8.8
```
### 3.6 开机自定义启动脚本
系统支持自定义任务自启动脚本，可以在系统启动前预先配置。  
编辑脚本文件 **`/boot/rc-local`** ，在 **`exit 0`** 前加入自定义的脚本内容。  

### 3.7 深度桌面禁止自动升级的说明
**在版本v2019-11-10之后(也包括版本2019-11-10在内)，深度系统已经支持升级。**
由于 Deepin系统和上游仓库存在一定的兼容性问题(deepin本身的问题)，除非你清楚自己需要做什么，否则强烈建议不要使用以下的任何一条命令或者其他任何会使得系统进行升级的操作！！！所有的Deepin版本系统都需要注意，包括1.0和2.0的所有Deepin版本!
```
apt upgrade
apt-get upgrade
apt dist-upgrade
apt-get dist-upgrade
```

### 3.8 中文环境下TTY显示中文字体(非远程方式)
**注意：**远程登录的方式无视这个问题，不会存在乱码的问题，仅在通过本地显示器或串口连接使用本地终端时由于Linux内核本地的标准TTY不支持显示中文字体，会显示乱码时才需要执行相关操作。  
我们需要安装fbterm扩展支持，在连网环境下执行如下操作：  
```
## 安装fbterm
sudo apt update; sudo apt install fbterm -y
## 添加登录用户到video组
sudo adduser root video ; sudo adduser pi video 
sudo adduser 你自己创建的其他用户名(若果有) video
## 然后每次需要显示时执行以下命令即可（第一次需要等待一些时间）：
fbterm
```

### 3.9 macOS Mojave主题桌面支持Web界面VNC远程桌面访问
macOS Mojave主题桌面环境(全功能版) 在 *2019-11-17*(包括) 之后的版本默认情况下已支持Web界面的VNC远程桌面访问。
```
默认的VNC访问密码为: raspberry
默认的WEB VNC访问地址为: http://你树莓派的IP地址:5901
默认的客户端访问地址为: 你树莓派的IP地址:5900
```
您不能使用Web VNC界面和客户端在同一时间连接到同一个vnc服务器。  
如果要使用客户端连接vnc服务器，建议您使用RealVNC客户端，您可以单击 [此处](https://www.realvnc.com/en/connect/download/viewer/) 下载RealVNC客户端。

#### Web VNC远程桌面使用说明
访问系统默认的VNC有两种方法：  
● 连接了真实的显示器
```
VNC已默认启用，您无需执行任何操作。
```
● 未连接任何显示器
```
默认情况下已启用VNC服务，但如果未连接到任何真实的显示器，则应使用虚拟显示的支持，运行命令：  
`virtual-monitor-enable`  
以启用"虚拟显示器模式"，此后系统将自动重启并完成设置。
```

#### 重要
```
如果启用了"虚拟显示器模式"，则不能同时连接到真实的显示器(否则真实显示器将没有显示)，  
如果启用了"虚拟显示器模式"，请运行命令："virtual-monitor-disable"
以禁用"虚拟显示器模式"来恢复正常。
```
**注意：系统默认未开启 "虚拟显示器模式"**

#### Commands for default VNC
**virtual-monitor-enable**
```
启用"虚拟显示器模式"，在没有外接真实显示器的时候使用。
此后系统将自动重启并完成设置。
```
**virtual-monitor-disable**
```
启用"虚拟显示器模式"，以连接到真实显示器的时候使用(系统默认模式)。
此后系统将自动重启并完成设置。
```
**enable-vnc**
```
启用VNC服务(系统默认已开启)。
此后系统将自动重启并完成设置。
```
**disable-vnc**
```
禁用VNC服务。
此后系统将自动重启并完成设置。
```
**vnc-passwd**
```
修改默认的VNC访问密码。
```
----

### 3.10切换声音输出通道
2.0系统默认声音使用 **HDMI** 输出
切换声音输出的命令：
```
amixer cset numid=3 2
这里将输出设置为2，也就是HDMI。
将输出设置为1将切换到模拟信号（也就是耳机接口）。
默认的设置为0，代表自动选择
```
修改完音频设置后，需要重新启动Raspberry Pi，以使更改生效。  
**如果仍然无法通过HDMI接收声音:**  
在极少数情况下，有必要进行编辑 `config.txt` 以强制使用HDMI模式(与不发送声音的DVI模式相对)。  
您可以通过编辑 **`/boot/config.txt`** 文件并设置 **`hdmi_drive=2`** ，然后重新启动以使更改生效。

### 3.11 32位软件armhf支持
```
dpkg --add-architecture armhf
apt update
## 需要先安装32位的"libc6:armhf"的基础库
apt install libc6:armhf
apt install 其他软件包名:armhf
## 安装32位软件请在包的名称后加入后缀 ":armhf"
```

### 3.12 启用和运行Docker服务
无桌面基础版和桌面全功能版默认没有启用 **Docker服务**，需要手动启动。
```
开机自动启动Docker服务
systemctl enable docker.service

启动Docker服务
systemctl start docker.service

######

停止Docker服务
systemctl stop docker.service

禁止Docker服务开机启动
systemctl disable docker.service
```

### 3.13 启用CecOS-CaaS容器云
无桌面基础版和桌面全功能版默认没有启用 **CecOS CaaS容器云** 服务，需要手动启动。  
**注意：要启用CecOS CaaS容器云服务，必须要先启用和启动docker服务！！**
```
开机自动启动 CecOS CaaS容器云 服务
systemctl enable cecos-caas.service

启动 CecOS CaaS容器云 服务
systemctl start cecos-caas.service

######

停止 CecOS CaaS容器云 服务
systemctl stop cecos-caas.service

禁止 CecOS CaaS容器云 服务开机启动
systemctl disable cecos-caas.service
```

### 3.14 启用和退出Docker集群
```
#初始化并加入一个 Docker Swarm集群
docker swarm init

#查看集群节点状态
docker node ls

#退出Docker Swarm集群
docker swarm leave --force
```

### 3.15 FAQ常见问题说明
#### 3-16.1图形化桌面环境使用配置文件连接无线网络
图形化桌面环境使用配置文件连接无线网络，在修改完 **`/boot/wpa_supplicant.conf`** 文件后，为了保证良好的网络兼容性，请执行以下操作：  
使用root用户身份执行：
```shell
systemctl disable NetworkManager
```
然后执行：
```shell
sed -i  \
's/sudo systemctl restart NetworkManager/## sudo systemctl restart NetworkManager/g' \
/home/pi/.xsessionrc
```
最后重启即可。  


