$(document).ready( function() {
  $(".pit-thumbnail").click(function(){
    var index = $(".pit-thumbnail").index(this);
    $(".pit-thumbnails-group").hide();
    console.log("index es="+index)
    if (index == 0) {
      $(".pit-book").css("display","block");
    }
  })
});
