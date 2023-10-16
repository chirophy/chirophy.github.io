# 硬件部分
## 硬件构成
| 类型 | 型号 | 价格 | 备注 |
| --- | --- | --- | --- |
| CPU： | D1581 | 110+549 | 板U一体 |
| 内存： | SK DDR4 REG ECC 16G 2400 2Rx4 | 98*4 | 原使用的三星DDR4 REG ECC 32G 2400 4DRx4不能兼容 |
| 主板： | TANK定制D1581主板 | 110+549 | 板U一体 |
| 机箱： | TANK定制NAS机箱 | 779 | 机箱散热一体 |
| 散热： | TANK定制风道式L型散热器 | 未知 | 机箱散热一体 |
| 电源： | 益衡250W电影 | 300 |  |
| 显卡： | GTX 710 | 93 | 咸鱼捡垃圾 |
| 硅脂： | 信越7921 | 5.8 |  |


## 安装记录

1. 机箱安装可参考 `tank陈`的视频：[B站视频](https://www.bilibili.com/video/BV17L411C7Sk/) 或者 [机箱装机参考视频](https://www.mi-d.cn/1223)
2. [L型风道式散热器安装说明](https://www.mi-d.cn/1390)
## 主板相关
[TAD1581M 说明书](https://www.kdocs.cn/l/ce7ELVW6Jkcr)  
[BIOS固件及刷写](https://www.mi-d.cn/8957)  
[D-1581自检代码](https://mi-d.cn/6/D-1581%E8%87%AA%E6%A3%80%E4%BB%A3%E7%A0%81%E5%90%AB%E4%B9%89-%E7%B2%BE%E5%87%8F.pdf)  
:::info
使用TANK定制D1581主板运行`unraid`启动完成显示`FF`是正常现象！
:::
[D1581兼容性测试报告](https://docs.qq.com/sheet/DR2FERVBIcEpjUUVI)  
## 内存注意事项
前前后后折腾了四五天 共买了两次内存才完美适配这块定制板子  
第一次 用的三星32G DDR4 2400 REG ECC 内存两条 共计364.32元 结果因为是 `4rx8`无法适配  
在查看内存兼容性后重新购买了内存条  
![D1581内存兼容性列表](https://cdn.nlark.com/yuque/0/2023/png/38960578/1696992991398-c5a97f4c-2fa0-42bd-be5c-35212dcaee1b.png#averageHue=%23ececec&clientId=u8a4282b0-c6a3-4&from=paste&height=467&id=u99104e56&originHeight=467&originWidth=381&originalType=binary&ratio=1&rotation=0&showTitle=true&size=37769&status=done&style=none&taskId=u484a8fb0-af2c-45a4-a10b-5283b80e61b&title=D1581%E5%86%85%E5%AD%98%E5%85%BC%E5%AE%B9%E6%80%A7%E5%88%97%E8%A1%A8&width=381 "D1581内存兼容性列表")  
第二次 用的现代16G DDR4 2400 REG ECC 内存四条 共计392元 2rx4的 四根插满完美适配  

---

## 完结
至此，基本上不存在坑，完美构建新的nas，下一步就看系统和软件那边情况了。  
[软件方面](software.md)  
