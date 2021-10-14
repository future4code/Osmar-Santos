
// Exercícios de interpretação de código

// 1 ° Exercício

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

// R: O coódigo está verificando se o valor de i é menor que 5, caso seja ele adiciona 1, depois ele soma o valor
// de i com a variavel "valor" e assim vai até chegar a 4 que é o menor número antes de 5

// 2 ° Exercício

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//     if (numero > 18) {
//         console.log(numero)
//     }
// }
// R: Verifica se cada número da array é maior que 18 e imprime apenas eles. 

// 3 ° Exercício

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}