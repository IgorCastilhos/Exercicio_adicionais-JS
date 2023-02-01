let spaceship = prompt(`Digite o nome da aeronave: `);
let invertedName = "";

for (let i = spaceship.length - 1; i >= 0; i--) {
  if (spaceship[i] === "e") {
    break;
  } else {
    invertedName += spaceship[i];
  }
}
console.log(invertedName);
alert(`Nome original da nave: ${spaceship}
Nome após ocultação e inversão: ${invertedName}`);
