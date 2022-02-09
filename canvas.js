var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

function desenhaForca(){
    pincel.fillStyle = 'lightgrey';
    pincel.fillRect(0, 100, 1200, 800);

    pincel.fillStyle = 'black';
    pincel.font = '45px sans-serif';
    pincel.textAlign = 'left';
    pincel.fillText('Bem-vindo ao jogo da forca! :)', 300, 175);

    // Base da forca
    pincel.fillStyle = 'black';
    pincel.beginPath();
    pincel.moveTo(200, 600);
    pincel.lineTo(100, 675);
    pincel.lineTo(300, 675);
    pincel.fill();

    // Forca
    pincel.beginPath();
    pincel.strokeStyle = 'black';
    pincel.moveTo(200, 600);
    pincel.lineTo(200, 300);
    pincel.lineTo(400, 300);
    pincel.lineTo(400, 350);
    pincel.stroke();

    desenhaLinha();
    document.onkeydown = leTeclado;
}

function desenhaLinha(){
    var inicioLinha = 600;
    var fimLinha = 640;

    for(var i = 0; i < palavra.length; i++){

        pincel.beginPath();
        pincel.strokeStyle = 'black';
        pincel.moveTo(inicioLinha, 675);
        pincel.lineTo(fimLinha, 675);
        pincel.stroke();

        inicioLinha = inicioLinha + 80;
        fimLinha = fimLinha + 80;
    }
}

function letraErrada(char){
        // Cabeça
    if (numeroTentativas == 6){
        pincel.fillStyle = 'black';
        pincel.beginPath();
        pincel.arc(400, 390, 40, 0, 2 * 3.14);
        pincel.fill();

        pincel.fillStyle = 'black';
        pincel.font = '35px sans-serif';
        pincel.fillText('Letras erradas:', 650, 400);

        pincel.fillStyle = 'black';
        pincel.font = '30px sans-serif';
        pincel.fillText(char, 900, 400);

    } else if (numeroTentativas == 5){
        // Coluna
        pincel.beginPath();
        pincel.strokeStyle = 'black';
        pincel.moveTo(400, 430);
        pincel.lineTo(400, 550);
        pincel.stroke();

        pincel.fillStyle = 'black';
        pincel.font = '30px sans-serif';
        pincel.fillText(char, 940, 400);

    } else if (numeroTentativas == 4){
        // Braço esquerdo
        pincel.beginPath();
        pincel.strokeStyle = 'black';
        pincel.moveTo(400, 450);
        pincel.lineTo(350, 500);
        pincel.stroke();

        pincel.fillStyle = 'black';
        pincel.font = '30px sans-serif';
        pincel.fillText(char, 980, 400);

    } else if (numeroTentativas == 3){
        // Braço direito
        pincel.beginPath();
        pincel.strokeStyle = 'black';
        pincel.moveTo(400, 450);
        pincel.lineTo(450, 500);
        pincel.stroke();

        pincel.fillStyle = 'black';
        pincel.font = '30px sans-serif';
        pincel.fillText(char, 1020, 400);

    } else if (numeroTentativas == 2){
        // Perna esquerda
        pincel.beginPath();
        pincel.strokeStyle = 'black';
        pincel.moveTo(400, 550);
        pincel.lineTo(350, 600);
        pincel.stroke();

        pincel.fillStyle = 'black';
        pincel.font = '30px sans-serif';
        pincel.fillText(char, 1060, 400);

    } else if (numeroTentativas == 1){
        // Perna direita
        pincel.beginPath();
        pincel.strokeStyle = 'black';
        pincel.moveTo(400, 550);
        pincel.lineTo(450, 600);
        pincel.stroke();

        pincel.fillStyle = 'black';
        pincel.font = '30px sans-serif';
        pincel.fillText(char, 1100, 400);
        
        fimDeJogo(800);
        pincel.fillStyle = 'red';
        pincel.font = '35px sans-serif';
        pincel.fillText('Você perdeu!', 650, 400);
    }
}

function letraCorreta(char){
    
    for(var i = 0; i < palavra.length; i++){
        if(char == palavra[i] && i == 0){
            var eixoX = 607;

            pincel.fillStyle = 'black';
            pincel.font = '40px sans-serif';
            pincel.fillText(char, eixoX, 670);
        } else if(char == palavra[i] && i >= 1){
            eixoX = 607 + (80 * i);

            pincel.fillStyle = 'black';
            pincel.font = '40px sans-serif';
            pincel.fillText(char, eixoX, 670);
        }
    }
    
    if(contadorLetraCorreta == palavra.length){
        fimDeJogo(100);

        pincel.fillStyle = 'green';
        pincel.font = '35px sans-serif';
        pincel.fillText('Parabéns, você ganhou!', 650, 400);
    }
    
}

function fimDeJogo(altura){
    pincel.beginPath();
    pincel.clearRect(600, 365, 530, altura);
        
    pincel.fillStyle = 'lightgrey';
    pincel.fillRect(600, 365, 530, altura);
}



