const hitchedSpaceships = [
  // Nome   qtd. trip   se engate foi concluído ou não
  // Nesta lista, a plataforma de engate que a nave está parada é o [índice da nave no array +1]
  ["Fenix", 8, true],
  ["Golias", 10, true],
  ["Helmet", 5, false],
  ["Elemental", 3, true],
  ["Darwin", 15, false],
];

/*
  Spaceship vai receber todo o sub array. Para fazer o filtro, preciso identificar se o elemento de índice 1, desse sub array, é maior que 9.
*/
let crewGreaterThan9 = hitchedSpaceships
  .filter((spaceship) => {
    return spaceship[1] > 9;
  })
  /*
  .map => passamos uma função callback e o map retorna um array somente com o nome
*/
  .map((spaceship) => {
    return spaceship[0];
  });

/**
 * O que o .map irá retornar:
[
  ["Golias", "Darwin"]
]
*/

let ongoingHitchPlatform = hitchedSpaceships.findIndex((spaceship) => {
  return spaceship[2] === false;
});

let highlightedSpaceships = hitchedSpaceships.map((spaceship) => {
  return spaceship[0].toUpperCase();
});

let message = `Espaçonaves com mais de 9 tripulantes ${crewGreaterThan9.join(
  ", "
)}
Plataforma com processo de engate: ${ongoingHitchPlatform + 1}
Espaçonaves destacadas: ${highlightedSpaceships.join(", ")}
`;
alert(message);
