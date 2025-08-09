
// https://sujeitoprogramador.com/rn-api/?api=posts url para acessar a API de posts

let lisElement = document.querySelector("#app");

let posts = [];

function nutriapp() { 

    fetch("https://sujeitoprogramador.com/rn-api/?api=posts")
    .then((r)=>r.json())
    .then((json) => {
     posts = json;

     posts.map((item) => {
        let LiElement = document.createElement("li");
        let TitleElement = document.createElement( "stong");
        let ImgElement = document.createElement ("img");
        let DescElement = document.createElement("a");

        let TitleText = document.createTextNode(item.titulo);
        TitleElement.appendChild(TitleText);
        lisElement.appendChild(TitleElement);
         
        ImgElement.src = item.capa;
        lisElement.appendChild(ImgElement);

        let DescText = document.createTextNode(item.subtitulo);
        DescElement.appendChild(DescText);
        LiElement.appendChild(DescElement);

        lisElement.appendChild(LiElement);

        }) 
    })
    .catch((erro)=>{
        console.log("Deu algum erro " + erro);
    });
    
    
}

nutriapp();
 