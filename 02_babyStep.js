/*   Écrivez un programme qui accepte un ou plusieurs nombres comme arguments
  de la ligne de commande, et affiche la somme de ces nombres sur la console
  (stdout).
  
    Vous pouvez accéder aux arguments de la ligne de commande via l’objet
  global process.  L’objet process a une propriété argv qui est un tableau
  contenant la ligne de commande complète : process.argv.

  Pour vous lancer, écrivez un programme, dans un fichier que vous
  appelleriez par exemple program.js, qui contient simplement :

     console.log(process.argv)
*/ 
  
  var result = 0, 
      i;

for (i = 2; i < process.argv.length; i++) {
    result += Number(process.argv[i]);
}

console.log(result);