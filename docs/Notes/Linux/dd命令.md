---
sidebar_position: 4
keywords: [dd,Linux]
---
# Linux下dd命令详解
🗓2020-10-12  
dd命令的作用：拷贝文件/进行指定转换。  
通常用作硬盘克隆

## 参数注释：
1. if=文件名：输入文件名，缺省为标准输入。即指定源文件。< if=input file >
2. of=文件名：输出文件名，缺省为标准输出。即指定目的文件。< of=output file >
3. ibs=bytes：一次读入bytes个字节，即指定一个块大小为bytes个字节。
obs=bytes：一次输出bytes个字节，即指定一个块大小为bytes个字节。
bs=bytes：同时设置读入/输出的块大小为bytes个字节。
4. cbs=bytes：一次转换bytes个字节，即指定转换缓冲区大小。
5. skip=blocks：从输入文件开头跳过blocks个块后再开始复制。
6. seek=blocks：从输出文件开头跳过blocks个块后再开始复制。
注意：通常只用当输出文件是磁盘或磁带时才有效，即备份到磁盘或磁带时才有效。
7. count=blocks：仅拷贝blocks个块，块大小等于ibs指定的字节数。
8. conv=conversion：用指定的参数转换文件。  
ascii：转换ebcdic为ascii  
ebcdic：转换ascii为ebcdic  
ibm：转换ascii为alternate ebcdic  
block：把每一行转换为长度为cbs，不足部分用空格填充  
unblock：使每一行的长度都为cbs，不足部分用空格填充  
lcase：把大写字符转换为小写字符  
ucase：把小写字符转换为大写字符  
swab：交换输入的每对字节  
noerror：出错时不停止  
notrunc：不截短输出文件  
sync：将每个输入块填充到ibs个字节，不足部分用空（NUL）字符补齐。  

## 实操：
1. 克隆硬盘并创建镜像：  
```sh
dd status=progress bs=512 count=488396800 if=/dev/sda | gzip -6 > /mnt/linux.img
```

- 其中count后面的参数是硬盘的最大扇区数，可以通过指令查询：
```sh
fdisk -l -u /dev/sda
```

end这一列的最大数值+1即为最大扇区数。  

if=/dev/sda中的sda是要克隆的源盘，/mnt/linux.img中的/mnt是目的盘的挂载目录，linux.img是自己命名的文件名。  

2. 恢复镜像到目的盘中：  
```sh
gzip -dc /mnt/linux.img | dd of=/dev/sda
```
`/dev/sda`是要恢复的硬盘。  
3. 完成。

**PS：以上操作需在root权限下进行操作**