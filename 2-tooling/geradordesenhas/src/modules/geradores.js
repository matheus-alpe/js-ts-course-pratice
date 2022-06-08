const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const SIMBOLOS = ',.;~^[]{}!@#$%*()_+=-';
const geraSimbolo = () => SIMBOLOS[rand(0, SIMBOLOS.length)];

function shuffleArray(array = []) {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
}

export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos) {
  const passwordArray = [];
  qtd = Number(qtd);

  for(let i = 0; i < qtd; i++) {
    maiusculas && passwordArray.push(geraMaiuscula());
    minusculas && passwordArray.push(geraMinuscula());
    numeros && passwordArray.push(geraNumero());
    simbolos && passwordArray.push(geraSimbolo());
  }

  const passwordArrayShuffled = shuffleArray(passwordArray)

  return passwordArrayShuffled.join('').slice(0, qtd);
}
