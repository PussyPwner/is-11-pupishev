function xt (t, M){ //функция x = M*f(t)
    return M*(t/M)*Math.sin(Math.cos((t/M) + 1));
}
function yt(t, M){ //функция y = M*sqrt(g(t))
    return M*Math.sqrt((t/M)*Math.sin(7*Math.cos(t/M)));
}

window.onload = function () {

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    canvas.width = 1000;
    canvas.height = 600;

    function xc(x){ //перевод координат x
        return (x+canvas.width/2);
    }
    function yc(y){ //перевод координат y
        return (-y+canvas.height/2);
    }

    function OXY(){
        ctx.beginPath();
        ctx.strokeStyle = '#1f1f1f'; 
        ctx.lineWidth = 1.2;
        ctx.moveTo(0, canvas.height/2);
        ctx.lineTo(canvas.width, canvas.height/2);
        ctx.moveTo(canvas.width/2, 0);
        ctx.lineTo(canvas.width/2, canvas.height);
        ctx.stroke();
    }OXY();

    function clear(){
        ctx.fillStyle = "#fcf1f1"
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function printGraph(Fx,Fy,M){
        var dt=canvas.width/1000;
        ctx.beginPath();
        for (let t=-100; t<100; t=t+dt){
            ctx.moveTo(xc(Fx(t,M)),yc(Fy(t,M)));
            ctx.lineTo(xc(Fx(t+dt,M)),yc(Fy(t+dt,M)));
        }
        ctx.stroke();
    }

    document.getElementById('button').addEventListener('click',function(){ //Нажатие на кнопку
        var M = document.getElementById('inputM').value;
        if (!isNaN(M) && M>0){
            clear();
            OXY();
            printGraph(xt,yt,M);
        }
    });
}