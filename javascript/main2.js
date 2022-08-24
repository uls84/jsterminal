let textos = [`Bienvenido a las tierras abandonadas donde el bien jamas es visto y la luna parece nunca abandonar estas tierras
    
    Has click para comenzar con el juego!`,
    `Seleccione una de las siguientes opciones
        1 - Debera crear el personaje.
        2 - Luego debe equipar un arma y comprar pociones.
        3 - Podra acceder al juego una vez que se hayan completado los pasos anteriores.`,
    `Bienvenido al menu secreto donde podra ver,editar e ingresar nuevos enemigos`,
    `Bienvenido a la tienda por favor compre un arma y luego compre las pociones que guste!
        1- Espada ===> 800R
        2- Daga ===> 800R
        3- Hacha ===> 800R
        4- Pocion ===> 25R`,
    `Bienvenido a la tienda por favor compre un arma y luego compre las pociones que guste
        1- Pocion ===> 25R
        5- Menu Principal`,
    `Ingrese el nombre para su personaje y seleccione un estilo de personaje.
        1- Caballero Caido
        2- Saqueador De Tumbas
        3- Verdugo Errante`,
    `La aventura comienza preparate a masacrar a tus oponentes, no dudes o seras devorado por los gusanos.`,
    `Te adentras en la oscuridad de la cripta, percibes un olor nauseabundo seguido de un sonido.
    Logras agacharte justo a tiempo para esquivar algo que apunto a tu cabeza.
    Al levantarte lo ves erguido a punto de volver a atacar, es tu turno.`];

localStorage.clear();

let config = {
    accedeTienda: false,
    puedeJugar: false
}

let titulos = ["Inicio", "Menu", "Enemigos", "Tienda", "Crear Personaje", "Entrada de cripta", "Cripta"];

/*
let enemigos = [
    { nombre: "Esqueleto", energia: 20, fuerza: 15, arma: "Espada" },
    { nombre: "Devorador de almas", energia: 10, fuerza: 5, arma: "Mordida" },
    { nombre: "Espectro abismal", energia: 20, fuerza: 10, arma: "Alarido" },
    { nombre: "Abominacion reptante", energia: 20, fuerza: 15, arma: "Lanza" },
    { nombre: "Sucubo famelico", energia: 30, fuerza: 25, arma: "Garras" },
    { nombre: "Cancerbero", energia: 50, fuerza: 45, arma: "Mordida" },
];*/

/*
let enemigos;

fetch('./mocks/enemigos.json')
  .then(response => response.json())
  .then(data => enemigos = data)
  .catch(error => console.log(error));
  */

const tipoDePersonaje = [
    { nombre: "CaballeroCaido", energia: 90, fuerza: 20, arma: "Espada" },
    { nombre: "SaqueadorDeTumbas", energia: 100, fuerza: 15, arma: "Daga" },
    { nombre: "VerdugoErrante", energia: 85, fuerza: 25, arma: "Hacha" },
];

/* Esto lo borramos luego
const catalogoEnemigos = new CatalogoEnemigos(enemigos);
console.log("Mostrar enemigos originales: ", catalogoEnemigos.enemigos);
*/

let jugador = "";

function borrarBtn() {
    let btnEspada = document.getElementById("Espada-btn");
    let btnDaga = document.getElementById("Daga-btn");
    let btnHacha = document.getElementById("Hacha-btn");
    btnEspada && btnEspada.remove();
    btnDaga && btnDaga.remove();
    btnHacha && btnHacha.remove();
}

function armar(arma, config) {
    console.log('Armar--->', arma);
    equipamiento(arma);
    config.puedeJugar = true;
    localStorage.setItem('datos', JSON.stringify(config));
    borrarBtn();
}

