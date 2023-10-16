---
sidebar_position: 4
keywords: [MFC,VC++,vs2013]
---
# MFC 问题记录
🗓2020-07-24  

出现问题：`参见 “MBCS_Support_Deprecated_In_MFC” 的声明`

解决办法：

项目->属性(Alt+F7)->配置属性->C/C++->预处理器->预处理器定义

编辑以下定义就可以解决:
```sh
NO_WARN_MBCS_MFC_DEPRECATION  
```

------------------------------------------手动分割  

由于历史原因，`MFC` 同时支持 `Unicode` 和 `MBCS（multi-byte character set）`，但 `Unicode` 日渐变得流行，而 `MBCS` 逐渐用得越来越少，所以在新版本的 `MFC` 中已经把 `MBCS` 作为过时的方法，导致在使用新版本的 `Visual Studio` 编译 `MBCS` 程序的时候会出现这样的警告信息，建议大家在新的程序中废弃 `MBCS` 而采用 `Unicode`。

对于已经采用MBCS的旧版的VC++程序，我们如果不打算将其迁移至 `Unicode` ，所以增加一句 `NO_WARN_MBCS_MFC_DEPRECATION` 是最好的选择。

由此可见，我司写的MFC代码是有多古老~