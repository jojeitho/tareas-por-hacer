const opciones = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente la tarea'

    }
}


const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea', opciones)
    .command('actualizar', 'Actualizar una tarea', opciones)
    .command('borrar', 'borrar una tarea', opciones)
    .help()
    .argv;


module.exports = {
    argv
}