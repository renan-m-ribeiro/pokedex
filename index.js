window.onload = function() {
    let index = 0;

    document.querySelectorAll("button").forEach(button => button.addEventListener("mouseup", function(event){
        if(event.target.id === "next") {
            index >= pokemons.length -1 ? index = 0 : index++;
        } else if(event.target.id === "prev") {
            index <= 0 ? index = pokemons.length -1 : index--;
        }
        Object.keys(pokemons[index]).forEach(key => document.getElementById(key).textContent = pokemons[index][key]);
        document.getElementById("image").src = pokemons[index].image;
    }));
}