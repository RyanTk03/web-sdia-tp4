function hjms() {
  const secondes = prompt("Une durée en secondes :");

  const jours = Math.floor(secondes / 86400);
  const reste1 = secondes % 86400;

  const heures = Math.floor(reste1 / 3600);
  const reste2 = reste1 % 3600;

  const minutes = Math.floor(reste2 / 60);
  const sec = reste2 % 60;

  console.log("cette durée équivaut à", jours, "jours", heures, "heures", minutes, "minutes", sec, "secondes");
}

function hjms_bis() {
  const secondes = prompt("Une durée en secondes :");

  const jours = Math.floor(secondes / 86400);
  const reste1 = secondes % 86400;

  const heures = Math.floor(reste1 / 3600);
  const reste2 = reste1 % 3600;

  const minutes = Math.floor(reste2 / 60);
  const sec = reste2 % 60;

  let texte = "cette durée équivaut à";

  if (jours > 0) {
    texte += " " + jours + (jours == 1 ? " jour" : " jours");
  }

  if (heures > 0) {
    texte += " " + heures + (heures == 1 ? " heure" : " heures");
  }

  if (minutes > 0) {
    texte += " " + minutes + (minutes == 1 ? " minute" : " minutes");
  }

  if (sec > 0) {
    texte += " " + sec + (sec == 1 ? " seconde" : " secondes");
  }

  console.log(texte);
}
