
let estructura = document.body;
estructura.innerHTML = "<div><h1 id=\"texto\"></h1></div>";
let textoACambiar = document.getElementById("texto");
textoACambiar.innerText = "Bienvenido al juego que de alguna manera cambiaremos las pantallas";

let btn = document.createElement("button");
btn.innerText = "Presiona para continuar";
estructura.appendChild(btn);
btn.addEventListener("click", () => {
    estructura.removeChild(btn);
    let titulo = document.getElementById("texto");
    titulo.innerText = "Menu Principal";
    let opciones = document.createElement("p");
    opciones.innerText = `Seleccione una de las opciones:
    1- Crear el personaje
    2- Menu de enemigos
    3- Ir a la tienda
    4- Salir del juego`;
    let menuPrincipal = document.createElement("div");
    menuPrincipal.innerHTML = `<form action="" method="post">
                                <input id="POST-name" type="text" name="name">
                                <input type="submit" value="Save"></form>`;
    estructura.appendChild(opciones);
    estructura.appendChild(menuPrincipal);
    let options = document.getElementById("POST-name");
    options.addEventListener("keypress",pantallaBienvenida(options));
});

console.log(textoACambiar);

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
                if (personaje[0] != null) {
                    tienda(personaje);
                }
                else { alert("Aun no tenes el personaje creado, por favor crea tu personaje primero"); }
                break;
            case 4:
                alert("Gracias por jugar!");
                break;
            default:
                alert("Opcion invalida, por favor seleccione una opcion correcta");

        }
    } while (opcion != 4);

}
/*document.appendChild(textoACambiar);*/