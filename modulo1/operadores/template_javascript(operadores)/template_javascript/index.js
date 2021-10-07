

// Exercícios de interpretação de código


// 1° - Exercício 

// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado)

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado) 

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado)

// console.log("d. ", typeof resultado)

// Resposta: a. false - b. false - c. true - "typeog boolean"

// 2° - Execício 

// let primeiroNumero = Number(prompt("Digite um numero!"))
// let segundoNumero = Number(prompt("Digite outro numero!"))

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

// Resposta: A soma não vai acontecer pois se trata de strings, a solução que eu daria é utilizar "Number" 
//para converter assim  assim como fiz no exemplo. 





// Exercício de Escrita de Código

// 1° - Execício 


const idadeUsuario = Number(prompt('Qual é a sua idade?'))
const idadeAmigo = Number(prompt('Qual é a idade do seu melhor amigo(a)?'))

const resposta = idadeUsuario < idadeAmigo
console.log("Sua idade é maior do que a do seua amigo(a)?", resposta)

console.log(idadeUsuario - idadeAmigo)

// 2° - Execício 

const numeroPar = Number(prompt("Insira um número par"))
const resultado = numeroPar / 2
const restoDaDivisao =  resultado % 2
console.log(restoDaDivisao)

// Resposta: Números pares geram resultados inteiros e números impares numetos "quebrados"

// 3° - Execício 

const anosIdade = Number(prompt("Qual é a sua idade?"))
const mesesIdade = (anosIdade*12)
const idadeDias = (anosIdade*365)
const idadeHoras = (anosIdade*8760)

console.log("Sua idade em meses é de", mesesIdade)
console.log("Sua idade em dias é", idadeDias)
console.log("Sua idade em horas é", idadeHoras)


// 4° - Execício 

const primeiroNumero = Number(prompt("Insira um númeor"))
const segundoNumero = Number(prompt("Agora insira outro"))


console.log("O primeiro número é maior que o segundo?", primeiroNumero > segundoNumero)
console.log("O primeiro número é igual ao segundo?", primeiroNumero === segundoNumero)
console.log("O primeiro número é divisivel pelo segundo?", primeiroNumero % segundoNumero === 0)
console.log("O segundo número é divisivel pelo primeiro?", segundoNumero % primeiroNumero === 0)