
let Jogador = "Rodrigo"
let nivelDoJogo = ["Ferro", "Bronze","Prata","Ouro","Diamante","Lendário","Imortal"]
let vitorias = 200
let derrotas = 99

let ranking = placar(vitorias , derrotas)

function placar(ganhou, perdeu){
resultado = ganhou - perdeu
return resultado
}

switch (true){
case (ranking < 10):
console.log("O Herói tem o saldo de " + ranking + " e está no nivel " + nivelDoJogo[0])
break;
case (ranking >= 11 && ranking <= 20):
console.log("O Herói tem o saldo de " + ranking + " e está no nivel " + nivelDoJogo[1])
break;
case (ranking >= 21 && ranking <= 50):
console.log("O Herói tem o saldo de " + ranking + " e está no nivel " + nivelDoJogo[2])
break;
case (ranking >= 51 && ranking <= 80):
console.log("O Herói tem o saldo de " + ranking + " e está no nivel " + nivelDoJogo[3])
break;
case (ranking >= 81 && ranking <= 90):
console.log("O Herói tem o saldo de " + ranking + " e está no nivel " + nivelDoJogo[4])
break;
case (ranking >= 91 && ranking <= 100):
console.log("O Herói tem o saldo de " + ranking + " e está no nivel " + nivelDoJogo[5])
break;
default:
console.log("O Herói tem o saldo de " + ranking + " e está no nivel " + nivelDoJogo[6])

}
