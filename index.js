window.onload = function() {
    let index = 0;
    let indexMax = 151;
    const getById = (id) => document.getElementById(id);
    const setBackground = (id, value) => getById(id).setAttribute('style', `background: ${value}`);

   
    if(index == 0) {
        getById("card-show").innerHTML = `
        
        <input type="checkbox" id="switch" />
        <button type="button" id="prev" class="button">&lt</button>
        <img class="img" id="frontImage" src="src/pokedex.png" alt="">
            <label id="label" class="flip-container" hidden for="switch" >
                <div class="flip-container">
                    <div class="flipper">
                        <div class="front">
                            <div id="card-front" class="box"></div>
                        </div>
                        <div class="back">
                            <div id="card-back" class="box"></div>
                        </div>
                    </div>
                </div>
            </label>
        
        <button type="button" id="next" class="button">&gt</button>`
    } else {
        getById("frontImage").setAttribute(hidden, true);
        getById("label").setAttribute(hidden, false);
    }

    document.querySelectorAll("button").forEach(button => button.addEventListener("mouseup", async function(event){
        if(event.target.id === "next") {
            index >= indexMax ? index = 1 : index++;
        } else if(event.target.id === "prev") {
            index <= 1 ? index = indexMax : index--;
        }
        await pokemons(index)
        updateCard(pokemon);
    }));


    /*getById("search").addEventListener("keyup", function(event){
        event.preventDefault();
        updateCard(pokemons(index));
    })
    */

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
