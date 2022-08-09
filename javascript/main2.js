let textos = [`Has click para comenzar con el juego!`,
    `Bienvenido a las tierras abandonadas donde el bien jamas es visto y la luna parece nunca abandonar estas tierras
    Seleccione una de las siguientes opciones ingresando el numero a la izquierda
        1- Crear el personaje
        2- Ir a la tienda
        3 - Jugar
        4- Salir del juego`,
    `Bienvenido al menu secreto donde podra ver,editar e ingresar nuevos enemigos`,
    `Bienvenido a la tienda por favor compre un arma y luego compre las pociones que guste
        1- Espada ===> 800R
        2- Arco ===> 800R
        3- Hacha ===> 800R
        4- Pocion ===> 25R
        5- Menu Principal`,
    `Bienvenido a la tienda por favor compre un arma y luego compre las pociones que guste
        1- Pocion ===> 25R
        5- Menu Principal`,
    `Ingrese el numero que representa a la clase de personaje
        1- Guerrero
        2- Elfo
        3- Barbaro`];

let titulos = ["Inicio", "Menu", "Enemigos", "Tienda", "Crear Personaje", "Bosque"];

let enemigos = [
    { nombre: "Esqueleto", energia: 20, fuerza: 15, arma: "Espada" },
    { nombre: "Murcielago", energia: 10, fuerza: 5, arma: "Mordida" },
    { nombre: "Fantasma", energia: 20, fuerza: 10, arma: "Ectoplasma" },
    { nombre: "Esqueleto", energia: 20, fuerza: 15, arma: "Lanza" },
    { nombre: "Caballero", energia: 30, fuerza: 25, arma: "Espada" },
    { nombre: "Cancerbero", energia: 50, fuerza: 45, arma: "Mordida" },
    { nombre: "Ultima", energia: 60, fuerza: 50, arma: "Espada" },
];

const tipoDePersonaje = [
    { nombre: "Guerrero", energia: 90, fuerza: 20, arma: "Espada" },
    { nombre: "Elfo", energia: 100, fuerza: 15, arma: "Arco" },
    { nombre: "Barbaro", energia: 85, fuerza: 25, arma: "Hacha" },
];

const catalogoEnemigos = new CatalogoEnemigos(enemigos);
console.log("Mostrar enemigos originales: ", catalogoEnemigos.enemigos);

let jugador = "";

function tienda(jugador) {
    titulosYTextos(titulos[3], textos[3]);
    console.log("Estoy en el cielo si entro a la tiend");
    let opcion = document.getElementById("respuesta").value;
    let textoDineroDisponible = document.createElement("p");
    textoDineroDisponible.innerText = `Actualmente tiene ${jugador.getDineroDisponible} para gastar.`;
    let recuadro = document.getElementById("contenedor");
    recuadro.append(textoDineroDisponible);

    while (opcion !== "5") {
        if (!jugador.verificarArmaEquipada) {
            switch (opcion) {
                case "1":
                    (jugador.getDineroDisponible >= 800) ? equipamiento("Espada") : alert("Ya tenes el arma equipada");
                    break;
                case "2":
                    (jugador.getDineroDisponible >= 800) ? equipamiento("Arco") : alert("Ya tenes el arma equipada");
                    break;
                case "3":
                    (jugador.getDineroDisponible >= 800) ? equipamiento("Hacha") : alert("Ya tenes el arma equipada");
                    break;
                case "4":
                    (jugador.getDineroDisponible >= 25) ? comprarPociones() : alert("No tenes mas dinero disponible");
                    break;
                case "5":
                    return;
                default:
                    alert("La opcion selecionada no es correcta");
                    break;
            }
        } else if (jugador.verificarArmaEquipada) {
            titulosYTextos(titulos[3], textos[4]);
            console.log("Estoy en el cielo si entro a la tiend");
            let opcion = document.getElementById("respuesta").value;
            switch (opcion) {
                case "1":
                    (jugador.getDineroDisponible >= 25) ? comprarPociones() : alert("No tenes mas dinero disponible");
                    return;
                case "5":
                    return;
                default:
                    alert("La opcion selecionada no es correcta");
                    break;
            }
        }
    }
}


function titulosYTextos(titulos, textos) {
    let tituloPagina = document.getElementById("tituloPagina");
    let texto = document.getElementById("texto");
    tituloPagina.innerText = titulos;
    texto.innerText = textos;
    return;
}

