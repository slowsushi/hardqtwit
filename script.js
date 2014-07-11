$.ajax({

  url: "http://polar-retreat-1578.herokuapp.com/",
    dataType: "jsonp",
     success: function(data) {
          $.each(data.statuses, function () {
            $( "#tweets" ).append('<img src="' + this['img'] +'>');       
      });
    }});
