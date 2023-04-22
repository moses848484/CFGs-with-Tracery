let scenario = []
//The grammar rules and assigning the give fuction its function.
function give() {
    var rules = {
        "start": "#[character:#animal#]story#",
        "adj": ["brave", "ugly", "tedious", "cunning", "trecherous"],
        "name": ["Luyando", "Paul", "Abel", "Christopher", "Hassan", "Moses"],
        "verb": ["sung", "fought", "wept","walked"],
        "character": ["hero", "villan","monster","genius","nerd"],
        "adv": ["loudly", "quietly", "swiftly", "slowly", "faintly","madly","relentlesly"],
        "animal": ["frog", "cow", "chief", "nyami-nyami"],
        "place": ["feild", "mountain", "hill", "bush site", "trench","city","town"],
        "time": ["evening", "day"],
        "story": ["The #adj# #character# #verb# #adv# and #adv# left the scene. Later on in the #time#, the #character# met with #name# at the #place# to discuss about the earlier event."]
    }
    //Calling the tracery function to create the grammar we just defined and generating some end result from it.
    let grammar = tracery.createGrammar(rules);
    let expansion = grammar.flatten('#start#');

    scenario.push(expansion);
    printScenario(scenario);
}
function printScenario(scenario) {
    let textBox = document.getElementById("scenario");
    textBox.innerHTML = "";
    for(let i=scenario.length-1; i>=0; i--) {
        textBox.innerHTML += "<p>"+scenario[i]+"</p>"
    }
}
