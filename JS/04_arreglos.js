// Arreglos
const arreglo = [6,7,8,9,10];

//Arreglos con diferenets tipos
const array2 = ["A",true,85,859.36,'Assss'];

// Iteraciones
//for of
for (let numero of arreglo){
    console.log('numero',numero);
}
// for in  --> Indices
for(let indice in arreglo){
    arreglo[indice];
    console.log('indice',indice);
}
let objPrueba = {
    'a':1,
    'b':true
}
for(let llave in objPrueba){
    console.log('llave',llave)
}
