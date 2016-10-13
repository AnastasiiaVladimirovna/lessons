  function likePost() {
      var $el = $(this);
      var id=$el.data("id");
      console.log(id);
      var likes=parseInt($el.data("likes"));
      console.log(likes);
      likes=likes+1;
      $el.text(likes + ' лайков');
	  $el.data("likes", likes);
	  sendApi(id);
	  //http://127.0.0.1/proba/api.php?method=likepost&id=2
  }


  function viewRepos(posts) {
      $(".api-content").empty();
      for (var i = 0; i < posts.length; i++) {
          var $item = $("<div>");
          $item.appendTo(".api-content");


          var $cell = $("<h2>");
          $cell.text(posts[i]['title']);
          $cell.appendTo($item);

          var $cell = $("<hr>");
          $cell.appendTo($item);

          $cell = $("<p>");
          var $date = $("<span>")
          $date.text(posts[i]['date']);
          $date.appendTo($cell);
          $cell.appendTo($item);


          $cell = $("<p>");
          $cell.addClass('lead');
          $cell.text(posts[i]['description']);
          $cell.appendTo($item);

          $cell = $("<button>");
          $cell.text(posts[i]['likes'] + ' лайков');
          $cell.click(likePost);
          $cell.data("id", posts[i]['id']);
          $cell.data("likes", posts[i]['likes']);
          $cell.appendTo($item);



          $item.appendTo(".api-content");

      }
  }


  function makeApi() {
      var url = "http://127.0.0.1/proba/api.php?method=getposts";
      console.log(url);
      $.getJSON(url, function(response) {
          viewRepos(response);

      })
  }



   function sendApi(id) {
      var url = "http://127.0.0.1/proba/api.php?method=likepost&id=" + id;
      console.log(url);
      $.getJSON(url, function() {

      })
  }

  $(function() {
      makeApi();
  })
