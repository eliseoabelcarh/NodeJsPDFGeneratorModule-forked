# PDF Generator

### forked from lpurcaro/pdf-module


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