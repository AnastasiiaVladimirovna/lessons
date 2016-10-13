$(function() {
    $("button.go-button").click(name);
    $("button.stop-button").click(stop);
    $(".image-block").mousemove(horizontalPosition);
    var dx = 0;
    var dy = 0;
	var to;
	var cnt=52;
	var fx = 0;
	var fy = 0;

    function name() {
        dx = dx - 10;
        var newPosition = dx.toString() + "px" +" "+ dy.toString() + "px"; 
        console.log('newPosition', newPosition);
        $(".image-block").css("background-position", newPosition);
        clearTimeout(to);
        to=setTimeout(name,100);
    }

    function stop (){
    	clearTimeout(to);
    }

    function round(){
    	cnt=cnt+1;
    	$(".image-block").text(cnt.toString());
    	setTimeout(round,50);
     }

     function fly(){
     fx=fx-64;
     var backgroundPosition = fx.toString() +"px" + " "+fy.toString()+ "px";
     $(".plane").css("background-position",backgroundPosition);
     setTimeout(fly,250)
     }
     fly();

     function horizontalPosition(e){
  	 $(".plane").css("top",e.offsetY.toString() + "px").css("left",e.offsetX.toString() + "px");
     }

    
});
