const axios = require('axios')

const getLugarLongLat = async(direccion) => {
    let key = "69536e535ffc75fc322edaa9c4220cf8"

    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${direccion}&appid=${key}`)

    const data = resp.data
    const dir = data.name;
    const latitud = data.coord.lat;
    const longitud = data.coord.lon;


    return {
        dir,
        latitud,
        longitud
    }
}

module.exports = {
    getLugarLongLat
}