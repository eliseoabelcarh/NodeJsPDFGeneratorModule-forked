
const exampleData = require('./exampleData')

module.exports = {
    formatOptions: {
        format: "A3",
        orientation: "portrait",
        border: "10mm",
        footer: {
            height: "28mm",
            contents: {
                first: 'Cover page',
                2: 'Second page', // Any page number is working. 1-based index
                default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
                last: 'Last Page'
            }
        }
    },
    //USAR RUTA RELATIVA????????
    demoTemplate: './moduloAbel/src/demoTemplate.html',
    pathForSavings: './pathForSavings',
    demoData: exampleData
}