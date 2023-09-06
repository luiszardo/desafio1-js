// 1º estrutura pedida.
let dia = "claro"
if(dia == "claro"){
    console.log("Está claro!")
} else {
    console.log("Esta de noite!")
}
// --------------------------------------
// 2º estrutura pedida.
for(let numero =0; numero <=20; numero +=2){
    console.log(numero)
}
// --------------------------------------
// 3º estrutura pedida.
function ola(){
    console.log("Olá! Que você tenha um otimo dia!!")
}
ola()
// --------------------------------------
// 4º estrutura pedida.
function nome (nome){
    console.log(`Oi, meu nome é ${nome}`)
}
nome("Luis Henrique!")
// --------------------------------------
// 5º estrutura pedida.

function sobre (nome,idade,musical){
    console.log(`Olá! meu nome é ${nome}, tenho ${idade} anos e gosto de ${musical}`)
}
sobre("Luis Henrique",29,"Rock in roll classico.")
// --------------------------------------
// 6º estrutura pedida.

function entreterimento(filme,musica){
    console.log(`Olá! eu gosto do filme ${filme} e gosto da musica ${musica} do Guns N' Roses`)
}
entreterimento("Sniper americano","Patience!")
// --------------------------------------
// 7º estrutura pedida.
function triplo (primeiroValor){
    console.log(primeiroValor *3)
}
triplo(40)
// --------------------------------------
// 8º estrutura  pedida.
let verificar = "true"
function informar (){
 console.log(`Verificar a variavel é ${verificar} `)
}
informar()

// --------------------------------------
// 9º estrutura pedida.
let estudante =  ["Ana","Naiara","Milton","Mayke","Angelica"]
console.log(estudante)
// estudante.unshift("Alice")
// console.log(estudante)
// estudante.pop("Angelica")
// console.log(estudante)
// estudante.push("Giovana","Isabela")
// console.log(estudante)
// estudante.shift("Alice")
// console.log(estudante)

// --------------------------------------
// 10º estrutura pedida.
estudante.unshift("Alice")
console.log(estudante)
// --------------------------------------
// 11º estrutura pedida.
estudante.pop("Angelica")
console.log(estudante)
// --------------------------------------
// 12º estrutura pedida.
estudante.push("Giovana","Isabela")
console.log(estudante)
// --------------------------------------
// 13º estrutura pedida.
estudante.shift("Alice")
console.log(estudante)
// --------------------------------------
// 14º estrutura pedida.
let numbers =  [7,5,6,3,8,9,2,1,4]
numbers.sort()
console.log(numbers)


// --------------------------------------
// 15º estrutura pedida.
let sobreMim  = {
    nome: "luis",
    idade: 29,
    telefone: 29978187
}
// --------------------------------------
// 16º estrutura pedida.
sobreMim.origem = "Brasil"
// --------------------------------------
// 17º estrutura pedida.
delete sobreMim.telefone
// --------------------------------------
// 18º estrutura pedida.
console.log(sobreMim)
// --------------------------------------
// 19º estrutura pedida.
let cadastro = [
    {
        nome:"João",
        idade:30,
        telefone:198411654,
        amigos:["João","Merry","Elber","Djovani","Matheus"],
    },
    {
        nome:"Merry",
        idade:24,
        telefone:298411654,
        amigos:["João","Merry","Elber","Djovani","Matheus"],
    },
    {
        nome:"Elber",
        idade:40,
        telefone:649845484,
        amigos:["João","Merry","Elber","Djovani","Matheus"],
    },
    {
        nome:"Djovani",
        idade:34,
        telefone:498413218,
        amigos:["João","Merry","Elber","Djovani","Matheus"],
    },
    {
        nome:"Matheus",
        idade:22,
        telefone:184548747,
        amigos:["João","Merry","Elber","Djovani","Matheus"],
    }

]
// --------------------------------------
// 20º estrutura pedida.
console.log(cadastro[0].amigos[0])
console.log(cadastro[1].amigos[1])
console.log(cadastro[2].amigos[2])
console.log(cadastro[3].amigos[3])
console.log(cadastro[4].amigos[4])

// FINAL DO PRIMEIRO DESAFIO DE JAVASCRIPT !  

// ESTOU MUITO ORGULHOSO!




