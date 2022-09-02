let textos = [
  `Te despiertas luego de un largo sueño, es de noche, aun hay algunos restos de la fogata encendidos.
    No recuerdas como has llegado pero algo dentro tuyo quiere gritar y desviarte del camino.
    Te has adentrado en las tierras abandonadas, donde la luna parece nunca abandonar el cielo, no recuerdas cuando fue la ultima vez que viste el sol.
    Sientes que el fuego te protege, las sombras parecen albergar algo que siempre espera que te acerques para hacerte desaparecer.
    Tomas el viejo candelabro y decides prender las velas para continuar con tu viaje.

    Has click para sumergirte en la oscuridad.`,

  `Mientras avanzas por un descampado a lo lejos ves unas luces rojas pequeñas, puede ser otra fogata? un campamento?
    Quieres apretar la empuñadura del arma pero te das cuenta que no tienes ninguna, donde esta? suspiras.
    Decides avanzar hasta que llegas a un panel grande de madera donde esta escrito

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

  `Veo que aun no ha adquirido pociones aun, por favor tome las que necesite.
        
        Pocion ===> 25R
        
        `,

  `Tratas de recordar cual era tu nombre, sientes una niebla mental,cual era tu proposito?
    Que era lo que hacias previamente a este momento? 
    Como has llegado a este punto?
    Tratas de pensar y lo unico que recuerdas es...`,

  `Llegas a la puerta de una cripta, no recuerdas bien porque pero sabes que debes adentrarte en la misma para lograr el proposito, pero cual es el proposito?
    La memoria no te esta dando una buena pasada, mientras mas fuerte haces el esfuerzo por recordar mas dificil parece ser recordarlo.
    Sabes sin embargo que dentro las personas que no tomen el riesgo necesario seran comida de gusanos.`,
  `Te adentras en la oscuridad de la cripta, percibes un olor nauseabundo seguido de un sonido.
    Logras agacharte justo a tiempo para esquivar algo que apunto a tu cabeza.
    Al levantarte lo ves erguido a punto de volver a atacar, es tu turno.`,
];

localStorage.clear();

let config = {
  accedeTienda: false,
  puedeJugar: false,
};

let titulos = [
  "Inicio",
  "Menu",
  "Enemigos",
  "Tienda",
  "Crear Personaje",
  "Entrada de cripta",
  "Cripta",
];

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

let enemigos = [
  ["Esqueleto", 20, 15, "Espada"],
  ["Devorador de almas", 20, 20, "Mordida"],
  ["Espectro abismal", 20, 10, "Alarido"],
  ["Abominacion reptante", 20, 15, "Tentaculos"],
  ["Sucubo famelico", 30, 25, "Garras"],
  ["Cancerbero", 20, 10, "Mordida"],
];

let enemys = [];

function crearArrayDeEnemigos(enemigos) {
  for (let enemigo of enemigos) {
    let enemy = new Enemigo(enemigo[0], enemigo[1], enemigo[2], enemigo[3]);
    console.log(enemy);
    enemys.push(enemy);
  }
}
crearArrayDeEnemigos(enemigos);

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
  console.log("Armar--->", arma);
  equipamiento(arma);
  config.puedeJugar = true;
  localStorage.setItem("datos", JSON.stringify(config));
  borrarBtn();
  console.log("Entre a armar");
}

function tienda() {
  document.body.className = "";
  document.body.classList.add("tienda");
  let btnCrearPersonaje = document.getElementById("Crear-personaje-btn");
  btnCrearPersonaje && btnCrearPersonaje.remove();
  let btnTienda = document.getElementById("Tienda-btn");
  btnTienda && btnTienda.remove();
  let btnJugar = document.getElementById("Jugar-btn");
  btnJugar && btnJugar.remove();
  let btnSalir = document.getElementById("Salir-btn");
  btnSalir && btnSalir.remove();

  let config = JSON.parse(localStorage.getItem("datos"));

  let div = document.getElementById("contenedor");

  let textoDineroDisponible = document.getElementById("dinero-actual")
    ? document.getElementById("dinero-actual")
    : document.createElement("p");
  textoDineroDisponible.setAttribute("id", `dinero-actual`);
  textoDineroDisponible.innerText = `Actualmente tiene ${jugador.getDineroDisponible} para gastar.`;
  div.appendChild(textoDineroDisponible);

  titulosYTextos(titulos[3], textos[2]);
  boton(opcionesTienda);
  config.puedeJugar && borrarBtn();

  let btnEspada = document.getElementById("Espada-btn");
  btnEspada &&
    (btnEspada.onclick = function () {
      armar("Espada", config);
    });

  let btnDaga = document.getElementById("Daga-btn");
  btnDaga &&
    (btnDaga.onclick = function () {
      armar("Daga", config);
    });

  let btnHacha = document.getElementById("Hacha-btn");
  btnHacha &&
    (btnHacha.onclick = function () {
      armar("Hacha", config);
    });

  let btnPocion = document.getElementById("Pocion-btn");
  btnPocion.onclick = function () {
    comprarPociones();
  };

  let btnVolver = document.getElementById("Volver-btn");
  btnVolver.onclick = () => {
    btnPocion && btnPocion.remove();
    btnVolver && btnVolver.remove();
    borrarBtn();
    menuPrincipal();
  };
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

const opcionesMenuPrincipal = ["Crear-personaje", "Tienda", "Jugar", "Salir"];

const opcionesTienda = ["Espada", "Daga", "Hacha", "Pocion", "Volver"];

const opcionesJugar = ["Atacar", "Pocion"];

const { nombre: names } = tipoDePersonaje;

function salir() {
  let cuerpo = document.getElementById("contenedor");
  cuerpo.innerHTML = `<legend>Has muerto</legend>
    <div><P>Todo esta negro, sólo sientes el viento correr por tu rostro, comienzas a olvidar cómo has llegado a ese punto.
            Mientras la llama de esperanza desaparece tus sentidos te abandonan y es la ultima vez que has de inhalar aire.
            Luego seras comida de gusanos, tanto por decir y tanto por vivir, quizas nunca debiste emprender ese sendero despues de todo.
            
            Por favor refresca el navegador y vuelve a intentarlo.</P></div>`;
}

function menuPrincipal() {
  document.body.className = "";
  document.body.classList.add("menu-principal");

  document.getElementById("contenedor-crearpersonaje").style.display = "none";
  document.getElementById("contenedor").style.display = "block";
  titulosYTextos(titulos[1], textos[1]);
  let btnContinuar = document.getElementById("dato");
  btnContinuar ? btnContinuar.remove() : console.log("Ya se borro");
  boton(opcionesMenuPrincipal);

  let config = JSON.parse(localStorage.getItem("datos"));

  let btnCrearPersonaje = document.getElementById("Crear-personaje-btn");
  btnCrearPersonaje.onclick = () => {
    crearPersonaje(config);
  };

  let btnTienda = document.getElementById("Tienda-btn");
  btnTienda.onclick = () => {
    config && config.accedeTienda
      ? tienda()
      : swal(
          `No tienes la energia suficiente, aún no recuerdas quien eres.
            Has otro esfuerzo e intenta recordarlo.`
        );
  };

  let btnJugar = document.getElementById("Jugar-btn");
  btnJugar.onclick = () => {
    config && config.puedeJugar
      ? jugar()
      : swal(
          `Sabes que debes entrar a la cripta, no entiendes aún el motivo pero te urge la necesidad.
          Tratas de buscar la empuñadura del arma para calmar la ansiedad pero te das cuenta que la llevas encima.
          Cómienzas a buscar al rededor de la fogata pero no la encuentras por ningun lado.
          ¿Habras sido saqueado?
          Debes conseguir algo para batallar o seras carne de gusanos.`
        );
  };

  let btnSalir = document.getElementById("Salir-btn");
  btnSalir.onclick = () => {
    salir();
  };
}

function crearPersonaje() {
  document.body.className = "";
  document.body.classList.add("crear-personaje");

  document.getElementById("contenedor-crearpersonaje").style.display = "block";
  document.getElementById("contenedor").style.display = "none";
  titulosYTextos(titulos[4], textos[4]);
  let textoCrearPersonaje = document.getElementById("textoPersonaje");
  textoCrearPersonaje.innerText = textos[4];
  let tituloCrearPersonaje = document.getElementById("tituloPersonaje");
  tituloCrearPersonaje.innerText = titulos[4];
}

document.getElementById("btn_crearpersonaje").onclick = function () {
  let nombre = document.getElementById("nombre");
  console.log(document.getElementById("nombre"));
  let tipo = document.getElementById("tipo");
  console.log(document.getElementById("tipo"));

  if (nombre.value && tipo.value) {
    let tipoTexto = tipo.options[tipo.selectedIndex].text;
    let tipoSeparado = tipoTexto
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, function (str) {
        return str.toLowerCase();
      });
    swal(
      `Tu nombre viene a tu mente, ${nombre.value}.
      Tambien pareces recordar que previamente eras un ${tipoSeparado.toLowerCase()}.`
    );
    jugador = new Personaje(nombre.value, tipoDePersonaje[tipo.value - 1]);
    config.accedeTienda = true;
    localStorage.setItem("datos", JSON.stringify(config));
  } else {
    swal("Opcion invalida");
  }
  menuPrincipal();
};

function jugar() {
  document.body.className = "";
  document.body.classList.add("jugar");
  document.body.style.backgroundColor = "black";
  document.getElementById("tituloPagina").style.color = "black";
  document.getElementById("contenedor-crearpersonaje").style.display = "none";
  titulosYTextos(titulos[5], textos[6]);

  let btnCrearPersonaje = document.getElementById("Crear-personaje-btn");
  btnCrearPersonaje && btnCrearPersonaje.remove();
  document.getElementById("dinero-actual").style.display = "none";
  let btnAnteriores = document.querySelectorAll(".boton");
  btnAnteriores.forEach((btnAnterior) => {
    btnAnterior.remove("boton");
  });

  let botonEntrar = ["Entrar"];
  boton(botonEntrar);
  document.getElementById("Entrar-btn").style.color = "black";
  let btnEntrar = document.getElementById("Entrar-btn");
  btnEntrar.onclick = () => {
    batalla();
  };
}

// Prueba para generar un array con los enemigos

function batalla() {
  document.getElementById("Entrar-btn").remove();
  titulosYTextos(titulos[6], textos[5]);
  boton(opcionesJugar);
  document.getElementById("Atacar-btn").style.color = "black";
  document.getElementById("Pocion-btn").style.color = "black";
  let btnAtacar = document.getElementById("Atacar-btn");
  btnAtacar.onclick = () => {
    visualizarAtaque();
  };
  let btnPocion = document.getElementById("Pocion-btn");
  btnPocion.onclick = () => {
    recuperarEnergia();
  };
}

function recuperarEnergia() {
  jugador.usarPocion();
  swal(`Usaste una pocion y ahora tienes ${jugador.energia}`);
}

function pantallaFinal() {
  swal(`Luego de la última batalla caes de rodillas, agotado.
        La adrenalina comienza a desvaneserse y los golpes recibidos comienzan a sentirse en el cuerpo.
        Delante tuyo la capilla te aguarda, iluminada por la luz de la luna, todo este sufrimiento no ha sido en vano.
        `);
}

// Probemos modificando esto y reescribiendo para que el while este en el visualizar y que el ataque sea una sola vez
/*
function visualizarAtaque() {
  let enemyIndex = Math.floor(Math.random() * enemys.length);
  let textoModificado = document.getElementById("texto");
  textoModificado.innerText = `Tomas rapidamente tu ${jugador.arma} por el mango y lanzas una estocada, que hubieses deseado que fuese con mayor fuerza.
                              ${enemys[enemyIndex].nombre} recibe el golpe pero logra esquivar parte del impacto, al retomar el equilibro.
                              En camara lenta notas como toma inclina su cuerpo hacia adelante y notas que toma impulso para lanzar otro ataque y el golpe será inevitable.`;
  let div = document.getElementById("contenedor");
  let statusEnergia = document.getElementById("statusEnergia")
    ? document.getElementById("statusEnergia")
    : document.createElement("p");
  statusEnergia.setAttribute("id", `statusEnergia`);
  //document.getElementById("statusEnergia").style."font-style: bold";
  statusEnergia.innerText = `${jugador.nombre}: ${jugador.energia} ...................................... ${enemys[enemyIndex].nombre}: ${enemys[enemyIndex].energia}`;
  div.appendChild(statusEnergia);
  ataque(enemys[enemyIndex]);
  if (enemys.length != 0) {
    cargaEscenario();
  } else if (enemys.length == 0) {
    pantallaFinal();
  }
}
function ataque(enemy) {
  console.log("Entre al ataque");
  while (!enemy.muerto) {
    if (enemy.energia > 0) {
      jugador.atacar(enemy);
      console.log(`Te queda:  ${jugador.getEnergia}`);
      console.log(`A ${enemy.nombre} le queda ${enemy.energia}`);
      if (enemy.energia <= 0) {
        console.log(
          `${enemy.nombre} murio y le queda ${enemy.energia} de vida.`)
          enemy.muerto = true;
          enemys.splice(enemy, 1);
          break;
      }
    } else if (enemy.energia <= 0) {
      console.log(`${enemy.nombre} murio y le quedo ${enemy.energia} de vida.`);
      break;
    }
  }
  console.log(enemys);
  console.log("Sali del ataque");
  return;
  console.log("Este no se deberia ver nunca");
}*/

// Version modificada y le vamos a sacar el while de la pelea para llevarlo al visualizador

function visualizarAtaque() {
  let enemyIndex = Math.floor(Math.random() * enemys.length);
  let textoModificado = document.getElementById("texto");
  textoModificado.innerText = `Tomas rapidamente tu ${jugador.arma} por el mango y lanzas una estocada, que hubieses deseado que fuese con mayor fuerza.
                              ${enemys[enemyIndex].nombre} recibe el golpe pero logra esquivar parte del impacto, al retomar el equilibro.
                              En camara lenta notas como toma inclina su cuerpo hacia adelante y notas que toma impulso para lanzar otro ataque y el golpe será inevitable.`;
  let div = document.getElementById("contenedor");
  ataque(enemys[enemyIndex]);
  if(!enemys[enemyIndex].muerto){
    let statusEnergia = document.getElementById("statusEnergia")
      ? document.getElementById("statusEnergia")
      : document.createElement("p");
    statusEnergia.setAttribute("id", `statusEnergia`);
    statusEnergia.innerText = `${jugador.nombre}: ${jugador.energia} .................................. ${enemys[enemyIndex].nombre}: ${enemys[enemyIndex].energia}`;
    div.appendChild(statusEnergia);
  } else if ((enemys[enemyIndex].muerto) && (enemys.length != 0)){
    console.log(`${enemys[enemyIndex].nombre} ha muerto`);
    console.log(`Se va a borrar a ${enemys[enemyIndex].nombre}`);
    enemys.splice(enemyIndex, 1);
    console.log(enemys);
    cargaEscenario();
  } else if (enemys.length == 0) {
    pantallaFinal();
  }
}

function ataque(enemy) {
  console.log("Entre al ataque");
  if (!enemy.muerto) {
    if (enemy.energia > 0) {
      jugador.atacar(enemy);
      console.log(`Te queda:  ${jugador.getEnergia}`);
      console.log(`A ${enemy.nombre} le queda ${enemy.energia}`);
    }
  } else if (enemy.energia <= 0) {
    console.log(`${enemy.nombre} murio y le quedo ${enemy.energia} de vida.`);
    enemy.muerto = true;
    }
  return;
}

const escenarios = ["Cripta", "Pasillo", "Caverna", "Gruta"];

const escenariosTexto = [
  `Al caer muerto el impacto del cuerpo contra el suelo genero un temblor y a lo lejos un sonido de algo desmoronandose te paraliza.
Tomas coraje y decides explorar el origen de aquel sonido que te helo la sangre.
Te mueves de manera lenta y pausada porque no sabes que puede merodear en la cripta.
Al avanzar te encuentras con un agujero, los escrombros a su alrededor fueron lo que generaron aquel sonido,
decides entrar en el pero primero introduces el candelabro para iluminar el espacio.`,

  `Te adentras por el pasillo, no hay ningun sonido mas que el de tus botas pisando tierra humeda y fragmentos de huesos.
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
Tomas el candelabro del suelo y continuas explorando la oscuridad que te rodea, solo para llegar a un punto donde las paredes forman una caverna y decides adentrarte en la misma.`,
];

//let textoPelea = [`Tomas tu ${jugador.arma} y lanzas un ataque a la mayor velocidad posible.
//                    ${enemys[enemy].nombre} recibe el golpe y retrocede brevemente `];

function cargaEscenario() {
  document.getElementById("Atacar-btn").remove();
  document.getElementById("Pocion-btn").remove();
  let numero = Math.floor(Math.random() * escenarios.length);
  titulosYTextos(escenarios[numero], escenariosTexto[numero]);
  let botonEntrar = ["Entrar"];
  boton(botonEntrar);
  document.getElementById("Entrar-btn").style.color = "black";
  let btnEntrar = document.getElementById("Entrar-btn");
  btnEntrar.onclick = () => {
    batalla();
  };
}

function equipamiento(arma) {
  jugador.equiparArma(arma);
  jugador.restarDinero(800);
  console.log("jugador dinero", jugador.dinero);
  if (jugador.dinero) {
    swal(`¿Cual es su nombre? 
        Ah ${jugador.nombre}, me recuerda al atisbo de epocas mejores por venir.
        Gracias por su compra!`);
  } else {
    swal(`-No fue muy sabio de su parte querer sacar partida de la situacion..
            En ese momento el encapuchado en un movimiento rapido saco del interior de su capa una daga
            y lanzo una estocada la cual fue recibida en su abdomen.
            La velocidad fue tal que aun no comprendes la situacion, en un parpadeo has visto como la daga
            se retiro del abdomen y la sangre comenzo a brotar cómo negras lenguas de algun monstruo sediento.
            Sientes el calor en tus manos mientras intentas tapar la herida, pero es demasiado tarde, comienzas a ver nublado.
            Sientes un sudor frio correr por tu rostro y sientes cómo todo a tu alrededor comienza a apagarse.
            Todo esta negro, quedan pensamientos, muy a lo lejos.`);
    salir();
  }
  mostrarDineroActual();
}

function comprarPociones() {
  jugador.guardarPociones(1);
  jugador.restarDinero(25);
  jugador.dinero > 0
    ? console.log(
        `Miras en el interior de tu bolso y ves ${jugador.getCantPociones} pociones. Aún sabes que tienes ${jugador.dinero} para gastar`
      )
    : swal(`No tienes dinero ${jugador.nombre} ya puedes largarte de aqui.`);
  mostrarDineroActual();
}

function mostrarDineroActual() {
  let textoDineroDisponible = document.getElementById("dinero-actual")
    ? document.getElementById("dinero-actual")
    : document.createElement("p");
  textoDineroDisponible.setAttribute("id", `dinero-actual`);
  textoDineroDisponible.innerText = `Miras el interior de tu bolsa, cuentas con ${jugador.getDineroDisponible} para gastar y miras la cantidad de pociones que posees, quedan ${jugador.getCantPociones}.`;
}

pantallaPrincipal();
