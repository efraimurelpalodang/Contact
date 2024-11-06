const fs = require('fs');
// const fsp = require('node:fs/promises');
// console.log(tes);


const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const { promises } = require('dns');

const rl = readline.createInterface({ input, output });

// untuk memanggil module fs.existsSync
const { existsSync } = 'node:fs';

// Jika folder data nya tidak ada maka akan dibuatkan
const dirPath = './data';
if(!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

// Membuat file json jika belum ada
const dataPath = './data/contacts.json';
if(!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

const p1 = () => {
    return new Promise((resolve, reject) => {
        rl.question('Masukkan nama anda : ', (n) => {
            resolve(n);
        });
    });
}
const p2 = () => {
    return new Promise((resolve, reject) => {
        rl.question('Masukkan email anda : ', (email) => {
            resolve(email);
        });
    });
}


const main = async () => {
    const nama = await  p1();
    const email = await p2();

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