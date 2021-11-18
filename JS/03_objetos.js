// se definen por llave valor
const anderson = {
    nombre: 'Anderson',
    edad: 21,
    zapatos: undefined,
    casado: false,
    ropa: {
        color: 'azul',
        tall: 38
    },
    mascotas: ['Puppy']
};

// Acceder a las propiedades
//Forma 1
console.log(anderson.edad);
//Forma 2
anderson.edad = 22
console.log('Edad despues de asignación:',anderson['edad']);

//Agregar propiedad
anderson.gastos = 0.2;
console.log(anderson.gastos);

//Object key and values
console.log(Object.keys(anderson));
console.log(Object.values(anderson));

//Delete
delete(anderson.gastos);
console.log(anderson);

// Variables por valor o referencia?
// Variables por valor en JS funciona con las primitivas: number, string y boolean
let edadAnderson = anderson.edad;
console.log(edadAnderson);
//Variables por Referencia: object ({}, [])
// no exosten dos variables diferentes, ambas apuntan al mismo lugar
let rafael = {
    nombre: 'Rafael'
}
let lenin = rafael;
lenin.nombre = 'Lenin';
console.log(lenin);
console.log(rafael);

// Entonces ... ¿Cómo clonar? Y que ambos esten en diferente espacio de memoria , con assign
let lenin2 = Object.assign({}, rafael);

// Arreglo
let arregloNumeros = [1,2,3,4,5];
let arregloNumeros2 = Object.assign([],arregloNumeros);
arregloNumeros2[0] = 100;
console.log(arregloNumeros);
console.log(arregloNumeros2);

