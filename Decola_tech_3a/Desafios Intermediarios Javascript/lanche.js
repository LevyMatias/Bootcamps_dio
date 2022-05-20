/* escreva um programa que leia o código de um item e a quantidade deste item. 
A seguir, calcule e mostre o valor da conta a pagar. */

let lines = gets().split("\n");
let line = lines.shift().split(" ");
let item = parseInt(line[0]);
let qntd = parseInt(line[1]);

var price = 0;

switch (item) {
    case 1:
        price = 4.00 * qntd;
        break;
    case 2:
        price = 4.50 * qntd;
        break;
    case 3:
        price = 5.00 * qntd;
        break;
    case 4:
        price = 2.00 * qntd;
        break;
    case 5:
        price = 1.50 * qntd;
        break;
    default:
        console.log("Esse numero nao existe!");
}
print("Total: R$ " + price.toFixed(2));
