function raca1() {
  const A = prompt("Pour un nombre A entre 1 et 100 :");

  let u = A / 2;

  while (Math.abs(u * u - A) >= 0.0001) {
    u = 0.5 * (u + A / u);
  }

  console.log("Valeur approchée de la racine carrée =", u);
}