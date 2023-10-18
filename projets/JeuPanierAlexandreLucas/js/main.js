window.onload = function() {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');

	//  METTRE LE CODE ICI

	var moyenne;
	var posX;
	var score=0;
	var nbPommePris = 0;
	var nbTotPomme = 0;
	var posXPomme = 0;
	var posYPomme = 0;
	var monIntervalle = setInterval(pomme,25);
	var monIntervalle2 = setInterval(panier,50);

	scorejoueur = document.getElementById("score") 
	scorejoueur.innerHTML.style="background-color:black;"

	posXPomme = Math.random()*canvas.width;





	function pomme () {
	
	ctx.clearRect(posXPomme-10,posYPomme,61,10);
	posYPomme+=10;
	
	ctx.beginPath();
	ctx.fillStyle="blue";
	ctx.fillRect (posXPomme, posYPomme, 50, 17);
	ctx.closePath();
		if (posYPomme > 420){
			nbTotPomme++;
			
			posXPomme = Math.random()*canvas.width;
			posYPomme = 0;
			moyenne = Math.round(nbPommePris/nbTotPomme);
			scorejoueur.innerHTML= nbPommePris + "moyenne "+Math.round(moyenne);
			console.log("vous avez"+score+"sur"+nbTotPomme+"tombée");
		}

		if (posXPomme > posX-100 && posXPomme < posX+100 && posYPomme > 350-23 && posYPomme < 350+5){
			
			if(score == 100){

			}else{
				score++;
			}
			nbTotPomme++;
			nbPommePris++;
			moyenne = Math.round(nbPommePris/nbTotPomme);
			
			ctx.clearRect(posXPomme-10,posYPomme,60,20);
			posXPomme = Math.random()*canvas.width;
			posYPomme = 0;
			scorejoueur.innerHTML= nbPommePris + "moyenne "+Math.round(moyenne)*50;
			//console.log("vous avez"+score+"sur"+nbTotPomme+"tombée");
		}
		//total pommes

		//Pommes prises
		if (nbPommePris == 0 && nbTotPomme ==0 ){
			scorejoueur.innerHTML="Moyenne : Non définie  Score : 0 sur 0 pommes tombées";
		}else{
	moyenne = nbPommePris/nbTotPomme;
	scorejoueur.innerHTML="Moyenne : "+moyenne*100+"%  Score : "+ score+" sur "+nbTotPomme+" pommes tombées";
}
	ctx.beginPath();
	ctx.fillStyle="red";
	ctx.fillRect (0, 0, 100, 25);
	ctx.closePath();
	ctx.beginPath();
	ctx.fillStyle="green";
	ctx.fillRect (0, 0, moyenne*100, 25);
	ctx.closePath();


	}


	canvas.addEventListener("mousemove", move);
	

		function move (event) {
			ctx.clearRect(posX,350,100,25);
	posX = event.offsetX-55;	
		panier();

			
		}
	function panier(){

	ctx.beginPath();
	ctx.fillStyle="black";
	ctx.fillRect (posX, 350, 100, 25);
	ctx.closePath();
	}

	function stats(){

	ctx.beginPath();
	ctx.fillStyle="red";
	ctx.fillRect (0, 400, score, 25);
	ctx.closePath();
	}

}

