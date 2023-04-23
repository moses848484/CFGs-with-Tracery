/**
 * @author Kate
 */
let sentences = []

function generate() {
    var grammers = {
        "sentence": ["#human# is #often# #mood# when looking at the #natureNoun#"],
        "often": ["rarely", "never", "often", "almost always", "always", "sometimes"],
        "human": ["Luyando", "Hassan", "Christopher", "Paul", "Abel", "Moses", "John", "Ruth"],
        "mood": ["vexed", "excited", "serene", "relaxed", "jaded", "lucid"],
        "natureNoun": ["ocean", "mountain", "forest", "river", "sky"],

    }

    let grammar = tracery.createGrammar(grammers);
    let expansion = grammar.flatten('#sentence#');

    sentences.push(expansion);

    printSentences(sentences);
}

function printSentences(sentences) {
    let textBox = document.getElementById("sentences");
    textBox.innerHTML = " ";
    for (let i = sentences.length - 1; i >= 0; i--) {
        textBox.innerHTML += "<p>" + sentences[i] + "</p>"
    }
}