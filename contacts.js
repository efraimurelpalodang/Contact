const fs = require('node:fs');

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
        console.log("Kontak sudah terdaftar, Gunakan nama lain!!");
        return false;
    }

    contacts.push(contact);

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts, null, 2));
    
    console.log('Terima kasih sudah memasukka data anda!!');
}

// untuk export ke file lain
module.exports = {simpanKontak};
