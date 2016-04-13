/**
 * Created by solobatida on 13/04/16.
 */

var $td = $("table").find('td');


function start(){

    $td.click(function () {
            var mi = $(this).text();
            $(this).toggleClass('active');
        }
    );

    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');


    context.beginPath();
    context.moveTo(20, 20);
    //quadraticCurveTo(, , , arrive)
    context.quadraticCurveTo(200, 150, 450, 20);
    context.lineWidth = 10;
    context.strokeStyle = 'black';
    context.stroke();


    context.moveTo(20, 0);
    //quadraticCurveTo(, , , arrive)
    context.quadraticCurveTo(200, 150, 450, 0);
    context.strokeStyle = 'red';
    context.lineWidth = 10;

    context.stroke();

}

addEventListener('load',start);