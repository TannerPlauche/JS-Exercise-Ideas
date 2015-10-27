// xmr = xml http request

function pokeParser(urlPath) {
    var xhr = new XMLHttpRequest();
    xhr.open("Get", urlPath, true); //true here means asychronous. 
        //open the request
    xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var pokemonObjects = JSON.parse(xhr.responseText).objects[0].pokemon;
                var pokemonList = document.getElementById("pokemonList");

                for (var i in pokemonObjects) {
                    var paragraph = document.createElement("p");
                    var pTextNode = document.createTextNode(pokemonObjects[i].name);
                    paragraph.appendChild(pTextNode);
                    pokemonList.appendChild(paragraph);
                }
            }
        }
        //handle the onReadyStateChange event
        //Check if the status == 200 && xhr.readyState === 4
        //
    xhr.send();
};


//function pokeParser(urlPath) {
//    var xhr = new XMLHttpRequest();
//
//    // open the request
//    xhr.open("GET", "/js/pokemon.json", true);
//
//    // handle the onReadyStateChange event
//    xhr.onreadystatechange = function () {
//        if (xhr.readyState === 4 && xhr.status === 200) {
//            var pokemonObjects = JSON.parse(xhr.responseText).objects[0].pokemon;
//            var pokemonList = document.getElementById("pokemonList");
//
//            for (var i in pokemonObjects) {
//                var paragraph = document.createElement("p");
//                var pTextNode = document.createTextNode(pokemonObjects[i].name);
//                paragraph.appendChild(pTextNode);
//                pokemonList.appendChild(paragraph);
//            }
//        }
//    }
//
//    // send the request
//    xhr.send();
//};
//
//pokeParser("pokemon.json");
//
