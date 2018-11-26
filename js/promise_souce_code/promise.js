class Promise {
    constructor(executor) {
        // 开启..
        // new 异步任务开始执行
        this.status = 'pending';
        this.value = undefined;
        this.reason = undefined;
        this.onResloveCallBacks = [];
        this.onRejectCallBacks = [];
        let resolve = (value) => {
            this.status = 'resloved';
            this.value = value;
            this.onResloveCallBacks.forEach(fn => fn());
        }
        let reject = (reason) => {
            this.status = 'rejected';
            this.value = reason;
            this.onRejectCallBacks.forEach(fn => fn());
        }
        //
        executor(resolve, reject);
    }
    then (onFullfield, onRejected) {
        if (this.status === 'pending') {
            this.onResloveCallBacks.push(() => { onFullfield(this.value) });
            this.onRejectCallBacks.push(() => { onRejected(this.reason) }); 
        }
        // if (this.status === 'resolved') {
        //     onFullfield(this.value);
        // }
        // if (this.status === 'rejected') {
        //     onRejected(this.value);
        // }
    }
}



//common js 规范
module.exports = Promise;
