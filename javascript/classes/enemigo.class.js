class Enemigo {
  constructor(nombre, energia, fuerza, arma) {
    this.nombre = nombre;
    this.energia = energia;
    this.fuerza = fuerza;
    this.arma = arma;
  }

  damage(fuerza) {
    this.energia -= fuerza;
  }

  get getEnergia() {
    return this.energia;
  }
}
