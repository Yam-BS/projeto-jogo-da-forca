var botaoIniciar = document.querySelector('#iniciar-jogo');
var botaoAdicionar = document.querySelector('#nova-palavra');

var inputNovaPalavra = document.querySelector('#input-nova-palavra');

var conjuntoPalavras = ['ARARA', 'BARCO', 'CASA', 'DADO', 'ESTRELA'];
var palavraAtual = Math.round(Math.random() * (conjuntoPalavras.length - 1));
var numeroTentativas = 6;

var palavra = conjuntoPalavras[palavraAtual];
console.log(palavra);

var contadorLetraCorreta = 0;

var verificaLetra = [];

botaoIniciar.onclick = desenhaForca;

function leTeclado(e) {

    if (!checkChar(e)) {
		e.preventDefault();
        alert('Caractere Inválido!');
	} else {
        var char = String.fromCharCode(e.keyCode);
    
        var contadorLetraErrada = 0;
        var contadorLetraRepetida = 0;

        verificaLetra.push(char);

        for(var cont = 0; cont < verificaLetra.length - 1; cont++){
            if (char == verificaLetra[cont]) {
                contadorLetraRepetida++;
            }
        }

        if(contadorLetraRepetida == 0){
            for(var i = 0; i < palavra.length; i++){
                if (char !== palavra[i]){
                    contadorLetraErrada++;
                } else{
                    contadorLetraCorreta++;
                }
            }
    
            if(contadorLetraErrada == palavra.length){
                letraErrada(char);
                numeroTentativas--;
            } else{
                letraCorreta(char);
            }
        } else{
            alert('Letra repetida!');
        }
        
    }
}

function checkChar(e){
	var char = String.fromCharCode(e.keyCode);
    
	var pattern = '[A-Z]';
	if (char.match(pattern)) {
		return true;
	}
}

function adicionaPalavra(){
    conjuntoPalavras.push(inputNovaPalavra.value);
    console.log(conjuntoPalavras);
}

botaoAdicionar.onclick = adicionaPalavra;





