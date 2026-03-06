let nom = null
let age = 0
let ville = ""
let score = undefined
let actif = false

let vars = [
["nom",nom],
["age",age],
["ville",ville],
["score",score],
["actif",actif]
]

for(let i=0;i<vars.length;i++){

let nomVar = vars[i][0]
let valeur = vars[i][1]

let r1 = valeur ?? "valeur par défaut"
let r2 = valeur || "valeur par défaut"

console.log(nomVar + " ?? ->", r1)
console.log(nomVar + " || ->", r2)

if(r1 === r2){
console.log(nomVar + " : ?? et || -> même résultat")
}else{
console.log(nomVar + " : ?? et || -> résultat différent")
}

console.log("-----")

}