window.requestAnimFrame = function(){
    return (
        window.webkitRequestAnimationFrame ||
            window.requestAnimationFrame       ||
            window.mozRequestAnimationFrame    ||
            window.oRequestAnimationFrame      ||
            window.msRequestAnimationFrame     ||
            function(/* function */ callback){
                return window.setTimeout(callback, 16);
            }
    );
}();
window.closeAnimFrame = function (){
    return   (
        window.webkitCancelAnimationFrame||
            window.cancelAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.mozCancelAnimationFrame ||
            window.msCancelAnimationFrame ||
            function(interval){
                return window.clearTimeout(interval);
            }
    );
}();

function easeInOutQuad(t, b, c, d) {
           if ((t/=d/2) < 1) return c/2*t*t + b;
           return -c/2 * ((--t)*(t-2) - 1) + b;
}