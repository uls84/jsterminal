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

localStorage.clear();

let config = {
    accedeTienda: false,
    puedeJugar: false
}

let titulos = ["Inicio", "Menu", "Enemigos", "Tienda", "Crear Personaje", "Bosque"];

/*
let enemigos = [
    { nombre: "Esqueleto", energia: 20, fuerza: 15, arma: "Espada" },
    { nombre: "Murcielago", energia: 10, fuerza: 5, arma: "Mordida" },
    { nombre: "Fantasma", energia: 20, fuerza: 10, arma: "Ectoplasma" },
    { nombre: "Esqueleto", energia: 20, fuerza: 15, arma: "Lanza" },
    { nombre: "Caballero", energia: 30, fuerza: 25, arma: "Espada" },
    { nombre: "Cancerbero", energia: 50, fuerza: 45, arma: "Mordida" },
    //{ nombre: "Ultima", energia: 60, fuerza: 50, arma: "Espada" },
];*/

let enemigos;

fetch('./mocks/enemigos.json')
  .then(response => response.json())
  .then(data => enemigos = data)
  .catch(error => console.log(error));

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
    btnEspada && btnEspada.remove();
    btnArco && btnArco.remove();
    btnHacha && btnHacha.remove();
}

function armar (arma, config) {
    console.log('Armar--->', arma);
    equipamiento(arma);
    config.puedeJugar = true;
    localStorage.setItem('datos', JSON.stringify(config));
    borrarBtn();
}

function tienda() {
    document.body.className='';
    document.body.classList.add('tienda');
    let btnCrearPersonaje = document.getElementById("Crear-personaje-btn");
    btnCrearPersonaje && btnCrearPersonaje.remove();
    let btnTienda = document.getElementById("Tienda-btn");
    btnTienda && btnTienda.remove();
    let btnJugar = document.getElementById("Jugar-btn");
    btnJugar && btnJugar.remove();
    let btnSalir= document.getElementById("Salir-btn");
    btnSalir && btnSalir.remove();

    let config = JSON.parse(localStorage.getItem('datos'));

    let div = document.getElementById("contenedor");

    //Actualiza el saldo de un parrafo existente, sino lo crea
    let textoDineroDisponible = document.getElementById("dinero-actual") ? 
                                    document.getElementById("dinero-actual") : 
                                    document.createElement("p");
    textoDineroDisponible.setAttribute("id", `dinero-actual`);
    textoDineroDisponible.innerText = `Actualmente tiene ${jugador.getDineroDisponible} para gastar.`;
    div.appendChild(textoDineroDisponible);

    titulosYTextos(titulos[3], textos[3]);
    console.log("tienda-->", config.puedeJugar);
    //Creo los botones y si puedeJugar, osea que tiene el arma cargada borra los botones que no necesita
    boton(opcionesTienda)
    config.puedeJugar && borrarBtn()

    let btnEspada = document.getElementById("Espada-btn");
    btnEspada && (btnEspada.onclick = function() {armar("Espada", config)});

    let btnArco = document.getElementById("Arco-btn");
    btnArco && (btnArco.onclick = function() {armar("Arco", config)});

    let btnHacha = document.getElementById("Hacha-btn");
    btnHacha && (btnHacha.onclick = function() {armar("Hacha", config)});

    let btnPocion = document.getElementById("Pocion-btn");
    btnPocion.onclick = function() {comprarPociones()};

    let btnVolver= document.getElementById("Volver-btn");
    btnVolver.onclick = () => {
        /*Borro todos los botones*/
        btnPocion && btnPocion.remove();
        btnVolver && btnVolver.remove();
        borrarBtn();
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
        if(document.getElementById(`${nombre}-btn`)) {
            continue;
        }
        fieldset.appendChild(btn);
    }
}

/* Querias hacer una funcion para que arme los botones desde un objeto y no un array
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
    //Borro todas las clases y agrego donde estoy parado
    document.body.className='';
    document.body.classList.add('menu-principal');

    document.getElementById("contenedor-crearpersonaje").style.display = 'none';
    document.getElementById("contenedor").style.display = 'block';
    titulosYTextos(titulos[1], textos[1]);
    let btnContinuar = document.getElementById("dato");
    btnContinuar? btnContinuar.remove() : console.log("Ya se borro");
    boton(opcionesMenuPrincipal);
    // NO SE SI LO TENDRIA QUE CREAR ACA
    let config = JSON.parse(localStorage.getItem('datos'));

    let btnCrearPersonaje = document.getElementById("Crear-personaje-btn");
    btnCrearPersonaje.onclick = () => {
        crearPersonaje(config) ;
    };

    let btnTienda = document.getElementById("Tienda-btn");
    btnTienda.onclick = () => {
        (config && config.accedeTienda) ? tienda() : swal("Personaje no creado, por favor seleccione la opcion crear personaje primero.");
    };

    let btnJugar= document.getElementById("Jugar-btn");
    btnJugar.onclick = () => {
        (config && config.puedeJugar) ? jugar() : swal("El personaje no tiene un arma equipada, por favor ingrese en la tienda y compre un arma.");
    };

    let btnSalir= document.getElementById("Salir-btn");
    btnSalir.onclick = () => {
        salir();
    };
}


function crearPersonaje() {
    document.body.className='';
    document.body.classList.add('crear-personaje');

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
        jugador = new Personaje(nombre.value, tipoDePersonaje[tipo.value - 1]);
        config.accedeTienda = true;
        localStorage.setItem("datos", JSON.stringify(config));
    } else {
        swal("Opcion invalida")
    }
    menuPrincipal();
}

function equipamiento(arma) {
    //let jugador = JSON.parse(localStorage.getItem("jugador"));
    jugador.equiparArma(arma);
    jugador.restarDinero(800);
    console.log('jugador.dinero', jugador.dinero)
    jugador.dinero ? 
        swal(`Jugador ${jugador.nombre} gracias por comprar. Le queda ${jugador.dinero}`)
    :
        salir();

    mostrarDineroActual();
}

function comprarPociones() {
    //let jugador = JSON.parse(localStorage.getItem("jugador"));
    jugador.guardarPociones(1);
    jugador.restarDinero(25);
    jugador.dinero ? 
        swal(`Tenes ${jugador.getCantPociones} pociones. Le queda ${jugador.dinero}`)
    :
        swal(`Usted no tiene mas dinero`);
    
    mostrarDineroActual();
}

function mostrarDineroActual(){
    let textoDineroDisponible = document.getElementById("dinero-actual") ? 
                                    document.getElementById("dinero-actual") : 
                                    document.createElement("p");
    textoDineroDisponible.setAttribute("id", `dinero-actual`);
    textoDineroDisponible.innerText = `Actualmente tiene ${jugador.getDineroDisponible} para gastar.`;
}





pantallaPrincipal();