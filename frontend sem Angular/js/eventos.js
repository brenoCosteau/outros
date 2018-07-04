$(document).ready(function(){
  $(".arrow:eq(0)").click(function(){
    $(".vantagens:eq(0)").slideToggle("slow");
    $(".arrow:eq(0)").toggleClass("rotate");
  });
});

$(document).ready(function(){
  $(".arrow:eq(1)").click(function(){
    $(".vantagens:eq(1)").slideToggle("slow");
    $(".arrow:eq(1)").toggleClass("rotate");
  });
});

$(document).ready(function(){
  $(".arrow:eq(2)").click(function(){
    $(".vantagens:eq(2)").slideToggle("slow");
    $(".arrow:eq(2)").toggleClass("rotate");
  });
});

function restaurar() {
  var l = document.body.clientWidth;
  if(l>1024) {
    $(".vantagens").slideDown("slow");
  }
}
