window.onload = function() {
    let index = 0;
    const getById = (id) => document.getElementById(id);
    const setBackground = (id, value) => getById(id).setAttribute('style', `background: ${value}`);
    updateCard(pokemons[index]);

    document.querySelectorAll("button").forEach(button => button.addEventListener("mouseup", function(event){
        if(event.target.id === "next") {
            index >= pokemons.length - 1 ? index = 0 : index++;
        } else if(event.target.id === "prev") {
            index <= 0 ? index = pokemons.length -1 : index--;
        }
        updateCard(pokemons[index]);
    }));

    getById("search").addEventListener("keyup", function(event){
        const foundIndex = pokemons.findIndex(pokemon => pokemon.name.includes(event.target.value.toLowerCase())) || 0;
        updateCard(pokemons[foundIndex]);
    })

    function updateBackground(pokemon){
        ["type1", "type2"].forEach(type => setBackground(type, colorsType[pokemon[type]]));
        if (pokemon.type2) {
            setBackground("background", `linear-gradient( 135deg, ${colorsType[pokemon.type1]} 35% , ${colorsType[pokemon.type2]} 65% );`)
        } else {
            setBackground("background", colorsType[pokemon.type1]);
            getById("type2").setAttribute("style", `display: none`);
        }
    }

    function updateCard(pokemon) {
        getById("card-front").innerHTML = `
            <p class="text" id="id">${pokemon.id}</p>
            <h1 class="text name" id="name">${pokemon.name}</h1>
            <img class="img" id="image" src="${pokemon.image}" alt="">
            <div>
                <p class="text ${pokemon.type1} box3" id="type1">${pokemon.type1}</p>
                <p class="text ${pokemon.type2} box3" id="type2">${pokemon.type2}</p>
            </div>
            <div class="box2">
                <p class="text2" id="description">${pokemon.description}</p>
            </div>` 

        getById("card-back").innerHTML = `
            <p class="text" id="id">${pokemon.id}</p>
            <h1 class="text" id="name">${pokemon.name}</h1>`
        updateBackground(pokemon)
    }
}
