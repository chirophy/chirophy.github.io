---
sidebar_position: 3
keywords: [Substring,Split]
---
# 记录编写测试软件时遇到的问题  
2020-08-12  
写了一个环形灯测试软件，其中需要调节亮度，然而对环形灯进行控制还要经过异或校验，而异或校验又是按字符来读取的，这就造成了一个问题：在输入亮度的时候多半一次输入两个数字，导致最后异或不正确。所以最后的解决办法就是截取字符串来读取字符。  

截取字符的操作通常有常用的方法有`Split`、`Substring`、`Replace`、`Remove`四种。  

实际操作之后发现只有 `Substring` 好用点。  

## Substring的使用：  
1. Substring(Int32, Int32)  
检索子字符串。子字符串从指定的字符位置开始且具有指定的长度。
提取字符串中的第i个字符开始的长度为j的字符串
例如:
```sh
   string str = "GTAZB_JiangjBen_123"; 
   int start=3,length=8; 
   Console.WriteLine(str.Substring(start-1, length)); 
```
输出得到`AZB_Jian`。

2. Substring(Int32)  
检索子字符串。子字符串从指定的字符位置开始。
提取字符串中右数长度为i的字符串
例如:
```sh
   string str = "GTAZB_JiangjBen_123"; 
   string tSt; int i=5; 
   tSt = str.Substring(str.Length - i); 
   Console.WriteLine(tSt); 
```
输出`n_123`。

最后的异或表达式出来为：
```sh
'$' ^ '3' ^ '0' ^ (Convert.ToInt16(channl)) ^ (Convert.ToInt16(txt1.Substring(start0 - 1, length0))) ^ (Convert.ToInt16(txt1.Substring(start1 - 1, length1))
```