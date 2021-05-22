let numero = 3;
let primo = true;

for (let i = 2; i < 10; i++) {
    if(i != numero){
        if(numero % i == 0){
            primo = false;
            break;
            }    
        }
}

if (numero > 1 && primo != false && numero % numero == 0){
    console.log(`O numero ${numero} é primo!`);
}else{
    console.log(`${numero} não é um numero primo!`);
}
