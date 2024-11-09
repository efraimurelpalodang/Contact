const fs = require('node:fs');
const chalk = require('chalk');
const validator = require('validator');
const { default: isEmail } = require('validator/lib/isEmail');

//! membuat folder data jika belum adaa
const dirPath = './data'
if(!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

//! membuat file JSON jika belum ada
const dataPath = './data/contacts.json';
if(!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

// function untuk menyimpan contact
const simpanKontak = (contact) => {
    const {nama, email, noHP} = contact;
    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(fileBuffer);

    // cek duplikat
    const duplikat = contacts.find( coun => coun.nama === nama);
    if(duplikat) {
        console.log(chalk.red(`Kontak sudah terdaftar, Gunakan nama lain!!`));
        return false;
    }

    // cek email mnggunakan module validator
    if(email) {
        if(!isEmail(email)) {
            console.log(chalk.red(`Data Gagal ditambahkan, email tidak valid!!`));
            return false;
        }
    }

    // cek nomor handphone mnggunakan module validator
    if(noHP) {
        if(!validator.isMobilePhone(noHP,'id-ID')) {
            console.log(chalk.red(`Data Gagal ditambahkan, nomor Hp tidak valid!!`));
            return false;
        }
    }

    contacts.push(contact);

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts, null, 2));
    
    console.log(chalk.greenBright.inverse('Terima kasih sudah memasukka data anda!!'));
}

// untuk export ke file lain
module.exports = {simpanKontak};
