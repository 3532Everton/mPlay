// metronomo 
const metronomoBnt = document.getElementById('metronomo-bnt')
metronomoBnt.addEventListener('click', function(){
    const bntIconPlayPause = document.getElementById('bnt-icon-play-pause')
    metronomoBnt.classList.toggle('iniciado')
    if (metronomoBnt.classList.contains('iniciado')){
        bntIconPlayPause.classList.remove('fa-play')
        bntIconPlayPause.classList.add('fa-pause')
    } else {
        bntIconPlayPause.classList.remove('fa-pause')
        bntIconPlayPause.classList.add('fa-play')
    }
})