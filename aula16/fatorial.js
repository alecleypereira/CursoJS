function fatorial (n) {
    let f = 1
    for (var c = n ; c > 0 ; c--){
        f *= c
    }
    return f
} 
       /* let f = 1
            let c = n
            while(c > 0) {
                f = f * c
                c--
            } 
            return f*/

console.log(fatorial(10))