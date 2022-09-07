let textos = [
  `Te despiertas luego de un largo sueño, es de noche, aún hay algunos restos de la fogata encendidos.
   No recuerdas cómo has llegado pero algo dentro tuyo quiere gritar y desviarte del camino.
   Te has adentrado en las tierras abandonadas, donde la luna parece nunca abandonar el cielo,
   no recuerdas cuándo fue la última vez que viste el sol.
   Sientes que el fuego te protege, las sombras parecen albergar algo que siempre espera que te acerques para hacerte desaparecer.
   Tomas el viejo candelabro y decides prender las velas para continuar con tu viaje.

    Haz clic para sumergirte en la oscuridad.`,

  `Mientras avanzas por un descampado a lo lejos ves unas luces rojas pequeñas.
   ¿Puede ser otra fogata?
   ¿Un campamento?

   Quieres apretar la empuñadura del arma pero te das cuenta que no tienes ninguna.
   ¿Dónde está? suspiras.
   Decides avanzar hasta que llegas a un panel grande de madera donde está escrito

    Por favor siga estos consejos para disfrutar de una mejor experiencia:

        1 - Deberá crear el personaje.
        2 - Luego debe equipar un arma y comprar pociones.
        3 - Podrá comenzar una vez que se hayan completado los pasos anteriores.
        
        `,

  `A la izquierda ves a alguien encapuchado sentado detrás de una mesa, dos velas iluminan los dos puntos opuestos de la mesa.
    Una exhibición de armas y frascos con líquidos sobre la misma.
    El rostro de la persona está oculto por la capucha pero parte de sus mejillas son iluminadas por las velas.
    Decides acercarte para preguntar por las armas cuando te habla:
    - Mmm puedo leer en tus ojos que la muerte te sonríe, por favor adquiera alguna de las siguientes armas y no olvide las pociones!
    Es peligroso andar por ahí solo.
        
        Espada ===> 800R
        Daga ===> 800R
        Hacha ===> 800R
        Pocion ===> 25R`,

  `Veo que aún no ha adquirido pociones aun, por favor tome las que necesite.
        
        Pocion ===> 25R
        
        `,

  `Tratas de recordar cuál era tu nombre, sientes una niebla mental.
  ¿Cuál era tu proposito?
  ¿Que era lo que haciás previamente a este momento? 
  ¿Cómo has llegado a este punto?
  Tratas de pensar y lo único que recuerdas es...`,

  `Te adentras en la oscuridad, intentas ver más allá de lo que ilumina el candelabro.
   Percibes un olor nauseabundo seguido de un sonido.
   Tu instinto te dice que te agaches, lo logras justo a tiempo y esquivas un golpe que iba dirigido a tu cabeza.
   Al levantarte lo ves erguido a punto de volver a atacar, es tu turno.`,

  `Llegas a la puerta de una cripta, no recuerdas bien porqué pero sabes que debes adentrarte en la misma para lograr el proposito.
   ¿Cuál es el propósito?
   La memoria no te está dando una buena pasada, mientras más fuerte haces el esfuerzo por recordar más difícil parece ser recordarlo.
    Sabes sin embargo que dentro las personas que no tomen el riesgo necesario serán comida de gusanos.`,

  
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
  "Oscuridad",
];


const tipoDePersonaje = [
  { nombre: "CaballeroCaido", energia: 90, fuerza: 20, arma: "Espada" },
  { nombre: "SaqueadorDeTumbas", energia: 100, fuerza: 15, arma: "Daga" },
  { nombre: "VerdugoErrante", energia: 85, fuerza: 25, arma: "Hacha" },
];


