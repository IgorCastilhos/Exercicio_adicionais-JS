const pilotName = prompt(`Insira o nome do piloto: `);

let velocity = 0;

let newVelocity = parseFloat(
  prompt(`A que velocidade tu gostaria de acelerar a nave?`)
);
let confirmation = confirm(`Estamos acelerando para ${newVelocity}km/h`);

if (confirmation) {
  velocity = newVelocity;
}

if (velocity <= 0) {
  alert(`Nave está parada. Considere partir e aumentar a velocidade`);
} else if (velocity < 40) {
  alert(`Você está devagar, podemos aumentar mais`);
} else if (velocity < 80) {
  alert(`Velocidade alta. Considere diminiuir`);
} else {
  alert(`Velocidade perigosa. Controle automático forçado.`);
}
