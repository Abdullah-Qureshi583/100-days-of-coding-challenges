// Assignment # 40

// Album: Write a function called make_album() that builds a Object describing a music album

const make_album = (
    artist_name : string,
    album_title : string,
    numberOfTracks? : number
)=>{
    let album ={ artist_name, album_title,}
    if(numberOfTracks){album["numberOfTracks"] = numberOfTracks}
    return album;
}

let album1 = make_album("Abdullah","Hunted Albums");    //1.
console.log("Album1: ",album1);

let album2 = make_album("Adeel", "Zoo Albums");     //2.      
console.log("Album2: ",album2);

let album3 = make_album("Huzaifa", "Story Albums",)     //3.
console.log("Album3: ",album3);

// Calling function with additional paramenter(numberOfTracks)

let additionalAlbum = make_album("Nasir", "Picnic Albums",8)

console.log("Additional Album: ", additionalAlbum);






