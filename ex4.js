function triangle1() {
  const taille = prompt("Un motif de taille :");

  let i = 1;

  while (i <= taille) {

    let ligne = "";
    let j = 1;

    while (j <= i) {
      ligne += "*";
      j++;
    }

    console.log(ligne);
    i++;
  }
}

function triangle2() {
  const taille = prompt("Un motif de taille :");

  for (let i = 1; i <= taille; i++) {

    let ligne = "";

    for (let j = 1; j <= i; j++) {
      ligne += "*";
    }

    console.log(ligne);
  }
}

function pyramide() {
  const taille = prompt("donnez taille du motif :");

  for (let i = 1; i <= taille; i++) {

    let ligne = "";

    // espaces
    for (let e = 1; e <= taille - i; e++) {
      ligne += " ";
    }

    // étoiles
    for (let j = 1; j <= (2 * i - 1); j++) {
      ligne += "*";
    }

    console.log(ligne);
  }
}
