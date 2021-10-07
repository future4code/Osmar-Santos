
//Exercícios de interpretação de Código

// 1° Exercício

// let array 
// console.log("a. ", array) 

// // Resposta: a. undefined

// array = null
// console.log("b. ", array)

// // Resposta: b. null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log("c. ", array.length)

// //Resposta: c. 11 (quantidade de itens)

// let i = 0
// console.log("d. ", array[i])

// // Resposta d. 3 

// array[i+1] = 19
// console.log("e. ", array)

// // Resposta: e.  [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// const valor = array[i+6]    
// console.log("f. ", valor)

// // Resposta: f. 9


// 2° Exercício 

// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?

// Resposta: SUBI NUM ÔNIBUS EM MIRROCOS 27 



// Exercícios de escrita de código


// 1° Exercício

// const nome = prompt("Qual é o seu nome")
// const seuEmail = prompt("Qual é o seu e-mail?")

// console.log("O e-mail" + seuEmail + " foi cadastrado com sucesso. Seja bem vindo(a)" + nome)


// 2° Exercício

// const comidaPreferida = ["pizza", "banana", "bolo", "macarrão", "pudim"]

// console.log(comidaPreferida)
// console.log("Essas são minhas comidas preferidas:")

// console.log(comidaPreferida[0])
// console.log(comidaPreferida[1])
// console.log(comidaPreferida[2])
// console.log(comidaPreferida[3])
// console.log(comidaPreferida[4])

// const comidaUsuario = prompt("Qual é a sua comida preferida?")

// comidaPreferida.splice(1, 1, comidaUsuario)

// console.log(comidaPreferida[0])
// console.log(comidaPreferida[1])
// console.log(comidaPreferida[2])
// console.log(comidaPreferida[3])
// console.log(comidaPreferida[4])


// 3° Exercício

// const listaDeTarefas = []
// const tarefa1 = prompt("Diga uma tarefa você precisa realizar",)
// const tarefa2 = prompt("Diga outra tarefa")
// const tarefa3 = prompt("Diga mais uma")

// listaDeTarefas.push(tarefa1, tarefa2, tarefa3)

// console.log(listaDeTarefas)

// const tarefasConluidas = prompt("Responda, qual dessas você já concluiu, 0, 1 ou 2?")
// console.log(listaDeTarefas.splice(tarefasConluidas, 1))

//DESAFIO   

// 1° Desafio

// const frase = prompt("Digite uma frase")
// const array = frase.split()
// console.log(array)

// 2° Desafio

// const array = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

// console.log(array.indexOf("Abacaxi"))
// console.log(array.length)