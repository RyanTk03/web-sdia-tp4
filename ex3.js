function troisNombres() {
  const a = Number(prompt("1er nombre :"));
  const b = Number(prompt("2ème nombre :"));
  const c = Number(prompt("3ème nombre :"));

  let x = a;
  let y = b;
  let z = c;

  if (x > y) {
    let t = x;
    x = y;
    y = t;
  }

  if (x > z) {
    let t = x;
    x = z;
    z = t;
  }

  if (y > z) {
    let t = y;
    y = z;
    z = t;
  }

  console.log("les nombres dans l'ordre croissant :", x, y, z);
}