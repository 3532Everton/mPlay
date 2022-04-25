document.querySelectorAll('.tecla-branca').forEach(teclaB => {
    teclaB.addEventListener("click", function(){
        var nota = teclaB.dataset.key
        const audio = new Audio(`./sound/${notas[nota]}`);
        audio.play();
    })
})
document.querySelectorAll('.tecla-preta').forEach(teclaP => {
    teclaP.addEventListener("click", function(){
        var nota = teclaP.dataset.key
        const audio = new Audio(`./sound/${notas[nota]}`)
        audio.play()
    })
})

const notas = {
    c1: "somzinho.wav",
    c1S: "Metronome Lo.wav",
    d1: "oi",
    d1S: "oi",
    e1: "oi",
    f1: "oi",
    f1S: "oi",
    g1: "oi",
    g1S: "oi",
    a1: "oi",
    a1S: "oi",
    b1: "oi",
    c2: "oi",
    c2S: "oi",
    d2: "oi",
    d2S: "oi",
    e2: "oi",
    f2: "oi",
    f2S: "oi",
    g2: "oi",
    g2S: "oi",
    a2: "oi",
    a2S: "oi",
    b2: "oi",
    c3: "oi",
    c3S: "oi",
    d3: "oi",
    d3S: "oi",
    e3: "oi",
    f3: "oi",
    f3S: "oi",
    g3: "oi",
    g3S: "oi",
}