//Testando metodo filter() em arrays

/* O metodo filter serve ppara voce apagar algum elemento contido em um array com basse em uma condição que voce dará */
//EX: remover elementos duplicados de um array

const shark = [2, 3, 4, 5, 4, 12, 19, 7, 2, 5]

const orinShark = shark.filter((valor, posicao, lista) => lista.indexOf(valor) === posicao)
console.log(orinShark)
/* function(alament, index, array) {
    return lista.indexOf(valor) === posicao
} */