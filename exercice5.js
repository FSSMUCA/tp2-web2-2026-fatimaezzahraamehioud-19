let nombres=[0 , NaN,  Infinity , -Infinity , 42, 3.14, Number.MAX_SAFE_INTEGER + 1, -0];
let n = NaN

for (let i = 0; i < nombres.length; i++) {
  let valeur = nombres[i];
  let affichage;

  if (Number.isNaN(valeur)) {
    affichage = "INVALIDE";
  } else if (valeur === Infinity || valeur === -Infinity) {
    affichage = "INFINI";
  } else if (valeur === 0 && 1 / valeur === -Infinity) {
    affichage = "ZERO NEGATIF";
  } else if (Number.isInteger(valeur) && Math.abs(valeur) <= Number.MAX_SAFE_INTEGER) {
    affichage = "ENTIER SUR";
  } else if (Number.isInteger(valeur) && Math.abs(valeur) > Number.MAX_SAFE_INTEGER) {
    affichage = "ENTIER HORS LIMITES";
  } else {
    affichage = "DECIMAL";
  }

  console.log(valeur + " -> " + affichage);
}