const fs = require('node:fs');

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

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

// untuk membuat pertanyaan
const askQuestion = (question) => {
    return new Promise( resolve => {
        rl.question(`${question} : `, answer => {
            resolve(answer)
        })
    })
}

// function untuk menyimpan contact
const simpanKontak = (nama, email, noHp) => {
    const contact = {nama, email, noHp};
    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(fileBuffer);

    contacts.push(contact);

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
    
    console.log('Terima kasih sudah memasukka data anda!!');
    
    rl.close();
}

// untuk export ke file lain
module.exports = {askQuestion, simpanKontak};
