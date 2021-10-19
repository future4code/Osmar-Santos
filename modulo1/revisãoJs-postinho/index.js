
// // COMPARADORES
// // Exercício 1------------------------------------------------------------------------------------

// // a-)Comparador de desigualdade a!==b 
// // Exemplo:

// function checarDesigualdade(a, b) {

//     return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
// }
// console.log(checarDesigualdade(1, 2));

// // b-)Compare a igualdade entre a===b
// function checarIgualdade(a, b) {
//     return `No comparador de igualdade ${a} !== ${b} é ${a !== b}`

// }
// console.log(checarIgualdade(3, 3))


// // c-)Faça uma função chamada "verificaSeEMaior"

// function verificaSeEMaior(a, b) {
//     return `${a > b}`
// }
// console.log(verificaSeEMaior(321, 2156));


// // Exercício 2------------------------------------------------------------------------------------
// //Escreva true or false para as comparações abaixo:
// // exemplo 1>2 = false
// // a-) 1==='1'= true
// // b-) 1=='1'=  true
// // c-) 'a'==='b'= false
// // d-) 'b'>'a'= false
// // e-) 0!==null= true


// // CONDICIONAIS

// // Exercício 3------------------------------------------------------------------------------------

const cadastro = (nomeDoUsario, anoDeNascimento, senhaDoUsuario, nacionalidade) => {

    if ((2021 - anoDeNascimento) > 18) {
        if (senhaDoUsuario.length >= 5) {
            if (nacionalidade.toLowerCase() === 'brasileira' || nacionalidade.toLowerCase() === 'brasileiro') {
                const usuario = [nomeDoUsario, anoDeNascimento, senhaDoUsuario, nacionalidade]
                return usuario
            } else {
                return 'Você não é brasileira'
            }
        } else {
            return 'A senha deve conter no mínimo 6 caracteres'
        }
    } else {
        return 'Você não tem 18 anos'
    }

    // if ((2021 - anoDeNascimento) > 18 && senhaDoUsuario.toString().length >= 5 && nacionalidade.toLowerCase() === 'brasileira') {
    //     const usuario = [nomeDoUsario, anoDeNascimento, senhaDoUsuario, nacionalidade]
    //     return usuario
    // } else {
    //     return 'Você não possui os requisitos'
    // }


}
console.log(cadastro('Bianca', 2001, 123456, 'brasileiro'));

// Exercício 4-----------------------------------------------------------------------------------------------

// const login = () => {
//     const login = "labenu"
//     //  Sua lógica aqui

// }

// console.log(login());

// // Exercício 5----------------------------------------------------------------------------------------------------

// const primeiraDose = () => {

//     //  Sua lógica aqui


// }
// console.log(primeiraDose())


// // LOOP+CONDICIONAL

// // Exercício 6 -------------------------------------------------------------------------------------

// const segundaDose = (nomeDoUsuario) => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "incompleta" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]

//     //  Sua lógica aqui


// }
// console.log(segundaDose("Barbara"));

// // Exercício 7 --------------------------------------------------------------------------------------

// const avisoAosAtrasados = () => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "completa" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]

//     //  Sua lógica aqui

// }
// console.log(avisoAosAtrasados());


// // DESAFIO------------------------------------------------------------------------------------------

// const usuarios = [
//     {
//         nome: "Artur",
//         ano: 2000,
//         nacionalidae: "brasileiro",
//         senha: "123456",
//         vacina: "pfizer",
//         imunizacao: "incompleta"
//     },
//     {
//         nome: "Bárbara",
//         ano: 1984,
//         nacionalidae: "brasileira",
//         senha: "labenu",
//         vacina: "astrazenica",
//         imunizacao: "completa"
//     },
//     {
//         nome: "Carlos",
//         ano: 2000,
//         nacionalidae: "brasileiro",
//         senha: "123456",
//         vacina: "coronavac",
//         imunizacao: "incompleta"
//     }

// ]

// // const cadastro = () => {
// //     //  Sua lógica aqui
// // }
// // console.log(cadastro());

// const login = () => {
//     //  Sua lógica aqui
// }
// console.log(login());

// const primeiraDose = () => {
//     //  Sua lógica aqui
// }
// console.log(primeiraDose())
// const segundaDose = (nomeDoUsuario) => {
//     //  Sua lógica aqui
// }
// console.log(segundaDose("ALGUM NOME AQUI"));

// const avisoAosAtrasados = () => {
//     //  Sua lógica aqui
// }
// console.log(avisoAosAtrasados());