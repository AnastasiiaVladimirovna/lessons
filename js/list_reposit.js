 function viewRepos(data) {
     console.log('data', data);
     $(".table-content").empty();
     for(var i=0; i<data.length;i++){
     	var $item = $("<tr>");
     	$item.appendTo(".table-content");

     	var $cell = $ ("<td>");
     	$cell.text(data[i]['created_at']);
     	$cell.appendTo($item);
     	$item.appendTo(".table-content");

     	$cell = $ ("<td>");
     	var $link = $ ("<a>");
     	$link.attr('href', data[i]['html_url']);
     	$link.attr('target', '_blank');
     	$link.text(data[i]['name']);
     	$link.appendTo($cell);
     	$cell.appendTo($item);
     }

 }


 function getRepos() {
     console.log("Hello");
     var login = $("input.name").val();
     // $("input.name");
     if (login == "") {
         alert("Логин не введен. Попробуйте снова");
         return false;
     }
     console.log('login', login);
     var url = "https://api.github.com/users/" + login + "/repos";
     console.log(url);

     $.getJSON(url, function(response) {
         console.log(response);
         viewRepos(response);
     })

     return false;
 }

 $(function() {
     $(".btn.btn-default").click(getRepos);

 })
