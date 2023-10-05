const sinalVermelho = document.querySelector('.sinalVermelho');
const pVermelho = document.querySelector('.pVermelho');
const sinalAmarelo = document.querySelector('.sinalAmarelo');
const pAmarelo = document.querySelector('.pAmarelo');
const sinalVerde = document.querySelector('.sinalVerde');
const pVerde = document.querySelector('.pVerde');

// function semaforo(duration, tempoInicio){
//     var contador = 0;
//     var timer = duration, seconds;

//     setInterval(() => {
//         seconds = parseInt(timer % tempoInicio, 10);
//         if(seconds < 10){
//             seconds = '0' + seconds;
//         }else{
//             seconds = seconds;
//         }
        
//         contador++;
//         console.log(contador);
//         if(contador < 60){
//             sinalVermelho.classList.remove('hide');
//             sinalAmarelo.classList.add('hide');
//             sinalVerde.classList.add('hide');
//             pVermelho.innerHTML = seconds;
//         }else if(contador < 70){
//             sinalVermelho.classList.add('hide');
//             sinalAmarelo.classList.remove('hide');
//             sinalVerde.classList.add('hide');
//             pAmarelo.innerHTML = seconds;
//         }else if(contador < 95){
//             sinalVermelho.classList.add('hide');
//             sinalAmarelo.classList.add('hide');
//             sinalVerde.classList.remove('hide');
//             pVerde.innerHTML = seconds;
//         }
    
//         if(--timer < 0){
//             timer = 60;
//         }
//     }, 100);
// }

// semaforo(60, 60);

function vermelho(){
    const duration = 60;
    const tempoInicio = 20;
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

        sinalVermelho.classList.remove('hide');
        pVermelho.innerHTML = seconds;

        if(contador === 60){
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

function amarelo(){
    const duration = 60;
    const tempoInicio = 10;
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

        sinalVermelho.classList.add('hide');
        sinalAmarelo.classList.remove('hide');
        pAmarelo.innerHTML = seconds;

        if(contador === 10){
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

function verde(){
    const duration = 60;
    const tempoInicio = 30;
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

// vermelho();
// setTimeout(amarelo, 20000);
// setTimeout(verde, 30000);