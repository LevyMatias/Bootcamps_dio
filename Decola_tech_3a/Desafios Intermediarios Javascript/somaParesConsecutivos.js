let x = parseInt(gets());
let soma = 0;
let contador = 1;
while (x !== 0) {
    if (x % 2 === 0) {
        soma += x;
    }
    else if (x % 2 !== 0) {
        x = x + 1;
        soma += x;
    }
    while (contador < 5) {
        x += 2;
        soma += x;
        contador++;
    }

    print(soma);
    contador = 1;
    soma = 0;
    x = parseInt(gets());
}