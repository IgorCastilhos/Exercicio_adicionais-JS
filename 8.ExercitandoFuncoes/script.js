const spaceshipName = prompt(`Digite o nome da nave: `);
let velocity = 0;
let option = "";

do {
  option = prompt(`
  Bem-vindo(a)! Escolha uma opção:
  1. Acelerar a nave em 5km/s 
  2. Desacelerar em 5km/s
  3. Imprimir dados de bordo
  4. Sair
    `);
  switch (option) {
    case "1":
      velocity += 5;
      break;

    case "2":
      velocity -= 5;
      break;

    case "3":
      alert(`Nome da nave: ${spaceshipName}
        Velocidade da nave: ${velocity}`);
      break;

    case "4":
      break;

    default:
      alert(`Opção Inválida!`);
      break;
  }
} while (option !== "4");

function showMenu() {}
function printData() {}
