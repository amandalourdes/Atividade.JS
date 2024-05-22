var entrada = require('readline-sync')
var n1 = 0

var v = Math.floor(Math.random() *100);

console.log(v)

var contador = 1

while (n1 != v) {
var n1 = parseFloat(entrada.question('Digite um numero: '))

    if ( n1 > v ) {
        console.log('O número é maior que o numero escolhido!');
        contador++
    } else if (  n1 < v) {
        console.log('O número é menor que o numero sorteado!');
        contador++
    } else {
        console.log('Igual ao número escolhido pelo computador!');
        console.log(`Voce tentou ${contador} vezes`)
        break
    }

    while (  Pergunta != "nao"){
        var Pergunta = entrada.question(" Voce deseja continuar? sim/nao ").toLowerCase()

        if( Pergunta == "sim" ){
            console.log("Ele vai continuar");
            break
            
        }
        else if( Pergunta =="nao" ){
            console.log("Ele vai parar");
            console.log(`Voce tentou ${contador} vezes`)
            break
        }
        else {
            console.log("Opçao invalida")
        }
    }

    if( Pergunta == "nao"){
        break
    }
       
}