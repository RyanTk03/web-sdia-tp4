function degreC() {
  const fahrenheit = prompt("Une température en Fahrenheit :");
  const celsius = (5/9) * (fahrenheit - 32);

  console.log("cette température équivaut a", celsius, "degrés Celsius");
}
