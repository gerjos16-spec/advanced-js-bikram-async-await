// Ejercicio 1
async function getRandomPokemon() {
    let id = Math.floor(Math.random() * 1025) + 1;
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    let data = await response.json();
    return data;
}

// Ejercicio 2
async function getImageAndName(pokemon) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    let data = await response.json();
    let name = data.name;
    let img = data.sprites.front_default;
    return { name, img };
}

// Ejercicio 3
async function printImageAndName(pokemon) {
    if (!pokemon) {
        let random = await getRandomPokemon();
        pokemon = random.name;
    }
    let { name, img } = await getImageAndName(pokemon);
    return `<section>
    <img src="${img}" alt="${name}">
    <h1>${name}</h1>
</section>`;
}

