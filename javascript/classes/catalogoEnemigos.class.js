class CatalogoEnemigos {
    constructor(enemigos) {
        this.enemigos = enemigos;
    }

    agregarEnemigo(enemigo) {
        this.enemigos.push(enemigo);
    }

    darCantidad() {
        return this.enemigos.length;
    }

    listarEnemigos() {
        this.enemigos.forEach((enemigo) => {
            console.log("LISTADO", enemigo);
        })
    }

    modificarEnemigo(nombreABuscar, nombre, energia, fuerza, arma)
    {
        let enemigoEncontrado = this.enemigos.find((enemigo) =>
            enemigo.nombre.includes(nombreABuscar)
        )
        if(enemigoEncontrado)
        {
            enemigoEncontrado.nombre=nombre;
            enemigoEncontrado.energia=energia;
            enemigoEncontrado.fuerza=fuerza;
            enemigoEncontrado.arma=arma;
            console.log("Enemigos Mod", this.enemigos);
        }
        else{
            alert("No se puede modificar")
        }


    }

}