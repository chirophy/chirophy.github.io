---
sidebar_position: 3
keywords: [Transmission,群晖Nas,nas,transmission,transmission美化]
---
# Transmission相关
🗓2021-07-04  
继续折腾NAS

---
之前在亚马逊上买了`WD`的氦盘，12T算上税费1767，对比上酷狼8T1999的价格，这一波还是赚的吧
然后把12T的硬盘挂载到`nas`上了，就需要改一下`transmission`的下载路径，直接修改为挂载的目录就可以了。
后来找到了**美化**相关内容。

就顺带着记录一下：

## 群晖NAS的第三方软件库
>https://packages.synocommunity.com (建议选择这个，支持HTTPS)  
http://packages.pcloadletter.co.uk  
http://www.cphub.net  
http://synology.sysco.ch  
http://packages.quadrat4.de  
http://synology.acmenet.ru  
http://cytec.us/spk  
http://spk.naefmarco.ch/spkrepo/packages/  
http://spk.nas-mirror.de/spkrepo/packages  
http://spk.unzureichende.info/  
http://packages.synocommunity.com/?beta=1  


可以下载`transmission`等相关软件。

## 美化`transmission`的界面
### 安装
```sh showLineNumbers
mkdir -p /volume1/tools

cd /volume1/tools

wget https://github.com/ronggang/transmission-web-control/raw/master/release/install-tr-control-cn.sh  
or国内：
wget https://gitee.com/culturist/transmission-web-control/raw/master/release/install-tr-control-gitee.sh

chmod +x install-tr-control-cn.sh

bash install-tr-control-cn.sh
```

### 展示
成功之后就这样啦：  
![](https://img-1255648810.cos.ap-guangzhou.myqcloud.com/wiki/1443687646.png)  

最后`transmission`的界面为：  
![](https://img-1255648810.cos.ap-guangzhou.myqcloud.com/wiki%2F1851480362.png)

之后新的界面就舒服多了，上传下载一目了然，分享率也直观体现！  

### 更新
保持更新是很重要的一件事！  
通过群晖的 `任务计划` 自动安装及定期自动更新  
#### 创建任务计划
- 依次打开 `DSM` 的 `“控制面板”` -> `“任务计划”`
- 选择 `“新增”` -> `“计划的任务”` -> `“用户定义的脚本”`
- 任务名称用英文，如：`AutoUpdateTrWebControl`，用户帐号选择 `root` 并选中 `已启动`
- 计划时间可根据自己需要来设置，如想保持最新的版本，可以设置定期执行
- 在 `“任务设置”` 的 `“运行命令”` -> `“用户定义的脚本”` 中输入：
```sh
curl -s https://raw.githubusercontent.com/ronggang/transmission-web-control/master/release/install-tr-control-cn.sh | bash -s auto
```
国内用户可使用 `gitee` 镜像地址：
```sh
curl -s https://gitee.com/culturist/transmission-web-control/raw/master/release/install-tr-control-gitee.sh | bash -s auto
```
- 脚本最后一定要加入 `auto` ，要不然脚本不会自动下载
- **注：**`auto` 前有一个空格


## DSM7.0
在这个版本中，需要额外修改权限以实现自动更新的功能
在 `root` 权限下执行以下命令，其中：
 - `YOUR_USERNAME` 替换为你登录和更新脚本时候选择的用户
 - `/var/packages/transmission/target/share/transmission/web/` 这串路径为 transmission 的安装路径（默认应该是这个）
```shell
sed -i '/sc-transmission/s/$/YOUR_USERNAME/' /etc/group
chown sc-transmission:sc-transmission /var/packages/transmission/target/share/transmission/web/* -R
chmod 774 /var/packages/transmission/target/share/transmission/web/* -R
```

## 参考
参考：[官方文档](https://github.com/ronggang/transmission-web-control/wiki/Home-CN)