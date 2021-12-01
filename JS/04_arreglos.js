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

// métodos arreglos
arreglo.push(11); //Anadir elementos la final

arreglo.pop();//Elimina el ultimo elemento

arreglo.unshift(500); //Anadir al inicio del arreglo

console.log((arreglo));

arreglo.splice(0, 1); //

//SPLICE
//Agregar en el indice 0, numero de elementos eliminidos, items a agregar...
arreglo.splice(0, 0, 4 ); //Remueve y anade cosas
//[ 4, 500, true, 1, 1, 'Javier', undefined, {}, [ 1, 3 ] ]
console.log((arreglo));
//Borramos desde el quinto en adelante
const indice = arreglo.indexOf(undefined);
arreglo.splice(indice, 3); //Borramos desde que encuentra undefined (incluido) y 2 mas
//[ 4, 500, true, 1, 1, 'Javier' ]
console.log(arreglo);
