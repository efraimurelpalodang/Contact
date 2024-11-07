const fs = require('node:fs');


const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const { resolve } = require('node:path');
const rl = readline.createInterface({ input, output });

//! membuat folder data jika belum ada
const dirPath = './data'
if(!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

//! membuat file JSON jika belum ada
const dataPath = './data/contacts.json';
if(!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

const pertanyaan1 = function() {
    return new Promise( resolve => {
        rl.question('Masukkan nama anda : ', nama => {
            resolve(nama)
        })
    })
}
const pertanyaan2 = function() {
    return new Promise( resolve => {
        rl.question('Masukkan email anda : ', nama => {
            resolve(nama)
        })
    })
}

async function main() {
    const nama = await pertanyaan1();
    const email = await pertanyaan2();

    const contact = {nama, email};
    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(fileBuffer);

    contacts.push(contact);

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
    
    console.log('Terima kasih sudah memasukka data anda!!');
    
    rl.close();
}

main();













// rl.question('Masukkan nama anda :  ', nama => {
//     rl.question('Masukkan nomor hp : ', noHp => {
//         const contact = {nama, noHp};
//         const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
//         const contacts = JSON.parse(fileBuffer);

//         contacts.push(contact);

//         fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
        
//         console.log('Terima kasih sudah memasukka data dan nomor HP !!');
        
//         rl.close();
//     })
//   });