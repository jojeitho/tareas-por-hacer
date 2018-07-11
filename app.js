const argv = require('./configuraciones/yargs').argv
const porhacer = require('./tareasxhacer/por-hacer')
const color = require('colors');
//const argv = require('yargs').argv;



let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porhacer.crear(argv.descripcion);

        break;

    case 'listar':
        let listado = porhacer.listar();
        for (let tarea of listado) {
            console.log('============'.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('============'.green);
        }
        break;

    case 'actualizar':
        let actualizar = porhacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizar);
        break;

    case 'borrar':
        let borrar = porhacer.borrar(argv.descripcion);
        console.log(borrar);
        break;

    default:
        console.log('Comando no reconocido');
}