function ocultarInput(x) {
    let input = document.getElementById("input");
    x ? input.style.visibility = "hidden" : input.style.display = "visible";
}

function boton(btnN, text) {
    for (let i = 0; i < btnN; i++) {
        let fieldset = document.getElementById("contenedor");
        let btn = document.createElement("btn");
        btn.innerText = text;
        btn.setAttribute("id", `boton${i + 1}`);
        fieldset.appendChild(btn);
    }
}

function pantallaPrincipal() {
    titulosYTextos(titulos[0], textos[0]);
    //ocultarInput(true); VER CÓMO RESOLVER LO DE ESCONDER EL INPUT EN LA PRIMER PANTALLA
    let btn = document.getElementById("dato");
    btn.onclick = () => menuPrincipal();
}

function menuPrincipal() {
    titulosYTextos(titulos[1], textos[1]);
    let btn = document.getElementById("dato");
    let opcion = document.getElementById("respuesta").value;
    //boton(1, "aceptar", menuPrincipal, opcion);
    console.log(opcion);
    btn.onclick = () => pantallaBienvenida(opcion);
}

function crearPersonaje() {
    titulosYTextos(titulos[4], textos[5]);
    let textoCrearPersonaje = document.getElementById("texto");
    let opcionPersonaje = document.getElementById("respuesta").value;
    textoCrearPersonaje.innerText = `Actualmente tiene ${jugador.getDineroDisponible} para gastar.`;

    do {
        switch (opcionPersonaje) {
            case "1":
                alert("Has seleccionado ser un Guerrero, felicitaciones, recorda pasar por la tienda y comprar tu espada!");
                break;
            case "2":
                alert("Has seleccionado ser un Elfo, felicitaciones, recorda pasar por la tienda y comprar tu arco y flecha!");
                break;
            case "3":
                alert("Has seleccionado ser un Barbaro, felicitaciones, recorda pasar por la tienda y comprar tu hacha!");
                break;
            default:
                alert("La opcion selecionada no es correcta");
                break;
        }
    } while (opcionPersonaje != "3" && opcionPersonaje !== "2" && opcionPersonaje !== "1");


    let perNuevo = new Personaje(nombre, tipoDePersonaje[seleccionPersonaje - 1]);
    jugador = perNuevo;
    localStorage.setItem("Datos jugador", jugador);
}

function pantallaBienvenida(opcion) {
    console.log("Entre aca! y el valor de opcion es: " + opcion);
    while (opcion != "4" && opcion != "3") {
        switch (opcion) {
            case "1":
                crearPersonaje();
                break;
            case "2":
                jugador != "" ? tienda(jugador) : alert("Aun no tenes el personaje creado, por favor crea tu personaje primero");
                return;
            case "3":
                jugador != "" ? jugar() : alert("Aun no tenes el personaje creado, por favor crea tu personaje primero");
                break;
            case "4":
                return alert("Gracias por jugar!");
            case "66":
                menuDeEnemigos();
                break;
            default:
                alert("Opcion invalida, por favor seleccione una opcion correcta");

        }
    }

}

function equipamiento(arma) {
    jugador.restarDinero(800);
    jugador.equiparArma(arma);
    return;
}

function comprarPociones() {
    jugador.guardarPociones(1);
    jugador.restarDinero(25);
    alert(`Tenes ${jugador.getCantPociones} pociones`);
}

pantallaPrincipal();

/*  ESTO POSIBLEMENTE NO VAYA Y LUEGO LO BORRO
let estructura = document.body;
estructura.innerHTML = "<div><h1 id=\"texto\"></h1></div>";
let textoACambiar = document.getElementById("texto");
textoACambiar.innerText = "Bienvenido al juego que de alguna manera cambiaremos las pantallas";
let btn = document.createElement("button");
btn.innerText = "Presiona para continuar";
estructura.appendChild(btn);
estructura.removeChild(btn);
*/



/*
pantallaBienvenida();
 
function pantallaBienvenida(opcion) {
do {
switch (opcion) {
case 1:
crearPersonaje();
break;
case 2:
mostrarMenu();
break;
case 3:
(personaje[0] != null)? tienda(personaje) : alert("Aun no tenes el personaje creado, por favor crea tu personaje primero");
break;
case 4:
alert("Gracias por jugar!");
break;
default:
alert("Opcion invalida, por favor seleccione una opcion correcta");
 
}
} while (opcion != 4);
 
}



*/
