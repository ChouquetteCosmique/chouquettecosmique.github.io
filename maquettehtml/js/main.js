//Popup random
// $(window).load(function(){	
// 	if (Math.random() > 0.8){
// 			$(".bgPopup").css("display", "block");
// 			$(".corpPopup").css("display", "block");		
// 	}
// });

// Si l'on est sur mobile
if ( navigator.userAgent.match(/Mobi/) ) {
	// Rendre les elements visibles
	$('.elemTrans').each(function(event){
		$(this).removeClass('elemTrans');
	});

	//Nécessite JqueryMobile
	// Ouvrir le menu en swipant
	$('*').on("swiperight",function(){
   		 $('nav').addClass('menuOpen');
 	});
	$('*').on("swipeleft",function(){
   		 $('nav').removeClass('menuOpen');
 	});
	// ouvrir Nav mobile
	function mobileNav(){
		 $('nav').addClass('menuOpen');
	}
	  		//Fermer le nav au clic dehors
		$(window).on("click.Bst", function(event){
			if ( 
			    ($('nav').has(event.target).length == 0 //checks if descendants of $box was clicked
			    &&
			    !$('nav').is(event.target))
			    &&
			    !$(".btn-burger").is(event.target) //checks if the $box itself was clicked
		  	){
				console.log("t'as cliqué ailleurs que dans la boite");
				$('nav').removeClass('menuOpen');
			} else {
				console.log("t'as cliqué dans la boite");	
			}
		});
	$(window).scroll(function(event) {
	  		// Bouton RDV (apparaît au scroll)
	   		$('.rdvAside').css({top: $(this).scrollTop() > 650? "91%":"100%"});
	});
}else{
	$('.divAnim > *').each(function(){
		if(!$(this).hasClass('elemTrans')){
			$(this).addClass('elemTrans Top');
		}
	});

		// SINON => faire effets parallaxe, transitions etc...
	var ScreenHeight = $(window).height();
	$(window).scroll(function(event) {
		
		// Apparition fondu au scroll
		$('.divAnim').each(function(){
			var origineAnim = 0;
			if($(this).hasClass("avecContainer")){
				origineAnim = $('.avecContainer').height();
			}
			if($(window).scrollTop()>=$(this).offset().top+origineAnim-ScreenHeight) {
				$(this).find('.Left').addClass('animLeft visible');
				$(this).find('.Right').addClass('animRight visible');
				$(this).find('.Bottom').addClass('animBottom visible');
				$(this).find('.Top').addClass('animTop visible');
			}
		});

		// Parralax (au scroll)
		$('.parallax').css({'background-position-y':($(window).scrollTop()/2)+'px'});

	   // Bouton RDV (apparaît au scroll)
	   $('.rdvAside').css({right: $(this).scrollTop() > 650? "-10px":"-100px"});
	});

	// Pop up navigation, voir plus tard
	// Pop up RDV
	// Apparition
	$( ".popup" ).click(function() {
			$(".bgPopup").css("display", "block");
			$(".corpPopup").css("display", "block");
	});
	// Disparition
	$( ".bgPopup,.close").click(function() {
		$(".bgPopup").css("display", "none");
		$(".corpPopup").css("display", "none");
	});



//cheat code
// a key map of allowed keys
var allowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
};

// the 'official' Konami Code sequence
var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

// a variable to remember the 'position' the user has reached so far.
var konamiCodePosition = 0;

// add keydown event listener
document.addEventListener('keydown', function(e) {
	console.log(e.keyCode);
  // get the value of the key code from the key map
  var key = allowedKeys[e.keyCode];
  // get the value of the required key from the konami code
  var requiredKey = konamiCode[konamiCodePosition];

  // compare the key with the required key
  if (key == requiredKey) {

    // move to the next key in the konami code sequence
    konamiCodePosition++;

    // if the last key is reached, activate cheats
    if (konamiCodePosition == konamiCode.length) {
      activateCheats();
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
});

function activateCheats() {
  // document.body.style.backgroundImage = "url('images/cheatBackground.png')";

  // var audio = new Audio('audio/pling.mp3');
  // audio.play();

  console.log("Happy pride !");
}

}


