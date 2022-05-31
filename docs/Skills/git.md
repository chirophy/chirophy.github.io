---
sidebar_position: 1
---

# Git相关  

---

## 查看git版本
在用vscode远程编写这个wiki的时候，一直提示git的版本过低，才 `1.8.3.1`  
我看了看自己电脑的git版本，没错啊，是最新的 `2.36.1`   
然后才想起来这提示的是服务器的版本  
```bash
git --version
```

## 安装git
这就直接导致了需要更新一下git的版本  
1. 先卸载之前的版本  
```bash
yum remove git
```
2. 安装
安装又有两种办法：  
 - 2.1 yum安装
```bash
yum install -y git
``` 
此方法在腾讯云CentOs7._中无法顺利安装最新版本，估计是源不对  
 - 2.2 编译安装
```bash
# 进我想的安装目录
cd /usr/local/src

# 下载
wget https://mirrors.edge.kernel.org/pub/software/scm/git/git-2.36.1.tar.gz

# 解压
tar -zxf v2.36.1.tar.gz && cd git-2.36.1

# 编译安装
make prefix=/usr/local/git all
make prefix=/usr/local/git install
```

3. 配置环境变量
```bash
# 编辑配置文件
vim /etc/profile

# 在 /etc/profile 文件中末尾追加以下内容
export PATH=$PATH:/usr/local/git/bin

# 回到终端, 刷新配置
source /etc/profile

# 查看版本
git --version 
# 输出 git version 2.36.1
```


## 查看远程分支
```bash
 git branch -r  
```

## 清理删除的分支
在git中查看远程分支的时候总会显示出之前删除掉的远程分支  
后来才想起来需要清理一下  
```bash
 git fetch --prune
```

## Continue
:::tip 

🍹当前文档正在制作中...

:::