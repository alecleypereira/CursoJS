const numeros = [6, 8, 14, 42, 11 ]
// ver se um valor é primo ou não
function Eprimo (valor) {
    for(let c = 2 ; c < valor ; c++){
        if (valor % c == 0) {
            return false
        }
        return true
    }
}
let Verifica = numeros.some(Eprimo)
console.log(Verifica)