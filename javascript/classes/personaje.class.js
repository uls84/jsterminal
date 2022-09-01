class Personaje {
  constructor(nombre, tipo) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.dinero = 1000;
    this.energia = 100;
    this.pociones = 0;
    this.armaEquipada = false;
    this.penalizacion = false;
    this.arma = "";
  }

  // Si funciona lo dejamos sino borramos este bloque

  equiparArma(arma) {
    if (this.tipo.arma === arma) {
      this.armaEquipada = true;
      this.arma = arma;
    } else {
      this.armaEquipada = true;
      this.penalizacion = true;
      this.arma = arma;
    }
  }

  atacar(enemigo) {
    if (!enemigo.muerto && this.penalizacion) {
      enemigo.damage(parseInt((this.tipo.fuerza -= 5)));
      console.log(`El enemigo recibio ${this.tipo.fuerza - 5} de damage`);
      this.recibirDamage(enemigo.fuerza);
      console.log(`El enemigo hizo ${enemigo.fuerza} de damage`);
      console.log(`Te queda ${this.energia} de vida`);
    } else if (!enemigo.muerto) {
      enemigo.damage(parseInt(this.tipo.fuerza));
      console.log(`El enemigo recibio ${this.tipo.fuerza} de damage`);
      this.recibirDamage(enemigo.fuerza);
      console.log(`El enemigo hizo ${enemigo.fuerza} de damage`);
      console.log(`Te queda ${this.energia} de vida`);
    } else {
      console.log(`El enemigo esta muerto`);
      enemigo.muerto = true;
      return;
    }
  }



  get getDineroDisponible() {
    return this.dinero;
  }

  get verificarArmaEquipada() {
    return this.armaEquipada;
  }

  recibirDamage(fuerza) {
    this.energia -= fuerza;
  }

  restarDinero(dinero) {
    this.dinero -= dinero;
    console.log(this.dinero);
    if (this.dinero <= 0) {
      console.log("no mas dinero");
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
    if (this.pociones > 0) {
      this.energia += 25;
      this.pociones --;
      if (this.energia > 100) {
        this.energia = 100;
      }
    } else if(this.pociones <= 0) {
      console.log("No hay mas pociones.");
    }
  }
}
