class Personaje {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.dinero = 1000;
        this.pociones = 0;
        this.armaEquipada = false;
        this.penalizacion = false;
    }

    equiparArma(arma) {
        if (this.tipo.arma === arma) {
            this.armaEquipada = true;
        } else if (this.tipo.arma !== arma) {
            this.armaEquipada = true;
            this.penalizacion = true;
        }
    }

    get getDineroDisponible() {
        return this.dinero;
    }

    get verificarArmaEquipada() {
        return this.armaEquipada;
    }

    atacar(enemigo) {
        if (this.penalizacion) {
            enemigo.atacar(this.fuerza -= 5)
        } else {
            enemigo.atacar(tipo.fuerza);
            if (enemigo.energia > 0) {
                recibirDamage(enemigo.fuerza);
            } else {
                return `${enemigo.nombre} ha muerto`;
            }
        }
    }
    // luego de atacar por primera vez tenes que tener las opciones de volver a atacar, ver la energia o que te diga que energia tenes y si queres tomar una pocion antes de atacar

    recibirDamage(fuerza) {
        this.tipo.energia -= fuerza;
    }

    restarDinero(dinero) {
        this.dinero -= dinero;
    }

    sumarDinero(dinero) {
        this.dinero += dinero;
    }

    guardarPociones(pociones) {
        this.pociones += pociones;
    }

    get getCantPociones() {
        return this.pociones;
    }

    usarPocion() {
        if (this.pociones !== 0) {
            this.tipo.vida += 25;
            if (this.vida > 100) {
                this.vida = 100;
            }
        }
    }
}