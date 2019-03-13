const URL = "https://my-little-cors-proxy.herokuapp.com/https://anapioficeandfire.com/api/characters/";

fetch(URL)
    .then(function (response){ // Process the response so we can use it
        return response.json();
    })
    .then(function (theActualData){ // Receive the Actual Data and do something
        console.log(theActualData);
    });