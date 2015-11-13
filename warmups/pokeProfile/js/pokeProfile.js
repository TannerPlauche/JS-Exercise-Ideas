var pokeProfileApp = angular.module("PokemonProfile", []);

pokeProfileApp.controller("MainController", ['$scope', 'Service', function ($scope, Service) {

    $scope.getPokeData = Service.getPokeData;
    $scope.lookUpReference = 1;
    $scope.pokemonArray = Service.pokemonArray;

}]);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var app = angular.module("PokemonProfile");

app.service("Service", ['$http', function ($http) {

    this.pokemonURL = 'http://pokeapi.co/api/v1/pokemon/' + this.lookUpReference + '/'
    this.referenceNumber;
    this.currentPokemon = null;


    this.getPokeData = function (number) {
        $http.get($scope.pokemonURL).then(
            function (response) {
                this.pokemonArray = response.data;
                console.log(pokemonArray);
                console.log($scope.pokemonArray);
                this.currentPokemon = {
                    name: pokemonArray.name,
                    attack: pokemonArray.attack,
                    defense: pokemonArray.defense,
                    ability: pokemonArray[0].name
                };
                return $http.get('http://pokeapi.co/' + pokemonarray.sprites[0].resource.uri)
            }).then(function (response) {
            this.currentPokemon.sprite = "http://pokeapi.co" + response.data.image;
            return this.currentPokemon;

        });
    };




            }]);