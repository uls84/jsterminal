let textos = [
    `Te despiertas luego de un largo sueño, es de noche, aun hay algunos restos de la fogata encendidos.
    No recuerdas como has llegado pero algo dentro tuyo quiere gritar y desviarte del camino.
    Te has adentrado en las tierras abandonadas, donde la luna parece nunca abandonar el cielo, no recuerdas cuando fue la ultima vez que viste el sol.
    Sientes que el fuego te protege, las sombras parecen albergar algo que siempre espera que te acerques para hacerte desaparecer.
    Tomas el viejo candelabro y decides prender las velas para continuar con tu viaje.

    Has click para sumergirte en la oscuridad.`,

    `Mientras avanzas por un descampado a lo lejos ves unas luces rojas pequeñas, puede ser otra fogata? un campamento?
    Quieres apretar la empuñadura del arma pero te das cuenta que no tienes ninguna, donde esta? suspiras.
    Decides avanzas hasta que llegas a un panel grande de madera donde esta escrito

    Por favor siga estos consejos para disfrutar de una mejor experiencia:
        1 - Debera crear el personaje.
        2 - Luego debe equipar un arma y comprar pociones.
        3 - Podra comenzar una vez que se hayan completado los pasos anteriores.`,

    `A la izquierda ves a alguien encapuchado sentado detras de una mesa, dos velas iluminan los dos puntos opuestos de la mesa.
    Una exibicion de armas y frascos con liquidos sobre la misma.
    El rostro de la persona esta oculto por la capucha pero parte de sus mejillas son iluminadas por las velas.
    Decides acercarte para preguntar por las armas cuando te habla:
    - Mmm puedo leer en tus ojos que la muerte te sonrie, por favor adquiera alguna de las siguientes armas y no olvide las pociones!
    Es peligroso andar por ahi solo.
        
        Espada ===> 800R
        Daga ===> 800R
        Hacha ===> 800R
        Pocion ===> 25R`,

    `Veo que aun no ha adquirido pociones, por favor tome las que necesite.
        
        Pocion ===> 25R
        Menu Principal`,

    `Tratas de recordar cual era tu nombre, sientes una niebla mental,cual era tu proposito?
    Que era lo que hacias previamente a este momento? 
    Como has llegado a este punto?
    Tratas de pensar y lo unico que recuerdas es...`,

    `Llegas a la puerta de una cripta, no recuerdas bien porque pero sabes que debes adentrarte en la misma para lograr el proposito, pero cual es el proposito?
    La memoria no te esta dando una buena pasada, mientras mas fuerte haces el esfuerzo por recordar mas dificil parece ser recordarlo.
    Sabes sin embargo que dentro las personas que no tomen el riesgo necesario seran comida de gusanos.`,
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
    titulosYTextos(titulos[3], textos[3]);
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

    titulosYTextos(titulos[3], textos[2]);
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
    titulosYTextos(titulos[4], textos[4]);
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
        swal(`Tu nombre viene a tu mente ${nombre.value} y pareces recordar que previamente eras un ` + tipo.options[tipo.selectedIndex].text);
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

let enemy = new Enemigo("Espectro abismal", 20, 10, "Alarido");

function batalla() {
    document.getElementById("Entrar-btn").remove();
    titulosYTextos(titulos[6], textos[5]);
    boton(opcionesJugar);
    document.getElementById("Atacar-btn").style.color = 'black';
    document.getElementById("Pocion-btn").style.color = 'black';
    let btnAtacar = document.getElementById("Atacar-btn");
    btnAtacar.onclick = () => {
        ataque(enemy);
        swal(`Al enemigo le queda ${enemy.energia}`);
        cargaEscenario();
    }
}

function ataque(enemy) {
    while (enemy.energia > 0) {
        if (enemy.energia >= 0) {
            jugador.atacar(enemy);
            console.log("te queda: " + jugador.getEnergia);
        } else if (enemy.energia <= 0) {
            console.log("El enemigo murio");
            return;
        }
    }
}

let escenarios = [
    "Cripta", "Pasillo", "Caverna", "Gruta"
]

let escenariosTexto = [
    `Al caer muerto el impacto del cuerpo contra el suelo genero un temblor y a lo lejos un sonido de algo desmoronandose te paraliza.
Tomas coraje y decides explorar el origen de aquel sonido que te helo la sangre.
Te mueves de manera lenta y pausada porque no sabes que puede merodear en la cripta.
Al avanzar te encuentras con un agujero, los escrombros a su alrededor fueron lo que generaron aquel sonido,
decides entrar en el pero primero introduces el candelabro para iluminar el espacio.`,

    `Te adentras por el pasillo, no hay ningun sonido mas que el de tus botas pisando tierra humeda y ciertos restos de huesos.
La luz de el candelabro comienza a iluminar cada vez mas mientras los muros van cerrandose lentamente y comienzas a ponerte nervioso.
Llegas al punto donde la unica manera de pasar es poniendote de perfil y raspandote las mejillas, hasta un punto donde ya no pasas.
El miedo se apodera, las velas del candelabro comienzan a apagarse, el viento en el rostro te dio algo de esperanza.
Decides avanzar de todos modos y logras pasar el punto mas angosto, unas gotas de sangre te corren por las mejillas pero no importa, piensas que lo peor ya ha pasado.`,

    `El ultimo encuentro te dejo agitado y sudado, te encuentras con dificultad para respirar pero has de seguir avanzando.
Miras a tu alrededor intentando decidir que camino tomar, pero te decides por seguir derecho.
Mientras avanzas en la oscuridad las paredes que te rodeaban comienzan a estar mas y mas cerca hasta que se convierten en un pasillo rocoso.
Te encuentras con un hedor nauseabundo,decides taparte las fosas nasales con un trapo para no respirarlo y continuas avanzando.`,

    `Otro enemigo mas que cae al suelo, la ultima estocada te dejo cansado pero la adrenalina sigue corriendo por tus venas.
Sigues sintiendo que hay mas peligro por delante pese al miedo, una leve sonrisa se asoma en tu rostro mientras te limpias la sangre del mismo.
Tomas el candelabro del suelo y continuas explorando la oscuridad que te rodea, solo para llegar a un punto donde las paredes forman una caverna y decides adentrarte en la misma.`
]

function cargaEscenario() {
    document.getElementById("Atacar-btn").remove();
    document.getElementById("Pocion-btn").remove();
    let numero = Math.floor(Math.random() * escenarios.length);
    titulosYTextos(escenarios[numero], escenariosTexto[numero]);
    let botonEntrar = ["Entrar"];
    boton(botonEntrar);
    document.getElementById("Entrar-btn").style.color = 'black';
    let btnEntrar = document.getElementById("Entrar-btn");
    btnEntrar.onclick = () => {
        batalla();
    }
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