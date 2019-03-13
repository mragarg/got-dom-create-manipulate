const URL = "https://my-little-cors-proxy.herokuapp.com/https://anapioficeandfire.com/api/characters/";

let allCharactersArray = [];

function accumulateCharacters(theActualData){ // Receive the Actual Data and do something
    // console.log(theActualData);
    allCharactersArray = [
        ...allCharactersArray,
        ...theActualData
    ];
}

fetch(URL)
    .then(function (response){ // Process the response so we can get the data
        return response.json();
    })
    .then(accumulateCharacters);