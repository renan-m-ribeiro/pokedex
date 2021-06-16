window.onload = function() {
    let index = 0;
    updateCard(pokemons[index]);

    document.querySelectorAll("button").forEach(button => button.addEventListener("mouseup", function(event){
        if(event.target.id === "next") {
            index >= pokemons.length -1 ? index = 0 : index++;
        } else if(event.target.id === "prev") {
            index <= 0 ? index = pokemons.length -1 : index--;
        }
        updateCard(pokemons[index]);
    }));
    
    function updateBackground(pokemon){
        if (pokemon.type2 != "none") {
        document.getElementById("background").setAttribute("style", `background: linear-gradient( 135deg, ${colorsType[pokemon.type1]} 35% , ${colorsType[pokemon.type2]} 65% );`)
        } else {
            document.getElementById("background").setAttribute("style", `background: ${colorsType[pokemon.type1]}`)
        }
    }
    function updateCard(pokemon) {
        document.getElementById("card-front").innerHTML = `
        <p class="text" id="id">${pokemon.id}</p>
        <h1 class="text" id="name">${pokemon.name}</h1>
        <img class="img" id="image" src="${pokemon.image}" alt="">
        <div>
            <p class="text ${pokemon.type1} box3" id="type1">${pokemon.type1}</p>
            <p class="text ${pokemon.type2} box3" id="type2">${pokemon.type2}</p>
        </div>
        <div class="box2">
            <p class="text2" id="description">${pokemon.description}</p>
        </div>` 

        document.getElementById("card-back").innerHTML = `
        <p class="text" id="id">${pokemon.id}</p>
        <h1 class="text" id="name">${pokemon.name}</h1>`
        updateBackground(pokemon)
    }
}
