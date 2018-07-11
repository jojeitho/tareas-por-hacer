const fs = require('fs');

let listadoPorHacer = [];



const guardar = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {

        if (err)
            throw new Error('No se pudo grabar', err);
    });

}

const cargar = () => {

    try {
        listadoPorHacer = require('../db/data.json');

    } catch (error) {
        listadoPorHacer = [];

    }



}

const listar = () => {
    cargar();
    return listadoPorHacer;

}

const crear = (descripcion) => {


    cargar();

    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardar();

    return porHacer;


}

const actualizar = (descripcion, completado = true) => {
    cargar();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardar();
        return true;

    } else {
        return false;
    }

}

const borrar = (descripcion) => {
    cargar();
    let nuevolistado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion
    });

    if (listadoPorHacer.length === nuevolistado.length) {
        return false;
    } else {
        listadoPorHacer = nuevolistado;
        guardar();
        return true;
    }

}


module.exports = {
    crear,
    listar,
    actualizar,
    borrar
}