let pokemonRepository = (function (){
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function add(pokemon){
        pokemonList.push(pokemon);
    };
    
    function getAll() {
        return pokemonList;
    };

    function addListItem(pokemon) {
        
        let pokemonList = document.querySelector('.pokemon-list');
        let listPokemon = document.createElement('li');
        let button = document.createElement('button');
        
        button.innerText = pokemon.name;
        button.classList.add('button-close');
        button.classList.add( 'btn','button-class');
        button.setAttribute('data-toggle', 'modal');
        button.setAttribute('data-target', '#modal-container')
        listPokemon.classList.add('list-group-item', 'border-0');
        
        listPokemon.appendChild(button);
        pokemonList.appendChild(listPokemon);

        button.addEventListener('click', function(){
            showDetails(pokemon);
        });
        
    };

    function showDetails(pokemon){
        loadDetails(pokemon).then(function (){
           showModal(pokemon);
        });
    };

    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item){
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        }).catch(function (e){
            console.error(e);
        })
    };

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function(response){
            return response.json();
        }).then(function (details){
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function(e){
            console.log(e);
        });
    };

    function showModal(pokemon){
        let modalBody = $(".modal-body");
        let modalTitle = $(".modal-title");

        //clear existing content of the modal
        modalTitle.empty();
        modalBody.empty();

        //creat name element
        let nameElement = $("<h1>" + pokemon.name + "</h1>");

        let imgElement = $('<img>')
        imgElement.attr('src', pokemon.imageUrl);
      
        let heightElement = $('<p>' + 'Height: ' + pokemon.height + '</p>');

        let typesElement = document.createElement('p');
        typesElement.innerText = ('Type(s): ') + pokemon.types;


      
        modalTitle.append(nameElement);
        modalBody.append(imgElement);
        modalBody.append(heightElement)
        modalBody.append(typesElement);


    };

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails,
        showModal: showModal
    };
    
    
    
})();



pokemonRepository.loadList().then(function(){
    pokemonRepository.getAll().forEach(function(pokemon){
        pokemonRepository.addListItem(pokemon);
    });
});