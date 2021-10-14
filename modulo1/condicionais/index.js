
// Exercícios de interpretação de código


// 1° Exercício

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }


// a) Explique o que o código faz. Qual o teste que ele realiza? 
//* R: Recebe o número do usuário, divide ele por 2 e ferifica se o resultado é igual a 0.
//  Caso seja ele imprime a frase "Passou no teste", caso não, ele imprime "Não passou no teste"

// b) Para que tipos de números ele imprime no console "Passou no teste"?
// R: Números que divididos por 2 o resto é diferente de 0 

// c) Para que tipos de números a mensagem é "Não passou no teste"?
// R: Os números que divididos por 2 o resto não seja igual a 0


// 2° Exercício


// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break;   // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para que serve o código acima?
// R: Imprime o valor da fruta escolhida pelo usuário

// b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã
// R: O preço da fruta, Maçã é R$ 2.25

/* c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa 
no console se retirássemos o break que está logo acima do default 
(o break indicado pelo comentário "BREAK PARA O ITEM c.")?*/
// R: O preço da fruta, Pêra é, R$ 5

// 3° Exercício

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// //* a) O que a primeira linha está fazendo?
// R: Recebendo o número do usuário

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// R: "Esse número passou no teste, caso insira -10 não haverá mensagem alguma impressa.

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//R: 

// Exercícios de escrita de código


// // 1° Exercício 

// const idadeUsuario = Number(prompt("Qual é a sua idade?"))

// if (idadeUsuario >= 18) {
//   console.log("Você pode dirigir")
// } 
// else {
//   console.log("Você não pode dirigir")

// }

// // 2° Exercício 

// const turnoUsuario = prompt("Em qual peŕiodo você estuda? digite: M (matutino) ou V (Vespertino) ou N (Noturno)")

// if (turnoUsuario === "M") {
//   console.log("Bom dia!")
// } else if (turnoUsuario === "V") {
//   console.log("Boa tarde!")
// } else if (turnoUsuario === "N") {
//   console.log("Boa noite!")
// }

// // 3° Exercício 

// const turnoUsuario = prompt("Em qual peŕiodo você estuda? digite: M (matutino) ou V (Vespertino) ou N (Noturno)")
// let resposta

// switch (turnoUsuario) {
//     case 'M':
//         resposta = "Bom dia"
//         break;
//     case 'V':
//         resposta = "Bom Tarde"
//         break;
//     case 'N':
//         resposta = "Boa Noite"
//         break;

// }

// console.log(resposta)

// // 4° Exercício 


// let genero = prompt("Qual o gênero de filme você vai assistir?")
// let preco = prompt("Qual o preço do ingresso?")

// if (genero === "fantasia" && preco < 15) {
//     console.log("Bom filme!")
// } else {
//     console.log("Escolha outro filme")
// }





