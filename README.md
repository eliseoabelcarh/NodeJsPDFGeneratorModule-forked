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
        const rutaDeArchivoNuevo = await pdfGen.generarPdf({})
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
        const rutaDeArchivoNuevo = await pdfGen.generarPdf({})
        console.log(rutaDeArchivoNuevo)
       
  ```       
### MODELO PARA CREAR PDF CUSTOMIZANDO ruta de guardado Y datos de contenido

```
      const config = {
              pathForSavings: './test/uploads'
         }
      const pdfHandler = await crearPdfGenerator(config)
      const datos = {
                templateHtmlPath: './src/pdf/templates/ensayoClinico.html',
                //formatOptions:{//ver default para ejemplo} //comentar para usar el default
                data: RESUMEN_ENSAYO
            }
      const rutaDeArchivoNuevo = await pdfHandler.generarPdf(datos)
      console.log(rutaDeArchivoNuevo)


```

#### fixes 3/11/2020:
 Cambios / Fork a Repositorio origin 

###### se agregó Módulo: 'moduloAbel' (modulo node js - with library dependencies)
###### se agregó tests para 'moduloAbel' y para main.js (mocha)
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