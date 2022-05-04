document.querySelectorAll('.tecla-branca').forEach(teclaB => {
    teclaB.addEventListener("click", function(){
        teclaB.style = estiloTeclaBranca
        setTimeout(() => {
            teclaB.style = ""
        }, 300)

        var nota = teclaB.dataset.key
        const audio = new Audio(`/sound/pianoSongs/${notas[nota]}`);
        audio.play();

        const display = document.getElementById("display-painel")
        display.innerText = notas[nota].substring(0, notas[nota].length - 5)
    })
})
document.querySelectorAll('.tecla-preta').forEach(teclaP => {
    teclaP.addEventListener("click", function(){
        teclaP.style = estiloTeclaPreta
        setTimeout(() => {
            teclaP.style = ""
        }, 300)

        var nota = teclaP.dataset.key
        const audio = new Audio(`/sound/pianoSongs/${notas[nota]}.mp3`)
        audio.play()

        const display = document.getElementById("display-painel")
        display.innerText = notas[nota].substring(0, notas[nota].length - 5)

    })
})

const notas = {
    c1: "DO1.mp3",
    c1S: "DO#1.mp3",
    d1: "RE1.mp3",
    d1S: "RE#1.mp3",
    e1: "MI1.mp3",
    f1: "FA1.mp3",
    f1S: "FA#1.mp3",
    g1: "SOL1.mp3",
    g1S: "SOL#1.mp3",
    a1: "LA1.mp3",
    a1S: "LA#1.mp3",
    b1: "SI1.mp3",
    c2: "DO2.mp3",
    c2S: "DO#2.mp3",
    d2: "RE2.mp3",
    d2S: "RE#2.mp3",
    e2: "MI2.mp3",
    f2: "FA2.mp3",
    f2S: "FA#2.mp3",
    g2: "SOL2.mp3",
    g2S: "SOL#2.mp3",
    a2: "LA2.mp3",
    a2S: "LA#2.mp3",
    b2: "SI2.mp3",
    c3: "DO3.mp3",
    c3S: "DO#3.mp3",
    d3: "RE3.mp3",
    d3S: "RE#3.mp3",
    e3: "MI3.mp3",
    f3: "FA3.mp3",
    f3S: "FA#3.mp3",
    g3: "SOL3.mp3",
    g3S: "SOL#3.mp3",
}
const estiloTeclaBranca = ['background: linear-gradient(to top, #979797 15%, #ffffff 100%);height: 100%;box-shadow: none;']
const estiloTeclaPreta = ['background: linear-gradient(to top, #bbbbbb 0%, #000000 10%);']