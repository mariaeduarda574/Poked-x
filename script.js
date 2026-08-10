const img = document.getElementById("img-pokemon");
const nome = document.getElementById("nome-pokemon");
const input = document.getElementById("input-pokemon");
const tipo = document.getElementById("tipo-pokemon");

async function pokedex (){
    const json = await fetch("https://pokeapi.co/api/v2/pokemon/"+ input.value);
    pokemon = await json.json();
    isshiny = true;
    

    
    nome.innerText = pokemon.forms[0].name;
    img.src = pokemon.sprites.front_default;
    tipo.innerText = pokemon.types[0].type.name;
};
let pokemon;
let isshiny = false;

async function shiny() {
    if (pokemon == null)
        return;

    isshiny = !isshiny;

    if (isshiny)
        img.src = pokemon.sprites.front_default;
    else
        img.src = pokemon.sprites.front_shiny;

}