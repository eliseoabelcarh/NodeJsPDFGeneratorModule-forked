const pdf = require("pdf-creator-node");
const fs = require('fs');
const { crearPdfGenerator } = require('../../moduloAbel/src/abel')

let pdfConfig = {};

function pdfModule(config) {

    pdfConfig = config;

    return {
        generarPdf: async (datos) => {
            const pdfGen = await crearPdfGenerator(pdfConfig)
            const rutaDeArchivoNuevo = await pdfGen.crear(datos)
            return rutaDeArchivoNuevo
        },
        resumenEnsayoClinico: async (data) => {
            return crearArchivoPdf('ensayoClinico', data);
        },
        eliminarArchivo: async (data) => {
            return eliminarArchivoPdf(data);
        },
        limpiarCarpeta: async () => {
            return limpiarCarpeta();
        }
    }
}




function crearArchivoPdf(template, data) {
    let response;

    try {
        const html = leerTemplate(template);
        const opciones = crearOpciones();
        const documento = crearDocumento(html, data);
        response = pdf.create(documento, opciones).then(res => res).catch(error => console.error(error));
    } catch (e) {
        console.error('No se pudo ejecutar la accion: ', e)
    }

    return response;
}

function eliminarArchivoPdf(filename) {
    const path = `${pdfConfig.documentsPath}/${filename}`;

    let fileDeleted = false;

    if (!fs.existsSync(path)) {
        throw Error('El archivo solicitado no existe: ' + filename);
    }

    console.log('Eliminando archivo... ', filename);
    fs.unlink(path, err => fileDeleted = !err);

    return fileDeleted;
}

function limpiarCarpeta() {

    let response = true;

    fs.readdir(pdfConfig.documentsPath, (err, files) => {
        if (err) {
            console.log(err);
            response = false
        }

        for (const file of files) {
            eliminarArchivoPdf(file);
        }
    });

    return response;
}

function leerTemplate(template) {
    const path = `${pdfConfig.templatePath}/${template}.html`;

    if (!fs.existsSync(path)) {
        throw Error('El template solicitado no existe: ' + template);
    }

    return fs.readFileSync(path, 'utf8');
}

function crearOpciones() {
    return {
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
    }
}

function crearDocumento(html, { documento, contenido }) {
    const path = `${pdfConfig.documentsPath}/${documento.nombre}.pdf`;

    if (fs.existsSync(path)) {
        throw Error('Ya existe un archivo con el nombre' + documento.nombre);
    }

    return {
        html,
        path,
        data: contenido
    };
}

module.exports = { pdfModule };
