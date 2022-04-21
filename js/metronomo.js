// metronomo 
const metronomoBnt = document.getElementById('metronomo-bnt')
metronomoBnt.addEventListener('click', function(){
    const bntIconPlayPause = document.getElementById('bnt-icon-play-pause')
    bntIconPlayPause.classList.remove('fa-play')
    bntIconPlayPause.classList.add('fa-pause')
    metronomoBnt.style.background = '#161616'
    const attr = document.createAttribute('disabled')
    metronomoBnt.setAttributeNode(attr)
    tocar(true)
})
function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}
function tocar(condicao){
    const tempo = document.getElementById('metronomo-tempo')
    const metronomoAudio = document.getElementById('metronomo-audio')
    const bntIconPlayPause = document.getElementById('bnt-icon-play-pause')

    var tocando = setInterval(() => {
        metronomoAudio.play()

        setTimeout(() => {
            clearInterval(tocando)
            metronomoBnt.removeAttribute('disabled')
            metronomoBnt.style.background = '#B5B5B5'
            bntIconPlayPause.classList.remove('fa-pause')
            bntIconPlayPause.classList.add('fa-play')
            
        }, tempo.value*1000);
    }, 1000);
}