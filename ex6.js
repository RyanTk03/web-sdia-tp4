function fibo1() {
  const n = Number(prompt("rang n :"));

  let u0 = 0;
  let u1 = 1;

  let i = 2;
  let u = 0;

  while (i <= n) {
    u = u0 + u1;
    u0 = u1;
    u1 = u;
    i++;
  }

  console.log("le terme", n, "de la suite vaut", u1);
}

function fibo2() {
  const valeur = Number(prompt("une valeur :"));

  let u0 = 0;
  let u1 = 1;
  let rang = 1;

  while (u1 <= valeur) {
    let u = u0 + u1;
    u0 = u1;
    u1 = u;
    rang++;
  }

  console.log("le premier terme supérieur est", u1, "au rang", rang);
}
