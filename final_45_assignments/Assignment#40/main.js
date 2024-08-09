// Assignment # 40
// Album: Write a function called make_album() that builds a Object describing a music album
var make_album = function (artist_name, album_title, numberOfTracks) {
    var album = { artist_name: artist_name, album_title: album_title, };
    if (numberOfTracks) {
        album["numberOfTracks"] = numberOfTracks;
    }
    return album;
};
var album1 = make_album("Abdullah", "Hunted Albums"); //1.
console.log("Album1: ", album1);
var album2 = make_album("Adeel", "Zoo Albums"); //2.      
console.log("Album2: ", album2);
var album3 = make_album("Huzaifa", "Story Albums"); //3.
console.log("Album3: ", album3);
// Calling function with additional paramenter(numberOfTracks)
var additionalAlbum = make_album("Nasir", "Picnic Albums", 8);
console.log("Additional Album: ", additionalAlbum);
