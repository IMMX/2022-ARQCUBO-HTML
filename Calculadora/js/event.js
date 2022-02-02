$(document).ready(function(){

	var cotizacion;
	//selector a la clase opcion para darle función al evento click
	$(".opcion").click(function(){
		//eliminamos la clase activa por si una opción la contiene
		$(".opcion").removeClass("opcionActiva");
		//asignamos la clase opcionActiva a la opción presionada
		$(this).addClass("opcionActiva");

	});

	//inciar
	$(".startbtn").click(function(){
		$("#Pregunta1").removeClass("hide");
		$("#Pregunta1").addClass("slideInUp");
		$("#preguntas").removeClass("hide");
		$(".start").addClass("slideOutUp");
		setTimeout(function() {$(".start").addClass("hide");}, 400);



	});
	//regresar pregunta
	$(".regresar1").click(function(){
		$("#Pregunta1").removeClass("hide");
		$("#Pregunta2").addClass("hide");
		$(".pregunta3").addClass("hide");
		$(".pregunta2").removeClass("hide");
		$(".regresar1").addClass("hide");
	});


	$(".regresar2").click(function(){
		$("#Pregunta2").removeClass("hide");
		$("#Pregunta3").addClass("hide");
		$(".regresar2").addClass("hide");
		$(".regresar1").removeClass("hide");
		$(".pregunta4").addClass("hide");
		$(".pregunta3").addClass("hide");
		$(".pregunta2").addClass("hide");
	});

	$(".regresar2a").click(function(){
		$("#Pregunta2").removeClass("hide");
		$("#Pregunta4").addClass("hide");
		$(".regresar2").addClass("hide");
		$(".regresar1").removeClass("hide");
		$(".pregunta4").addClass("hide");
		$(".pregunta4").removeClass("hide");
		$(".pregunta2").addClass("hide");
	});


	$(".regresar3").click(function(){
		$("#Pregunta4").addClass("hide");
		$("#Pregunta3").removeClass("hide");
        $(".regresar3").addClass("hide");
        $(".regresar2").removeClass("hide");
        $(".pregunta4").removeClass("hide");
        $(".pregunta5").addClass("hide");

	});

	$(".regresar4a").click(function(){
		
        $("#Pregunta4").removeClass("hide");
		$("#Pregunta5A").addClass("hide");
		$(".regresar3").removeClass("hide");
	    $(".pregunta5").removeClass("hide");
	    $(".calcularA").addClass("hide");
	    $(".regresar4a").addClass("hide");

	});

	$(".regresar4b").click(function(){
		
        $("#Pregunta4").removeClass("hide");
		$("#Pregunta5B").addClass("hide");
		$(".pregunta5").removeClass("hide");
	    $(".calcularB").addClass("hide");
	    $(".regresar3").removeClass("hide");
	    $(".regresar4b").addClass("hide");

	});

	//siguiente pregunta
	$(".uno").click(function(){
		$("#Pregunta1").addClass("hide");
		$("#Pregunta2").removeClass("hide");
		$(".pregunta2").addClass("hide");
		$(".pregunta3").removeClass("hide");
		$(".regresar1").removeClass("hide");
	});


	$(".dos").click(function(){
		var tipoDeTerreno = $('input[name="Pregunta2"]:checked').val();
		$(".regresar1").addClass("hide");
		$("#Pregunta1").addClass("hide");
		if (tipoDeTerreno === '1') {
			//llevar a la pregunta 5
			$("#Pregunta2").addClass("hide");
			$("#Pregunta4").removeClass("hide");
			$(".pregunta3").addClass("hide");
			$(".pregunta5").removeClass("hide");
			$(".regresar2a").removeClass("hide");
		}
		else{
			$("#Pregunta2").addClass("hide");
			$("#Pregunta3").removeClass("hide");
			$(".pregunta3").addClass("hide");
			$(".pregunta4").removeClass("hide");
			$(".regresar2").removeClass("hide");
		}


	});

	$(".tres").click(function(){

		$("#Pregunta3").addClass("hide");
		$("#Pregunta4").removeClass("hide");
		$(".pregunta4").addClass("hide");
		$(".pregunta5").removeClass("hide");
		$(".regresar2").addClass("hide");
		$(".regresar3").removeClass("hide");

	});

	$(".cuatro").click(function(){
		$(".pregunta4").addClass("hide");
		$(".regresar3").addClass("hide");
		var respuestaPregunta4 = $('input[name="Pregunta4"]:checked').val();
		if (respuestaPregunta4 === 'si') {
			$("#Pregunta4").addClass("hide");
			$("#Pregunta5A").removeClass("hide");
		    $(".pregunta5").addClass("hide");
		    $(".calcularA").removeClass("hide");
		    $(".regresar4a").removeClass("hide");
		}else{
			$("#Pregunta4").addClass("hide");
			$("#Pregunta5B").removeClass("hide");
			$(".pregunta5").addClass("hide");
		    $(".calcularB").removeClass("hide");
		    $(".regresar4b").removeClass("hide");
		}

	});



	$(".calcularA").click(function(){

		var calidad = $('input[name="Pregunta1"]:checked').val();
		var tipoDeTerreno = $('input[name="Pregunta2"]:checked').val();
		var inclinacion;
		if (tipoDeTerreno === '1') {
			inclinacion = tipoDeTerreno;
		}
		else{
			inclinacion = $('input[name="Pregunta3"]:checked').val();
		}
		var metrosTotales = $('#total').val();
		metrosTotales =  metrosTotales.replace('m²', "" );
		var metrosACalcular = metrosTotales*1.18;	

		var costoPorMetro2 = calidad*inclinacion;
		cotizacion = costoPorMetro2*metrosACalcular;
		//cotizacion = '$' + cotizacion.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

       $(".calcularA").addClass("hide");
	   $(".regresar4a").addClass("hide");
	   $("#Pregunta5A").addClass("hide");
	   $("#ubicacion").removeClass("hide");
	   $(".continuar").removeClass("hide");
	   $(".regresar5a").addClass("hide");
	   $("#cotizacion").html(cotizacion + ' MXN');
	});


	$(".calcularB").click(function(){

		var calidad = $('input[name="Pregunta1"]:checked').val();
		var tipoDeTerreno = $('input[name="Pregunta2"]:checked').val();
		var inclinacion;
		if (tipoDeTerreno === '1') {
			inclinacion = tipoDeTerreno;
		}
		else{
			inclinacion = $('input[name="Pregunta3"]:checked').val();
		}
		var metrosTotales = $('#metros').val();
		var metrosACalcular = metrosTotales*1;	

		var costoPorMetro2 = calidad*inclinacion;
		cotizacion = costoPorMetro2*metrosACalcular;
		cotizacion = '$' + cotizacion.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

       $(".calcularB").addClass("hide");
	   $(".calcularB").addClass("hide");
	   $(".regresar4b").addClass("hide");
	   $("#Pregunta5B").addClass("hide");
	   $("#ubicacion").removeClass("hide");
	   $(".continuar").removeClass("hide");
	   $("#cotizacion").html(cotizacion + ' MXN');

	});

	$(".continuar").click(function(){

		$("#Resultado").removeClass("hide");
	    $("#ubicacion").addClass("hide");
	    $(".continuar").addClass("hide");
		
		var zona = document.getElementById('zona').value;
		/*
		$.ajax({
        type: 'POST',
        url: 'ajax/cotizar.php',
        data:{
        'cotizacion':cotizacion,
        'zona':zona
        },
        success: function(echo){
          if (echo === 'done') {
          	alert("done");
          }else if (echo === 'sesion') {
          	swal({     
                  title: "Inicie Sesión!", 
                  text: "Inicie su sesion para continuar",    
                  type: "warning",             
                  closeOnConfirm: true },  
                  function(){    
                   // location.href="Registro1/singup.php?z="+zona+"&c="+cotizacion+"";  
                  });
          }else{
          	alert("error");
          }

        }
      	});*/
	}); 

});

	function sumar(){
		var garage = $('#garage').val();
		garage === "" ? garage = 0 : garage;
		var servicio = $('#servicio').val();
		servicio === "" ? servicio = 0 : parseInt(servicio);
		var sala = $('#sala').val();
		sala === "" ? sala = 0 : sala;
		var comedor = $('#comedor').val();
		comedor === "" ? comedor = 0 : parseInt(comedor);
		var cocina = $('#cocina').val();
		cocina === "" ? cocina = 0 : parseInt(cocina);
		var mbano = $('#mbano').val();
		mbano === "" ? mbano = 0 : mbano;
		var alacena = $('#alacena').val();
		alacena === "" ? alacena = 0 : parseInt(alacena);
		var bodega = $('#bodega').val();
		bodega === "" ? bodega = 0 : parseInt(bodega);
		var salatv = $('#salatv').val();
		salatv === "" ? salatv = 0 : parseInt(salatv);
		var lavado = $('#lavado').val();
		lavado === "" ? lavado = 0 : parseInt(lavado);
		var estudio = $('#estudio').val();
		estudio === "" ? estudio = 0 : parseInt(estudio);
		var recamarap = $('#recamarap').val();
		recamarap === "" ? recamarap = 0 : parseInt(recamarap);
		var banop = $('#banop').val();
		banop === "" ? banop = 0 : parseInt(banop);
		var vestidorp = $('#vestidorp').val();
		vestidorp === "" ? vestidorp  = 0 : parseInt(vestidorp);
		var recamara1 = $('#recamara1').val();
		recamara1 === "" ? recamara1  = 0 : parseInt(recamara1);
		var bano1 = $('#bano1').val();
		bano1 === "" ? bano1  = 0 : bano1;
		var vestidor1 = $('#vestidor1').val();
		vestidor1 === ""  ? vestidor1  = 0 : parseInt(vestidor1);
		var recamara2 = $('#recamara2').val();
		recamara2 === ""  ? recamara2 = 0 : parseInt(recamara2);
		var bano2 = $('#bano2').val();
		bano2 === ""  ? bano2 = 0 : parseInt(bano2);
		var vestidor2 = $('#vestidor2').val();
		vestidor2 === ""  ? vestidor2 = 0 : parseInt(vestidor2);
		var recamara3 = $('#recamara3').val();
		recamara3 === "" ? recamara3  = 0 : parseInt(recamara3);
		var bano3 = $('#bano3').val();
		bano3 === "" ? bano3   = 0 : parseInt(bano3);		
		var vestidor3 = $('#vestidor3').val();
		vestidor3 === "" ? vestidor3  = 0 : parseInt(vestidor3);
		var doble = $('#doble').val();
		doble === "" ?  doble  = 0 : parseInt(doble);
		var recamarap2 = $('#recamarap2').val();
		recamarap2 === ""  ? recamarap2 = 0 : parseInt(recamarap2);
		var banop2 = $('#banop2').val();
		banop2 === ""  ? banop2 = 0 : parseInt(banop2);	
		var vestidorp2 = $('#vestidorp2').val();
		vestidorp2 === ""  ? vestidorp2 = 0 : parseInt(vestidorp2);
		var otro = $('#otro').val();
		otro === "" ? otro  = 0 : parseInt(otro);
		var banopiso2 = $('#banopiso2').val();
		banopiso2 === ""  ?  banopiso2 = 0 : parseInt(banopiso2);
		var total = parseInt(garage) + parseInt(servicio) + parseInt(sala) + parseInt(comedor) + parseInt(cocina) + parseInt(mbano) + parseInt(alacena) +  parseInt(bodega) + parseInt(salatv) + parseInt(lavado) + parseInt(estudio) + parseInt(recamarap) + parseInt(banop) + parseInt(vestidorp) + parseInt(recamara1) + parseInt(bano1) + parseInt(vestidor1) + parseInt(recamara2) + parseInt(bano2) + parseInt(vestidor2) + parseInt(recamara3) + parseInt(bano3) + parseInt(vestidor3) + parseInt(doble) + parseInt(recamarap2) + parseInt(banop2) + parseInt(vestidorp2) + parseInt(otro) + parseInt(banopiso2) + " m²";
		$("#total").val(total);
	}
