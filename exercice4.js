
let colonne = "0 == \"\"";
console.log(colonne.padEnd(20) + " -> true");


let  pairs = [
  [0, ""],
  [0, "0"],
  [0, false],
  ["", false],
  [null, undefined],
  [null, false],
  [NaN, NaN],
  [1, "1"],
  [" \t\n ", 0]
];

let compt = 0;

for (let i = 0; i < pairs.length; i++) {
  let a = pairs[i][0];
  let b = pairs[i][1];

  let eq = (a == b);
  let seq = (a === b);

  let left = (JSON.stringify(a) + " == " + JSON.stringify(b)).padEnd(20);
  let right = (JSON.stringify(a) + " === " + JSON.stringify(b)).padEnd(23);

  console.log(left + " -> " + eq + " | " + right + " -> " + seq);

  if (eq !== seq) {
    compt ++;
  }
}

console.log("---");
console.log(compt + " paire(s) où == et === donnent des résultats différents");