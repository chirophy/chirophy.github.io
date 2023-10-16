---
sidebar_position: 2
keywords: [Homebrew,homebrew,MAC,M1]
---

# Homebrew 相关  

## 快速安装
```bash
/bin/bash -c "$(curl -fsSL https://gitee.com/ineo6/homebrew-install/raw/master/install.sh)"
```
将以上命令粘贴至终端。脚本内置 **[中科大镜像](https://mirrors.ustc.edu.cn/help/brew.git.html)**，所以能让Homebrew安装的更快  
**感谢大佬的脚本**

## M1版Homebrew
:::note
`ARM版`Homebrew最终被安装在`/opt/homebrew`路径下  
:::
在执行完上述的脚本文件后，还需设置环境变量  
默认终端类型为 `/bin/zsh`
```bash showLineNumbers
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```
> 从 `macOS Catalina(10.15.x)` 版开始，Mac使用 `zsh` 作为默认Shell  

## 设置镜像
### 中科大源
```bash showLineNumbers
git -C "$(brew --repo)" remote set-url origin https://mirrors.ustc.edu.cn/brew.git

git -C "$(brew --repo homebrew/core)" remote set-url origin https://mirrors.ustc.edu.cn/homebrew-core.git

git -C "$(brew --repo homebrew/cask)" remote set-url origin https://mirrors.ustc.edu.cn/homebrew-cask.git

brew update
```

### 清华源
```bash showLineNumbers
git -C "$(brew --repo)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git

git -C "$(brew --repo homebrew/core)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git

git -C "$(brew --repo homebrew/cask)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-cask.git

brew update
```

### 设置bottles镜像
```bash showLineNumbers
echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles/bottles' >> ~/.zprofile
source ~/.zprofile
```

### 恢复默认源
```bash showLineNumbers
git -C "$(brew --repo)" remote set-url origin https://github.com/Homebrew/brew.git

git -C "$(brew --repo homebrew/core)" remote set-url origin https://github.com/Homebrew/homebrew-core.git

git -C "$(brew --repo homebrew/cask)" remote set-url origin https://github.com/Homebrew/homebrew-cask.git

brew update
```
`homebrew-bottles`配置只能手动删除，将 `~/.zprofile` 文件中的 `HOMEBREW_BOTTLE_DOMAIN=https://mirrors.xxx.com` 内容删除，并执行 `source ~/.zprofile`


## 卸载
因为使用别人的脚本，卸载还是通过对应的脚本来执行吧
```bash
/bin/bash -c "$(curl -fsSL https://gitee.com/ineo6/homebrew-install/raw/master/uninstall.sh)"
```