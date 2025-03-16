let nama_depan, nama_belakang, nama_lengkap;
let angka_pertama, angka_kedua, hasil_tambah, hasil_kali, hasil_bagi, hasil_pengurangan, segitiga;

document.getElementById("button_merge").onclick = function(){
	nama_depan = document.getElementById("nama_depan").value;
	nama_belakang = document.getElementById("nama_belakang").value;
	nama_lengkap = nama_depan + " " + nama_belakang;
	
	console.log(nama_lengkap);

	document.getElementById("nama_lengkap").textContent = nama_lengkap;
    
};

document.getElementById("button_hasil").onclick = function(){
    angka_pertama = (document.getElementById("angka_pertama").valueAsNumber);
    angka_kedua = (document.getElementById("angka_kedua").valueAsNumber);
    hasil_tambah = angka_pertama + angka_kedua;
    hasil_kali = angka_pertama * angka_kedua
    hasil_bagi = angka_pertama / angka_kedua
    hasil_pengurangan = angka_pertama - angka_kedua
    console.log(`hasil tambah = ${hasil_tambah} `);
    console.log(`tipe tambah = ${typeof hasil_tambah} `);
    console.log(`hasil kali = ${hasil_kali} `);
    console.log(`tipe kali = ${typeof hasil_kali} `);
    console.log(`hasil bagi = ${hasil_bagi}`)
    console.log(`tipe bagi = ${typeof hasil_bagi}`)
    console.log(`hasil kurang = ${hasil_pengurangan}`)
    console.log(`tipe kurang = ${typeof hasil_pengurangan}`)

    document.getElementById("hasil_tambah").textContent = hasil_tambah;
    document.getElementById("hasil_pengurangan").textContent = hasil_pengurangan;
    document.getElementById("hasil_kali").textContent = hasil_kali;
    document.getElementById("hasil_bagi").textContent = hasil_bagi;


}

let alas = 10, tinggi = 5; 
segitiga = 0.5 * (alas * tinggi);
luas_segitiga = segitiga;
console.log(`hasil luas segitiga = ${segitiga}` ); 
console.log (typeof segitiga)


let harga_jual = 13000, duit = 30000;
let beli = 2;
pembelian = parseInt(duit) -  parseInt(beli) * parseInt(harga_jual); 
kembalian = parseInt(pembelian);
console.log (pembelian);
console.log (typeof pembelian);

let data0 = 10.9;
console.log(parseFloat(data0));
console.log(typeof data0);


let data1 = 10.9;
console.log(parseInt(data1));
console.log(typeof data1);

let bool1 = ((pembelian) == (data1));
console.log(bool1);
console.log(typeof bool1);

let bool2 = (1 == 1);
console.log(bool2);
console.log(typeof bool2);

let bool3 = (0 == 1);
console.log(bool3);
console.log(typeof bool3);

let aritmatikaAngka1,operatorAritmatika,artimatikaAngka2,hasilOperatorAritmatika;

 document.getElementById('buttonAritmatika').onclick = function(){

    Angka1 = parseFloat(document.getElementById("aritmatikaAngka1").value);
    Angka2 = parseFloat(document.getElementById("aritmatikaAngka2").value);
    operatorAritmatika = document.getElementById("operatorAritmatika").value;

    if (isNaN(Angka1) || isNaN(Angka2)){

        alert("seng bener ae cok!!!"); 
        return;

    }

    // operasi
	switch (operatorAritmatika) {
        case "+":
             hasilOperatorAritmatika = Angka1 + Angka2;
             break;
        case "-":
             hasilOperatorAritmatika = Angka1 - Angka2;
             break;
        case "/":
             hasilOperatorAritmatika = Angka1 / Angka2;
             break;
        case "x":
             hasilOperatorAritmatika = Angka1 * Angka2;
             break;
        case "%":
             hasilOperatorAritmatika = Angka1 % Angka2;
             break;
        default :
        hasilOperatorAritmatika = "pilihen Operatore cok picek ";

        

        console.log(hasilOperatorAritmatika);
        document.getElementById("hasilOperatorAritmatika").textContent = hasilOperatorAritmatika;

    };













 };


let jumlahAngkot = 10;
let nomorAngkot = 1;
let beroprasi = 6;


while (nomorAngkot <= beroprasi) {
    console.log(`Angkot No.${nomorAngkot} berjalan dengan baik`);
nomorAngkot++;
}

for (nomorAngkot = beroprasi + 1; nomorAngkot <= jumlahAngkot; nomorAngkot++) {
    console.log(`Angkot No.${nomorAngkot} dibengkel `)
    
}


for (let nomorAngkot = 1; nomorAngkot <= jumlahAngkot; nomorAngkot++){
    if (nomorAngkot <= beroprasi && nomorAngkot !== 5) {
        console.log(`angkot ${nomorAngkot} beroprasi `)
    } else if(nomorAngkot === 8 || nomorAngkot === 10 || nomorAngkot === 5){
        console.log(`angkot ${nomorAngkot} lembur`)
    } 
    else {
        console.log(`angkot ${nomorAngkot} dibengkel`)
    }
}

// permainan sederhana dengan alret 

kon = true
while (kon) {


        // pilihan 
    let pilih  = prompt("masukkan pilihan: gajah,orang,semut");
    console.log(pilih );

    // komputer 

    let kom = Math.random();
    if(kom < 0.33){
        kom = "semut"
    } else if (kom >= 0.33 && kom < 0.66 ){
    kom = "orang"
    }else {
        kom = "gajah"
    }
    console.log(kom);


    // rules 

    let hasil ="";

    if (pilih == kom){
        hasil = "SERI"

    } else if (pilih == "gajah"){
        if (kom == "semut"){
            hasil = "MENANG"
        } else {
            hasil ="kalah";
        };
    }  else if (pilih == "orang"){
        if (kom == "gajah"){
            hasil = "MENANG";
        } else {
            hasil ="kalah";
        };

    } else if (pilih == "semut"){
        if (kom == "orang"){
            hasil = "MENANG";
        } else {
            hasil ="kalah";
        };

    }else {
        hasil = "pilihan salah" ;
    };

    alert(`kamu ${pilih} komputer ${kom} maka komputer ${hasil}`);

    kon = confirm("lagi?");


}; 



