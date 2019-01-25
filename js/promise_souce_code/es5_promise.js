'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Promise = function () {
    function Promise(executor) {
        var _this = this;

        _classCallCheck(this, Promise);

        // 开启..
        // new 异步任务开始执行    初始状态挂起 resolve后状态为resolved
        this.status = 'pending';
        this.value = undefined;
        this.reason = undefined;
        this.onResloveCallBacks = [];
        this.onRejectCallBacks = [];
        var resolve = function resolve(value) {
            _this.status = 'resloved';
            _this.value = value;
            _this.onResloveCallBacks.forEach(function (fn) {
                return fn();
            });
        };
        var reject = function reject(reason) {
            _this.status = 'rejected';
            _this.value = reason;
            _this.onRejectCallBacks.forEach(function (fn) {
                return fn();
            });
        };
        //
        executor(resolve, reject);
    }

    _createClass(Promise, [{
        key: 'then',
        value: function then(onFullfield, onRejected) {
            var _this2 = this;

            if (this.status === 'pending') {
                this.onResloveCallBacks.push(function () {
                    onFullfield(_this2.value);
                });
                this.onRejectCallBacks.push(function () {
                    onRejected(_this2.reason);
                });
            }
            // if (this.status === 'resolved') {
            //     onFullfield(this.value);
            // }
            // if (this.status === 'rejected') {
            //     onRejected(this.value);
            // }
        }
    }]);

    return Promise;
}();

//common js 规范


module.exports = Promise;
