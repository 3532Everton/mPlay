document.querySelectorAll('.tecla-branca').forEach(teclaB => {
    teclaB.addEventListener("click", function(){
        var nota = teclaB.dataset.key
        const audio = new Audio(`./sound/${notas[nota]}`);
        audio.play();

        const display = document.getElementById("display-painel")
        display.innerText = notas[nota].substring(0, notas[nota].length - 5)
    })
})
document.querySelectorAll('.tecla-preta').forEach(teclaP => {
    teclaP.addEventListener("click", function(){
        var nota = teclaP.dataset.key
        const audio = new Audio(`./sound/${notas[nota]}`)
        audio.play()

        const display = document.getElementById("display-painel")
        display.innerText = notas[nota].substring(0, notas[nota].length - 5)
    })
})

const notas = {
    c1: "somzinho.wav",
    c1S: "Metronome Lo.wav",
    d1: "RÉ1.wav",
    d1S: "RÉ#1.wav",
    e1: "MI1.wav",
    f1: "FÁ1.wav",
    f1S: "FÁ#1.wav",
    g1: "SOL1.wav",
    g1S: "SOL#1.wav",
    a1: "LÁ1.wav",
    a1S: "LÁ#1.wav",
    b1: "SI1.wav",
    c2: "DÓ2.wav",
    c2S: "DÓ#2.wav",
    d2: "RÉ2.wav",
    d2S: "RÉ#2.wav",
    e2: "MI2.wav",
    f2: "FÁ2.wav",
    f2S: "FÁ#2.wav",
    g2: "SOL2.wav",
    g2S: "SOL#2.wav",
    a2: "LÁ2.wav",
    a2S: "LÁ#2.wav",
    b2: "SI2.wav",
    c3: "DÓ3.wav",
    c3S: "DÓ#3.wav",
    d3: "RÉ3.wav",
    d3S: "RÉ#3.wav",
    e3: "MI3.wav",
    f3: "FÁ3.wav",
    f3S: "FÁ#3.wav",
    g3: "SOL3.wav",
    g3S: "SOL#3.wav",
}
