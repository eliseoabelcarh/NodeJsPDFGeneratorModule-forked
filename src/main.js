const { pdfModule } = require('./pdf/main');
const { RESUMEN_ENSAYO } = require('./data/main');

async function main() {
    const pdf = pdfModule({ templatePath: './src/pdf/templates', documentsPath: './src/pdf/pdfs' });

    // Devuelve un json con la ruta al archivo { filename: 'ruta al archivo' }
    const resp = await pdf.resumenEnsayoClinico(RESUMEN_ENSAYO);
    const [filename] = resp.filename.split('/').reverse();

    setTimeout(pdf.eliminarArchivo, 10000, filename)
    setTimeout(pdf.limpiarCarpeta, 10000)

}

main();
