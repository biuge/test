function Throttle(fn,wait,time){
    var t 
    var oldTime = new Date();
    var txt = '测试分支使用'
    return function() {
        var nowTime = new Date();
        clearTimeout(t)
        if (nowTime-oldTime>=time){
            fn()
            oldTime = nowTime
        }else {
            t = setTimeout(fn,wait);
        }
    }
}
export default Throttle