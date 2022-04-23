// Mostrar data e hora
const dataHora = document.getElementById('data-hora')
const zeroFill = n => {
    return ('0' + n).slice(-2);
}
const intervalo = setInterval(() => {
    const gerarData = new Date()
    const horario = zeroFill(gerarData.getUTCDate()) + '/' + zeroFill((gerarData.getMonth() + 1)) + '/' + gerarData.getFullYear() + ' ' + zeroFill(gerarData.getHours()) + ':' + zeroFill(gerarData.getMinutes());
    dataHora.innerText = horario
}, 1000)

// play e pause da animação
const bntPlayPause = document.getElementById('bnt-playPause').addEventListener('click', function(){
    const bntPlayPauseIcon = document.getElementById('bnt-playPause-icon')
    if (bntPlayPauseIcon.classList.contains('fa-pause')){
        bntPlayPauseIcon.classList.remove('fa-pause')
        bntPlayPauseIcon.classList.add('fa-play')
    } else {
        bntPlayPauseIcon.classList.remove('fa-play')
        bntPlayPauseIcon.classList.add('fa-pause')
    }
    if (bntPlayPauseIcon.classList.contains('fa-pause')){
        for(let i = 0; i<= 18;i++){
        const animacaoPiano = document.getElementsByClassName('animacao-texto-caractere')[i]
        animacaoPiano.classList.add('animacao-ativada')
        }
    } else {
        for(let i = 0; i<= 18;i++){
        const animacaoPiano = document.getElementsByClassName('animacao-texto-caractere')[i]
        animacaoPiano.classList.remove('animacao-ativada')
        }
    }
})
for(let i = 0; i<= 18;i++){
    const animacaoPiano = document.getElementsByClassName('animacao-texto-caractere')[i]
    animacaoPiano.classList.toggle('animacao-ativada')
}