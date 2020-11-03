# PDF Generator

### forked from lpurcaro/pdf-module 
https://github.com/lpurcaro/pdf-module

### MODELO PARA CREAR PDF DEMO
  ```
        //si no se envía objeto config usa ruta default
        const pdfGen = await crearPdfGenerator()
        //ruta default para guardar archivos = './pathForSavings'
        //para modificar ruta default ir a archivo default.js
        //se envía objeto de datos vacío
        const rutaDeArchivoNuevo = await pdfGen.crear({})
        console.log(rutaDeArchivoNuevo)
       
  ```         

### MODELO PARA CREAR PDF CUSTOMIZANDO ruta de guardado
  ```
        const config = {
              pathForSavings: './test/uploads'
         }
        const pdfGen = await crearPdfGenerator(config)
        //ruta default para guardar archivos = './pathForSavings'
        //para modificar ruta default ir a archivo default.js
        const rutaDeArchivoNuevo = await pdfGen.crear({})
        console.log(rutaDeArchivoNuevo)
       
  ```       
### MODELO PARA CREAR PDF CUSTOMIZANDO ruta de guardado Y datos de contenido

```
      const datos = {
                templateHtmlPath: './src/pdf/templates/ensayoClinico.html',
                //formatOptions: vacio para usar el default
                data: RESUMEN_ENSAYO
            }
      const rutaDeArchivoNuevo = await pdfHandler.generarPdf(datos)
      console.log(rutaDeArchivoNuevo)


```








#### fixes 3/11/2020:
 Cambios / Fork a Repositorio origin 

###### se agregó a directorio root la carpeta moduloAbel y su contenido(modulo node js)
###### se agregó carpeta test a directorio root con los tests respectivos
###### cambios en archivo ./src/pdf/main.js :
**** linea 3:
```   
 const { crearPdfGenerator } = require('../../moduloAbel/src/abel')
 ```   
###### linea 12,13,14,15,16 : 
```   
 generarPdf: async (datos) => {
            const pdfGen = await crearPdfGenerator(pdfConfig)
            const rutaDeArchivoNuevo = await pdfGen.crear(datos)
            return rutaDeArchivoNuevo
        },
```   