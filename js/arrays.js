$(function() {

	var colors = [
		{
			color: "red",
			value: "#f00"
		},
		{
			color: "green",
			value: "#0f0"
		},
		{
			color: "blue",
			value: "#00f"
		},
		{
			color: "cyan",
			value: "#0ff"
		},
		{
			color: "magenta",
			value: "#f0f"
		},
		{
			color: "yellow",
			value: "#ff0"
		},
		{
			color: "black",
			value: "#000"
		}
	];

	console.log(colors[2].value);

	colors.forEach(function(a){
		console.log(a.color);
	});
    
	for(i=0;i<colors.length;i++){
       console.log(colors[i].color);
	}

	var k="yellow";
	var kcolor=null;

	colors.forEach(function(b){
		if(b.color==k){
		 kcolor=b.value;	
		}
	});
   console.log(kcolor);

   colors.forEach(function(c){
   		if()
   });
});
