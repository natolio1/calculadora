var c;
var d;
var operancion;


function init(){
	//variables 
	var resultado = document.getElementById('resultado');
	var limpia = document.getElementById('limpiar');
	var suma = document.getElementById('suma');
	var restar = document.getElementById('restar');
	var multiplicar = document.getElementById('multiplicar');
	var dividir = document.getElementById('dividir');
	var igual = document.getElementById('igual');
	var uno = document.getElementById('uno');
	var dos = document.getElementById('dos');
	var tres = document.getElementById('tres');
	var cuatro = document.getElementById('cuatro');
	var cinco = document.getElementById('cinco');
	var seis = document.getElementById('seis');
	var siete = document.getElementById('siete');
	var ocho = document.getElementById('ocho');
	var nueve = document.getElementById('nueve');
	var cero = document.getElementById('cero');

	//EVENTOS

	uno.onclick = function(e){
		resultado.textContent = resultado.textContent + "1";
	}

	dos.onclick = function(e){
		resultado.textContent = resultado.textContent + "2";
	}

	tres.onclick = function(e){
		resultado.textContent = resultado.textContent + "3";
	}

	cuatro.onclick = function(e){
		resultado.textContent = resultado.textContent + "4";
	}

	cinco.onclick = function(e){
		resultado.textContent = resultado.textContent + "5";
	}

	seis.onclick = function(e){
		resultado.textContent = resultado.textContent + "6";
	}

	siete.onclick = function(e){
		resultado.textContent = resultado.textContent + "7";
	}

	ocho.onclick = function(e){
		resultado.textContent = resultado.textContent + "8";
	}

	nueve.onclick = function(e){
		resultado.textContent = resultado.textContent + "9";
	}

	cero.onclick = function(e){
		resultado.textContent = resultado.textContent + "0";
	}

	reset.onclick = function(e){
		resetear();
	}

	suma.onclick = function(e){
		c = resultado.textContent;
		operancion= "+";
		limpiar();
	}

	rest.onclick = function(e){
		c = resultado.textContent;
		operancion = "-";
		limpiar();
	}


	multi.onclick = function(e){
		c = resultado.textContent;
		operancion = "*";
		limpiar();
	}


	divi.onclick = function(e){
		c = resultado.textContent;
		operancion = "/";
		limpiar();
	}

	igual.onclick = function(e){
		d = resultado.textContent;
		resolver();
	}

}

function limpiar(){
	resultado.textContent = "";
}

function resetear(){
	resultado.textContent = "";
	c = 0;
	d = 0;
	operancion = "";
}

function resolver(){
	var res = 0;
	switch(operancion){
		case "+":
			res = parseFloat(c) + parseFloat(d);
			break;

		case "-":
			res = parseFloat(c) - parseFloat(d);
			break;

		case "*":
			res = parseFloat(c) * parseFloat(d);
			break;

		case "/":
			res = parseFloat(c) / parseFloat(d);
			break;
	}
	resetear();
	resultado.textContent = res;
}
