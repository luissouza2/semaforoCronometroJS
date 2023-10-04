const sinalVermelho = document.querySelector('.sinalVermelho');
const pVermelho = document.querySelector('.pVermelho');
const sinalAmarelo = document.querySelector('.sinalAmarelo');
const pAmarelo = document.querySelector('.pAmarelo');
const sinalVerde = document.querySelector('.sinalVerde');
const pVerde = document.querySelector('.pVerde');

function vermelho(duration, tempoInicio){
    var timer = duration, seconds;

    setInterval(() => {
        seconds = parseInt(timer % tempoInicio, 10);
        if(seconds < 10){
            seconds = '0' + seconds;
        }else{
            seconds = seconds;
        }
    
        pVermelho.innerHTML = seconds;
    
        if(--timer < 0){
            timer = 60;
        }
    }, 400);
}

function amarelo(duration, tempoInicio){
    var timer = duration, seconds;

    sinalVermelho.classList.add('hide');
    sinalAmarelo.classList.remove('hide');

    setInterval(() => {
        seconds = parseInt(timer % tempoInicio, 10);
        if(seconds < 10){
            seconds = '0' + seconds;
        }else{
            seconds = seconds;
        }
    
        pAmarelo.innerHTML = seconds;
    
        if(--timer < 0){
            timer = 60;
        }
    }, 1000);
}

function verde(duration, tempoInicio){

    var timer = duration, seconds;

    sinalVermelho.classList.add('hide');
    sinalAmarelo.classList.add('hide');
    sinalVerde.classList.remove('hide');

    setInterval(() => {
        seconds = parseInt(timer % tempoInicio, 10);
        if(seconds < 10){
            seconds = '0' + seconds;
        }else{
            seconds = seconds;
        }
    
        pVerde.innerHTML = seconds;
    
        if(--timer < 0){
            timer = 60;
        }
    }, 1000);
}

// vermelho(60, 60);
// amarelo(60, 25);
// verde(60, 40);