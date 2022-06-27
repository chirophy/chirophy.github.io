---
sidebar_position: 3
keywords: [Transmission,群晖Nas,nas,transmission,transmission美化]
---
# Transmission相关
2021-07-04  
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
```sh showLineNumbers
mkdir -p /volume1/tools

cd /volume1/tools

wget https://github.com/ronggang/transmission-web-control/raw/master/release/install-tr-control-cn.sh

chmod +x install-tr-control-cn.sh

bash install-tr-control-cn.sh
```
成功之后就这样啦：

之后新的界面就舒服多了，上传下载一目了然，分享率也直观体现！