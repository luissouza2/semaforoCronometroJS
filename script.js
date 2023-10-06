const sinalVermelho = document.querySelector('.sinalVermelho');
const pVermelho = document.querySelector('.pVermelho');
const sinalAmarelo = document.querySelector('.sinalAmarelo');
const pAmarelo = document.querySelector('.pAmarelo');
const sinalVerde = document.querySelector('.sinalVerde');
const pVerde = document.querySelector('.pVerde');
const hVermelho = document.querySelector('.hVermelho');
const hAmarelo = document.querySelector('.hAmarelo');
const hVerde = document.querySelector('.hVerde');

const tempoInicioVermelho = 15;
const tempoInicioAmarelo = 3;
const tempoInicioVerde = 10;

function vermelho(tempoInicio){
    const duration = 60;
    var contador = tempoInicio;
    var timer = duration;

    const intervalVermelho = setInterval(() => {
        contador--;
        console.log(contador);
        
        if(contador < 10){
            contador = '0' + contador;
        }

        hVermelho.classList.remove('opacity');
        hAmarelo.classList.add('opacity');
        hVerde.classList.add('opacity');

        sinalVermelho.classList.remove('hide');
        sinalAmarelo.classList.add('hide');
        sinalVerde.classList.add('hide');
        pVermelho.innerHTML = contador;

        if(contador === 0){
            clearInterval(intervalVermelho);
            console.log(`CONTADOR: ${contador}`);           
        }

        if(timer-- < 0){
            timer = 60;
        }
    }, 1000);

    setTimeout(function(){
        hVermelho.classList.remove('opacity');
        hAmarelo.classList.add('opacity');
        hVerde.classList.add('opacity');

        sinalVermelho.classList.remove('hide');
        sinalAmarelo.classList.add('hide');
        sinalVerde.classList.add('hide');
        pVermelho.innerHTML = contador;
        verde(tempoInicioVerde)
    }, tempoInicio * 1000)
}

function amarelo(tempoInicio){
    const duration = 60;
    var contador = tempoInicio;
    var timer = duration;

    const intervalVermelho = setInterval(() => {
        
        if(contador < 10){
            contador = '0' + contador;
        }else{
            contador = contador;
        }

        contador--;
        console.log(contador);

        hVermelho.classList.add('opacity');
        hAmarelo.classList.remove('opacity');
        hVerde.classList.add('opacity');

        sinalVermelho.classList.add('hide');
        sinalAmarelo.classList.remove('hide');
        sinalVerde.classList.add('hide');
        pAmarelo.innerHTML = contador;

        if(contador === 0){
            clearInterval(intervalVermelho);
            console.log(`CONTADOR: ${contador}`);         
        }

        if(timer-- < 0){
            timer = 60;
        }
    }, 1000);

    setTimeout(function(){
        hVermelho.classList.add('opacity');
        hAmarelo.classList.remove('opacity');
        hVerde.classList.add('opacity');

        sinalVermelho.classList.add('hide');
        sinalAmarelo.classList.remove('hide');
        sinalVerde.classList.add('hide');
        pAmarelo.innerHTML = contador;
        vermelho(tempoInicioVermelho)
    }, tempoInicio * 1000)
}

function verde(tempoInicio){
    const duration = 60;
    var contador = tempoInicio;
    var timer = duration;

    const intervalVermelho = setInterval(() => {
        if(contador < 10){
            contador = '0' + contador;
        }

        contador--;
        console.log(contador);

        hVermelho.classList.add('opacity');
        hAmarelo.classList.add('opacity');
        hVerde.classList.remove('opacity');

        sinalVermelho.classList.add('hide');
        sinalAmarelo.classList.add('hide');
        sinalVerde.classList.remove('hide');
        pVerde.innerHTML = contador;

        if(contador === 0){
            clearInterval(intervalVermelho);
            console.log(`CONTADOR: ${contador}`);         
        }

        if(timer-- < 0){
            timer = 60;
        }
    }, 1000);

    setTimeout(function(){
        hVermelho.classList.add('opacity');
        hAmarelo.classList.add('opacity');
        hVerde.classList.remove('opacity');

        sinalVermelho.classList.add('hide');
        sinalAmarelo.classList.add('hide');
        sinalVerde.classList.remove('hide');
        pVerde.innerHTML = contador;
        amarelo(tempoInicioAmarelo);
    }, tempoInicio * 1000)
}

vermelho(tempoInicioVermelho);