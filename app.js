const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');
// import { writeFile } from 'fs';
// option('l')
// listar 
// boolean
// default

console.clear();

// console.log(process.argv);


// console.log('numeroBase yargs: ', argv.b)




// console.log(process.argv);
// const [ , , arg3 = 'numeroBase=2'] = process.argv;
// const[, numeroBase = 5] = arg3.split('=')
// console.log(numeroBase);

// const numeroBase = 6 ; 
crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.green, 'Creado'.blue))
    .catch(err => console.log(err).red);