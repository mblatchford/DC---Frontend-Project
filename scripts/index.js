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
    .then(packageImg)
    //.then(next function call -> @ian)
}

// loop json array, extract 8 small images, append attribution data
function packageImg(jsonData){
    let imgArray = [];
    for(let i = 0; i < 8; i++ ){
        // keep reintializing a new imgObj in the loop
        // else if outside, just accesing memory pointers to one object
        let imgObj = {
            src: "",
            attr_name: "",
            attr_url: ""
        };
       imgObj.src = `${jsonData.results[i].urls.small}`;
       imgObj.attr_name = `${jsonData.results[i].user.name}`;
       imgObj.attr_url = `${jsonData.results[i].links.html}`;
       imgArray.push(imgObj);
    }
    // console.table(imgArray);
    return imgArray;
}