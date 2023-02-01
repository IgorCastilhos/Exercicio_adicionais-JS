const distanceInLY = prompt(`Qual a distância em anos-luz?`);

let option = "";
option = prompt(`
Digite uma opção para converter a distância em anos-luz:
Parsec (pc) 
Unidade astronômica (AU)
Quilômetros (km)`);

let chosenUnity = "";
let convertedDistance = 0;

switch (option) {
  case "pc":
    chosenUnity = "Parsec";
    convertedDistance = distanceInLY * 0.306601;
    break;
  case "au":
    chosenUnity = "Unidade Astronômica";
    convertedDistance = distanceInLY * 63241.1;
    break;
  case "km":
    chosenUnity = "Quilômetros";
    convertedDistance = distanceInLY * 9.5 * Math.pow(10, 12);
    break;
  default:
    alert(`Opção Inválida!`);
    break;
}

alert(`Distância em anos-luz: ${distanceInLY}
${chosenUnity}: ${convertedDistance}`);
