---
sidebar_position: 4
keywords: [MFC,VC++,vs2013]
---
# 对于出现MFC问题的记录
2020-07-24

出现问题：参见“MBCS_Support_Deprecated_In_MFC”的声明

解决办法：

项目->属性(Alt+F7)->配置属性->C/C++->预处理器->预处理器定义

编辑以下定义就可以解决:

NO_WARN_MBCS_MFC_DEPRECATION  
------------------------------------------手动分割  
由于历史原因，MFC同时支持Unicode和MBCS（multi-byte character set），但Unicode日渐变得流行，而MBCS逐渐用得越来越少，所以在新版本的MFC中已经把MBCS作为过时的方法，导致在使用新版本的Visual Studio编译MBCS程序的时候会出现这样的警告信息，建议大家在新的程序中废弃MBCS而采用Unicode。

对于已经采用MBCS的旧版的VC++程序，我们如果不打算将其迁移至Unicode，所以增加一句NO_WARN_MBCS_MFC_DEPRECATION是最好的选择。

由此可见，我司写的MFC代码是有多古老~