let enemigos = [
    { nombre: "Esqueleto", energia: 20, fuerza: 15, arma: "Espada" },
    { nombre: "Murcielago", energia: 10, fuerza: 5, arma: "Mordida" },
    { nombre: "Fantasma", energia: 20, fuerza: 10, arma: "Ectoplasma" },
    { nombre: "Esqueleto", energia: 20, fuerza: 15, arma: "Lanza" },
    { nombre: "Caballero", energia: 30, fuerza: 25, arma: "Espada" },
    { nombre: "Cancerbero", energia: 50, fuerza: 45, arma: "Mordida" },
    { nombre: "Ultima", energia: 60, fuerza: 50, arma: "Espada" },
]

const tipoDePersonaje = [
    { nombre: "Guerrero", energia: 90, fuerza: 20, arma: "Espada" },
    { nombre: "Elfo", energia: 100, fuerza: 15, arma: "Arco" },
    { nombre: "Barbaro", energia: 85, fuerza: 25, arma: "Hacha" },
]

const catalogoEnemigos = new CatalogoEnemigos(enemigos);
console.log("Mostrar enemigos originales: ", catalogoEnemigos.enemigos)

const personaje = [];

pantallaBienvenida();

function tienda(personaje) {
    let arma = personaje.arma;
    let opcion = "";


    while (opcion !== 5) {
        if (!personaje[0].verificarArmaEquipada) {
            opcion = Number(prompt(`Bienvenido a la tienda, por favor ingrese el numero representado el producto que desea adquirir
        Tenes ${personaje[0].getDineroDisponible} para gastar.
        1- Espada ===> 800R
        2- Arco ===> 800R
        3- Hacha ===> 800R
        4- Pocion ===> 25R
        5- Menu Principal`));

            switch (opcion) {
                case 1: // hay que hacerlo en el objeto que si no es de esa clase le reste fuerza
                    if (!personaje[0].verificarArmaEquipada && personaje[0].getDineroDisponible >= 800) {
                        personaje[0].restarDinero(800);
                        personaje[0].equiparArma("Espada");
                    } else {
                        alert("Ya tenes el arma equipada");
                    };
                    break;
                case 2:
                    if (!personaje[0].verificarArmaEquipada && personaje[0].getDineroDisponible >= 800) {
                        personaje[0].restarDinero(800);
                        personaje[0].equiparArma("Arco");
                    } else {
                        alert("Ya tenes el arma equipada");
                    };
                    break;
                case 3:
                    if (!personaje[0].verificarArmaEquipada && personaje[0].getDineroDisponible >= 800) {
                        personaje[0].restarDinero(800);
                        personaje[0].equiparArma("Hacha");
                    } else {
                        alert("Ya tenes el arma equipada");
                    };
                    break;
                case 4:
                    if (personaje[0].getDineroDisponible >= 25) {
                        personaje[0].guardarPociones(1);
                        personaje[0].restarDinero(25);
                        alert(`Tenes ${personaje[0].getCantPociones}`);
                    }
                    break;
                case 5:
                    return;
                default:
                    alert("La opcion selecionada no es correcta");
                    break;
            }
        } else if (personaje[0].verificarArmaEquipada) {
            opcion = Number(prompt(`Bienvenido a la tienda, por favor ingrese el numero representado el producto que desea adquirir
            Tenes ${personaje[0].getDineroDisponible} para gastar.
            1- Pocion ===> 25R
            5- Menu Principal`));
            switch (opcion) {
                case 1:
                    if (personaje[0].getDineroDisponible >= 25) {
                        personaje[0].guardarPociones(1);
                        personaje[0].restarDinero(25);
                        alert(`Tenes ${personaje[0].getCantPociones}`);
                    } else if (personaje[0].getDineroDisponible < 25) {
                        alert("No tenes mas dinero disponible");
                        return;
                    }
                    break;
                case 5:
                    return;
                default:
                    alert("La opcion selecionada no es correcta");
                    break;
            }
        }
    }
}

function pantallaBienvenida() {
    let opcion = "";

    while (opcion != 5 && opcion != 4) {
        opcion = Number(prompt(`Seleccione una de las opciones:
        1- Crear el personaje
        2- Menu de enemigos
        3- Ir a la tienda
        4- Jugar
        5- Salir del juego`));

        switch (opcion) {
            case 1:
                crearPersonaje();
                break;
            case 2:
                mostrarMenu();
                break;
            case 3:
                if (personaje[0] != null) {
                    tienda(personaje);
                }
                else { alert("Aun no tenes el personaje creado, por favor crea tu personaje primero"); }
                break;
            case 4:
                if (personaje[0] != null) {
                    return jugar();
                }
                else { alert("Aun no tenes el personaje creado, por favor crea tu personaje primero"); }
                break;
            case 5:
                return alert("Gracias por jugar!");
            default:
                alert("Opcion invalida, por favor seleccione una opcion correcta");

        }
    }

}