function tienda() {
    document.body.className = '';
    document.body.classList.add('tienda');
    let btnCrearPersonaje = document.getElementById("Crear-personaje-btn");
    btnCrearPersonaje && btnCrearPersonaje.remove();
    let btnTienda = document.getElementById("Tienda-btn");
    btnTienda && btnTienda.remove();
    let btnJugar = document.getElementById("Jugar-btn");
    btnJugar && btnJugar.remove();
    let btnSalir = document.getElementById("Salir-btn");
    btnSalir && btnSalir.remove();

    let config = JSON.parse(localStorage.getItem('datos'));

    let div = document.getElementById("contenedor");

    let textoDineroDisponible = document.getElementById("dinero-actual") ?
        document.getElementById("dinero-actual") :
        document.createElement("p");
    textoDineroDisponible.setAttribute("id", `dinero-actual`);
    textoDineroDisponible.innerText = `Actualmente tiene ${jugador.getDineroDisponible} para gastar.`;
    div.appendChild(textoDineroDisponible);

    titulosYTextos(titulos[3], textos[3]);
    boton(opcionesTienda)
    config.puedeJugar && borrarBtn()

    let btnEspada = document.getElementById("Espada-btn");
    btnEspada && (btnEspada.onclick = function () { armar("Espada", config) });

    let btnDaga = document.getElementById("Daga-btn");
    btnDaga && (btnDaga.onclick = function () { armar("Daga", config) });

    let btnHacha = document.getElementById("Hacha-btn");
    btnHacha && (btnHacha.onclick = function () { armar("Hacha", config) });

    let btnPocion = document.getElementById("Pocion-btn");
    btnPocion.onclick = function () { comprarPociones() };

    let btnVolver = document.getElementById("Volver-btn");
    btnVolver.onclick = () => {
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
        if (document.getElementById(`${nombre}-btn`)) {
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
    "Daga",
    "Hacha",
    "Pocion",
    "Volver"
]

const opcionesJugar = [
    "Atacar",
    "Pocion"
]

const {
    nombre: names
} = tipoDePersonaje;

function salir() {
    let cuerpo = document.getElementById("contenedor");
    cuerpo.innerHTML = `<legend>Adios</legend>
    <div id="breathing-button" ><h3>No lo has intentado. Vuelve a ingresar por tu honor!</h3></div>`;
}

function menuPrincipal() {
    document.body.className = '';
    document.body.classList.add('menu-principal');

    document.getElementById("contenedor-crearpersonaje").style.display = 'none';
    document.getElementById("contenedor").style.display = 'block';
    titulosYTextos(titulos[1], textos[1]);
    let btnContinuar = document.getElementById("dato");
    btnContinuar ? btnContinuar.remove() : console.log("Ya se borro");
    boton(opcionesMenuPrincipal);

    let config = JSON.parse(localStorage.getItem('datos'));

    let btnCrearPersonaje = document.getElementById("Crear-personaje-btn");
    btnCrearPersonaje.onclick = () => {
        crearPersonaje(config);
    };

    let btnTienda = document.getElementById("Tienda-btn");
    btnTienda.onclick = () => {
        (config && config.accedeTienda) ? tienda() : swal("Personaje no creado, por favor seleccione la opcion crear personaje primero.");
    };

    let btnJugar = document.getElementById("Jugar-btn");
    btnJugar.onclick = () => {
        (config && config.puedeJugar) ? jugar() : swal("El personaje no tiene un arma equipada, por favor ingrese en la tienda y compre un arma.");
    };

    let btnSalir = document.getElementById("Salir-btn");
    btnSalir.onclick = () => {
        salir();
    };
}


function crearPersonaje() {
    document.body.className = '';
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

function jugar() {
    document.body.className = '';
    document.body.classList.add('jugar');
    document.body.style.backgroundColor = 'black';
    document.getElementById("tituloPagina").style.color = 'black';
    document.getElementById("contenedor-crearpersonaje").style.display = 'none';
    titulosYTextos(titulos[5], textos[6]);

    let btnCrearPersonaje = document.getElementById("Crear-personaje-btn");
    btnCrearPersonaje && btnCrearPersonaje.remove();
    document.getElementById("dinero-actual").style.display = 'none';
    let btnAnteriores = document.querySelectorAll(".boton");
    btnAnteriores.forEach(btnAnterior => {
        btnAnterior.remove('boton');
    });
    let botonEntrar = ["Entrar"];
    boton(botonEntrar);
    document.getElementById("Entrar-btn").style.color = 'black';
    let btnEntrar = document.getElementById("Entrar-btn");
    btnEntrar.onclick = () => {
        batalla();
    }
}

let enemy = new Enemigo("Espectro abismal", parseInt(20), parseInt(10), "Alarido");

function batalla() {
    console.log(enemy);
    console.log(enemy.nombre);
    console.log(enemy.energia);
    console.log(enemy.fuerza);
    console.log(enemy.arma);
    document.getElementById("Entrar-btn").remove();
    titulosYTextos(titulos[6], textos[7]);
    boton(opcionesJugar);
    document.getElementById("Atacar-btn").style.color = 'black';
    document.getElementById("Pocion-btn").style.color = 'black';
    let btnAtacar = document.getElementById("Atacar-btn");
    btnAtacar.onclick = () => {
        ataque(enemy);
        swal(`Al enemigo le queda ${enemy.energia}`)
    }
}

function ataque(enemy) {
    console.log(`Energia del jugador antes de atacar ${jugador.energia}`);
    jugador.atacar(enemy);
    console.log(`Energia del enamigo por el metodo ${enemy.getEnergia}`);
    console.log(`Energia del enemigo ${parseInt(enemy.energia)}`);
    console.log("te queda: " + jugador.getEnergia);
}

function equipamiento(arma) {
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
    jugador.guardarPociones(1);
    jugador.restarDinero(25);
    jugador.dinero ?
        swal(`Tenes ${jugador.getCantPociones} pociones. Le queda ${jugador.dinero}`)
        :
        swal(`No tienes dinero ${jugador.nombre} ya puedes largarte de aqui.`);

    mostrarDineroActual();
}

function mostrarDineroActual() {
    let textoDineroDisponible = document.getElementById("dinero-actual") ?
        document.getElementById("dinero-actual") :
        document.createElement("p");
    textoDineroDisponible.setAttribute("id", `dinero-actual`);
    textoDineroDisponible.innerText = `Actualmente tiene ${jugador.getDineroDisponible} para gastar.`;
}





pantallaPrincipal();