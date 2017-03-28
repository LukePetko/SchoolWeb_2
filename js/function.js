$(window).scroll(function(){

  var wScroll = $(this).scrollTop();
  console.log(wScroll)
  if (wScroll > 100)
  {
    $('nav').removeClass("nav_1").addClass("nav_2");
  } else {
    $('nav').removeClass("nav_2").addClass("nav_1");
  };

});

$(document).ready(function(){
  window.sr = ScrollReveal();
  var reveal_1 = {
    reset: true
  };
  sr.reveal("#o_nas_vsetko", reveal_1);
  sr.reveal(".content_text", reveal_1);


});

$(".linky").localScroll({duration : 800});
