/*
* hcaer una funcion que me acepte como parametro una variable
* con el path del archivo y el contenido a agregar
* La funcion debe tomar estso dos parametros y leer
* el archivo y añadir el texto al final del archivo
* Al final leer nuevamente y mostrar en consola
*
* */
const fs = require('fs');

function promesaLeerArchivo(path) {
    return new Promise(
        (resolve, reject) => { // callback
            fs.readFile( path, 'utf-8',
                (error, data) => {
                    error ? reject(error) : resolve(data)
                }
            )
        }
    );
}

function promesaEscribirArchivo(path, contenidoActual, nuevoContenido){
    return new Promise(
        (resolve, reject) => {
            const contenido = `${contenidoActual}\n${nuevoContenido}`
            fs.writeFile(
                path,
                contenido,
                error => {
                    error ? reject(error) : resolve(contenido)
                }
            )
        }
    );
}

function ejercicio(path, nuevoContenido){
    promesaLeerArchivo(path)
        .then(
            content => {
                return promesaEscribirArchivo(path, content, nuevoContenido);
            }
        )
        .then(
            contenidoFinal => {
                promesaLeerArchivo(path);
                console.log(contenidoFinal);
            }
        )
        .catch(
            (error) =>{
                console.log('Error '+error)
            }
        )
}
ejercicio('06-ejemplo.txt', 'Nuevo texto 888')