var getParamVal = function(key) {
    var reg = new RegExp("(^|&|\\?)"+ key +"=([^&]*)(&|$)");
    if (ret = location.search.match(reg)) {
        return decodeURIComponent(ret[2]);
    }
    return '';
}
//getParamVal('a')
//注意在路由情况下 location.search就要和换了
//在new RexExp \?要变成\\?
