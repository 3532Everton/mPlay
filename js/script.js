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


