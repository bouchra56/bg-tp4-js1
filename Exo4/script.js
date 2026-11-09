//mode strict pour signaler les variables non définé (vu dans le slide 52)
"use strict";
// Déclaration d'un objet produit avec let (vu dans le slide 40 et 52)
let produit ={
    nom:"Table",
    prix:20000,
    quantite:10
};
let valeurStock=produit.prix*produit.quantite;
//Affichage dans la concole (Vu dans le slide 34)
console.log("Le produit:",produit);
console.log("La valeur de stock :",valeurStock);

// Déclaration d'un tableau d'objets catalogue (vu dans slide 38 et 52)
let catalogue=[
{nom: "chaise",prix:1500,quantite:20},
{nom:"Mirroir",prix:3500,quantite:10},
{nom:"Porte",prix:200000,quantite:10},
{nom:"tv",prix:45000,quantite:8},
{nom:"clavier",prix:5000,quantite:15},
];
let somme=0;
//Boucle For (vu dans le slide 45)
//opérateur combiné (vu dans le slide 42)
for (let p of catalogue){
    somme+=p.prix;
}
//length donne la taille de tableau (vu dans le slide 45)
let prixMoyen=somme/catalogue.length;
// sélectionner les produit dont le prix depasse le prix moy de catalogue(vu dans le slide 39)
// Fonction fléchée utilisée comme condition (vu dans le slide 47)
let produitsChers=catalogue.filter(p =>p.prix>prixMoyen);
//Afficher dans la console (vu dans le slide 34)
console.log("Prix moyen du catalogue :", prixMoyen);
console.log("Produits dont le prix dépasse le prix moyen :");
//Boucle For (vu dans le slide 45)
for(let p of produitsChers){
    console.log(p.nom,":",p.prix);
}

//calcul du nombre totale d'article et la valeur globale de stock avec reduce (vu dans le slide 39)
let totalArticles = catalogue.reduce((acc, p) => acc + p.quantite, 0);
let valeurGlobale = catalogue.reduce((acc, p) => acc + p.prix * p.quantite, 0);
//Afficher dans la console (vu dans le slide 34)
console.log("Nombre total d'articles :", totalArticles);
console.log("Valeur globale du stock :", valeurGlobale);

// Déclaration d'une fonction (vu dans le slide 46)
function calculerValeurStock(p) {
    return p.prix * p.quantite;
}
//Boucle For (vu dans le slide 45)
for (let p of catalogue) {
    // Appel de la fonction (vu dans le slide 46)
    console.log(`Valeur du stock de ${p.nom} :`, calculerValeurStock(p));
}

//fonction avec callback (vu dans le slide 48)
function appliquerTraitement(tableau, callback) {
    // Boucle for..of (vu dans le slide 45)
    for (let element of tableau) {
        // Appel du callback pour chaque élément
        callback(element);
    }
}
//Afficher les noms dans la console (vu dans le slide 34) + Fonction fléchée passée en callback (vu dans le slide 47 et 48)
console.log("Noms des produits :");
appliquerTraitement(catalogue, (p) => {
    console.log(p.nom);
});
//Afficher les prix dans la console (vu dans le slide 34) + Fonction fléchée passée en callback (vu dans le slide 47 et 48)
console.log("Prix des produits :");
appliquerTraitement(catalogue, (p) => {
    console.log(p.prix);
});