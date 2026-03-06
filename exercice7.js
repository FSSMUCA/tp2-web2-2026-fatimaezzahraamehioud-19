// Déclaration des variables
let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = null;
let reductionPourcentage = 10; // en %
let estMembre = true;
let soldeCompte = 250;

//  Calcul du sous-total
let sousTotal = prix * quantite;
console.log("Sous-total : " + sousTotal + " MAD");

//  Calcul de la réduction (uniquement si codePromo n'est pas null et estMembre)
let reduction =0;
if(codePromo !== null && estMembre){
reduction = sousTotal * reductionPourcentage / 100
}
console.log("Réduction : " + reduction + " MAD");

//  Calcul du total final
let total = sousTotal - reduction;
console.log("Total final : " + total + " MAD");

// Vérification du solde
let paiementAccepte = soldeCompte >= total;
console.log(paiementAccepte ? "Paiement accepté" : "Solde insuffisant");

// Nouveau solde si paiement accepté
let nouveauSolde = paiementAccepte ? soldeCompte - total : soldeCompte;
if (paiementAccepte) {
    console.log("Nouveau solde : " + nouveauSolde + " MAD");
}

//  Récapitulatif final
console.log("\n===== RÉCAPITULATIF =====");
console.log("Produit   : " + nomProduit);
console.log("Quantité  : " + quantite);
console.log("Prix unit : " + prix + " MAD");
console.log("Sous-total: " + sousTotal + " MAD");
console.log("Réduction : " + reduction + " MAD");
console.log("Total     : " + total + " MAD");
console.log("Statut    : " + (paiementAccepte ? "Paiement accepté" : "Solde insuffisant"));
console.log("Solde     : " + nouveauSolde + " MAD");
console.log("=========================");