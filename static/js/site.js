
var days = 28;
function build_caldendar($cal){
    var template = _.template(
        "<li <% if(day==21){ %>class='cny'<% } %>>"+
        "<span class='date'><% if(day==1){ %>Feb <% } %><%- day %></span>"+
        "<% if(day==21){ %><span class='event'><strong>6p</strong>&nbsp;&nbsp;CNY dinner 2015!</span><% } %>"+
        "</li>"
    );
    for(i=0; i < 28; i++){
        $cal.append(template({day: i+1 }));
    }
}

var phrases = ['新年快乐','恭喜发财','年年有余','龙马精神','身体健康','大吉大利','出入平安'];
function unicode_rain(){
    var items = [];
    for(var i = 0; i < 5; i++){
        var phrase = phrases[_.random(phrases.length-1)];
        var container = $("<div class='wavetext'></div>");
        var x = _.random(window.innerWidth);
        var y = _.random(window.innerHeight);
        container.css({
            left:x,
            top:y
        });
        for(var j=0; j<phrase.length;j++){
            container.append('<span>'+phrase[j]+'</span>');
        }
        var a = _.random(360);
        container.css(
            'transform','rotate('+a+'deg)'
        );
        container.css('color','hsl('+_.random(360)+',50%,75%)');
        $('body').append(container);
        items.push({obj:container,rad:a * (Math.PI/180),x:x,y:y});
    }

    var animation = function (){
        window.requestAnimFrame(animation);
        for(var i = 0; i < items.length; i++){
            var item = items[i];
            item.x += 2 * Math.cos(item.rad);
            item.y += 2 * Math.sin(item.rad);

            item.obj.css({left:item.x,top:item.y});

            if(item.x > window.innerWidth*1.25){
                item.x = -window.innerWidth*.25;
                item.obj.css('color','hsl('+_.random(360)+',50%,75%)');
            }else if(item.x < -window.innerWidth*0.25){
                item.x = window.innerWidth*1.25;
                item.obj.css('color','hsl('+_.random(360)+',50%,75%)');
            }else if (item.y > window.innerHeight*1.25){
                item.y = -window.innerHeight*0.25
                item.obj.css('color','hsl('+_.random(360)+',50%,75%)');
            }else if (item.y < -window.innerHeight*0.25){
                item.y = window.innerHeight*1.25
                item.obj.css('color','hsl('+_.random(360)+',50%,75%)');
            }
        }
    }
    animation();
}


$(function (){
    var $cal = $('#calendar');
    build_caldendar($cal);

    $cal.css({
        left: window.innerWidth * 0.5 - $cal.width() * 0.5,
        top: window.innerHeight * 0.5 - $cal.height() * 0.5,
    });

    var $cny = $cal.find('.cny');

    var $cover = $('#cover');
    var $w = $(window);
    var h = $cover.height() - window.innerHeight;

    var t,step,scale,x,y;

    var maxscale = 14;
    var minscale = .25;
    var scaler = maxscale/minscale;

    $cal.css('transform','scale('+minscale+','+minscale+')');

    var offset = $cny.offset();
    var _x = offset.left - window.innerWidth*0.5;
    var _y = offset.top - window.innerHeight*0.5;


    _.delay(function (){
        $cover.addClass('on');
    },200);

    unicode_rain();

    $(window).scroll(function (){
        t = $w.scrollTop();
        if(t < h){
            step = easeInOutQuad(t,0,1,h);
            scale = maxscale - (maxscale-minscale) * (1-step);

            x = -(_x * step) * scaler;
            y = -(_y * step) * scaler;

            $cal.css('transform','translate('+x+'px,'+y+'px) scale('+scale+','+scale+')');
        }
    })
})