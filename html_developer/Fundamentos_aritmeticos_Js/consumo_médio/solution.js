/* Você deve calcular o consumo médio de um automóvel onde será informada 
a distância total percorrida (em Km) e o total de combustível consumido(em litros). */

let x = parseInt(gets());
let y = parseFloat(gets());

const consumoMedio = x / y;
console.log(`${consumoMedio.toFixed(3)} km/l`);