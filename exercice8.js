//  Données initiales 
let nom = "   Fatima   ";           
let age = "23";                       
let email = "fatima@example";         
let scoreJeu = "150pts";              
let estAdmin = "false";               
let derniereConnexion = null;         
let nombreConnexions = "0";           

//  Nom 
let nomCorrige = nom.trim();          // supprimer espaces début/fin
if (nomCorrige === "") nomCorrige = "Inconnu"; 
//  Age
let ageEntier = parseInt(age);        // convertir en entier
let ageValide = !isNaN(ageEntier) && ageEntier > 0; 

//  Email
let indexArrobase = email.indexOf("@");
let indexPointApres = indexArrobase >= 0 ? email.indexOf(".", indexArrobase) : -1;
let emailValide = indexArrobase >= 0 && indexPointApres > indexArrobase;

//  Score jeu 
let score = parseInt(scoreJeu);       
if (isNaN(score)) score = 0;

// estAdmin 
let admin = estAdmin === "true";     

//  Dernière connexion
let derniere = derniereConnexion ?? "Jamais connecté"; 

//  Nombre de connexions
let nbConnex = parseInt(nombreConnexions);
let nbConnexAffichage = (isNaN(nbConnex) || nbConnex === 0) ? "Aucune connexion" : nbConnex;

// Affichage du rapport 
console.log("===== RAPPORT UTILISATEUR =====");
console.log('nom              : "' + nomCorrige + '" (corrigé : espaces supprimés)');
console.log('age              : ' + (ageValide ? ageEntier : "invalide") + (ageValide ? " (valide)" : " (invalide ou <= 0)"));
console.log('email            : "' + email + '" (' + (emailValide ? "valide" : "invalide : pas de point après @") + ')');
console.log('scoreJeu         : ' + score + ' (extrait depuis "' + scoreJeu + '")');
console.log('estAdmin         : ' + admin + ' (attention : Boolean("false") = true, conversion manuelle requise)');
console.log('derniereConnexion: "' + derniere + '" (valeur par défaut via ??)');
console.log('nombreConnexions : "' + nbConnexAffichage + '" (' + (nbConnex === 0 ? "0 après conversion" : nbConnex) + ')');
console.log("================================");