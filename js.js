$(function(){
  alert("Kurs JQ");
  $('#nav li a').css("color", 'red');
  $("#nav a:eq(2)").css("color",'yellow'); //(tablica)filtry działają jak tablica.
  $("a:gt(3)").css("color",'gray');// wszystkie elementy powyzej 4 elementu zostana sformatowane
  $("a:even").css("color","green");// wszyskie odnosniki nie parzyste zostana sformatowane
  $("#nav a:odd").css("color","black");// wszyskie odnosniki nie parzyste zostana sformatowane
  $('input[value]').css("color",'blue');
  $('p:contains(kurs)').css("color",'red');// wyszukiwanie contains(czego szukasz)
  $('p:has(a)').css('color',"red"); //sformatywanie elementu wewnatrz selektora
  $('p a:nth-child(1)').css("color",'red'); //sformatywanie pierwszego elementu
});
