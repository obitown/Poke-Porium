//test
alert('Hello World! Welcome to Poké-Porium!')

let pokemonList = [
    {name: 'Bulbasaur', 
    height: 0.7, 
    types:['Monster', 'Grass']
},
    
    {name: 'Ivysaur', 
    height: 1, 
    types:['Monster', 'Grass']
},
    
    {name: 'Venusaur', 
    height: 2, 
    types: ['Monster', 'Grass']
},
    
    {name: 'Charmander', 
    height: 0.6, 
    types: ['Monster', 'Dragon']
},
    
    {name: 'Charmeleon', 
    height: 1.1, 
    types: ['Monster', 'Dragon']
},
    
    {name: 'Charizard', 
    height: 1.7, 
    types: ['Monster', 'Dragon']
},
    
    {name: 'Squirtle', 
    height: 0.5, 
    types: ['Monster', 'Water']
},
    
    {name: 'Wartortle', 
    height: 1, 
    types: ['Monster', 'Water']
},
    
    {name: 'Blastoise', 
    height: 1.6, 
    types: ['Monster', 'Water']
},
    
]

let pokemonCount = 1;

for (let i=0; i < pokemonList.length; i++){

    //adds space between pokemon
    if (pokemonCount === 1) {
        document.write("<div>");
    }

    //If Pokemon height is larger then 1.5 then highlight it red
    if (pokemonList[i].height > 1.5) {
        document.write("<div style='background-color:#ff9c9c;'>");
        document.write("<div>" + pokemonList[i].name + "</div>");
        document.write("<div>Height:" + pokemonList[i].height + "- Wow, that's big!</div>");
    }
    //If Pokemon height is smaller then 0.6 then hightlight it blue
    else if (pokemonList[i].height < 0.6) {
        document.write("<div style='background-color:#9cbfff;'>");
        document.write("<div>" + pokemonList[i].name + "</div>");
        document.write("<div>Height:" + pokemonList[i].height + "- Thats so small!</div>");
    }
    else {
        document.write("<div>");
        document.write("<div>" + pokemonList[i].name + "</div>");
        document.write("<div>Height:" + pokemonList[i].height + "</div>");

    }

    document.write("</div>")
}