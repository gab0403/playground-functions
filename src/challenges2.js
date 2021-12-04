// Desafio 10
function techList(tecnologias, name) {
  let novoArray = [];
  let ordenado = tecnologias.sort();
  if (tecnologias.length > 0) {
    for (let index = 0; index < ordenado.length; index++) {
      novoArray.push({
        tech: ordenado[index],
        name: name,
      })
    }
    return novoArray;

  } else {
    return 'Vazio!';
  }
  
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
