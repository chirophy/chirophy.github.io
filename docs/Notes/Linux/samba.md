# Samba配置

## 前言
近期又把树莓派接上网络了，打算让它继续担任下载器的用途，首先要处理的就是网络共享。  

## Samba简介
`Samba` 是在 `Linux` 和 `UNIX` 系统上实现 `SMB` 协议的一个免费软件，主要用于 `Linux端` 与 `Windows端` 网络共享。

## 安装
1. 更新软件包
```bash
sudo apt update
sudo apt full-upgrade
```

2. 安装软件
```bash
apt install samba
```

3. 备份smb.conf配置文件
```bash
cp /etc/samba/smb.conf /etc/samba/smb.conf.backup
```

4. 修改配置文件
在配置文件的 *末尾* 添加下列代码即可：
```bash
[global]
comment = samba
path = /[共享文件夹路径]
browsable = yes
writable = yes
guest ok = yes
read only = no
force user = nobody
```

5. 设置共享文件夹权限
```bash
chmod -R 0775 /[共享文件夹路径]
```

6. 测试配置文件
```bash
testparm
```

## 设置账户密码
```bash
smbpasswd -a [用户名]
输入密码：
确认密码：
```
**注意：** 该用户名需为 `Linux` 自有账户。  

## Windows映射
![](https://img-1255648810.cos.ap-guangzhou.myqcloud.com/wiki/1680006600604.jpg)

## 完成

### 参考
[CSDN](https://blog.csdn.net/qq_18484091/article/details/101454455)