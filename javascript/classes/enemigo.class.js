class Enemigo {
    constructor(nombre, energia, fuerza, arma)
    {
        this.nombre=nombre;
        this.energia=energia;
        this.fuerza=fuerza;
        this.arma=arma;
    }

    atacar(fuerza) {
        this.energia-=fuerza;
    }

}

