// Definir rutas
const {Router} = require('express');
const _ = require('underscore')
const router = Router();
const Alumno = require('../../01_Inquirer_CRUD/models/alumno')

const alumnos = require('../../db/alumnos.json')

router.get('/', (req,res) => {
    console.log(req.body)
    res.json(alumnos)
})

router.post('/', (req,res)=>{
    console.log(req.body)
    res.send('post received')
    userData = req.body
    const alumno = new Alumno(userData.nombre, userData.apellido, userData.carrera)
    alumnos.push(alumno)
})

router.delete('/:id',(req,res)=>{
    console.log('deleted')
    const { id } = req.params;
    let mensaje=''
    _.each(alumnos,(alumno, i)=>{
        if (alumno.id == id){
            alumnos.splice(i,1)
            mensaje='Borrado'
        }else{
            console.log('Alumno no encontrado');
            mensaje='No encontrado'
        }
    })
    res.send(mensaje)

})

router.put('/:id', (req, res)=>{
    const {id} = req.params;
    userData = req.body
    let mensaje = 'no actualizado';
    console.log(userData)
    console.log(id)
    if(userData){
        _.each(alumnos,(alumno,i) =>{
            if(alumno.id==id){
                alumno.nombre = userData.nombre;
                alumno.apellido = userData.apellido;
                alumno.carrera = userData.carrera;
                mensaje='Actualizado'
            }
        })
    }
    res.send(mensaje)
})

module.exports = router;