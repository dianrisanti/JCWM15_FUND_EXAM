// angka
let n = 3
let patt = ""
let initial = 1
for(let i = 0; i < n; i++) {
    for(let j = 0; j <= i; j++) {
        patt += initial + " "
        initial += 2
    } patt += "\n"
}
console.log(patt)

// huruf
let patt1 = ""
let initial1 = 1
for(let i = 0; i < n; i++) {
    for(let j = 0; j <= i; j++) {
        patt1 += String.fromCharCode(65 + initial1) + " "
        initial1 += 2
    } patt1 += "\n"
}
console.log(patt1)

// deret fibonacci
let input = 100 //misal
let initial2 = 0
let current = 1
let temp
let fibonacci = [0]
while(current < input) {
    temp = current 
    current += initial2 
    initial2 = temp 

    fibonacci.push(initial2)
}

console.log(fibonacci)
