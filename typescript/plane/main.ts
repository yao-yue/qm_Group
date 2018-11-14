// egret Main 类 
class Main extends egret.DisplayObjectContainer {
    constructor () {
        super();
        // 如果子类要有自己的构造函数代码，要让父类的构造函数先执行。
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    onAddToStage (event) {
        let textField = new egret.TextField();
        this.addChild(textField);
        textField.textColor = 0xff0000;
        textField.text = "hello world";
    }
} 
window['Main'] = Main;
egret.runEgret();