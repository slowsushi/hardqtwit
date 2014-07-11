$.ajax({
        url: "http://obscure-ridge-8042.herokuapp.com/",
        dataType: "json",

        success: function(data) {
          $.each(data.statuses, function () {
            $( "#tweets" ).append('<div class="stuff1"><a target="_blank" href="klematis_big.htm"><img src="' + this['img'] + '" alt="Klematis" width="300" height="250"></a><div class="desc">' + this['name'] +  '</div></div>');
          });
       }});
