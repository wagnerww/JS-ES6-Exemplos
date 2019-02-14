// REST = pega o resto das propriedades, ou seja, dos objetos
const usuario = {
  nome: "wagner ricardo",
  idade: 27,
  empresa: "organizacao"
};

const { nome, ...resto } = usuario;
console.log(nome);
console.log(resto);

const n = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [a, b, ...c] = n;
console.log(a);
console.log(b);
console.log(c);

//Passagem de varios parametros e após é feita a soma de todos eles
function soma(...params) {
  return params.reduce((total, next) => total + next);
}
console.log(soma(1, 2, 3));

//SPREAD = papel de propaga, repassa as informações de um obj/array para outra estrutura de dados
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

const usuario1 = {
  nome: "wagner ricardo",
  idade: 27,
  endereco: "rua das cerejeiras"
};
//ele vai copiar o obj, porém vai substituir o nome
const usuario2 = { ...usuario1, nome: "alguem" };

console.log(usuario2);
