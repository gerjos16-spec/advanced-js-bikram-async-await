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

// Ejercicio 4
async function getRandomDogImage() {
    let response = await fetch("https://dog.ceo/api/breeds/image/random");
    let data = await response.json();
    return data.message;
}

// Ejercicio 5
async function getRandomPokemonImage() {
    let pokemon = await getRandomPokemon();
    return pokemon.sprites.front_default;
}

// Ejercicio 6
async function printPugVsPikachu() {
    let pugResponse = await fetch("https://dog.ceo/api/breed/pug/images/random");
    let pugData = await pugResponse.json();
    let pikachu = await getImageAndName("pikachu");

    let battle = document.createElement("section");
    battle.innerHTML = `
    <h1>Pug VS Pikachu</h1>
    <div>
        <img src="${pugData.message}" alt="Pug" width="200">
        <h2>Pug</h2>
    </div>
    <div>
        <img src="${pikachu.img}" alt="${pikachu.name}" width="200">
        <h2>${pikachu.name}</h2>
    </div>`;
    document.body.appendChild(battle);
}

// Ejercicio 7
async function getRandomCharacter() {
    let id = Math.floor(Math.random() * 826) + 1;
    let response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    let data = await response.json();
    return data;
}

// Ejercicio 8
async function getRandomCharacterInfo() {
    let character = await getRandomCharacter();
    let img = character.image;
    let name = character.name;
    let episodes = character.episode;
    let episodeResponse = await fetch(episodes[0]);
    let episodeData = await episodeResponse.json();
    let firstEpisode = episodeData.name;
    let dateEpisode = episodeData.air_date;
    return { img, name, episodes, firstEpisode, dateEpisode };
}

// Ejercicio 9
async function printCharacterInfo() {
    let { img, name, episodes, firstEpisode, dateEpisode } = await getRandomCharacterInfo();

    let card = document.createElement("section");
    card.innerHTML = `
    <img src="${img}" alt="${name}">
    <h1>${name}</h1>
    <p>Episodios: ${episodes.length}</p>
    <p>Primer episodio: ${firstEpisode} (${dateEpisode})</p>`;
    document.body.appendChild(card);
}

window.addEventListener("load", () => {
    printPugVsPikachu();
    printCharacterInfo();
});
