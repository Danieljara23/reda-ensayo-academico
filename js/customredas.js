$(document).ready(function(){

  $(".pit-thumbnail-descripcion h3").each(function() {
    var titleLength = $(this).text().length;
    if (titleLength <= 20) {
      $(this).css("margin-top","7%");
    }else if (titleLength > 20 && titleLength < 35) {
      $(this).css("margin-top","3%");
    }else if (titleLength >= 35) {
      $(this).css("margin-top","4%");
      $(this).css("font-size","12px");
      $(this).css("margin-left","6px");
      $(this).css("margin-right","6px");
    }
  });
  $(".dialog").dialog({
      dialogClass: "no-close",
      modal:true,
      autoOpen: false,
      width:Math.min(600, $(window).width() * 0.9),
      resizable: false,
      maxHeight:800
  });


  $("#bibliografia,#bibliografia-mobile").on('click touchstart', function(){
    $("#dialog-1").dialog("open");
  })
  $("#informacion,#informacion-mobile").on('click touchstart', function(){
    $("#dialog-2").dialog("open");
  })

  $("#creditos,#creditos-mobile").on('click touchstart', function(){
    $("#dialog-3").dialog("open");
  })

  $(".pit-hamburguer").click( function () {
    $(".pit-menu-mobile").toggleClass("show-menu");
  });

});
