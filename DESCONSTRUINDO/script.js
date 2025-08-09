
//Descontruindo Objetos e Arrays
// 

let pessoa = {
  nome: "Matheus",
  sobrenome: "Fraga",
  empresa: "Sujeito Programador",
  cargo: "Programador FullStack"
};

//console.log(pessoa.nome);
//console.log(pessoa.cargo);

// let nome = "TESTE";

// const { nome:nomePessoa, cargo, empresa, sobrenome} = pessoa;     O nome: nomePessoa renomeia a variável

// console.log("NOME DA PESSOA " + nomePessoa);
// console.log(sobrenome);

// console.log(empresa);
// console.log(cargo);


// ================================= ARRAYS ======================================================================================================

let nomes = ["Matheus", "Lucas", "Henrique"];

// let { 0:matheus, 2:terceiraPessoa } = nomes;  descontruindo array com objeto

// console.log(matheus);
// console.log(terceiraPessoa);

let [primeironome, segundonome] = nomes;

console.log(primeironome);
console.log(segundonome);