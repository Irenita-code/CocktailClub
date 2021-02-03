$(document).ready(function(){


	$(window).scroll(function() {
	  var scroll = $(window).scrollTop();

		$(".zoom").css({
			transform: 'translate3d(0%, -'+(scroll/250)+'%, 0) scale('+(100 + scroll/120)/100+')',

		});
	});

	$(window).scroll(function(){
			if ($('body').hasClass('home')) {
				if($(window).scrollTop()>200){
					$('.home .miMenu').removeClass('fadeOutUp');
					$('.home .miMenu').addClass('fadeInDown');

				}
				else if($(window).scrollTop()==0){

				$('.home .miMenu').addClass('fadeOutUp');

				}
			}
			else {

			}


	});

	$(window).scroll(function(){

		if ($('body').hasClass('home')) {

			if($(window).scrollTop()>2500){

				$('.bgUno').addClass('fadeOut oculto');




			}else {

				$('.bgUno').removeClass('fadeOut oculto');


			}
		}

	});

$('.cards ul li').click(function(){

		var miembroEquipo = $(this).attr('data-tab');


		$('.card').removeClass('visible');
		$('.zoom').removeClass('bgDos');

		$('.zoom img').addClass('oculto');

		$('.' + miembroEquipo).removeClass('oculto');
		$('.' + miembroEquipo).addClass('visible fadeInRight');

});

$('.boton').click(function(){

		$('.desplegable').toggleClass('fadeInDown');
		$('.negra .section.elEspacio').toggleClass('altura');
});

$('.desplegado img').click(function(){




		$('.desplegable').removeClass('fadeInDown');
		$('.negra .section.elEspacio').removeClass('altura');

});


	//$('.icono_flecha').click(function(){

	//	if($('.card').hasClass('visible')){
	//		$('.card').removeClass('visible');
	//		$('.card').next('.card').addClass('visible fadeInRight');
	//	}
	//	else {
	//	}

	//});
let i =0;
	$('.icono_flecha').click(function(){
//busco la card actual con la clase visible
		var nodoCards =document.querySelectorAll(".card");
		
			if(nodoCards[i].classList.contains("visible")){
				nodoCards[i].classList.remove("visible");
				i++;
				console.log(nodoCards[i])		
				if(i >= nodoCards.length){  //(i > 2)
					i= 0;
				}else{
			};
			nodoCards[i].classList.add("visible");
        
		
        

};
		

			
				

		
// 			var currentCard = $(".card").hasClass("visible");
// //le quito visible
// 			currentCard.removeClass("visible");
// //busco la siguiente card
// 			currentCard.next().addClass("visible");

// 			currentCard = $(".card").hasClass("visible");

//activo visible


		// if($('.card').hasClass('visible tupac')){
		// 	$('.card.tupac').removeClass('visible');
		// 	$('.card.sara').addClass('visible fadeInRight');
		// }
		// else if($('.card').hasClass('visible sara')){
		// 	$('.card.sara').removeClass('visible');
		// 	$('.card.max').addClass('visible fadeInRight');
		// }
		// else if($('.card').hasClass('visible max')){
		// 	$('.card.max').removeClass('visible');
		// 	$('.nacho').addClass('visible fadeInRight');
		// }
		// else if($('.card').hasClass('visible nacho')){
		// 	$('nacho').removeClass('visible');
		// 	$('.alex').addClass('visible fadeInRight');
		// }
		// else if($('.card').hasClass('visible alex')){
		// 	$(this).removeClass('visible');
		// 	$('.tupac').addClass('visible fadeInRight');
		// }

	});

	$('.burger').click(function(){
		$('.uno').toggleClass('unoT');
		$('.dos').toggleClass('dosT');
		$('.tres').toggleClass('tresT');
		$('.menuG').toggleClass('menuGC');
		// $('.menuG').toggleClass('col');
		// $('.menuG').toggleClass('centro')


	});

//	$(window).scroll(function(){

//			if($(window).scrollTop()>50){

//				$('.miMenu').addClass('fadeInDown');

//			}else{

//				$(window).scrollTop() = 0 (function(){
//					$('.miMenu').addClass('fadeOutUp');
//				});

//				}





	//});


});





//EMPIEZA POPUP

let dentroPop = document.querySelector(".popUp");
let miPopUp = document.querySelector(".modal");

function lanzaModal(){
	let dentroPop = document.querySelector(".popUp");
let miPopUp = document.querySelector(".modal");
	dentroPop.classList.remove("hide");
	miPopUp.classList.remove("hideDos");
	
	console.log(miPopUp);
	miPopUp.style.display = "flex";
	
	
	dentroPop.classList.add("zoomIn");
	
	lanzaCerrar();
	
	
	
		
	};
	
	function lanzaCerrar(){
	
		let cierraTodo = document.querySelector(".cierra");
		cierraTodo.classList.add("zoomInDos");
		//cierraTodo.style.opacity ="1";
		console.log(cierraTodo);
	
	}
	
	
	function cierraPopUp(){

		let dentroPop = document.querySelector(".popUp");
let miPopUp = document.querySelector(".modal");
		
		dentroPop.classList.add("hide");
		miPopUp.classList.add("hideDos");

	}

//SLIDER_____________________________________
	$(".imgRow img").on({

    
		click:function(e){
			var miId = $(this).attr("data-rel");
			console.log(miId);
			var objetivo = $("#"+miId);
			console.log(objetivo);
	
			// WINDOW
			var posicion = objetivo.offset();
			console.log(posicion);
			var posicionLeft = posicion.left;
			console.log(posicionLeft);
	
			//Padre // MIRAR ESTA otra forma de hacerlo con position respecto al padre
			var pos_padre = objetivo.position();
			console.log("pos_padre");
			console.log(pos_padre);
			var pos_left_Padre = pos_padre.left;
			var noSigno = Math.abs(posicionLeft);
	
			// console.log(noSigno);
			$(".imgFull").animate({
			   
				// "transition":"1s ease",
				"scrollLeft":  $(".imgFull").scrollLeft() + pos_left_Padre+"px"
	
			},500)
			// $(".imgFull").scrollLeft(noSigno+"px")
			// if(posicion.left < 0 ){
				
			//     // si la posicion es negativa suma
			//     $(".imgFull").animate({
			   
			//         "transition":"1s ease",
			//         "scrollLeft":  + noSigno+"px"
	
			//     })
	
			// }
			
			//     //Creo una variable para almacenar el nuevo offset?
				
				
	
	
			// if(posicion.left > 1 ){
					
			// // si la posicion es positiva resta
			//     $(".imgFull").css({
				
			//         "transition":"1s ease",
			//         "scrollLeft":  - noSigno
	
			//     })
			// }
	
	
			// posicionLeft= 0;
	
		}
	})

