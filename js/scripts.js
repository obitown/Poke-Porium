let pokemonRepository = (function (){
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    let modalContainer = document.querySelector('#modal-container');

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
        button.classList.add('button-class');
        
        listPokemon.appendChild(button);
        pokemonList.appendChild(listPokemon);
        
        //adds pokemon name to console on click
        button.addEventListener('click', function(){
            showDetails(pokemon)
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
        //clear existing modal
        modalContainer.innerHTML = '';
        
        let modal = document.createElement('div');
        modal.classList.add('modal');
      
        //add new modal content
        let closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'Close';
        closeButtonElement.addEventListener('click', hideModal);
      
        let titleElement = document.createElement('h1');
        titleElement.innerText = pokemon.name;

        let imgElement = document.createElement('img');
        imgElement.src = pokemon.imageUrl;
      
        let contentElement = document.createElement('p');
        contentElement.innerText = ('Height:') + pokemon.height;

        let typesElement = document.createElement('p');
        typesElement.innerText = ('Type(s): ') + pokemon.types;


      
        modal.appendChild(closeButtonElement);
        modal.appendChild(titleElement);
        modal.appendChild(imgElement);
        modal.appendChild(typesElement);
        modal.appendChild(contentElement);
        modalContainer.appendChild(modal);
      
        modalContainer.classList.add('is-visible');
    };

    function hideModal(){
        let modalContainer = document.querySelector('#modal-container');
        modalContainer.classList.remove('is-visible');    
    };

    //hide modal on click outsid modal
    modalContainer.addEventListener('click', (e)=>{
        //since this is also triggered when clicking inside the modal
        //we only want to close if the user clicks directly on the overlay
        let target = e.target;
        if (target === modalContainer){
          hideModal();
        };
    })

    //hide modal when keydown=Esc
    window.addEventListener('keydown', (e)=> {
        let modalContainer = document.querySelector('#modal-container');
        if(e.key === 'Escape' && modalContainer.classList.contains('is-visible')){
          hideModal();
        }
    });

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails,
        loadList: loadList
    };
    
    
    
})();



pokemonRepository.loadList().then(function(){
    pokemonRepository.getAll().forEach(function(pokemon){
        pokemonRepository.addListItem(pokemon);
    });
});