// includes, startwith, endwith 
//includes serve para verificar se uma string contém outra string

let nomes = ["Matheus", "João", "Maria", "Ana", "Pedro"];

console.log(nomes.includes("Matheus")); // true quer dizer que "Matheus" está na lista
console.log(nomes.includes("Lucas")); // false quer dizer que "Lucas" não está na lista

if(nomes.includes("Ana")) {
    console.log("O nome está na lista");
}else{
  console.log("O nome não está na lista");
}

//=================================================================================================================


//startwith serve para verificar se uma string começa com outra string

console.log("Matheus".startsWith("Mat")); // true
console.log("Matheus".startsWith("ma")); // false, pois é case sensitive

//=================================================================================================================

//endwith serve para verificar se uma string termina com outra string

console.log("Matheus".endsWith("eus")); // true
console.log("Matheus".endsWith("Eus")); // false, pois é case sensitive