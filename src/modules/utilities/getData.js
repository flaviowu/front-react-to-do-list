const moment = require("moment")

export function dataFormat(data) {
    return moment(data).format('DD/MM/YYYY')
}

// let data = "2021-09-13T22:45:36.705+00:00"
// console.log(data)
// console.log(typeof(data))
// console.log(dataFormat(data))
