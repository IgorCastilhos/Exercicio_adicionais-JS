alert(`Bem-vindo! A seguir pediremos que informe alguns dados`);

const nome = prompt(`Insira o seu nome: `);
const idade = prompt(`Insira a sua idade: `);
let confirmation = confirm(`Tem certeza que a sua idade é ${idade}?`);

alert(`
Nome: ${nome}
Idade: ${idade}
Confirmação: ${confirmation}`);
