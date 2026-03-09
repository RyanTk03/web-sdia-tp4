function premier() {
  const n = Number(prompt("Un entier positif :"));

  let i = 2;
  let diviseur = 0;

  while (i < n && diviseur == 0) {

    if (n % i == 0) {
      diviseur = i;
    }

    i++;
  }

  if (diviseur == 0) {
    console.log(n, "est un nombre premier");
  } else {
    console.log(n, "n'est pas un nombre premier, il est divisible par", diviseur);
  }
}
