const numeros = [10, 14, 8,]
// ver se um valor é primo ou não
function Eprimo (valor) {
    let acumulador
    for(let c = valor - 1 ; c > 1 ; c--){
        if (valor % c == 0) {
            return false
        }
    }
    return true
}
let Verifica = numeros.some(Eprimo)
console.log(Verifica)