const pdf = require("pdf-creator-node");
const fs = require('fs');
const defaults = require('./defaults');


const service = require('./pdfCreatorNode')


async function crearPdfGenerator(config) {

    let pdfConfig = config

    if (!pdfConfig) {
        pdfConfig = {}
        pdfConfig.pathForSavings = defaults.pathForSavings
    }

    return {
        crear: async (datos) => {

            if (!datos) {
                throw new Error('no existe datos para crear')
            }
            if (!datos.templateHtmlPath || !datos.formatOptions || !datos.data) {
                datos = crearDemo(datos)
            }

            return await service.crearArchivoPdf({ pdfConfig, templateHtmlPath: datos.templateHtmlPath, formatOptions: datos.formatOptions, data: datos.data })
        }
    }
}



function crearDemo(datos) {
    if (!datos.templateHtmlPath) {
        datos.templateHtmlPath = defaults.demoTemplate
    }
    if (!datos.formatOptions) {
        datos.formatOptions = defaults.formatOptions
    }
    if (!datos.data) {
        datos.data = defaults.demoData
    }
    return datos
}

module.exports = {
    crearPdfGenerator
}