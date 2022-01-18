// Definir rutas
const {Router} = require('express');
const _ = require('underscore')
const router = Router();
const Materia = require('../../01_Inquirer_CRUD/models/materia')
const materias = require('../../db/materias.json')

router.get('/', (req,res) => {
    res.json(materias)
})

router.post('/', (req,res)=>{
    res.send('post received')
    materiaData = req.body
    const materia = new Materia(materiaData.idEstudiante, materiaData.nombreMateria, materiaData.calificacion)
    materias.push(materia)
})

router.delete('/:id',(req,res)=>{
    console.log('deleted')
    const { id } = req.params;
    let mensaje=''
    _.each(materias,(materia, i)=>{
        if (materia.id == id){
            materias.splice(i,1)
            mensaje='Materia Borrada'
        }else{
            console.log('Materia no encontrado');
            mensaje='Materia no encontrada'
        }
    })
    res.send(mensaje)
})

router.put('/:id', (req, res)=>{
    const {id} = req.params;
    materiaData = req.body;
    let mensaje = 'no actualizado';

    if(materiaData){
        _.each(materias,(materia,i) =>{
            if(materia.id==id){
                materia.idEstudiante = materiaData.idEstudiante;
                materia.nombreMateria = materiaData.nombreMateria;
                materia.calificacion = materiaData.calificacion;
                mensaje='Materia Actualizada'
            }
        })
    }
    res.send(mensaje)
})

module.exports = router;