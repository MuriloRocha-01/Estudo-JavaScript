

function verficação(a){ com

    let valor;
     if (a> 0) { valor= ("O numero é positivo:" + a);
     } else if (a < 0) {
         valor=("Valor negativo:" +a);
     } else {
         valor=("Valor é zero:"+a);
     }

     return valor;
}


console.log(verficação(10));

function verificaçao2(numeros,number){
  if (numeros.includes(number)) {
    return "O número " + number + " está presente no array.";
  }else {
    return "O número " + number + " não está presente no array.";

   
}


number=1;
numeros =[1,2,3,4,5,6,7,8,9,10];

console.log(verificaçao2(numeros,number));

const products = [
    { name: "Maça", price: 2.5 },
    { name: "Coca cola", price: 8 },
    { name: "Guarana", price: 5 },
    { name: "Chocolate", price: 20 },
];

let resultado = products.find((item) => {
    if (item.price ==20) {
        return ("O produto " + item.name + " custa R$" + item.price);
    }
})

console.log(resultado);

let prod8= products.filter((item) => {
    return item.price < 8;
});
console.log(prod8);}    
