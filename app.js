const contacts = require('./contacts');

async function main() {
    const nama = await contacts.askQuestion('Masukkan Nama anda');
    const email = await contacts.askQuestion('Masukkan Email anda');
    const noHp = await contacts.askQuestion('Masukkan Nomor anda');

    contacts.simpanKontak(nama, email, noHp);
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