let enemigos = [
  ["Esqueleto", 30, 15, "Espada"],
  ["Devorador de almas", 30, 20, "Mordida"],
  ["Espectro abismal", 30, 10, "Alarido"],
  ["Abominacion reptante", 50, 15, "Tentaculos"],
  ["Sucubo famelico", 30, 25, "Garras"],
  ["Cancerbero", 60, 30, "Mordida"],
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
  equipamiento(arma);
  config.puedeJugar = true;
  localStorage.setItem("datos", JSON.stringify(config));
  borrarBtn();
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
  crearBoton(opcionesTienda);
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

function crearBoton(nombres) {
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
  typewrite();
}

const opcionesMenuPrincipal = ["Crear-personaje", "Tienda", "Jugar", "Salir"];

const opcionesTienda = ["Espada", "Daga", "Hacha", "Pocion", "Volver"];

const opcionesJugar = ["Atacar", "Pocion"];

const { nombre: names } = tipoDePersonaje;

function salir() {
  let cuerpo = document.getElementById("contenedor");
  cuerpo.innerHTML = `<legend id="tituloPagina" >Has muerto</legend>
    <div><p>Mientras todo se torna negro, sientes una suave caricia en tu rostro, posiblemente sea el viento.
            La esperanza desaparece rápidamente mientras tus sentidos te abandonan y desearías no haber embarcado esta aventura.
            La angustia consume tu último aliento, el nudo en la garganta suprime un grito que será tu recuerdo por la eternidad.
            

            Por favor refresca el navegador y vuelve a intentarlo.</p></div>`;
  document.getElementById("tituloPagina").style.color = "black";      
  typewrite();
}

function menuPrincipal() {
  document.body.className = "";
  document.body.classList.add("menu-principal");

  document.getElementById("contenedor-crearpersonaje").style.display = "none";
  document.getElementById("contenedor").style.display = "block";
  titulosYTextos(titulos[1], textos[1]);
  let btnContinuar = document.getElementById("dato");
  btnContinuar ? btnContinuar.remove() : console.log("Ya se borro");
  crearBoton(opcionesMenuPrincipal);

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
          Comienzas a buscar alrededor de la fogata pero no la encuentras por ningún lado.
          ¿Habrás sido saqueado?
          Debes conseguir algo para batallar o serás carne de gusanos.`
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

function typewrite() {
  $('#texto').each(function () {
    $(this).typewrite({
      speed: 35,
      blinkSpeed: 6,
      blinkingCursor: false,
      actions: [
        { type: $(this).text() },
      ]
    });
  });
}

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

  crearBoton(["Entrar"]);
  let btnEntrar = document.getElementById("Entrar-btn");
  btnEntrar.style.color = "black";
  btnEntrar.onclick = () => {
    batalla();
  };
}

let enemyIndex = Math.floor(Math.random() * enemys.length);

function batalla() {
  document.getElementById("Entrar-btn").remove();
  titulosYTextos(titulos[6], textos[5]);
  crearBoton(opcionesJugar);
  typewrite();
  let btnAtacar = document.getElementById("Atacar-btn");
  btnAtacar.style.color = "black";
  btnAtacar.onclick = () => {
    visualizarAtaque();
  };

  let btnPocion = document.getElementById("Pocion-btn");
  btnPocion.style.color = "black";
  btnPocion.onclick = () => {
    recuperarEnergia();
  };
}

function recuperarEnergia() {
  jugador.getCantPociones ? (
    jugador.usarPocion(),
    swal(`Tomas una poción y consumes todo su contenido, tiras el frasco.
          Vuelves a mirar el interior del bolso y quedan ${jugador.getCantPociones} pociones.
          Tienes ${jugador.energia} de energía.`)
  ) : (
    swal(`Abres el bolso para tomar una poción y te percatas que no tienes más.
          Estas a merced del destino, tendras suerte?`)
  );
}

function pantallaFinal() {
  let cuerpo = document.getElementById("contenedor");
  document.getElementById("tituloPagina").style.color = "black";
  cuerpo.innerHTML = `<legend id=tituloPagina >Fin</legend>
    <div><p>Tras la última batalla caes de rodillas, agotado.
    La adrenalina comienza a desvanecerse, los golpes recibidos no te dejan erguirte.
    Levantas la vista y por delante la capilla te aguarda, iluminada por la luz de la luna.
    Decides juntar tus últimas fuerzas para ingresar en ella, trastabillas en el camino pero finalmente lo logras.
    Tiras tu ${jugador.arma} al suelo, toda manchada en sangre y subes las escalinatas hacia el altar.
    En el centro del altar encuentras el talismán, el cual tomas entre tus manos y con tus últimas fuerzas lo abrazas.
    De repente tus piernas ceden y quedas desplomado en el suelo.
    Comienzas a ver una luz blanca, tan fuerte que te ciega.
    Y en ese instante lo comprendes todo, abres completamente los ojos.
    Unas letras escritas en gris sobre un rectangulo negro pero a la vez iluminado, narran cada una de las palabras que se te vienen a la mente.
    ¿Lo estás leyendo o lo estás pensando?
    
    </p></div>`;
  typewrite();

}

function alertaEnergiaBaja() {
  if ((jugador.energia <= 20) && (jugador.energia > 5)) {
    //PARA TOMAR POCION
    swal(`Sientes que el último golpe recibido te dejo trastabillando,
          tanteas la bolsa con pociones y recuerdas que aun tienes ${jugador.getCantPociones}.`);
  } else if (jugador.energia <= 0) {
    //GAMEOVER
    swal(`Tu cabeza recibe un golpe que no pudo resistir.
          Todo gira a tu alrededor y los sonidos comienzan a desvanecerse.
          No sabes quien eres, ni dónde te encuentras.
          Tu visión comienza a nublarse y sólo quedan manchas.
          Un eco a lo lejos apagándose, alguien susurra tu nombre.`);
    salir();
  }
}

function enemigoMuertoyArrayNoVacio() {
  if ((enemys[enemyIndex].muerto) && (enemys.length != 0)) {
    console.log(`${enemys[enemyIndex].nombre} ha muerto`);
    console.log(`Se va a borrar a ${enemys[enemyIndex].nombre}`);
    enemys.splice(enemyIndex, 1);
    enemyIndex = Math.floor(Math.random() * enemys.length);
    console.log(enemys);
    cargaEscenario();
  } else if (enemys.length == 0) {
    pantallaFinal();
  }
}

function visualizarAtaque() {
  if (enemys.length == 0) {
    console.log('GANE');
    pantallaFinal();
    return;
  }

  let textoModificado = document.getElementById("texto");
  textoModificado.innerText = `Tomas rápidamente tu ${jugador.arma} por el mango y lanzas una estocada, que hubieses deseado que fuese con mayor fuerza.
                               ${enemys[enemyIndex].nombre} recibe el golpe pero logra esquivar parte del impacto.
                               En cámara lenta notas cómo inclina su cuerpo hacia adelante y al tomar impulso lanza otro ataque.
                               Sabes que el golpe será inevitable.
                               ${enemys[enemyIndex].nombre} lanza su ${enemys[enemyIndex].arma}`;
  let div = document.getElementById("contenedor");
  ataque(enemys[enemyIndex]);

  let statusEnergia = document.getElementById("statusEnergia")
    ? document.getElementById("statusEnergia")
    : document.createElement("p");
  statusEnergia.setAttribute("id", `statusEnergia`);
  statusEnergia.innerText = `${jugador.nombre}: ${jugador.energia} .................................. ${enemys[enemyIndex].nombre}: ${enemys[enemyIndex].energia}`;
  div.appendChild(statusEnergia);
  (!enemys[enemyIndex].muerto) ?
    alertaEnergiaBaja()
    :
    enemigoMuertoyArrayNoVacio();
}


function ataque(enemy) {
  if (!enemy.muerto) {
    if (enemy.energia > 0) {
      jugador.atacar(enemy);
      console.log(`Te queda:  ${jugador.getEnergia}`);
      console.log(`A ${enemy.nombre} le queda ${enemy.energia}`);
      if (enemy.energia <= 0) {
        console.log(`${enemy.nombre} murio y le quedo ${enemy.energia} de vida.`);
        enemy.muerto = true;
      }
    }
  } else if (enemy.energia <= 0) {
    console.log(`${enemy.nombre} murio y le quedo ${enemy.energia} de vida.`);
    enemy.muerto = true;
  }
  return;
}

const escenarios = ["Cripta", "Pasillo", "Caverna", "Gruta"];

const escenariosTexto = [
  `Al caer muerto el impacto del cuerpo contra el suelo generó un temblor y a lo lejos un sonido de algo desmoronándose te paraliza.
  Tomas coraje y decides explorar el origen de aquel sonido que te heló la sangre.
  Te mueves de manera lenta y pausada debido a que no sabes que puede merodear en la cripta.
  Al avanzar te encuentras con un agujero, los escombros a su alrededor fueron lo que generaron aquel sonido,
  decides entrar en él pero primero introduces el candelabro para iluminar el espacio.`,

  `Te adentras por el pasillo, no hay ningún sonido mas que el de tus botas pisando tierra húmeda y fragmentos de huesos.
  La luz del candelabro comienza a iluminar cada vez más, debido a que los muros se van cerrando.
  Lentamente sientes que se te dificulta respirar, comienzas a agitarte, sientes claustrofobia.
  Llegas al punto donde la única manera de pasar es poniéndote de perfil y raspando las mejillas, por poco no puedes pasar.
  El miedo se apodera, las velas del candelabro comienzan a apagarse, un leve viento en el rostro te da esperanzas.
  Decides avanzar de todos modos y logras pasar el punto más angosto, unas gotas de sangre te corren por las mejillas pero no importa,
  piensas que lo peor ya ha pasado.`,

  `El último encuentro te dejó agitado y sudado, te encuentras con dificultad para respirar pero has de seguir avanzando.
  Miras a tu alrededor intentando decidir qué camino tomar, pero te decides por seguir derecho.
  Avanzas en la oscuridad las paredes que te rodean comienzan a estar más y más cerca hasta que se convierten en un pasillo rocoso.
  Te encuentras con un hedor nauseabundo,decides taparte las fosas nasales con un trapo mientras continúas avanzando.`,

  `Otro enemigo más que cae al suelo, la última estocada te dejo cansado pero la adrenalina sigue corriendo por tus venas.
  Sigues sintiendo que hay más peligro por delante pese al miedo, una leve sonrisa se asoma en tu rostro mientras te limpias la sangre del mismo.
  Tomas el candelabro del suelo y continúas explorando la oscuridad que te rodea, solo para llegar a un punto donde las paredes forman una caverna y decides adentrarte en la misma.`,
];


function cargaEscenario() {

  document.getElementById("Atacar-btn").remove();
  document.getElementById("Pocion-btn").remove();
  document.getElementById("statusEnergia").remove();
  let numero = Math.floor(Math.random() * escenarios.length);
  titulosYTextos(escenarios[numero], escenariosTexto[numero]);
  let botonEntrar = ["Entrar"];
  crearBoton(botonEntrar);
  document.getElementById("Entrar-btn").style.color = "black";
  let btnEntrar = document.getElementById("Entrar-btn");
  typewrite();
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
    swal(`-No fue muy sabio de su parte querer sacar partida de la situación..

            En ese momento el encapuchado en un movimiento rápido extrae del interior de su capa una daga.
            La velocidad fue tal que aun no comprendes la situación y en un parpadeo has visto como la daga
            se retira de tu abdomen y la sangre comenzó a brotar cómo negras lenguas de algún monstruo sediento.
            Sientes el calor en tus manos mientras intentas tapar la herida, pero es demasiado tarde, comienzas a ver nublado.
            El sudor frío recorre tu rostro y todo a tu alrededor comienza a apagarse.
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
      `Miras el interior de tu bolso, tienes ${jugador.getCantPociones} pociones.
       Aún tienes ${jugador.dinero} para gastar`
    )
    :
    swal(`No tienes dinero ${jugador.nombre} ya puedes largarte de aquí.`);
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
