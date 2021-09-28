const fs = require('fs');



const crearArchivo = async(numeroBase = 5, listar = false.valueOf, hasta = 10) => {
    try {

        let salida = '';
        for (let index = 1; index <= hasta; index++) {
            resultado = numeroBase * index;
            // console.log(numeroBase, 'x' , index, '=', resultado)
            salida += `${numeroBase} x ${index} = ${resultado}\n`

        }

        if (listar) {

            console.log('=============')
            console.log('   Tabla del'.blue, numeroBase)
            console.log('=============')
            console.log(salida.yellow)
        }

        fs.writeFileSync(`./salida/tabla-${numeroBase}.txt`, salida);

        return `tabla-${numeroBase}.txt`

    } catch (error) {
        throw error;
    };
}


module.exports = {
    crearArchivo
}