console.log("Trabalhando com Condicionais");

const listaDeDestinos = new Array(
    "Salvador", " Sao Paulo", " Rio de Janeiro"
);

const idadeComprador = 12;
const estaAcompanhada = true;
let passagemComprada = false;
const destino = "Rio de Janeiro";

console.log("Destinos possiveis:");
console.log(listaDeDestinos);


const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while(contador < 3){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa Viagem!");
}else {
    console.log("Nao vai viajar :(")
}

for(let cont = 0; cont < 3; cont++){
    if(listaDeDestinos[cont] == destino){
        destinoExiste = true;
        break;
    }
}
