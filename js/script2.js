let s1 = 8;
let s2 = 3;
let v1;
let v2;


function persegi(s1, s2) {
    let total, v1, v2 ; 

   v1 = s1 * s1* s1
   v2 = s2 * s2* s2

   total = v1 + v2;

 

    return total;
}
let total = persegi(s1, s2)


// Pemanggilan fungsi yang benar
console.log(`hasil penjumlahan persegi adalah: ${total}`); // Output: 539
console.log (typeof total)