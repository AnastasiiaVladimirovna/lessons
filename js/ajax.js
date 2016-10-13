  // вставляем select  и option со значениями из массива
  function makeEasy() {
      var items = ["a", "b", "c"];
      console.log('items', items);
      var f = $("<select>");
      f.appendTo($("body"));
      for (var i = 0; i < items.length; i++) {
          var g = $("<option>");
          g.text(items[i]);
          g.appendTo(f);
      }
  }
  // вставляем select  и option с ключем name
  function makeMidd() {
      var db = [{
          name: 'd',
          age: 25
      }, {
          name: 'e',
          age: 32
      }, {
          name: 'f',
          age: 36
      }];
      console.log('db', db);
      var a = $("<select>");
      a.appendTo("body");
      for (var i = 0; i < db.length; i++) {
          var b = $("<option>");
          b.text(db[i]['name']);
          b.attr('value', db[i]['age']);
          b.appendTo(a);
      }
  }

  // вставляем с помощью ajax цвета
  function makeAjax() {

      $.getJSON("colors.json", function(resp) {
          $(".colors").empty();
          console.log("some text", resp);
          for (var i = 0; i < resp.length; i++) {
              var $paragraph = $("<p>");
              $paragraph.text(resp[i]['colorName']);
              $paragraph.css('background-color', resp[i]['hexValue']);
              $paragraph.appendTo($(".colors"));
          }
      });

  }

  function makeRepo() {
      $.getJSON('//api.github.com/users/bondarka/repos', function(response) {
          $(".repositorii_list").empty();
          console.log('response', response);
          for (var i = 0; i < response.length; i++) {
              var $item = $("<li>");
              $item.appendTo(".repositorii_list");
              var $link = $("<a>");
              $link.text(response[i]['name']);
              $link.attr('href', response[i]['html_url']);
              $link.attr('target', '_blank');
              $link.appendTo($item);
          }

      });
  }


  $(function() {
      makeEasy();
      makeMidd();
      $(".btn.btn_repositorii").click(makeRepo);
      $(".btn.btn_color").click(makeAjax);





  })
