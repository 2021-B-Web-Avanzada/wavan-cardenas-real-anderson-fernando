const promesaLeerArchivo =  () =>{
    return new Promise(
        (res,rej)=> res('Contenido leer archivo')
    );
}

const promesaEscribirArchivo = () =>{
    return new Promise(
        (res, rej) => res('Contenido escribir archivo')
    );
}
//async await
/* Usos
1 Metodos de lcases
2 Funciones
NO se pueden escribir afuera de la siguiente manera
const repuesta = await promesaEscribirArchivo;
El await siempre estará envuelto por async
El asign/await por debajo son promesas
 */
const ejemplo1 = async function(){}
const ejemplo2 = async () =>{}
async function ejercicio(){
    console.log('1')
    let nuevoContenido ='';
    try {
        console.log('2');
        const contenidoArchivoActual = await promesaLeerArchivo();
        console.log(contenidoArchivoActual)
        console.log('3');
        await promesaEscribirArchivo();
        console.log('4');
        nuevoContenido = await promesaLeerArchivo();
        console.log(nuevoContenido);
        console.log('5');
    }catch (error){
        console.error(error);
    }
    console.log('6')
    return nuevoContenido
}
ejercicio()
    .then(
        (data) =>{
            console.log("Esta es la respuesta del async await:",data);
        }
    )
    .catch()
    .finally()