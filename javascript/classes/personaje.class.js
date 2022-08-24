class Personaje {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.dinero = 1000;
        this.energia = 100;
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
            enemigo.damage(this.fuerza -= 5);
        } else {
            enemigo.damage(this.tipo.fuerza);
            if (enemigo.energia > 0) {
                recibirDamage(enemigo.fuerza);
            } else {
                return `${enemigo.nombre} ha muerto`;
            }
        }
    }
    // luego de atacar por primera vez tenes que tener las opciones de volver a atacar, ver la energia o que te diga que energia tenes y si queres tomar una pocion antes de atacar

    recibirDamage(fuerza) {
        this.energia -= fuerza;
    }

    restarDinero(dinero) {
        this.dinero -= dinero;
        console.log(this.dinero);
        if (this.dinero <= 0) {
            console.log('no mas dinero')
            this.dinero = false;
        }
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

    get getEnergia() {
        return this.energia;
    }

    usarPocion() {
        if (this.pociones !== 0) {
            this.energia += 25;
            if (this.energia > 100) {
                this.energia = 100;
            }
        }
    }
}