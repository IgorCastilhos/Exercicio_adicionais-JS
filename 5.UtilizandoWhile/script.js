let option = "";
const spaceshipName = prompt(`Digite o nome da nave: `);
let dobras = 0;

do {
  option = prompt(`
    Deseja entrar em dobra espacial?
    1- Sim
    2- Não`);

  switch (option) {
    case "1":
      dobras += 1;
      break;
    case "2":
      break;
    default:
      alert("Opção Inválida!");
      break;
  }
} while (option !== "2");

alert(`Nave: ${spaceshipName} 
Quantidade de dobras: ${dobras}`);
