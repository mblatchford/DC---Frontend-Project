let queryStr = "planets";

function getImages(queryStr){
    // debugger;
     // fetch photos from api dynamically based on query 
    // abstracted accessKey into seperate file
    const URI = `https://api.unsplash.com/search/photos/?query=${queryStr}&orientation=squarish&page=1&per_page=8&client_id=${accessKey}`;
    fetch(URI, {
    headers: {
        'Content-Type': 'application/json',
        // api suggested add
        'Accept-Version' : 'v1'
      }
    })
    //stringified data needs to be converted to json for use
    .then(str => str.json())
    // temp helper to check for valid api calls
    .then(mbHelper)
}

// loop my json array and extract 8 small images
function mbHelper (jsonData){
    for(let i = 0; i < 8; i++ ){
    console.log(jsonData.results[i].urls.small);
    }
}