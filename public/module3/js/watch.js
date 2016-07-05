var el = function (id) {
    return document.getElementById(id)
}

var rotate = function (id, deg) {
        var e = el(id);
        var prefix = ['', '-o-', '-ms-', '-webkit-', '-moz-'];
        for(var i = 0; i < prefix.length; i ++)
        {
             e.style[prefix[i] + 'transform'] = 'rotate(' + deg + 'deg)';
        }
}

for(var i = 1; i <= 6; i ++) {
     rotate('s-' + i, (i - 1) * 30);
}

var date = new Date(); 
var s = date.getSeconds();
var m = date.getMinutes(); 
var h = date.getHours();
setInterval(function () {
    if (60 == s) { s = 0; m ++; }
    if (60 == m) { m = 0; h ++; }
    if (24 == h) { h = 0; }

    rotate('second', s * 6);
    rotate('minute', m * 6);
    rotate('hour', (h >= 12 ? h - 12 : h) * 30 + Math.ceil((m / 60) * 30));
    s ++;
}, 1000);