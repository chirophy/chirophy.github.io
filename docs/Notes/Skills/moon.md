# 建立 MOON 通道
## `moon` 的作用
`moon` 为中转服务器  
![](https://img-1255648810.cos.ap-guangzhou.myqcloud.com/wiki/moon前.png)  
👆上图为建立 `moon` 之前的服务器延迟  

`Zerotier` 的官方服务器在国外，国内客户端使用时延迟较大，网络高峰期时甚至各个客户端节点之间访问不了  
此时 `moon` 中转服务器就显得非常重要，它的主要功能是通过自定义的服务器作为跳板加速内网机器之间的互相访问  

## 前置操作  
建立 `moon` 的前置操作请参考：**[zerotier相关](../Nas/zerotier.md)**

## 在云服务器安装 `zt`  
```sh
Installed:
  zerotier-one.x86_64 0:1.10.1-1.el7                                                                                                                                            

Complete!

*** Enabling and starting ZeroTier service...
Created symlink from /etc/systemd/system/multi-user.target.wants/zerotier-one.service to /usr/lib/systemd/system/zerotier-one.service.

*** Waiting for identity generation...

*** Success! You are ZeroTier address [ addressID ].
```

安装完毕后就需要我们建立 `moon` 了  

## 建立 `moon`  
### 1. 前往安装路径  
```sh
cd /var/lib/zerotier-one
```

### 2. 生成及修改 `moon.json`  
```sh
zerotier-idtool initmoon identity.public >>moon.json
```

### 3. `moon.json`文件  
```sh
{
 "id": "addressID",
 "objtype": "world",
 "roots": [
  {
   "identity":"89122e085c:0:d9470e28b82a07dd0aef******************************4024cf6970f345c2588f73387319b2",
   "stableEndpoints": []
  }
 ],
 "signingKey":"eda59632b50c178aee6********************984ce704ca1da5874875c746f2ff",
 "signingKey_SECRET":"77efcc9bc6bddc500*********************b2b1d5cb8a027f71a05cb66a16299ee8b2b111a11564fd6",
 "updatesMustBeSignedBy":"eda59632b50c178aee6b9d985a*******************************984ce704ca1da5874875c746f2ff",
 "worldType": "moon"
}
```
其中 `id` 为**云服务器**在 `ZeroTier` 中的 `id`  
修改 `stableEndpoints` 为**云服务器**的公网的 `ip`  

### 4. 修改 `stableEndpoints`  
```sh
"stableEndpoints": ["IP/9993"]
```
:::caution

[ ] 内一定需要添加**双引号**！  
构成 [""]

:::

### 5. 生成签名文件  
修改完 `moon.json` 后执行  
```sh
zerotier-idtool genmoon moon.json
```
此命令会生成一个签名文件在当前目录下   
文件名为： 000000[addressID].moon  

## 将 `moon` 节点加入网络
### 1. 方法一  
在**云服务器**的 `ZeroTier` 目录中建立子文件夹 `moons.d`  
将生成的 `000000[addressID].moon` 拷贝进 `moons.d` 文件夹中  
重启 `ZeroTier` 服务 or 重启设备  

附不同系统下 `ZeroTier` 目录  
```sh
Windows: C:\ProgramData\ZeroTier\One
Macintosh: /Library/Application Support/ZeroTier/One (在 Terminal 中应为 /Library/Application\ Support/ZeroTier/One)
Linux: /var/lib/zerotier-one
FreeBSD/OpenBSD: /var/db/zerotier-one
```

### 2. 方法二  
在其他机器上执行  
```sh
zerotier-cli orbit [addressID] [addressID]
```
**注：**此处的 `[addressID]` 为**云服务器**上的 `ID`  

:::tip

个人比较推荐**方法二**

:::

## 查看是否连接
执行
```sh
zerotier-cli listpeers
```

如出现下列情况啧表示成功连接上 `moon`  
![](https://img-1255648810.cos.ap-guangzhou.myqcloud.com/wiki/ztmoon.png)  


👇下图为连接 `moon` 后的延迟：  
![](https://img-1255648810.cos.ap-guangzhou.myqcloud.com/wiki/moon后.png)

观感不是很强  
估计是因为都在广东范围内...  

**大功告成！**

## 专有名词
>PLANET 行星服务器，Zerotier 根服务器  
MOON 卫星服务器，用户自建的私有根服务器，起到代理加速的作用  
LEAF 网络客户端，就是每台连接到网络节点  