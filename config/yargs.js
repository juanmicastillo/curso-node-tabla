const argv = require('yargs')
    .option('b', {
        alias: 'numeroBase',
        type: 'number',
        demandOption: true,
        describe: 'Toma la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe: 'Muestra la tabla en consola'

    })
    .check((argv, option) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un número'
        } else {
            return true;
        }

    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        Describe: 'Este es el número hasta donde quieres la tabla'

    })
    .argv;

module.exports = argv;