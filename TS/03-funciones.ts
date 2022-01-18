function sumarNumeros(numeroInicial: number,...numberInfinitos: number[]): number{
    return numeroInicial
}
sumarNumeros(1,1,2,3,4);

//Variables con arreglos
const arregloNumeros: number[] = [1,2];
const arregloNumerosDos: Array<number> = [1,2];
const arregloNumerosTres: (number | string | boolean)[] = [1, 'hola', true]; //Puede tener los 3 datos dentro de el array
const arregloNumerosCuatro: Array<number | string | boolean> = [1, 'dos', true]; //Mismo caso pero con object
let arregloNumerosCinco: number[] | string[] =  [1,2]; //Contiene o solo numbers o solo strings
arregloNumerosCinco = ['sdf', 'sdf'];