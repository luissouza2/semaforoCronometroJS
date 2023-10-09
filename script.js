const sinalVermelho = document.querySelector('.sinalVermelho');
const pVermelho = document.querySelector('.pVermelho');
const sinalAmarelo = document.querySelector('.sinalAmarelo');
const pAmarelo = document.querySelector('.pAmarelo');
const sinalVerde = document.querySelector('.sinalVerde');
const pVerde = document.querySelector('.pVerde');
const hVermelho = document.querySelector('.hVermelho');
const hAmarelo = document.querySelector('.hAmarelo');
const hVerde = document.querySelector('.hVerde');

const tempoInicioVermelho = 5000;
const tempoInicioAmarelo = 3000;
const tempoInicioVerde = 5000;

function vermelho(tempoInicio){
    var contador = (tempoInicio / 1000) + 1;

    const intervalVermelho = setInterval(() => {
        if(contador >= 0){
            contador--;
        }
        console.log(`${contador}`);

        hVermelho.classList.remove('opacity');
        hAmarelo.classList.add('opacity');
        hVerde.classList.add('opacity');

        sinalVermelho.classList.remove('hide');
        sinalAmarelo.classList.add('hide');
        sinalVerde.classList.add('hide');

        if(contador < tempoInicio){
            pVermelho.innerHTML = (`${contador}`);
        }
        if(contador < 10){
            pVermelho.innerHTML = (`0${contador}`);
        }
        if(contador === 0){
            clearInterval(intervalVermelho);
            console.log(`CONTADOR: ${contador}`);
        }

    }, 1000);

    setTimeout(function(){
        verde(tempoInicioVerde)
    }, tempoInicio)
}

function amarelo(tempoInicio){
    var contador = (tempoInicio / 1000) + 1;

    const intervalAmarelo = setInterval(() => {
        if(contador >= 0){
            contador--;
        }
        console.log(`${contador}`);

        hVermelho.classList.add('opacity');
        hAmarelo.classList.remove('opacity');
        hVerde.classList.add('opacity');

        sinalVermelho.classList.add('hide');
        sinalAmarelo.classList.remove('hide');
        sinalVerde.classList.add('hide');

        if(contador < tempoInicio){
            pAmarelo.innerHTML = (`${contador}`);
        }
        if(contador < 10){
            pAmarelo.innerHTML = (`0${contador}`);
        }
        if(contador === 0){
            clearInterval(intervalAmarelo);
            console.log(`CONTADOR: ${contador}`);
        }

    }, 1000);

    setTimeout(function(){
        vermelho(tempoInicioVermelho)
    }, tempoInicio)
}

function verde(tempoInicio){
    var contador = (tempoInicio / 1000) + 1;

    const intervalVerde = setInterval(() => {
        if(contador >= 0){
            contador--;
        }
        console.log(`${contador}`);

        hVermelho.classList.add('opacity');
        hAmarelo.classList.add('opacity');
        hVerde.classList.remove('opacity');

        sinalVermelho.classList.add('hide');
        sinalAmarelo.classList.add('hide');
        sinalVerde.classList.remove('hide');

        if(contador < tempoInicio){
            pVerde.innerHTML = (`${contador}`);
        }
        if(contador < 10){
            pVerde.innerHTML = (`0${contador}`);
        }
        if(contador === 0){
            clearInterval(intervalVerde);
            console.log(`CONTADOR: ${contador}`);
        }

    }, 1000);

    setTimeout(function(){
        amarelo(tempoInicioAmarelo);
    }, tempoInicio)
}

// vermelho(tempoInicioVermelho);