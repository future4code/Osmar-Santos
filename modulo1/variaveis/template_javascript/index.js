
/* Exercício 1

let a = 10 
let b = 10
console.log(b)
b = 5 
console.log(a, b)

A váriavel "b" sofrerá  mudança de valor, de 10 para 5

Exercício 2

let a = 10
let b = 20
c = a
b = c
a = b
console.log(a, b, c)

Resultado: a = 10, b = 10, c = 10



 Exercício 3

let horaDia = prompt ("Quantas horas você trabalha por dia?")
let valorDia = prompt ("Quanto você recebe por dia?")
alert (`Você recebe ${horaDia/valorDia} por hora`)

 Os valores das variáveis serão divididas 
e o resultado apresentado para o usuário 
*/

// Exercícios de Escrita 1

let nome = prompt ("Qual o seu nome?")
let idade = prompt("Qual é a sua idade?")
alert(`Olá ${nome}, você tem ${idade} anos`)
console.log(typeof nome, typeof idade)

/* Devido a falta de valor foi impresso "underfined". Inserido
valores de texto as variáveis passaram a ser do tipo strings
*/

// Exercícios de Escrita 2//

let estaChovendoHoje = "Está chovendo Hoje?"
let voceEstaComFome = "Você está com Fome?"
let voceTemGato = "Você tem gato?"

let resposta1 = "sim"
let resposta2 = "não"
let resposta3 = "sim"
console.log (`${estaChovendoHoje} - ${resposta1}`)
console.log (`${voceEstaComFome} - ${resposta2}`)
console.log (`${voceTemGato} - ${resposta3}`)

// Exercícios de Escrita 3
let a = 40
let b = 50

c = a
a = b
b = c   
console.log (a, b)

// Desafio

let balasHoje = Number(prompt("Quantas Balas você ganhou hoje"))
let balasAmanha = Number(prompt("Quantas balas você vai ganhar amanhã"))
console.log (`Você terá ${balasHoje+balasAmanha} balas`)
alert (`Você terá ${balasHoje+balasAmanha} balas`)

let item1 = Number(prompt("Quantas horas você estuda por dia?"))
let item2 = Number(prompt("Quantos dias na semana?"))
console.log (`Você estuda ${item1*item2} por semana`)
alert (`Você estuda ${item1*item2} por semana`)
