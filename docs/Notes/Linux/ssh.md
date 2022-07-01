---
sidebar_position: 1
keywords: [SSH]
---

# SSH

## 查看ssh登陆记录
- 在`/var/log/secure`可以看到登陆的情况
- 在`/var/log/btmp`中可以查看到登陆失败的记录
```bash
# 可通过lastb命令进行检查
lastb
```
- 在`/var/log/lastlog`中可以查看最近登陆的记录
```bash
# 可通过last命令进行检查
last
```
- 通过`who`检查当前在线用户

## rsa密钥
通常我们使用 `rsa` 加密算法来进行 `ssh` 的登录。  
这样不仅方便，而且更加 **安全**。  

>SSH密钥默认保留在 `~/.ssh` 目录中。如果没有 `~/.ssh` 目录，`ssh-keygen` 命令会自动创建一个。

### 常用参数
- -t 指定创建密钥类型
- -b 指定密钥长度,rsa默认秘钥长度的为 `2048`
- -C 添加注释，一般是填写用户名
- -f 指定生成的密钥文件名，如果不提供此参数则使用默认文件名，如 `rsa私钥` 默认文件名 `~/.ssh/id_rsa` ，`公钥` 默认文件名 `~/.ssh/id_rsa.pub` .

### 示例
```sh
ssh-keygen -t rsa -b 4096
#生成一个长度为4096的rsa密钥
```

### 说明
`id_rsa` 为私钥文件，通常放在本地
`id_rsa.pub` 为公钥文件，通常放在服务器端

### 密钥使用
通常需要在 `服务器端` 将公钥 `id_rsa.pub` 的内容添加到默认路径 `~/.ssh` 的 `authorized_keys`中。  
同时，将私钥 `id_rsa` 的存放路径填写到 `~/.ssh` 目录的 `config` 中  
具体命令行为：
```sh
IdentityFile "~\.ssh\id_rsa"
# Windows系统下路径为反斜杠"\"
```


## Continue
:::tip 

🍹当前文档正在制作中...

:::

