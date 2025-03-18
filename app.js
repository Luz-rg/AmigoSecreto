// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Array para almacenar nombres
let amigos = [];

//Funcion para agregar amigos
function agregarAmigo(){
    let entrada = document.getElementById("amigo");
    if(entrada.value == ""){
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(entrada.value);
    }
    entrada.value = "";
    agregarNombres();
}
//Funcion para agregar amigos a la lista de nombres
function agregarNombres(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML="";
    for(let i = 0;i<amigos.length;i++){
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    } 
}
//Funcion para sorteo de amigos
function sortearAmigo(){
    if(amigos!==""){
        let indiceAleatorio = Math.floor(Math.random()*amigos.length);
        console.log(indiceAleatorio);
        document.getElementById("resultado").innerHTML = amigos[indiceAleatorio];
    }
}