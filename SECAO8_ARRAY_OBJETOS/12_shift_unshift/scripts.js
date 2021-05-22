/**
 * Criar um array de marcas de motos
 * Remover a primeira marca do array e exibir no console a marca removida
 * Exibir como ficou o array no console
 * Adicionar uma marca de moto ao array e exibir no console a marca adicionada
 * Exibir como ficou o array de motos
 */

let motos = ["Honda", "BMW", "Yamaha", "Suzuki"];

//Remove a primeira moto do Array
let removerPrimeiraMoto = motos.shift();

//Retorna a moto removida
console.log(removerPrimeiraMoto);
//Retona o array de motos
console.log(motos);

//Adiciona um marca de motos ao inicio do array e retorna no coonsole
//a moto adicionada e o como ficou o array
motos.unshift('Dafra');
console.log(motos[0])
console.log(motos)


