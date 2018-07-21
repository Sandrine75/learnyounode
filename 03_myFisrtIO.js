var fs = require('fs'),// ici on déclare tout espacé par une virgule. C'est comme var... = ...
    file = process.argv[2],
    buffer, // equivalent à var buffer = require ('buffer');
    lines;

if (!file) // le ! correspond à une négation... >> si file n'est pas rempli, alors...
{console.log('Please, enter the file name as parameter')
};

buffer = fs.readFileSync(file);
lines = buffer.toString().split("\n"); // le /n est un retour à la ligne... ici on compte le nombre de retour à la ligne

console.log(buffer.toString().split("\n").length - 1); // le total est le nombre d'espace de ligne -1



//autre methode

var fs = require('fs');
var file = process.argv[2];
var buffer = fs.readFileSync(file);
var numberOfNewLines = buffer.toString().split('\n').length - 1;
console.log(numberOfNewLines);