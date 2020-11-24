const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Descripcion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

// lugar.getLugarLongLat(direccion)
//         .then(console.log)
//         .catch(console.log);

//     clima.getClima(19.29, -99.67)
//         .then(console.log)
//         .catch(console.log);

const getInfo = async(direccion) => {


    try {
        const coordenadas = await lugar.getLugarLongLat(direccion);
        const temperatura = await clima.getClima(coordenadas.latitud, coordenadas.longitud);
        return `el clima de ${coordenadas.dir} es de ${temperatura}`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);