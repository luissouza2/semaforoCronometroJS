const sinalVermelho = document.querySelector('.sinalVermelho');
const pVermelho = document.querySelector('.pVermelho');
const sinalAmarelo = document.querySelector('.sinalAmarelo');
const pAmarelo = document.querySelector('.pAmarelo');
const sinalVerde = document.querySelector('.sinalVerde');
const pVerde = document.querySelector('.pVerde');

function semaforo(duration, tempoInicio, cor){
    var timer = duration, seconds;
    if(cor === 'vm'){
        sinalVermelho.classList.remove('hide');
        sinalAmarelo.classList.add('hide');
        sinalVerde.classList.add('hide');
    }else if(cor === 'a'){
        sinalVermelho.classList.add('hide');
        sinalAmarelo.classList.remove('hide');
        sinalVerde.classList.add('hide');
    }else if(cor === 'vd'){
        sinalVermelho.classList.add('hide');
        sinalAmarelo.classList.add('hide');
        sinalVerde.classList.remove('hide');
    }

    setInterval(() => {
        seconds = parseInt(timer % tempoInicio, 10);
        if(seconds < 10){
            seconds = '0' + seconds;
        }else{
            seconds = seconds;
        }
    
        if(cor === 'vm'){
            pVermelho.innerHTML = seconds;
        }else if(cor === 'a'){
            pAmarelo.innerHTML = seconds;
        }else if(cor === 'vd'){
            pVerde.innerHTML = seconds;
        }
    
        if(--timer < 0){
            timer = 60;
        }
    }, 100);
}

// semaforo(60, 60, 'vd');