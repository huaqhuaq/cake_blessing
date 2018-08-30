placeholderPic();
function placeholderPic(){
	var w = document.documentElement.offsetWidth;
	if(w<769){
		document.documentElement.style.fontSize=w/7.5+'px';
	}
}
   
window.onresize=function(){
    placeholderPic();
}

var blessingTel = document.querySelectorAll('.blessing-tel')
blessingTel.forEach(function(value){
	var tels = value.innerText
	value.innerText = tels.replace(tels.substring(3,7), '****')
})

