var fs = require('fs'),
    file = process.argv[2],
    lines;

function callback(err, data) {
    lines = data.toString().split('\n').length - 1;
    console.log(lines);
} // la fonction est de la ligne 5 à 9
fs.readFile(file, callback);

//on peut écrire la fonction callback soit dedans, soit en dehors. dans ce cas c'est en dehors. On l'appelle donc dans la ligne 10

/*
FONCTION CALLBACK DEDANS...
fs.readFile(file, function callback(err, data) {
    lines = data.toString().split('\n').length - 1;
    console.log(lines);
});
 */
// -----------------------------------------------------------------------------------------------
// SOLUTION NODESCHOOL

    var fs = require('fs')
    var file = process.argv[2]

    fs.readFile(file, function (err, contents) {
      if (err) {
        return console.log(err)
      }
      // On peut aussi utiliser `fs.readFile(file, 'utf8', callback)`
      var lines = contents.toString().split('\n').length - 1
      console.log(lines)
    })
// -----------------------------------------------------------------------------------------------


