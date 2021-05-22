let idade = 15;
let cnh = false;

if (idade < 18) {
    console.log(`Menor de 18 - Sem CNH`);
}else if (idade >= 18 && cnh == true) {
    console.log(`Maior de 18 - Com CNH`);
}else {
    console.log(`Maior de 18 - Sem CNH`);
}
