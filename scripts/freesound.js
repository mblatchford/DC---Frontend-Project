// query is checked ahead of time and coded to button init
let queryStr = "cartoon";
// durationEnd allows for searching longer or shorter effects
// may not be necessary in final build, but can be dynamically created
let durationEnd = 3;
// pageSize should increase as level size increases so not to pull
// down unnecessary amounts of data. Should leave enough overhead
// for some randomization though
let pageSize = 10;

let numSounds = 8;

function getSounds(queryStr,durationEnd,pageSize,numberSounds){
    // fetch sounds from api dynamically based on query 
    // include parameter for duration match in secondsgit
    // include parameter of pageSize for num results per fetch
    // abstracted accessKey into seperate file
    const URI = `https://freesound.org/apiv2/search/text/?query=${queryStr}&page_size=${pageSize}&filter=duration:[1 TO ${durationEnd}]&fields=name,url,id,username,previews&token=${accessKeyFreesound}`;
   
    fetch(URI)
    //stringified data needs to be converted to json for use
    .then(str => {
        const numSounds = numberSounds;
        return Promise.all([str.json(), numSounds]);
    })
    //pass json to sound extractor
    .then(packageSoundID)
    // .then(pass to next function)
}

// loop json array, extract 8 small sounds, append attribution data
function packageSoundID(jsonData){
    debugger;
     const numSounds = `${jsonData[1]}`;
    //a given query will return the same sounds from the api
    //randomizing the sounds taken will allow for a better user experience accross
    //games with the same query 

    function getRandomIntInclusive(min=0, max=jsonData[0].results.length-1) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
      }
    let soundsArray = [];
    for(let i = 0; i < numSounds; i++ ){
        // new randomized index with each loop
        let randomized = getRandomIntInclusive();
        let soundObj = {
            id: "",
            attr_name: "",
            attr_url: "",
            soundFile: ""
        }
        soundObj.id         =`${jsonData[0].results[randomized].id}`;
        soundObj.attr_name  =`${jsonData[0].results[randomized].username}`;
        soundObj.attr_url   =`${jsonData[0].results[randomized].url}`;
        soundObj.soundFile  =`${jsonData[0].results[randomized].previews["preview-hq-mp3"]}`;
        soundsArray.push(soundObj);
    }
    //uncomment the below to get a handle on what is being passed back to the promise chain
    console.table(soundsArray);
    return soundsArray;
}
