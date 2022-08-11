let textos = [`Bienvenido a las tierras abandonadas donde el bien jamas es visto y la luna parece nunca abandonar estas tierras
    
    Has click para comenzar con el juego!`,
    `Seleccione una de las siguientes opciones ingresando el numero a la izquierda
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

function tienda() {
    let jugador = JSON.parse(localStorage.getItem("jugador"));
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
                    (jugador.getDineroDisponible >= 800) ? equipamiento(tipoDePersonaje[opcion - 1].arma) : alert("Ya tenes el arma equipada");
                    break;
                case "2":
                    (jugador.getDineroDisponible >= 800) ? equipamiento(tipoDePersonaje[opcion - 1].arma) : alert("Ya tenes el arma equipada");
                    break;
                case "3":
                    (jugador.getDineroDisponible >= 800) ? equipamiento(tipoDePersonaje[opcion - 1].arma) : alert("Ya tenes el arma equipada");
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
        } else {
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

function boton(nombres) {
    for (const nombre of nombres) {
        let fieldset = document.getElementById("contenedor");
        let btn = document.createElement("btn");
        btn.innerText = nombre;
        btn.setAttribute("class", `boton`);
        fieldset.appendChild(btn);
    }
}

function botonObjetos(nombres) {
    for (const nombre of nombres) {
        let fieldset = document.getElementById("contenedor");
        let btn = document.createElement("btn");
        btn.innerText = nombre;
        btn.setAttribute("class", `boton`);
        fieldset.appendChild(btn);
    }
}

function titulosYTextos(titulos, textos) {
    let tituloPagina = document.getElementById("tituloPagina");
    let texto = document.getElementById("texto");
    tituloPagina.innerText = titulos;
    texto.innerText = textos;
    return;
}

function pantallaPrincipal() {
    titulosYTextos(titulos[0], textos[0]);
    let btn = document.getElementById("dato");
    btn.onclick = () => menuPrincipal();
}

const opcionesMenuPrincipal = [
    "Crear personaje",
    "Tienda",
    "Jugar",
    "Salir"
]

const {
    nombre: names
 } = tipoDePersonaje;

function menuPrincipal() {
    document.getElementById("contenedor-crearpersonaje").style.display = 'none';
    document.getElementById("contenedor").style.display = 'block';
    document.getElementById("respuesta").style.display = 'inline';
    titulosYTextos(titulos[1], textos[1]);
    // Probando de crear los botones asi borro el input
    localStorage.getItem("jugador") != null? boton(opcionesMenuPrincipal): console.log("Ya estan creados");

    let btn = document.getElementById("dato");
    let opcion = document.getElementById("respuesta");

    console.log(opcion);
    btn.onclick = () => pantallaBienvenida(opcion);
}


function crearPersonaje() {
    document.getElementById("contenedor-crearpersonaje").style.display = 'block';
    document.getElementById("contenedor").style.display = 'none';
    //agregar los tres botones de personaje aca
    //boton(tipoDePersonaje);
    titulosYTextos(titulos[4], textos[5]);
    let textoCrearPersonaje = document.getElementById("textoPersonaje");
    textoCrearPersonaje.innerText = textos[5];
    let tituloCrearPersonaje = document.getElementById("tituloPersonaje");
    tituloCrearPersonaje.innerText = titulos[4];
}

document.getElementById('btn_crearpersonaje').onclick = function () {
    let nombre = document.getElementById('nombre');
    console.log(document.getElementById('nombre'));
    let tipo = document.getElementById('tipo');
    console.log(document.getElementById('tipo'));
    if (nombre.value && tipo.value) {
        alert("Has seleccionado un " + tipo.options[tipo.selectedIndex].text);
        let perNuevo = new Personaje(nombre.value, tipoDePersonaje[tipo.value - 1]);
        localStorage.setItem("jugador", JSON.stringify(perNuevo));
    } else {
        alert("Opcion invalida")
    }
    menuPrincipal();
}

function pantallaBienvenida(opcion) {
    console.log("Entre aca! y el valor de opcion es: " + opcion.value);
    switch (opcion.value) {
        case "1":
            crearPersonaje();
            break;
        case "2":
            localStorage.getItem("jugador") ? tienda() : alert("Aun no tenes el personaje creado, por favor crea tu personaje primero");
            break;
        case "3":
            localStorage.getItem("jugador") ? jugar() : alert("Aun no tenes el personaje creado, por favor crea tu personaje primero");
            break;
        case "4":
            alert("Gracias por jugar!");
            break;
        case "66":
            menuDeEnemigos();
            break;
        default:
            alert("Opcion invalida, por favor seleccione una opcion correcta");

    }
}

function equipamiento(arma) {
    let jugador = JSON.parse(localStorage.getItem("jugador"));
    jugador.restarDinero(800);
    jugador.equiparArma(arma);
    return;
}

function comprarPociones() {
    let jugador = JSON.parse(localStorage.getItem("jugador"));
    jugador.guardarPociones(1);
    jugador.restarDinero(25);
    alert(`Tenes ${jugador.getCantPociones} pociones`);
}

pantallaPrincipal();


