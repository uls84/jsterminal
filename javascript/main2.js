let textos = [`Bienvenido a las tierras abandonadas donde el bien jamas es visto y la luna parece nunca abandonar estas tierras
    
    Has click para comenzar con el juego!`,
    `Seleccione una de las siguientes opciones
        1 - Debera crear el personaje.
        2 - Luego debe equipar un arma y comprar pociones.
        3 - Podra acceder al juego una vez que se hayan completado los pasos anteriores.`,
    `Bienvenido al menu secreto donde podra ver,editar e ingresar nuevos enemigos`,
    `Bienvenido a la tienda por favor compre un arma y luego compre las pociones que guste!
        1- Espada ===> 800R
        2- Arco ===> 800R
        3- Hacha ===> 800R
        4- Pocion ===> 25R`,
    `Bienvenido a la tienda por favor compre un arma y luego compre las pociones que guste
        1- Pocion ===> 25R
        5- Menu Principal`,
    `Ingrese el nombre para su personaje y seleccione un estilo de personaje.
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
    //{ nombre: "Ultima", energia: 60, fuerza: 50, arma: "Espada" },
];

const tipoDePersonaje = [
    { nombre: "Guerrero", energia: 90, fuerza: 20, arma: "Espada" },
    { nombre: "Elfo", energia: 100, fuerza: 15, arma: "Arco" },
    { nombre: "Barbaro", energia: 85, fuerza: 25, arma: "Hacha" },
];

const catalogoEnemigos = new CatalogoEnemigos(enemigos);
console.log("Mostrar enemigos originales: ", catalogoEnemigos.enemigos);

let jugador = "";

function borrarBtn() {
    let btnEspada = document.getElementById("Espada-btn");
    let btnArco = document.getElementById("Arco-btn");
    let btnHacha = document.getElementById("Hacha-btn");
    btnEspada.parentNode.removeChild(btnEspada);
    btnArco.parentNode.removeChild(btnArco);
    btnHacha.parentNode.removeChild(btnHacha);
}

function tienda() {
    let btnCrearPersonaje = document.getElementById("Crear-personaje-btn");
    btnCrearPersonaje.remove();
    let btnTienda = document.getElementById("Tienda-btn");
    btnTienda.remove();
    let btnJugar = document.getElementById("Jugar-btn");
    btnJugar.remove();
    let btnSalir= document.getElementById("Salir-btn");
    btnSalir.remove();

    let div = document.getElementById("contenedor");
    let textoDineroDisponible = document.createElement("p");
    textoDineroDisponible.innerText = `Actualmente tiene ${jugador.getDineroDisponible} para gastar.`;
    div.appendChild(textoDineroDisponible);

    titulosYTextos(titulos[3], textos[3]);
    (!jugador.verificarArmaEquipada) ? boton(opcionesTienda) : boton(opcionesTienda.slice(3));

    let btnEspada = document.getElementById("Espada-btn");
    btnEspada.onclick = () => {
        equipamiento("Espada");
    };

    let btnArco = document.getElementById("Arco-btn");
    btnArco.onclick = () => {
        equipamiento("Arco");
    };

    let btnHacha = document.getElementById("Hacha-btn");
    btnHacha.onclick = () => {
        equipamiento("Hacha");
    };

    let btnVolver= document.getElementById("Volver-btn");
    btnVolver.onclick = () => {
        menuPrincipal();
    }
}


function boton(nombres) {
    for (const nombre of nombres) {
        let fieldset = document.getElementById("contenedor");
        let btn = document.createElement("btn");
        btn.innerText = nombre;
        btn.setAttribute("class", `boton`);
        btn.setAttribute("id", `${nombre}-btn`);
        fieldset.appendChild(btn);
    }
}

/*
function botonObjetos(nombres) {
    for (const nombre of nombres) {
        let fieldset = document.getElementById("contenedor");
        let btn = document.createElement("btn");
        btn.innerText = nombre;
        btn.setAttribute("class", `boton`);
        btn.setAttribute("id", `${nombres}-btn`);
        fieldset.appendChild(btn);
    }
}
*/

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
    "Crear-personaje",
    "Tienda",
    "Jugar",
    "Salir"
]

const opcionesTienda = [
    "Espada",
    "Arco",
    "Hacha",
    "Pocion",
    "Volver"
]

const {
    nombre: names
} = tipoDePersonaje;

function salir(){
    let cuerpo = document.getElementById("contenedor");
    cuerpo.innerHTML = `<legend>Adios</legend>
    <div id="breathing-button" ><h3>No lo has intentado.
         Vuelve a ingresar por tu honor!</h3></div>`;
}

function menuPrincipal() {
    document.getElementById("contenedor-crearpersonaje").style.display = 'none';
    document.getElementById("contenedor").style.display = 'block';
    titulosYTextos(titulos[1], textos[1]);
    let btnContinuar = document.getElementById("dato");
    btnContinuar.remove();
    boton(opcionesMenuPrincipal);

    let btnCrearPersonaje = document.getElementById("Crear-personaje-btn");
    btnCrearPersonaje.onclick = () => {
        crearPersonaje() ;
    };

    let btnTienda = document.getElementById("Tienda-btn");
    btnTienda.onclick = () => {
        tienda();
    };

    let btnJugar= document.getElementById("Jugar-btn");
    btnJugar.onclick = () => {
        jugar();
    };

    let btnSalir= document.getElementById("Salir-btn");
    btnSalir.onclick = () => {
        salir();
    };
}


function crearPersonaje() {
    document.getElementById("contenedor-crearpersonaje").style.display = 'block';
    document.getElementById("contenedor").style.display = 'none';
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
        swal("Has seleccionado un " + tipo.options[tipo.selectedIndex].text);
        let perNuevo = new Personaje(nombre.value, tipoDePersonaje[tipo.value - 1]);
        personaje = perNuevo;
        localStorage.setItem("jugador", JSON.stringify(perNuevo));
    } else {
        swal("Opcion invalida")
    }
    menuPrincipal();
}

function equipamiento(arma) {
    let jugador = JSON.parse(localStorage.getItem("jugador"));
    swal(`${jugador.nombre}`);
    jugador.restarDinero(800);
    jugador.equiparArma(arma);
    return;
}

function comprarPociones() {
    let jugador = JSON.parse(localStorage.getItem("jugador"));
    jugador.guardarPociones(1);
    jugador.restarDinero(25);
    swal(`Tenes ${jugador.getCantPociones} pociones`);
}

pantallaPrincipal();


