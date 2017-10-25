$(document).ready(function(){
   $('.menu li:has(ul)').click(function(e){
      e.preventDefault();

      if($(this).hasClass('desplegable')){
      	 $(this).removeClass('desplegable');
      	 $(this).children('ul').slideUp();
      }else{
      	$('.menu li ul').slideUp();
      	$('.menu li').removeClass('desplegable');
      	$(this).addClass('desplegable');
      	$(this).children('ul').slideDown();
      }
  });
  $('#boton1').click(function(){
   $('#modal').modal();
  });
  $('#btn1').click(function(){
    //$('#modal').hide();
    //alert("Value: " + $("#s1").val());
    if($("#s1").val()=='novato'){
       $('#barra1').css("width","20%");
       $('#barra1').text('novato');

    }
    if($("#s1").val()=='principiante'){
       $('#barra1').css("width","40%");
       $('#barra1').text('principiante');
    }
    if($("#s1").val()=='intermedio'){
       $('#barra1').css("width","60%");
       $('#barra1').text('intermedio');
    }
    if($("#s1").val()=='avanzado'){
       $('#barra1').css("width","80%");
       $('#barra1').text('avanzado');
    }
    if($("#s1").val()=='experto'){
       $('#barra1').css("width","100%");
       $('#barra1').text('experto');
    }
  });
});
