//test
//alert('Hello World! Welcome to Poké-Porium!')

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
    }

]

let pokemonList2 = [
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

    {name: 'Caterpie',
    height: 0.3,
    types: 'Bug'
    }
    
]

let pokemonCount = 1;

function printArrayDetails(list){
    for (let i=0; i < list.length; i++){

        //adds space between pokemon
        if (pokemonCount === 1) {
            document.write("<div class= 'pokemonBorder'>");
        }
    
        //If Pokemon height is larger then 1.5 then highlight it red
        if (list[i].height > 1.5) {
            document.write("<div style='background-color:#ff9c9c;'>");
            document.write("<div class='pokemonName'>" + list[i].name + "</div>");
            document.write("<div>Height:" + list[i].height + "- Wow, that's big!</div>");
            document.write("<div>Type(s):" + list[i].types + "</div>");
        }
        //If Pokemon height is smaller then 0.6 then hightlight it blue
        else if (list[i].height < 0.6) {
            document.write("<div style='background-color:#9cbfff;'>");
            document.write("<div class='pokemonName'>" + list[i].name + "</div>");
            document.write("<div>Height:" + list[i].height + "- Thats so small!</div>");
            document.write("<div>Type(s):" + list[i].types + "</div>")
        }
        else {
            document.write("<div>");
            document.write("<div class='pokemonName'>" + list[i].name + "</div>");
            document.write("<div>Height:" + list[i].height + "</div>");
            document.write("<div>Type(s):" + list[i].types + "</div>")
    
        }
    
        document.write("</div>")
    }
}

printArrayDetails(pokemonList);
printArrayDetails(pokemonList2);


function divide(dividend, divisor){
    if (divisor === 0){
        return "You're trying to divide by zero."
    } else{
        let result = dividend / divisor;
        return result;
    }
}

console.log(divide(4, 2));
console.log(divide(7, 0));
console.log(divide(1, 4));
console.log(divide(12, -3));
