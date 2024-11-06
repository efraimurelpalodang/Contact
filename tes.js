const fs = require('node:fs/promises');  // Menggunakan fs.promises untuk mendukung Promise

// Setup readline interface
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

// Fungsi untuk meminta input dari pengguna, menggunakan Promise
const askQuestion = (question) => {
  return new Promise((resolve, reject) => {
    rl.question(question, (answer) => {
      resolve(answer); // Resolves the answer from user input
    });
  });
};

// Fungsi utama untuk menangani logika
const main = async () => {
  try {
    // Menanyakan nama dan nomor HP secara berurutan menggunakan async/await
    const nama = await askQuestion('Masukkan nama anda :  ');
    const noHp = await askQuestion('Masukkan nomor hp : ');

    const contact = { nama, noHp };

    // Membaca file contacts.json secara asynchronous
    const fileData = await fs.readFile('data/contacts.json', 'utf-8');

    // Parsing data yang ada di file contacts.json
    const contacts = JSON.parse(fileData);

    // Menambahkan kontak baru ke dalam array
    contacts.push(contact);

    // Menyimpan kembali data kontak yang sudah diperbarui ke dalam file
    await fs.writeFile('data/contacts.json', JSON.stringify(contacts, null, 2));

    // Memberikan konfirmasi setelah data berhasil disimpan
    console.log('Terima kasih sudah memasukkan data dan nomor HP !!');
    
  } catch (err) {
    // Menangani error jika terjadi kesalahan pada operasi file atau input
    console.error('Terjadi kesalahan:', err.message);
  } finally {
    // Menutup interface readline setelah selesai
    rl.close();
  }
};

// Menjalankan fungsi utama
main();
