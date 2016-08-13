


var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var arrayLength = alphabet.length;
var newBet = [];


function alphaStacker() {
	for (var i = 0; i < arrayLength; i++) {
    newBet += alphabet[i];
    console.log(newBet.replace(/(.{5})/g, '$1 ').trim());
   }
}

alphaStacker();






