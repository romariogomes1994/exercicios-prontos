let numeros = [2, 5, 9,] // array
numeros[3] = 8 // acrescentar um número na posição 3
numeros[4] = 1 // acrescentar um número na posição 4
numeros.push(7) // acresentar um número na última posição
numeros.sort() // ordenar em forma crescente
console.log(numeros)
console.log(`O valor tem ${numeros.length} posições.`)
console.log(`O primeiro valor do vetor é ${numeros[0]}.`)
let pos = numeros.indexOf(6)
if (pos == -1) {
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor está na posição ${pos}.`)
}
