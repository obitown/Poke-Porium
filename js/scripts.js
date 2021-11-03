let pokemonCount = 1;
let pokemonRepository = (function (){
    let pokemonList = [
        {
            name: 'Bulbasaur', 
            height: 0.7, 
            types:['Monster', 'Grass']
        },
        
        {
            name: 'Ivysaur', 
            height: 1, 
            types:['Monster', 'Grass']
        },
        
        {
            name: 'Venusaur', 
            height: 2, 
            types: ['Monster', 'Grass']
        },
        
        {
            name: 'Charmander', 
            height: 0.6, 
            types: ['Monster', 'Dragon']
        },
        
        {
            name: 'Charmeleon', 
            height: 1.1, 
            types: ['Monster', 'Dragon']
        },
    
        {
            name: 'Charizard', 
            height: 1.7, 
            types: ['Monster', 'Dragon']
        },
        
        {
            name: 'Squirtle', 
            height: 0.5, 
            types: ['Monster', 'Water']
        },
        
        {
            name: 'Wartortle', 
            height: 1, 
            types: ['Monster', 'Water']
        },
        
        {
            name: 'Blastoise', 
            height: 1.6, 
            types: ['Monster', 'Water']
        },
    
        {
            name: 'Caterpie',
            height: 0.3,
            types: 'Bug'
        }
    
    ]
    function add(pokemon){
        pokemonList.push(pokemon);
    }
    function getAll() {
        return pokemonList;
    }
    return {
        add : add(),
        getAll: getAll()
    };
})();

pokemonRepository.getAll.forEach(function(pokemon){
    if (pokemonCount === 1) {
        document.write("<div class='pokemonBorder'>")
    }  
    //list and highlights pokemon if > 1.5
    if (pokemon.height > 1.5) {
        document.write("<div class='pokemonName'>" + pokemon.name + "</div>")
        document.write("<div style='background-color:#ff9c9c'>Height: " + pokemon.height + " -Wow, that's big!</div>")
        document.write("<div>Type(s): " + pokemon.types + "</div>")
    }
    //list and highlight pokemon if < 0.6
    else if (pokemon.height < 0.6) {
        document.write("<div class='pokemonName'>" + pokemon.name + "</div>")
        document.write("<div style='background-color:#9cbfff'>Height: " + pokemon.height + " -Awh, so tiny!</div>")
        document.write("<div>Type(s): " + pokemon.types + "</div>")
    }
    //list all other of pokemon
    else {
        document.write("<div class='pokemonName'>" + pokemon.name + "</div>")
        document.write("<div>Height: " + pokemon.height + "</div>")
        document.write("<div>Type(s): " + pokemon.types + "</div>")
    }
});
