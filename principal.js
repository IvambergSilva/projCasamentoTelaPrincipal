let codigoPessoas01 = ['AE2022K0', 'AE2022L1', 'AE2022F2', 'AE2022N3', 'AE2022T4', 'AE2022M5', 'AE2022V6', 'AE2022M7', 'AE2022M8', 'AE2022A9'];


let body = document.querySelector('body')

document.addEventListener('contextmenu', event => event.preventDefault());

var inputCodigo = document.querySelector('#inputCodigo')

let decisao = 0;

document.querySelector('#botaoCodigo').addEventListener('click',  () => {
    let codigo = inputCodigo.value.toUpperCase();
    
    console.log('1');
    codigoPessoas01.map((elemento) => {
        if (elemento == codigo){
            window.location.href = 'google.com'
            decisao = 1;
        }
    })

    if (decisao == 0 || codigo == '') {
        convidado.innerHTML = 'Oii, digite o código que você recebeu!';
        inputCodigo.classList.add('piscarAvisoBorda')
        inputCodigo.style.border = "4px solid #000";
    }
})

inputCodigo.addEventListener('click', (e) => {
    inputCodigo.classList.remove('piscarAvisoBorda');
    inputCodigo.style.border = "none";
    convidado.innerHTML = ''
    inputCodigo.value = '';
})




const audio = document.querySelector('audio');

let movimento = 0

body.addEventListener('mousemove', ()=> {
    if (movimento == 0) {
        audio.play();
    }
})

let pause = document.querySelector('#pause')
pause.addEventListener('click', ()=> {
    pause.style.backgroundColor = '#B76E7980';
    play.style.backgroundColor = 'transparent';
    audio.pause();
    movimento = 1
})

let play = document.querySelector('#play')

play.addEventListener('click', ()=> {
    play.style.backgroundColor = '#B76E7980';
    pause.style.backgroundColor = 'transparent';
    audio.play();
    movimento = 1
})




let diasDiv = document.querySelector("#dias")
let horasDiv = document.querySelector("#horas")
let minutosDiv = document.querySelector("#minutos")
let segundosDiv = document.querySelector("#segundos")

let grandeDia = new Date("dec 18, 2022 10:00:00").getTime()

function contagem() {
    let agora = new Date().getTime();
    
    let t = (grandeDia - agora)/1000

    let dia = Math.floor(t / (86400))
    let hora = Math.floor((t % (86400))/(3600))
    let minuto = Math.floor((t % (3600))/(60))
    let segundo = Math.floor(t % 60)
    

    diasDiv.innerHTML = dia
    horasDiv.innerHTML = tempo(hora)
    minutosDiv.innerHTML = tempo(minuto)
    segundosDiv.innerHTML = tempo(segundo)

    function tempo(tempo) {
        return tempo < 10 ? `0${tempo}` : tempo
    }
}

setInterval(contagem, 1000);