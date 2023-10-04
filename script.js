const sinalVermelho = document.querySelector('.sinalVermelho');
const pVermelho = document.querySelector('.pVermelho');
const sinalAmarelo = document.querySelector('.sinalAmarelo');
const pAmarelo = document.querySelector('.pAmarelo');
const sinalVerde = document.querySelector('.sinalVerde');
const pVerde = document.querySelector('.pVerde');

function semaforo(duration, tempoInicio){
    var contador = 0;
    var timer = duration, seconds;

    setInterval(() => {
        seconds = parseInt(timer % tempoInicio, 10);
        if(seconds < 10){
            seconds = '0' + seconds;
        }else{
            seconds = seconds;
        }
        
        contador++;
        console.log(contador);
        if(contador < 60){
            sinalVermelho.classList.remove('hide');
            sinalAmarelo.classList.add('hide');
            sinalVerde.classList.add('hide');
            pVermelho.innerHTML = seconds;
        }else if(contador < 70){
            sinalVermelho.classList.add('hide');
            sinalAmarelo.classList.remove('hide');
            sinalVerde.classList.add('hide');
            pAmarelo.innerHTML = seconds;
        }else if(contador < 95){
            sinalVermelho.classList.add('hide');
            sinalAmarelo.classList.add('hide');
            sinalVerde.classList.remove('hide');
            pVerde.innerHTML = seconds;
        }
    
        if(--timer < 0){
            timer = 60;
        }
    }, 100);
}

// semaforo(60, 60);