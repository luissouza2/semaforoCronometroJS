const sinalVermelho = document.querySelector('.sinalVermelho');
const pVermelho = document.querySelector('.pVermelho');
const sinalAmarelo = document.querySelector('.sinalAmarelo');
const pAmarelo = document.querySelector('.pAmarelo');
const sinalVerde = document.querySelector('.sinalVerde');
const pVerde = document.querySelector('.pVerde');

function startTimer(duration, tempoInicio, chegou){
    var timer = duration, seconds;
    setInterval(function(){
        seconds = parseInt(timer % tempoInicio, 10);
        if(seconds < 10){
            seconds = '0' + seconds;
        }else{
            seconds = seconds;
        }

        if(chegou === 'vermelho'){
            sinalVermelho.classList.remove('hide');
            pVermelho.innerHTML = seconds;
        }else if(chegou === 'amarelo'){
            sinalAmarelo.classList.remove('hide');
            pAmarelo.innerHTML = seconds;
        }else if(chegou === 'verde'){
            sinalVerde.classList.remove('hide');
            pVerde.innerHTML = seconds;
        }


        if(--timer < 0){
            timer = duration;
        }

    }, 400);
}

function vermelho(){
    var duration = 60;
    var tempoInicio = 60;
    const chegou = 'vermelho';
    startTimer(duration, tempoInicio, chegou);
}
function amarelo(){
    var duration = 60;
    var tempoInicio = 5;
    const chegou = 'amarelo';
    startTimer(duration, tempoInicio, chegou);
}
function verde(){
    var duration = 60;
    var tempoInicio = 20;
    const chegou = 'verde';
    startTimer(duration, tempoInicio, chegou);
}

document.addEventListener('click', (e) => {
    const elementoClicado = e.target;
    if(elementoClicado.classList.contains('btn-vermelho')){
        vermelho();
    }else if(elementoClicado.classList.contains('btn-amarelo')){
        amarelo();
    }else if(elementoClicado.classList.contains('btn-verde')){
        verde();
    }
});