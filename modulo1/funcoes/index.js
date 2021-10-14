

// Exercícios de interpretação de código


// 1° Exercícios

// function minhaFuncao(variavel) {
//     return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

// simplesmente invocasse a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?

//* Resposta: No console será impresso 10 e 50, sem o console.log não imprime nada no console.

// 2° Exercício 

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta) 

/*Resposta: Está função transforma todas as letras maiusculas em minusculas e encontra
a palavra cenoura na frase, é util como forma de organizar caso o usuário erre ao digitar.
Será impresso no terminal: true, true, true */


//  Exercícios de escrita de código

// 1° Exercícios

// function texto (){
//     console.log("Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante.")
// }

// texto()


// 2° Exercício

// function infos (nome, idade, cidade, profissao){
//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)
// }

// infos("Osmar", "32", "Rio de Janeiro", "estudante")

// 3° Exercício

// function numeros (numb1, numb2){
//     return numb1 + numb2
// }

// console.log(numeros(5, 5))

// 4° Exercício

// function recebeDoisNum (numb1, numb2){
//     return numb1 >= numb2 
// }

// console.log(recebeDoisNum(10, 6))


// 5° Exercício

// function numero (numb1){
//     return numb1 % 2 === 0
// }

// console.log(numero(1))


// 6° Exercicío 

// function receberString(str) {
//     const tamanhoString = str.length
//     const stringMaiuscula = str.toUpperCase()
//     console.log(tamanhoString, stringMaiuscula)
// }

// receberString("Olá Pessoal")


// 7° Exercicío 


// const numero1 = Number(prompt("Digite um número"))
// const numero2 = Number(prompt("Digite outro número"))

// function soma (numb1, numb2 ){
//     return numb1 + numb2
// }

// function subtracao (numb1, numb2){
//     return numb1 - numb2
// }

// function multiplicacao (numb1, numb2){
//     return numb1 * numb2
// }

// function divisao (numb1, numb2){
//     return numb1 / numb2
// }

// console.log(`Números inseridos ${numero1} e ${numero2}`)
// console.log (`Soma ${soma(numero1, numero2)}`)
// console.log(`Subtração ${subtracao(numero1, numero2)}`)
// console.log(`Multiplicação ${multiplicacao(numero1, numero2)}`)
// console.log(`Divisão ${divisao(numero1, numero2)}`)