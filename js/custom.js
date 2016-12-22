$(document).ready( function() {
  $(".pit-thumbnail").click(function(){
    var index = $(".pit-thumbnail").index(this);
    $(".pit-thumbnails-group").hide();
    if (index == 0) {
      $(".pit-book").css("display","block");
    }
  })

  $(".pit-book-toc p").on('click', function(){

    $indexPage = $(".pit-book-toc p").index(this);

    $(".pit-book-toc p.current").removeClass(" current");
    $(this).addClass("current");

    current = document.getElementsByClassName("pit-book-page current");
    $(current).removeClass("current");
    active = ".pit-book-page:nth-of-type("+($indexPage+1)+")";
    $(active).addClass("current");
  })

});
