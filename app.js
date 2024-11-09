//! memanggil module External
const {simpanKontak} = require('./contacts')


//! mengambil argument dari command line
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv));

argv.command({
    command: 'add',
    describe: 'Menambahkan kontak baru',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string'
        },
        email: {
            describe: 'Email',
            demandOption: false,
            type: 'string'
        },
        noHP: {
            describe: 'Nomor Handphone',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        const contact = {
            nama: argv.nama,
            email: argv.email,
            noHP: argv.noHP,
        };
        simpanKontak(contact);
    }
})
.help()
.argv;