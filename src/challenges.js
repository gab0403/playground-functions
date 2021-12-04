// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(" ");
}

// Desafio 4
function concatName(arrayStrings) {
  let virgulaMaisEspaco = ', ';
  let primeiroItem = arrayStrings[0];
  let ultimoItem = arrayStrings[arrayStrings.length - 1];
  return ultimoItem.concat(virgulaMaisEspaco, primeiroItem);
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties;
  return pontos;
}

// Desafio 6
function highestCount(numerosArray) {
  let repeticao = 0;
  let maiorNumero = Math.max(...numerosArray);
  for (let index = 0; index < numerosArray.length; index += 1) {
    if (numerosArray[index] === maiorNumero) {
      repeticao++;
    }
  }
  return repeticao;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1Mouse = Math.abs(cat1-mouse);
  let distanciaCat2Mouse = Math.abs(cat2-mouse);
  if (distanciaCat1Mouse < distanciaCat2Mouse){
return("cat1");
  } else if (distanciaCat2Mouse < distanciaCat1Mouse) {
    return("cat2");
  } else if(distanciaCat1Mouse === distanciaCat2Mouse){
    return("os gatos trombam e o rato foge");
  }
}

// Desafio 8
function fizzBuzz(numeros) {
  let string = [];
    for ( let index of numeros)  {
  if (index % 15 === 0) {
     string.push('fizzBuzz');
    } else if (index % 3 === 0) {
       string.push('fizz');
    } else if (index % 5 === 0) {
      string.push('buzz')
    } else {
       string.push('bug!');
    }    
  }
  return string;

}
    
// Desafio 9
function encode(frase) {
  for (let index = 0; index < frase.length; index+= 1) {
    frase = frase.replace('a', '1').replace('e', '2').replace('i', '3').replace('o', '4').replace('u', '5');
  }
  return frase;
}

function decode(frase) {
  for (let index = 0; index < frase.length; index+= 1) {
    frase = frase.replace('1', 'a').replace('2', 'e').replace('3', 'i').replace('4', 'o').replace('5', 'u');
  }
  return frase;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
