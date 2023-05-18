const entradaTexto = document.querySelector("#mensagem");
const saidaTexto = document.querySelector("#saida-texto");

entradaTexto.addEventListener("keypress", function(e) {
	if (!caracteres(e)) {
		e.preventDefault();
	}

});

function caracteres (e) {
	const caractere = String.fromCharCode(e.keyCode);

	const pattern = '[a-z ]';

	if(caractere.match(pattern)) {
		return true;

	}

}


function criptografar () {

	var texto = entradaTexto.value;

	 var resultadoCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai")
	 .replace(/o/g, "ober").replace(/u/g, "ufat");

	 document.getElementById('saida-texto').innerHTML = 
	 '<textarea readonly id="mensagem">' + resultadoCripto + '</textarea>' +
	 '<button class="botao-copiar" id="copiar" onclick="copiar()">Copiar</button>'

}

function descriptografar () {

	var texto = entradaTexto.value;

	var resultadoDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a")
	.replace(/ober/g, "o").replace(/ufat/g, "u");

	document.getElementById('saida-texto').innerHTML = 
	 '<textarea readonly id="mensagem" rows="15">' + resultadoDescripto + '</textarea>' +
	 '<button class="botao-copiar" id="copiar" onclick="copiar()">Copiar</button>'

}

function copiar () {
	var textoCopia = document.getElementById('saida-texto').querySelector('textarea');

	textoCopia.select();
	document.execCommand("copy");

	
	alert("Seu texto foi copiado para area de Transferencia");
}


