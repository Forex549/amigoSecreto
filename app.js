// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let amigoSorteado = "";
let indiceSorteo;
let listaAmigos = document.getElementById("listaAmigos");

function agregarAmigo(){

    let nombreAmigo = document.getElementById("amigo").value.trim();
    

    if(nombreAmigo === ""){

        alert("el campo esta vacio");
    }else{

        amigos.push(nombreAmigo);
        //limpia el input
        document.getElementById("amigo").value = "";

        //crea un elemento li, que es item de 'ul'
        let nuevoElemento = document.createElement("li");
        //seteamos el texto del nuevo elemento
        nuevoElemento.textContent = nombreAmigo;

        //sirve para añadir elemtnos a elemtnos HTML(DOM y asi)
        listaAmigos.appendChild(nuevoElemento);

    }

}

function sortearAmigo(){

    indiceSorteo = Math.floor(Math.random() * amigos.length);
    amigoSorteado = amigos[indiceSorteo];
    
    document.getElementById("resultado").textContent = amigoSorteado;
}

function removerNombre(){

    if (amigos.length === 0 || indiceSorteo === undefined) {
        alert("No hay nombres para remover.");
        return;
    }

    amigos.splice(indiceSorteo,1);
    
    let elementoEliminar = listaAmigos.children[indiceSorteo];

    if (elementoEliminar) {
        listaAmigos.removeChild(elementoEliminar);
    }

    document.getElementById("resultado").textContent = "";
}



