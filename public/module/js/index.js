window.onload = function () {
	var wrapBox = document.getElementById('wrap');
	var arrow = document.getElementById('back_front');
    var list = document.getElementById('turn_box');
    var dotList = document.getElementById('slid_dot').getElementsByTagName('li');
    var front = document.getElementById('front');
    var back = document.getElementById('back');
    // 素材宽度
    var picWidth = 600;
    // 起始轮播图片
    var index = 1;
    // 轮播图片数量
    var len = 6;
    var isAnimating = false;
    // 轮播每张时间间隔
    var intervalTime = 3500;
    // 滑动动画
    function animate (boxSetLeft) {
        if (boxSetLeft == 0) {
            return;
        }
        isAnimating = true;
        // 位移持续时间；
        var time = 600;
        // 每帧间隔时间
        var slidFluen = 4;
        // 每帧位移量
        var speed = boxSetLeft/(time/slidFluen);
        // 每个动作的位移目的地
        var left = parseInt(list.style.left) + boxSetLeft;
        var playSlid = function (){
            //是否需要位移
            if ( (speed > 0 && parseInt(list.style.left) < left) || (speed < 0 && parseInt(list.style.left) > left)) {
                list.style.left = parseInt(list.style.left) + speed + 'px';
                // 递归调用
                setTimeout(playSlid, slidFluen);
            }
            else {
                list.style.left = left + 'px';
                // 位置回归
                if(left>-picWidth){
                    list.style.left = -picWidth * len + 'px';
                }
                if(left<(-picWidth * len)) {
                    list.style.left = -picWidth + "px";
                }
                isAnimating = false;
            }
        }
        playSlid();
    }
    // 小圆点切换功能函数；
    function dotAnimate() {
        // 重置所有按钮；
        for (var i = 0; i < dotList.length ; i++) {
            if( dotList[i].className == 'dot on'){
                dotList[i].className = 'dot';
                break;
            }
        }
        dotList[index - 1].className = 'dot on';
    }
    // 自动轮播
    function autoPlay() {
        setTimeout(function () {
            front.onclick();
            autoPlay();
        }, intervalTime);
    }
    // 后退按钮
    back.onclick = function () {
        if  (isAnimating) {
            return;
        }
        // 同步小圆点位置
        if (index == 1) {
            index = 6;
        }
        else {
            index -= 1;
        }
        animate(picWidth);
        dotAnimate();
    }
    // 前进按钮
    front.onclick = function () {
        if  (isAnimating) {
            return;
        }
        // 同步小圆点位置
        if (index == 6) {
            index = 1;
        }
        else {
            index += 1;
        }
        animate(-picWidth);
        dotAnimate();
    }
    // 小圆点
    for (var i = 0; i < dotList.length; i++) {
        dotList[i].onclick = function () {
            // 停留当前图片时重复点击不刷新；
            if  (isAnimating) {
                return;
            }
            if(this.className == 'dot on') {
                return;
            }
            var myIndex = parseInt(this.getAttribute('index'));
            var boxSetLeft = -picWidth * (myIndex - index);
            animate(boxSetLeft);
            // 更新index值；
            index = myIndex;
            dotAnimate();
        }
    }
    wrap.onmouseover = function(){
    	arrow.style.display = "block";
    }
    wrap.onmouseout = function(){
    	arrow.style.display = "none";
    }
    autoPlay();
}