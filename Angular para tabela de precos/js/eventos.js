var pac = angular.module('pacotes', []);
pac.controller('precos', function($scope) {
   $scope.pac1 = 'Free';
   $scope.vlr1 = '0,00';
   $scope.ano1 = '0,00';
   $scope.desc1 = 'GRATUITO';

   $scope.pac2 = 'Premium';
   $scope.vlr2 = '129,90';
   $scope.ano2 = '1247,90';
   $scope.desc2 = 'ECONOMIZE 20%';

   $scope.pac3 = 'Pro';
   $scope.vlr3 = '99.90';
   $scope.ano3 = '959,90';
   $scope.desc3 = 'ECONOMIZE 20%';
});

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
