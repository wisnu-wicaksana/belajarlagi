let mainLagi = true;

while (mainLagi) {
    // Komputer memilih angka acak antara 1-10
    let angkaRahasia = Math.floor(Math.random() * 10) + 1;
    let kesempatan = 3;
    let tebakan;
    
    alert("Selamat datang di permainan Tebak Angka!\nTebak angka antara 1 - 10.\nKamu punya 3 kesempatan.");

    while (kesempatan > 0) {
        // Pemain memasukkan tebakan
        tebakan = parseInt(prompt(`Masukkan tebakanmu (1-10)\n(Kesempatan tersisa: ${kesempatan})`));

        // Validasi input
        if (isNaN(tebakan) || tebakan < 1 || tebakan > 10) {
            alert("Masukkan angka yang valid antara 1 - 10!");
            continue; // Meminta input ulang
        }

        // Cek tebakan
        if (tebakan === angkaRahasia) {
            alert(`Selamat! Kamu menebak angka yang benar: ${angkaRahasia}`);
            break;
        } else if (tebakan > angkaRahasia) {
            alert("Terlalu besar! Coba lagi.");
        } else {
            alert("Terlalu kecil! Coba lagi.");
        }

        kesempatan--; // Kurangi kesempatan

        // Jika kesempatan habis
        if (kesempatan === 0) {
            alert(`Kesempatan habis! Angka yang benar adalah ${angkaRahasia}.`);
        }
    }

    // Konfirmasi bermain lagi
    mainLagi = confirm("Mau main lagi?");
}

alert("Terima kasih sudah bermain!");



let sisi1 = 20; 
let sisi2 = 20; 


