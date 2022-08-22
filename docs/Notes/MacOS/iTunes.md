# iTunes修改备份文件路径
在苹果将 `windows` 版本 `iTunes` 下载方式更改到 `windows` 商店后修改路径变得麻烦了  

所以记录一下修改备份文件路径的办法：
1. 打开 `iTunes` 备份路径  
2. 将目录 `MobileSync` 剪切到其它你想备份的盘
比如 `"F:itunes\Backup"`    
注意这里是**剪切**  
（复制，再将原文件夹删除也可以，因为若不删除的话，在创建文件夹连接时会提示文件夹已存在）  
3. 以管理员身份运行cmd  
4. 输入以下指令：
```sh
mklink /d “C:\Users\用户\Apple\MobileSync”;"F:itunes\Backup"
```

需要注意的是用户名要改为你的主机名！  
回车即可通过 `mklink` 指令将默认备份文件夹 `MobileSync` 与新建立的文件夹连接到一起  
5. 此时再打开 `iTunes` 默认备份路径：`"C:\Users\用户\Apple` 即可发现新建立的文件夹`MobileSync`且文件夹图标上有快捷方式标志，证明文件夹连接成功  
6. 成功！  