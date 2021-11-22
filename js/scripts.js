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
    function addListItem(pokemon) {
        
        let pokemonList = document.querySelector('.pokemon-list');
        let listPokemon = document.createElement('li');
        let button = document.createElement('button');
        
        button.innerText = pokemon.name;
        button.classList.add('button-class');
        
        listPokemon.appendChild(button);
        pokemonList.appendChild(listPokemon);
        
        //adds pokemon name to console on click
        button.addEventListener('click', function(){
            showDetails(pokemon)
        });
    }
    function showDetails(pokemon){
        console.log(pokemon.name);
    }
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails
    };
    
})();

pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
});