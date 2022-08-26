class Enemigo {
  constructor(nombre, energia, fuerza, arma) {
    this.nombre = nombre;
    this.energia = energia;
    this.fuerza = fuerza;
    this.arma = arma;
    this.muerto = false;
  }

  damage(fuerza) {
    this.energia -= fuerza;
    if (this.energia <= 0) {
      this.muerto = true;
    } 
  }

  get getEnergia() {
    return this.energia;
  }
}
