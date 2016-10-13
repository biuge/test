var deepcopy=function(o){
	var obj=(o instanceof Array?[]:{})
	for(var i in o){
		if(typeof o[i]==='object'){
			obj[i]=deepcopy(o[i])
		}else{
			obj[i]=o[i]
		}
	}
	return obj
}
//var b=deepcopy(a)
