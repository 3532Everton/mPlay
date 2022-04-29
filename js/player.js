const audio = document.getElementById('audio')
const iconePlayer = document.getElementById('player-bnt')
const musicaescolhida = document.getElementById('dropdown-text')

function acionarBotao(){
    iconePlayer.addEventListener('click', () => {
        tocarMusica()
    })
}

document.querySelectorAll(".dropdown-item").forEach(musicas => {
    musicas.addEventListener('click', () => {
        let musica = musicas.dataset.nomemusica
        audio.src = `sound/music/${musica}.mp3`
        
        musicaescolhida.innerText = musica
        
        setTimeout(() => {
            musicaescolhida.classList.add("box-text-active")
        }, 1000)

        iconePlayer.classList.remove('fa-pause')
        iconePlayer.classList.add('fa-play')
        
        acionarBotao()
        tocarMusica()
    })
})

function tocarMusica(){
    if (iconePlayer.classList.contains('fa-play')){
        iconePlayer.classList.remove('fa-play')
        iconePlayer.classList.add('fa-pause')

        audio.play()
    } else {
        iconePlayer.classList.remove('fa-pause')
        iconePlayer.classList.add('fa-play')

        audio.pause()
    }
    informacoes()
    audio.addEventListener('timeupdate', function(){atualizarInformacoes()})
}
function informacoes(){
    setTimeout(()=>{informacoes()}, 1)
    
    document.getElementById('tempo-restante').innerText = secToStr( audio.currentTime )
    document.getElementById('tempo-final').innerText = secToStr( audio.duration )
    document.getElementById('barra-de-progresso').setAttribute('max', audio.duration)
}

function atualizarInformacoes(){
    document.getElementById('barra-de-progresso').value = audio.currentTime
    document.getElementById('tempo-restante').innerText = secToStr( audio.currentTime )
}
function secToStr( sec_num ) {
    sec_num = Math.floor( sec_num );
    var horas   = Math.floor(sec_num / 3600);
    var minutos = Math.floor((sec_num - (horas * 3600)) / 60);
    var segundos = sec_num - (horas * 3600) - (minutos * 60);
    
    if (horas   < 10)  horas    = "0"+horas;
    if (minutos < 10)  minutos  = "0"+minutos;
    if (segundos < 10) segundos = "0"+segundos;
    
    var tempo    = horas+':'+minutos+':'+segundos;
    
    return tempo;
}