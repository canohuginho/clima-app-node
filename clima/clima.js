const axios = require('axios')

const getClima = async(lat, lon) => {
    let key = "69536e535ffc75fc322edaa9c4220cf8"

    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}