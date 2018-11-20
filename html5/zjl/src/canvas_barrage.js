import Barrage from './barrage.js'

class CanvasBarrage {
    constructor(canvas, video, opts = {}) {
        if(!canvas || !video) return;
        this.canvas = canvas;
        this.video = video;
        this.canvas.width = video.width;
        this.canvas.height = video.height;
        this.ctx = canvas.getContext('2d');
        let defOpts = { //默认属性，安全的data 初始化
            color: '#e91e63',
            speed: 1.5,
            opacity: 0.5,
            fontSize: 20,
            data: []
        }
        // 将对象合并, 后面的会覆盖掉前面的，如果没有就用前面的值
        Object.assign(this, defOpts, opts);
        this.isPaused = true;
        this.barrages = this.data.map(item => new Barrage(item, this));
        //this 实例化后的对象
        console.log(this);
        // *****如何将上述属性直接挂载到对象上 opts{data: []}
    }
    render () {
        console.log('++++++++')
        this.clear();
        this.renderBarrage();
        if (!this.isPaused) {
            // 普通函数， this指向window bind(this)更改this的指向
            requestAnimationFrame(this.render.bind(this));
        }
    }
    clear () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    renderBarrage () {
        let time = this.video.currentTime; 
        console.log(time);
        this.barrages.forEach(barrage => {
            if(!barrage.flag && time >= barrage.time) {
                if(!barrage.isInit) {
                    barrage.init();
                    barrage.isInit = true;
                }
                barrage.x -= barrage.speed;
                barrage.render();
            }
            // barrage 超出了屏幕 当时间到了，走过过整个canvas的宽度，消失
            if (barrage.x < -barrage.width) {
                barrage.flag = true;
            }
        })
    }
}

export default CanvasBarrage;