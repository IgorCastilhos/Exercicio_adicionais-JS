const nameOlderPerson = prompt(`Insira o nome da pessoa mais velha: `);
const ageOlderPerson = parseFloat(
  prompt(`Insira a idade da pessoa mais velha: `)
);

const nameYoungerPerson = prompt(`Insira o nome da pessoa mais nova: `);
const ageYoungerPerson = parseFloat(
  prompt(`Insira a idade da pessoa mais nova`)
);

const ageDifference = ageOlderPerson - ageYoungerPerson;

alert(`
Nome da pessoa mais velha: ${nameOlderPerson}
Idade da pessoa mais velha: ${ageOlderPerson}
       
Nome da pessoa mais nova: ${nameYoungerPerson}
Idade da pessoa mais nova: ${ageYoungerPerson}
       
Diferença de idade: ${ageDifference}`);
