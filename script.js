const sinalVermelho = document.querySelector('.sinalVermelho');
const pVermelho = document.querySelector('.pVermelho');
const sinalAmarelo = document.querySelector('.sinalAmarelo');
const pAmarelo = document.querySelector('.pAmarelo');
const sinalVerde = document.querySelector('.sinalVerde');
const pVerde = document.querySelector('.pVerde');

function startTimer(duration, tempoInicio){
    var timer = duration, seconds;
    sinalVermelho.classList.remove('hide');
    sinalAmarelo.classList.add('hide');
    sinalVerde.classList.add('hide');
    setInterval(function(){
        seconds = parseInt(timer % tempoInicio, 10);
        if(seconds < 10){
            seconds = '0' + seconds;
        }else{
            seconds = seconds;
        }

        pVermelho.innerHTML = seconds;
        pAmarelo.innerHTML = seconds;
        pVerde.innerHTML = seconds;

        if(seconds === 50){
            sinalVermelho.classList.add('hide');
            sinalAmarelo.classList.remove('hide');
            sinalVermelho.innerHTML = seconds;
        }else if(seconds === 25){
            sinalAmarelo.classList.add('hide');
            sinalVerde.classList.remove('hide');
            pVerde.innerHTML = seconds;
        }else if(seconds === 0){
            sinalVermelho.classList.remove('hide');
            sinalAmarelo.classList.add('hide');
            sinalVerde.classList.add('hide');
        }

        if(--timer < 0){
            timer = duration;
        }

    }, 400);
}

function vermelho(){
    var duration = 60;
    var tempoInicio = 60;
    startTimer(duration, tempoInicio);
}
function amarelo(){
    var duration = 60;
    var tempoInicio = 5;
    startTimer(duration, tempoInicio);
}
function verde(){
    var duration = 60;
    var tempoInicio = 20;
    startTimer(duration, tempoInicio);
}