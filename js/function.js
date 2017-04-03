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
    delay: 300,
    distance: "50px"
  };
  sr.reveal("#o_nas_vsetko", reveal_1);
  sr.reveal(".content_text", reveal_1);
  sr.reveal("#schopnosti", reveal_1);
  sr.reveal("#aplikacia", reveal_1);
  sr.reveal(".kto_sme", reveal_1);
  sr.reveal(".kickstarter", reveal_1);
  sr.reveal(".social", reveal_1);
  sr.reveal(".email", reveal_1);
  sr.reveal(".formular", reveal_1);

});

$("nav, footer").localScroll({duration : 800});
$("header div").fadeOut(0).delay(4000 + Date.now() - timerStart).fadeIn(2000);

var loadVar;

function load() {
  loadVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loading").style.display = "none";
  document.getElementById("content").style.display = "block";
  document.getElementById("map").style.display = "block";
  document.getElementById("pata").style.display = "block";
}
