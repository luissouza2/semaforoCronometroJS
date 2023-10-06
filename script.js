const sinalVermelho = document.querySelector('.sinalVermelho');
const pVermelho = document.querySelector('.pVermelho');
const sinalAmarelo = document.querySelector('.sinalAmarelo');
const pAmarelo = document.querySelector('.pAmarelo');
const sinalVerde = document.querySelector('.sinalVerde');
const pVerde = document.querySelector('.pVerde');
const hVermelho = document.querySelector('.hVermelho');
const hAmarelo = document.querySelector('.hAmarelo');
const hVerde = document.querySelector('.hVerde');

const tempoInicioVermelho = 5;
const tempoInicioAmarelo = 3;
const tempoInicioVerde = 10;

function vermelho(tempoInicio){
    const duration = 60;
    var contador = -1;
    var timer = duration, seconds;

    const intervalVermelho = setInterval(() => {
        seconds = parseInt(timer % tempoInicio, 10);
        if(seconds < 10){
            seconds = '0' + seconds;
        }else{
            seconds = seconds;
        }

        contador++;
        console.log(contador);

        hVermelho.classList.remove('opacity');
        hAmarelo.classList.add('opacity');
        hVerde.classList.add('opacity');

        sinalVermelho.classList.remove('hide');
        sinalAmarelo.classList.add('hide');
        sinalVerde.classList.add('hide');
        pVermelho.innerHTML = seconds;

        if(contador === tempoInicio){
            clearInterval(intervalVermelho);
            console.log(`CONTADOR: ${contador}`);
            contador = 0;
            console.log(`CONTADOR: ${contador}`);            
        }

        if(--timer < 0){
            timer = 60;
        }
    }, 1000);
}

function amarelo(tempoInicio){
    const duration = 60;
    var contador = -1;
    var timer = duration, seconds;

    const intervalVermelho = setInterval(() => {
        seconds = parseInt(timer % tempoInicio, 10);
        if(seconds < 10){
            seconds = '0' + seconds;
        }else{
            seconds = seconds;
        }

        contador++;
        console.log(contador);

        hVermelho.classList.add('opacity');
        hAmarelo.classList.remove('opacity');
        hVerde.classList.add('opacity');

        sinalVermelho.classList.add('hide');
        sinalAmarelo.classList.remove('hide');
        sinalVerde.classList.add('hide');
        pAmarelo.innerHTML = seconds;

        if(contador === tempoInicio){
            clearInterval(intervalVermelho);
            console.log(`CONTADOR: ${contador}`);
            contador = 0;
            console.log(`CONTADOR: ${contador}`);            
        }

        if(--timer < 0){
            timer = 60;
        }
    }, 1000);
}

function verde(tempoInicio){
    const duration = 60;
    var contador = -1;
    var timer = duration, seconds;

    const intervalVermelho = setInterval(() => {
        seconds = parseInt(timer % tempoInicio, 10);
        if(seconds < 10){
            seconds = '0' + seconds;
        }else{
            seconds = seconds;
        }

        contador++;
        console.log(contador);

        hVermelho.classList.add('opacity');
        hAmarelo.classList.add('opacity');
        hVerde.classList.remove('opacity');

        sinalVermelho.classList.add('hide');
        sinalAmarelo.classList.add('hide');
        sinalVerde.classList.remove('hide');
        pVerde.innerHTML = seconds;

        if(contador === tempoInicio){
            clearInterval(intervalVermelho);
            console.log(`CONTADOR: ${contador}`);
            contador = 0;
            console.log(`CONTADOR: ${contador}`);            
        }

        if(--timer < 0){
            timer = 60;
        }
    }, 1000);
}

vermelho(tempoInicioVermelho);