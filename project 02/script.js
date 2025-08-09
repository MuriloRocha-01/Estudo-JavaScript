const produtos = ["Computador", "Telefone", "Mouse", "Teclado"];
console.log("lista de produtos: " + produtos);

//para mostrar a quantidade de itens no array
console.log('quantidade de itens no array:' + produtos.length);

// Tirando produto Mouse da lista e retornando apenas os que sobraram.
let filtrar = produtos.filter((item)=>{
    return item.length > 5;
}
)
console.log("itens no array: " + filtrar);



let busca = filtrar.find((item)=>{
   if( item === "Computador"){
  console.log("item encontrado: " + item);
   }else {
  console.log("item não encontrado");
   }
})

// Removendo o segundo item da lista

filtrar.splice(1, 1);
console.log("itens restantes: " + filtrar);


let numeros = [1, 3, 5, 7, 0, 9];
// Ordenando os numeros
console.log("numeros ordenados: " + numeros.sort());

// Removendo primeiro item desta lista
console.log("item removido :" + numeros.shift());

// Invertendo ordem da lista    
console.log("ordem invertido:" + numeros.reverse());
// Adicionando um item no final da lista
numeros.push(11);
console.log("item adicionado no final da lista: " + numeros);