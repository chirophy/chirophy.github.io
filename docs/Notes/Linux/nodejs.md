# 树莓派nodejs安装
在自己的树莓派上用上了 `Debian` 系统  

## 使用 `apt` 安装
`apt` 存储库包含一个预构建的 `NodeJS` 包  
这是让 NodeJS 启动和运行的简单方法  
**但是**，提供的 `NodeJS` 版本不是最新版本，不保证会持续更新  

安装 `NodeJS` 和 `NPM`  
```sh
apt install nodejs npm -y
```
运行以下命令以验证 `NodeJS` 和 `NPM` 是否已正确安装  
```sh
node -v
v10.12.5
$ npm -v
7.5.2
```
此时会发现安装的 `NodeJS` 和 `NPM` 均不是最新版  

## 使用 `PPA` 安装
使用 `NodeSource` 维护的 `PPA` 安装最新版本的 `NodeJS`  
该公司为不同的 `Linux` 发行版构建和维护各种包  
`PPA` 是软件包的替代存储库。它提供了官方 `Debian` 存储库中没有的软件  
**[详细介绍](https://github.com/nodesource/distributions)**  
1. 使用以下命令将 PPA 存储库添加到您的系统  
`NodeJS 16.15.1` 是最新的**长期维护版本(LTS)** 包含 `npm 8.11.0`
```sh
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
```
2. 更新源列表  
```sh
apt update -y
```
3. 安装 `NodeJS` 和 `NPM`  
```sh
apt install nodejs -y
```
4. 验证  
```sh
node -v
v16.15.1
$ npm -v
8.11.0
```

## 使用 `NVM` 安装
`Node Version Manager` (NVM) 是一个 `bash` 脚本  
用于在同一台机器上管理多个活动的 `NodeJS` 版本  
可以轻松地在不同的 `NodeJS` 版本之间切换  
使用这种方法，将能够使用多个版本的 `NodeJS`，而不必担心兼容性问题  
1. 安装脚本
```sh
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
=> Downloading nvm as script to '/root/.nvm'
=> Appending nvm source string to /root/.bashrc
=> Appending bash_completion source string to /root/.bashrc
```

2. 运行 `source ~/.profile` 命令将环境变量重新加载到当前会话中
```sh
source ~/.profile
```

3. 列出 `NodeJS` 可用版本
```sh
nvm ls-remote
```

4. 确定版本后，运行 `nvm install <version>` 命令下载并安装它  
例如，要安装 `NodeJS 11.6`，运行：  
```sh
nvm install 11.6
Downloading and installing node v11.6.0...
Downloading https://nodejs.org/dist/v11.6.0/node-v11.6.0-linux-x64.tar.xz...
Computing checksum with sha256sum
Checksums matched!
Now using node v11.6.0 (npm v6.5.0-next.0)
```
5. 运行 `nvm ls` 命令列出已安装的 `NodeJS` 版本  
NNM 还将指示哪个版本是默认版本
```sh
nvm ls
v11.6.0
v11.7.0
default -> 11.6 (-> v11.6.0)
```

6. 使用不同版本的 `NodeJS`  
```sh
nvm use 11.6
Now using node v11.6.0 (npm v6.5.0-next.0)
```
7. 将特定版本设置为默认 `NodeJS` 版本  
```sh
nvm alias default 11.7
default -> 11.7 (-> v11.7.0)
```