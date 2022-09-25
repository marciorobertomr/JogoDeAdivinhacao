var numeroSecreto = parseInt(Math.random() * 11); 
//Math.random() pega um número decimal aleatório. Ao multiplicar por 11, podemos alcançar o 10 inteiro
//Ao deixar a definição da variável numeroSecreto fora da função, ela carrega somente uma vez e já guarda o valor definido, antes mesmo de clicar no button. Assim, podemos testar vários números até acertar.
console.log("O número sorteado foi " + numeroSecreto);
var i = 2;

function chutar() {
    //Um símbolo de igual, é atribuição. Dois símbolos de igual, é igualdade/comparação. Três símbolos de igual, compara tanto valor quanto se o tipo é igual
    var chute = parseInt(document.getElementById("valor").value); //Pega o campo digitado pelo cliente, retira o valor informado e já converte para número inteiro

    if ( chute > 10 || chute < 0) { // Duas barras verticais significam 'ou' condicional
        var resultado = "Digite um número de 0 a 10";
    } else if ( chute == numeroSecreto ){
        var resultado = "Você acertou!";
        i = 0;
    } else if ( i == 0) {
        var resultado = "Fim das tentativas. O número sorteado foi: " + numeroSecreto + ". Reinicie para continuar.";
    } else if ( chute > numeroSecreto) {
        var resultado = "Você errou! Resta: " + i + " tentativa(s). Dica: O número sorteado é menor!";
        i--;
    } else {
        var resultado = "Você errou! Resta: " + i + " tentativa(s). Dica: O número sorteado é maior!";
        i--;
    }

    var valorResultado = document.getElementById("resultado");
    valorResultado.innerHTML = resultado;

}