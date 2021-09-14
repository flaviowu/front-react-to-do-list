const moment = require("moment")

export function dataFormat(data) {
    return moment(data).format('DD/MM/YYYY')
}

export function dataFormat2(data) {
    return moment(data).format('YYYY-MM-DD')
}

export function dataFormatISO(data) {
    return moment(data).format()
}

// let data = "2021-09-13T22:45:36.705+00:00"
// console.log(data)
// console.log(typeof(data))
// console.log(dataFormat(data))
