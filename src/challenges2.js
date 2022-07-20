// Desafio 10
function techList(tecnologias, name) {
  let novoArray = [];
  let ordenado = tecnologias.sort();
  if (tecnologias.length > 0) {
    for (let index = 0; index < ordenado.length; index=+ 1) {
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

module.exports = {
  techList
};
