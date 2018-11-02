1. weapp-adapter
    全局的window canvas对象
    降低了游戏开发的难度， dom的感觉出来了

2. canvas的比例问题
    宽度是手机宽度，
    设计稿 750 
    设计稿大小 * canvas大小/ 750
    canvas.width 获取canvas宽度

3. 游戏框架
    phaser渲染支持webgl,物理引擎更健全
    cocos-2D 2d
    phaser 2d
    Egret 2d typescript
    three.js 3d      ------>不错
    js/libs/
    js/states 场景 -> 界面
        proload 加载资源
        create  绘制界面
        
    es6 extends 模块化机制，封装.