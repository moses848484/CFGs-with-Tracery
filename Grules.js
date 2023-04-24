let sentences = []
//The grammar rules and assigning the give fuction its function.
function generate() {
    var rules = {
        "start": "#[identity:#character#]story#",
        "adj": ["brave", "ugly", "tedious", "cunning", "trecherous"],
        "name": ["Luyando", "Paul", "Abel", "Christopher", "Hassan", "Moses"],
        "verb": ["sung", "fought", "wept","walked"],
        "character": ["hero", "villan","monster","genius","nerd"],
        "adv": ["loudly", "quietly", "swiftly", "slowly", "faintly","madly","relentlesly"],
        "animal": ["frog", "cow", "chief", "nyami-nyami"],
        "place": ["field", "mountain", "hill", "forest", "trench","city","town","desert"],
        "time": ["evening", "day"],
        "story": ["The #adj# #identity# #verb# the #animal# #adv# and #adv# left the scene. Later on in the #time#, the #character# met with #name# at the #place# to discuss about the earlier event."]
    }
    //Calling the tracery function to create the grammar we just defined and generating some end result from it.
    let grammar = tracery.createGrammar(rules);
    let expansion = grammar.flatten('#start#');

    sentences.push(expansion);
    printSentences(sentences);
}
function printSentences(sentences) {
    let textBox = document.getElementById("sentences");
    textBox.innerHTML = "";
    for(let i=sentences.length-1; i>=0; i--) {
        textBox.innerHTML += "<p>"+sentences[i]+"</p>"
    }
}
