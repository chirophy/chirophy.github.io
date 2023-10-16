# CS:GO 常用命令行
### 1. 退出游戏
`quit` 直接退出CS:GO游戏，显示电脑桌面。  
`disconnect` 退出当前游戏，显示CS:GO主页面。  

### 2. 重连服务器指令
`retry` 重连刚才所进的服务器，在游戏出现蓝条，游戏卡顿等需要重新 进入游戏时使用。  

### 3. 显示网络参数帧数指令
`net_graph 0/1` 1开启显示 0为关闭显示，会在游戏下方界面下方显示FPS帧数、 丢包率、延迟、服务器等一些网络参数。  

`fps`：你游戏当前帧数  
`loss`：数据包丢失率，过去的1秒内服务器向你的客户端发送数据包时的未送达的量  
`choke`：数据包未及时传达率，过去的1秒内服务器向你的客户端发送数据包时延时发送的量  
`sv`：服务器的帧速，这个值由服务器决定，服务器的运行质量  
`var`：服务器帧时的标准差，这个值由服务器决定，对于服务器而言，只要不超过1都是可以接受的  
`tick`：你当前服务器的tick，只有64和128  

### 4. 调节参数显示字体大小指令
`net_graphproportionalfont "0.5"` 调节上述FPS参数的字体大小，默认为1， 建议改成0.5即可。  

### 5. 清除血迹指令
`bind f "+lookatweapon; r_cleardecals"` F键清除血迹弹痕  
`bind "SHIFT" "+speed;r_cleardecals"` shift键清除血迹弹痕  

清除血迹指令根据自己习惯设置，一般设置武器检视按键F、或者静步按键shift， 相对游戏操作没有影响。  

### 6. 一键跳投指令
`bind "V" "+jump;-attack;-attack2;-jump"` 投掷道具拉环后按所设置按键直 接进行跳投操作，‘V’键可以更改为自己熟悉按键。  

### 7. 调整狙击镜瞄准线粗细指令
`cl_crosshair_sniper_width 1/2/3` 1为默认粗细，可以调成2 3等等，可以自己 在游戏中找到适合自己的倍数。  

### 8. 取消枪口抖动指令
`viewmodel_recoil 0` 该指令为取消枪口抖动，设置完可以在游戏中查看效果。  

### 9. 调整雷达大小指令
`cl_hud_radar_scale 1` 默认大小为1，范围0.8-1.3，根据需要自行对比选择。  

### 10. 切换左右手指令
`bind v "toggle cl_righthand 1 0"` 该指令为一键切换左右手，可以在游戏中 按V键随意切换，V键可以更改为适合自己的按键。  

### 11. 鼠标滚轮跳指令
`bind "MWHEELUP" "+jump"` 滚轮向上跳跃指令  
`bind "MWHEELDOWN" "+jump"` 滚轮向下跳跃指令  

### 12. 空格大跳指令
`alias +cjump "+jump; +duck"`  
`alias -cjump "-jump; -duck"`  
`bind "space" "+cjump” `  