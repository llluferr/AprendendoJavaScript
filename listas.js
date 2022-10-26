console.log("Trabalhando com Listas");

const listaDeDestinos = new Array(
    "Salvador", " Sao Paulo", " Rio de Janeiro"
);

listaDeDestinos.push(" Curitiba");

console.log(`Destinos possiveis: ${listaDeDestinos}`);

listaDeDestinos.splice(2,2)
console.log(listaDeDestinos)

