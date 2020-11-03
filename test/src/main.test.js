const assert = require('assert')
const { crearPdfGenerator } = require('../../moduloAbel/src/abel')
const fs = require('fs')
const { borrarDirectorioRecursive } = require('../../moduloAbel/src/functions')
const { pdfModule } = require('../../src/pdf/main')
const { RESUMEN_ENSAYO } = require('../../src/data/main');



let pdfGen

describe('-- CON CONFIG POR DEFAULT DEMO', async () => {


    before(async () => {
        pdfHandler = pdfModule()
    })
    after(async () => {
        const rutaDemo = './pathForSavings'
        borrarDirectorioRecursive(rutaDemo)

    })

    describe('envío objeto datos vacío', async () => {
        it('crea pdf demo y guarda en ruta demo', async () => {
            //ruta default para guardar archivos = './pathForSavings'
            //para modificar ruta default ir a archivo default.js
            const rutaDeArchivoNuevo = await pdfHandler.generarPdf({})
            const existeArchivo = fs.existsSync(rutaDeArchivoNuevo)
            assert.deepStrictEqual(existeArchivo, true)
        })
    })

    describe('no envío objeto datos', async () => {
        it('devuelve error', async () => {
            await assert.rejects(async () => {
                await pdfHandler.generarPdf()
            }, error => {
                const esperado = 'no existe datos para crear'
                assert.deepStrictEqual(error.message, esperado)
                return true
            })
        })
    })
})


describe('-- CON CONFIG CUSTOMIZADO', async () => {

    const config = {
        pathForSavings: './test/uploads'
    }

    before(async () => {
        pdfHandler = pdfModule(config)
    })

    after(async () => {
        borrarDirectorioRecursive(config.pathForSavings)

    })
    describe('envío objeto datos con ruta para guardar diferente', async () => {
        it('crea pdf en ruta especificada', async () => {
            const rutaDeArchivoNuevo = await pdfHandler.generarPdf({})
            const existeArchivo = fs.existsSync(rutaDeArchivoNuevo)
            assert.deepStrictEqual(existeArchivo, true)
        })
    })

    describe('envío objeto datos customizado', async () => {
        it('crea pdf en ruta especificada', async () => {
            const datos = {
                templateHtmlPath: './src/pdf/templates/ensayoClinico.html',
                //formatOptions: vacio para usar el default
                data: RESUMEN_ENSAYO
            }
            const rutaDeArchivoNuevo = await pdfHandler.generarPdf(datos)
            const existeArchivo = fs.existsSync(rutaDeArchivoNuevo)
            assert.deepStrictEqual(existeArchivo, true)
        })
    })
})