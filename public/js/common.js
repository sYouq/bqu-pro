function resizeFontSize(){
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 +"px";
}
resizeFontSize();
addEventListener("resize", resizeFontSize);
addEventListener("orientationchange", resizeFontSize);