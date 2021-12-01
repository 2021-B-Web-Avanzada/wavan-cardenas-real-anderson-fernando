
const arreglo = [
    {
        id: 1,
        nombre: 'Adrian',
        nota: 5
    },
    {
        id: 2,
        nombre: 'Vicente',
        nota: 8
    },
    {
        id: 3,
        nombre: 'Carolina',
        nota: 14
    },
    {
        id: 4,
        nombre: 'Wendy',
        nota: 16
    },
    {
        id: 5,
        nombre: 'Andrea',
        nota: 19
    },
    {
        id: 6,
        nombre: 'Pamela',
        nota: 19
    },
    {
        id: 7,
        nombre: 'Cristian',
        nota: 20
    },
    {
        id: 8,
        nombre: 'Daniel',
        nota: 19
    },
    {
        id: 9,
        nombre: 'Lilly',
        nota: 14
    },
    {
        id: 10,
        nombre: 'Ramiro',
        nota: 12
    }
];

// Funciones como parámetros
// Find
// Enviamos una expresión -> Truty Falsy
const respuestaFind = arreglo.find(
    function (valorActual,indiceActual,arregloCompleto){
        console.log('valorActual',valorActual);
        console.log('indiceActual',indiceActual);
        console.log('arreglo compelo',arregloCompleto);
        return valorActual.nombre === "Cristian";
    }
)
// find index

const respuestaFindIndex = arreglo.findIndex(
    function (valorActual,indiceActual,arregloCompleto){
        return valorActual.nombre === "Cristian";
    }
)
console.log('respuesta index', respuestaFindIndex);

// For each
const respuestaForEach = arreglo.forEach(
    function (valorActual,indiceActual,arregloCompleto){
        console.log('valor', valorActual);
    }
)
console.log('respuesta for each', respuestaForEach);

// Map: modificar todos los valores y devuelve un nuevo arreglo
const respuestaMap = arreglo.map(
    (valorActual,indiceActual,arregloCompleto)=>{
        const nuevoElemento = {
            id: valorActual.id,
            nombre: valorActual.nombre,
            nota: valorActual.nota+1,
        };
        return nuevoElemento;
    }
);

//Filter
const respuestaFilter = arreglo.filter(
    (valorActual,indiceActual,arregloCompleto)=>{
        return valorActual.nota >= 14;
    }
)
console.log('filter:',respuestaFilter);

// SOME
const respuestaSome = arreglo.some(
    function (valorActual,indiceActual,arregloCompleto){
    return valorActual.nota < 9;
}
)
console.log('respuesta some', respuestaSome);

// every

const respuestaEvery = arreglo.every(
    function (valorActual,indiceActual,arregloCompleto){
        return valorActual.nota > 16;
    }
)
console.log('respuesta every', respuestaEvery);


//REDUCE
//A reduce solo le importa el acumulador y el calculo a aplicar
//izq a derecha
//Tenemos 100 puntos y queremos ir restando varias veces
//100 -1 -2 -3 -4  -5 -6 -7 -8
//(funcion(valorAcum, valorActual, indice, arreglo), lo que tenemos al inicio)
const respuestaReduce = arreglo
    .reduce(
        function (valorAcumulado, valorActual){
            return valorAcumulado-valorActual.nota;
        },
        100 //Acumulador
    );
console.log('Respuesta REDUCE: ', respuestaReduce );
//REDUCE RIGHT
//empieza en la derecha y termina en la izquierda
//Tenemos 0 items y queremos ir sumando todo lo de un arreglo
//accum = 0 ; +1 +2 +3 +4 +5