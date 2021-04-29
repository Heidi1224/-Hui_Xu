console.log("This is a link")

window.onload = function(){

	function mouseOver(id){
 			document.getElementById(id).src="candylab.gif";}

	$('body').onmouseover(function(){
    $(this).css({cursor:"scr(coin.gif),auto"});

	// function draggable(STICKERS){
		$(".STICKERS").draggable();
		$(".STICKERS1").draggable();
}


	function setImg(candylab){
		if (candylab.key =="onmouseover"){
			$("candylab").css ("img", "candylab.gif");
		}else if (event.key =="onmouseout"){
			$("p").css ("color", "green");
		}else if {
			$("p").css ("color", "blue");
		}
	}