function jugar() {
    console.log(personaje[0]);
    let opciones = document.createElement("div");
    opciones.innerHTML = `<fieldset><h1>Bienvenido ${personaje[0].nombre}</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adip
                            Lorem ipsum dolor sit amet, consectetur adip
                            Lorem ipsum dolor sit amet, consectetur adip</p>
                            <button id="btnIzq">Izquierda</button>
                            <button id="btnDer">Derecha</button></fieldset> `;
    document.body.appendChild(opciones);
    let btn1 = document.getElementById('btnIzq');
    btn1.addEventListener("click", () => {
        alert("Izquierda baby!");
    });

    let btn2 = document.getElementById('btnDer');
    btn2.addEventListener("click", () => {
        alert("Derecha baby!");
    });
}


function crearPersonaje() {
    let seleccionPersonaje = 0;

    let nombre = prompt(`Ingrese el nombre de su personaje`);

    do {

        seleccionPersonaje = Number(prompt(`Ingrese el numero que representa a la clase de personaje
        1- Guerrero
        2- Elfo
        3- Barbaro`));

        switch (seleccionPersonaje) {
            case 1:
                alert("Has seleccionado ser un Guerrero, felicitaciones, recorda pasar por la tienda y comprar tu espada!");
                break;
            case 2:
                alert("Has seleccionado ser un Elfo, felicitaciones, recorda pasar por la tienda y comprar tu arco y flecha!");
                break;
            case 3:
                alert("Has seleccionado ser un Barbaro, felicitaciones, recorda pasar por la tienda y comprar tu hacha!");
            default:
                alert("La opcion selecionada no es correcta");
                break;
        }

    } while (seleccionPersonaje != 3 && seleccionPersonaje !== 2 && seleccionPersonaje !== 1);


    const perNuevo = new Personaje(nombre, tipoDePersonaje[seleccionPersonaje - 1]);
    personaje.push(perNuevo);
    pantallaBienvenida();
}

function mostrarMenu() {
    let opcion = "";
    while (opcion !== "4") {
        opcion = prompt(`Ingrese una opcion:
                    1. Ingresar Enemigo
                    2. Listar Enemigos
                    3. Actualizar Enemigo
                    4. Menu Principal`)
        switch (opcion) {
            case "1":
                crearEnemigo()
                break;
            case "2":
                listarEnemigos();
                break;
            case "3":
                actualizarEnemigo()
                break;
            case "4":
                return;
            default:
                alert("Opcion invalida, vuelva a ingresar una opcion")
                break;
        }
    }
}


function crearEnemigo() {
    let energia = 0;
    let fuerza = 0;
    let nombre = prompt("Ingrese un nombre")
    do {
        energia = Number(prompt("Ingrese la energia que va a tener (entre 10 y 100"))
    } while (energia > 100 && energia < 10);

    let arma = prompt("Ingrese un arma")

    do {
        fuerza = Number(prompt("Ingrese un valor para su fuerza de 5 a 60"))
    } while (fuerza > 60 && fuerza < 10);

    let enemigo = new Enemigo(nombre, energia, fuerza, arma);
    catalogoEnemigos.agregarEnemigo(enemigo);

    console.log("CATALOGO ENEMIGOS", catalogoEnemigos);
}

function actualizarEnemigo() {
    let energia = 0;
    let fuerza = 0;
    let enemigoACambiar = prompt("Ingrese el nombre de un enemigo a modificar");
    let nombre = prompt("Ingrese un nombre")
    do {
        energia = Number(prompt("Ingrese la energia que va a tener (entre 10 y 100"))
    } while (energia > 100 && energia < 10);

    let arma = prompt("Ingrese un arma")

    do {
        fuerza = Number(prompt("Ingrese un valor para su fuerza de 5 a 60"))
    } while (fuerza > 60 && fuerza < 10);

    catalogoEnemigos.modificarEnemigo(enemigoACambiar, nombre, energia, fuerza, arma);

}

function listarEnemigos() {
    catalogoEnemigos.listarEnemigos();
}

