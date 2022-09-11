function somarD(n1) {

        let numeros = n1.toString();
        let soma = 0


        for (let numero of numeros) {
                let digito = parseInt(numero);
                
                soma += digito;

        } return soma;
}
let resultado = somarD(94883937455);
console.log("Soma todos os digitos: ", resultado)