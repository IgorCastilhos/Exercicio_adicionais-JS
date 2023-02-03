let spaceship = {
  velocity: 0,
  speedUp: function (acceleration) {
    this.velocity += acceleration;
  },
};

function registerSpaceship() {
  spaceship.name = prompt(`Digite o nome da nave: `);
  spaceship.type = prompt(`Digite o tipo da nave: `);
  spaceship.maxVelocity = Number(
    prompt(`Digite a velocidade máxima da nave: `)
  );
}

function accelerate() {
  let acceleration = Number(prompt(`Quanto você quer acelerar? (km/s)`));
  spaceship.speedUp(acceleration);
  if (spaceship.velocity > spaceship.maxVelocity) {
    alert(`VELOCIDADE MÁXIMA ULTRAPASSADA!
    Velocidade da nave: ${spaceship.velocity} km/s
    Velocidade Máxima permitida: ${spaceship.maxVelocity} km/s`);
  }
}

function stop() {
  alert(`Nome da nave: ${spaceship.name}
Tipo da nave: ${spaceship.type}
Velocidade: ${spaceship.velocity}
Máxima da Nave: ${spaceship.maxVelocity}`);
}

function showMenu() {
  let option = "";
  do {
    option = prompt(`
    Deseja acelerar ou parar a nave?
    1. Acelerar
    2. Parar`);

    switch (option) {
      case "1":
        accelerate();
        break;
      case "2":
        stop();
        break;
      default:
        alert(`Opção Inválida!`);
        break;
    }
  } while (option !== "2");
}

registerSpaceship();
showMenu();
