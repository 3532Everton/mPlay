document.querySelectorAll('.tecla-branca').forEach(teclaB => {
    teclaB.addEventListener("click", function(){
        teclaB.style = estiloTeclaBranca
        setTimeout(() => {
            teclaB.style = ""
        }, 300)

        var nota = teclaB.dataset.key
        const audio = new Audio(`./sound/pianoSongs/${notas[nota]}`);
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
        const audio = new Audio(`./sound/pianoSongs/${notas[nota]}`)
        audio.play()

        const display = document.getElementById("display-painel")
        display.innerText = notas[nota].substring(0, notas[nota].length - 6) + "#"

    })
})

const notas = {
    c1: "DO1.mp3",
    c1S: "DOS1.mp3",
    d1: "RE1.mp3",
    d1S: "RES1.mp3",
    e1: "MI1.mp3",
    f1: "FA1.mp3",
    f1S: "FAS1.mp3",
    g1: "SOL1.mp3",
    g1S: "SOLS1.mp3",
    a1: "LA1.mp3",
    a1S: "LAS1.mp3",
    b1: "SI1.mp3",
    c2: "DO2.mp3",
    c2S: "DOS2.mp3",
    d2: "RE2.mp3",
    d2S: "RES2.mp3",
    e2: "MI2.mp3",
    f2: "FA2.mp3",
    f2S: "FAS2.mp3",
    g2: "SOL2.mp3",
    g2S: "SOLS2.mp3",
    a2: "LA2.mp3",
    a2S: "LAS2.mp3",
    b2: "SI2.mp3",
    c3: "DO3.mp3",
    c3S: "DOS3.mp3",
    d3: "RE3.mp3",
    d3S: "RES3.mp3",
    e3: "MI3.mp3",
    f3: "FA3.mp3",
    f3S: "FAS3.mp3",
    g3: "SOL3.mp3",
    g3S: "SOLS3.mp3",
}
const estiloTeclaBranca = ['background: linear-gradient(to top, #979797 15%, #ffffff 100%);height: 100%;box-shadow: none;']
const estiloTeclaPreta = ['background: linear-gradient(to top, #bbbbbb 0%, #000000 10%);']