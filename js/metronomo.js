// metronomo 
const metronomoBnt = document.getElementById('metronomo-bnt')
metronomoBnt.addEventListener('click', function(){
    metronomoBnt.style.background = '#161616'
    const attr = document.createAttribute('disabled')
    metronomoBnt.setAttributeNode(attr)
    tocar()
})
function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}
function tocar(){
    const tempo = document.getElementById('metronomo-tempo')
    const metronomoAudio = document.getElementById('metronomo-audio')
    const bntIconPlayPause = document.getElementById('bnt-icon-play-pause')

    var tocando = setInterval(() => {
        metronomoAudio.play()

        setTimeout(() => {
            clearInterval(tocando)
            metronomoBnt.removeAttribute('disabled')
            metronomoBnt.style.background = '#B5B5B5'
            bntIconPlayPause.style.color = 'initial'
        }, tempo.value*1000);

    }, 1000);
    bntIconPlayPause.animate([
        {transform: 'rotateZ(360deg'}
    ],{
        duration: tempo.value*1000,
    })
    bntIconPlayPause.style.color = '#b5b5b5'
}