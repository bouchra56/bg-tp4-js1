//mode strict pour signaler les variables non définé (vu dans le slide 52)
"use strict";
// Déclaration du tableau Students (vu dans slide 38 ,41 et 52)
const Students = [
    { 
      id: 1000,
      prenom: "JOHN",
      nom: "DOE",   
      note: 14,
      cre: 5 
    },
	{ 
        id: 2000, 
        prenom: "BOB", 
        nom: "CARLTON", 
        note: 7, 
        cre: 1 
    },
    { 
        id: 3000,
        prenom: "RAYANE",
        nom: "SMITH",  
        note: 13,
        cre: 3
    }
];
// Fonction B : vérifier si la note est supérieure ou égale à 10
// Fonction avec paramètre et retour booléen (vu dans le slide 47)
function B(note) {
    return note >= 10;
}
// A appelle B et affiche le résultat avec console ( vu dans slide 34 et 46)
// Boucle For (vu dans le slide 45)
// Condition If/Else (vu dans le slide 43)
function A() {
    for (let i = 0; i < Students.length; i++) {
        if (B(Students[i][3])) {
            console.log(Students[i][0] + ": ADMIS");
        } else {
            console.log(Students[i][0] + ": AJOURNÉ");
        }
    }
}