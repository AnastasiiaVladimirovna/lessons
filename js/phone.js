$(function() {
console.log("Hello!");

var data = ["Magnolia", "Akakii", "Sifon"];
console.log('data ' , data);


function render(){
	$("#list").empty();
	var size = data.length;
	for(i=0;i<size;i++){
		console.log(data[i]);
		$("<li>").text(data[i]).appendTo($("#list"));
	}
}

function reverseData(){
	data.reverse();
	render();
}

function sortData(){
	data.sort();
	render();
}


 function addToData(){
 	var name = prompt("Enter the name,please.");
 	console.log('name ' , name);
 	if(name && name.length>0){
 	 data.push(name);	
 	}
  
   render();
 }

function check(){
	var name = prompt("Enter the name,please.");
	if(name && name.length>0){
		if( data.indexOf(name)>=0){
			alert("Thats name in list.")
		}else{
			alert("Its new name")
		}
	}
}



render();


data.push("Sasha");
 render();

$(".btn-reverse").click(reverseData);

$(".btn-sort").click(sortData);

$(".btn-add").click(addToData);


$(".btn-check").click(check);
});