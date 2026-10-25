//mode strict pour signaler les variables non définé (vu dans le slide 52)
"use strict";
// Déclaration d'un tableau d'étudiants (vu dans slide 38 et 52)
const etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];
// Déclaration d'un objet étudiant (vu dans slide 38 et 52)
const etudiant = {
    nom: "John",
    prenom: "Doe",
    age: 30
};
// Déclaration d'un tableau d'objets étudiants (vu dans slide 38 et 52)
const etudiantsObjets = [
    { nom: "nom1", prenom: "prenom1", age: 21 },
    { nom: "nom2", prenom: "prenom2", age: 22 },
    { nom: "nom3", prenom: "prenom3", age: 23 }
];
// f1 affichage des étudiants dans la console ( vu dans slide 34 et 46)
// boucle for (vu dans le slide 45)
function f1() {
    for (let i = 0; i < etudiants.length; i++) {
        console.log(etudiants[i]);
    }
}
// f2 affichage de l'objet étudiant dans la console ( vu dans slide 34 et 46)
function f2() {
    console.log(etudiant);
}
// f3 affichage des informations des étudiants dans la console ( vu dans slide 34 et 46)
// boucle for (vu dans le slide 45)
function f3() {
    for (let i = 0; i < etudiantsObjets.length; i++) {
        console.log(
            etudiantsObjets[i].nom + "-" +
            etudiantsObjets[i].prenom + "-" +
            etudiantsObjets[i].age
        );
    }
}