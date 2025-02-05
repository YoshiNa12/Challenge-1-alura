// Variables
let amigos = [];


// Funciones
function agregarAmigo() {
    let incluirAmigo = document.querySelector('#amigo').value.trim(); 
    
    if (incluirAmigo === '') { 
        alert('Entrada inválida, vuelva a intentar');
        return;
    } else {
        amigos.push(incluirAmigo);
        actualizarLista(); 
        document.querySelector('#amigo').value = ''; 
        asignacionTexto(`#listaAmigos`, `${amigos}`);
        return;
    }
}

function sortearAmigo(){
    if (amigos.length === 0) {
        alert('La lista de amigos está vacía. Agrega algunos amigos primero.');
        return;
    }else {

        let indiceAleatorio = Math.floor(Math.random() * amigos.length); 
        let amigoSeleccionado = amigos[indiceAleatorio];
        document.querySelector('#resultado').innerText = `Amigo seleccionado: ${amigoSeleccionado}`;
    }
};

function actualizarLista() {
    document.querySelector('#listaAmigos').innerText = amigos.join('\n');
    return;
};
//Codigo 
