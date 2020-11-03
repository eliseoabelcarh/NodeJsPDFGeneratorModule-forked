const pdf = require("pdf-creator-node");
const fs = require('fs');

//DOCUMENTATION FOR PDF-CREATOR-NODE
//https://www.npmjs.com/package/pdf-creator-node

async function crearArchivoPdf({ pdfConfig, templateHtmlPath, formatOptions, data }) {

    let response;
    try {
        const htmlFile = leerTemplate(templateHtmlPath);
        const opciones = formatOptions
        const documento = crearDocumento(pdfConfig, htmlFile, data);
        response = await pdf.create(documento, opciones);
        const [filename] = response.filename.split('\\').reverse()
        const locationNewFile = `${pdfConfig.pathForSavings}/${filename}`
        return locationNewFile
    } catch (e) {
        console.error('No se pudo ejecutar la accion: ', e)
    }

    return response;
}

function leerTemplate(templateHtmlPath) {
    if (!fs.existsSync(templateHtmlPath)) {
        throw Error('El template solicitado no existe: ' + templateHtmlPath);
    }
    return fs.readFileSync(templateHtmlPath, 'utf8');
}

function crearDocumento(pdfConfig, htmlFile, { documento, contenido }) {
    const fechaString = new Date().toISOString().replace(/\..+/, '').replace(/:\s*/g, "-")
    const destinationPath = `${pdfConfig.pathForSavings}/${documento.nombre}.${fechaString}.pdf`;
    return {
        html: htmlFile,
        path: destinationPath,
        data: contenido
    };
}

module.exports = {
    crearArchivoPdf
}