// window.onload = function(){
//     var img1 = document.getElementById('bottle');
//     var onOff = true;

//     img1.onclick = function(){
//         if(onOff){
//             bottle.src = 'plastic.png';
//             onOff = false;
//         }else{
//             bottle.src = 'bottle.jpg';
//             onOff = true;
//         }
//     }
window.onload=function(){
    var candy = document.getElementById("candy");
            candy.onmousedown = function (event) {
                // console.log(1);
                /*再次点击时使得图标任然在那个位置，鼠标可以点击到图标上*/
                var ol = event.clientX - candy.offsetLeft;
                var ot = event.clientY - candy.offsetTop;
                /*鼠标点击*/
                document.onmousemove = function (event) {
                    var left = event.clientX - ol;
                    var top = event.clientY - ot;
                    candy.style.left = left+"px";/*赋值*/
                    candy.style.top = top+"px";
                }
                /*鼠标松开*/
                document.onmouseup = function (event) {
                    document.onmousemove = null;
                    document.onmouseup = null;
                }
            }
}
var candy1 = document.getElementById("candy1");
            candy1.onmousedown = function (event) {
                // console.log(1);
                /*再次点击时使得图标任然在那个位置，鼠标可以点击到图标上*/
                var ol = event.clientX - candy1.offsetLeft;
                var ot = event.clientY - candy1.offsetTop;
                /*鼠标点击*/
                document.onmousemove = function (event) {
                    var left = event.clientX - ol;
                    var top = event.clientY - ot;
                    candy1.style.left = left+"px";/*赋值*/
                    candy1.style.top = top+"px";
                }
                /*鼠标松开*/
                document.onmouseup = function (event) {
                    document.onmousemove = null;
                    document.onmouseup = null;
                }


            $(function() {
    $( "#draggable" ).draggable();
    $( "#draggable2" ).draggable();
    $( "#draggable3" ).draggable();
  });
        }
    // static setDisableDraggable(){
    //     draggable.on( 'dragStart', function( event, pointer ) {
    //         $('#floor-draggable').addClass('disabled')
    //     })
    //     draggable.on( 'dragEnd', function( event, pointer ) {
    //         $('#floor-draggable').removeClass('disabled')
    //     })
    //     }