const spaceshipName = prompt(`Digite o nome da nave: `);
let velocity = 0;
let option = "";

function showMenu() {
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
        accelerate();
        break;
      case "2":
        desacelerate();
        break;
      case "3":
        printData();
        break;
      case "4":
        alert(`Saindo...`);
        break;
      default:
        alert(`Opção Inválida!`);
        break;
    }
  } while (option !== "4");
}

function accelerate() {
  velocity += 5;
}

function desacelerate() {
  velocity -= 5;
}

function printData() {
  alert(`Nome da nave: ${spaceshipName}
  Velocidade da nave: ${velocity}`);
}

showMenu();
