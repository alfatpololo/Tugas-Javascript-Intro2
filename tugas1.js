// 1. Push
// Method push digunakan untuk menambah satu atau lebih data baru di ahir dari sebuah array.

// Syntax:

// array.push(item1, item2, ..., itemX);

// Contoh :

const contohPush = [1, 2, 3]
contohPushpush(4);  
console.log(contohPush)
// outputnya : [1, 2, 3, 4]const myNum = [1, 2, 3]
contohPush.push(4);  
console.log(contohPush)
// outputnya : [1, 2, 3, 4]

// 2. Pop
// Method pop adalah kebalikan dari push.

// Method pop digunakan untuk menghapus item terakhir dari sebuah array.

// Method pop tidak perlu menggunakan argumen.

// Contoh :

const contohPop = [1, 2, 3]
contohPop.pop()
console.log(contohPop)
// outputnya : [1, 2]

// 3. Unshift
// Kalau push digunakan untuk menambah item baru di ahir sebuah array, maka method unshift digunakan untuk menambah item baru di awal sebuah array.

// Syntax:

// array.unshift(item1, item2, ..., itemX)

const contohUnshift = [3, 4]
contohUnshift.unshift(1, 2);
console.log(contohUnshift)
// outputnya : [1, 2, 3, 4]

// 4. Shift
// Shift adalah kebalikan dari unshift.

// Digunakan untuk menghapus item pertama dari sebuah array.

// Contoh :

const contohShift = [1, 2, 3]
contohShift.shift();
console.log(contohShift)
// outputnya : [2, 3]

// 5. Includes
// Method includes digunakan untuk mengecek apakah sebuah array memilik element tertentu.

// Misal kita punya sebuah array seperti ini

// const fruits = ['apple', 'banana', 'cherry']
// Kemudian kita perlu mengecek apakah dalam array tersebut terdapat item dengan nama ‘apple’.

// Jika item yang di cari ada dalam array maka akan mereturn true, baliknya meruturn false;

// Contoh:

const contohIncludesBuah = ['apple', 'banana', 'cherry']
contohIncludesBuah.includes('apple') // return true
contohIncludesBuah.includes('mango') // return false

// Syntax:

// array.includes(element, start)

// Parameter kedua dari method includes bersifat optional ya.

// Defaultnya adalah 0.

// Parameter ini gunanya untuk memberi tahu dari index ke berapa pengecekannya di mulai.

// Contoh:

const contohIncludesBuah2 = ['apple', 'banana', 'cherry']
contohIncludesBuah2.includes('apple', 1) 
// return false karna pengecekan di mulai dari index 1

// 6. indexOf
// Method indexOf digunakan untuk mencari letak sebuah item dalam array.

// Bila item yang di maksud ada di dalam array, maka akan mereturn index dari item sebaliknya akan mereturn -1

// Contoh:

const contohIndexOfMobil = ['Tesla', 'Toyota', 'Honda']
contohIndexOfMobil.indexOf('Tesla') // return 0
contohIndexOfMobil.indexOf('Lambo') // return -1

// Syntax:

// array.indexOf(element, start)
// Parameter kedua gunanya untuk memberi tahu dari index ke berapa pengecekannya di mulai.

// Jadi sama seperti method includes yang kita pelajari sebelumnya.

// 7. Concat
// Method concat digunakan untuk menggabungkan 2 atau lebih array.

// Syntax:

// array1.concat(array2, array3, ..., arrayX)
// Contoh :

const teamSatu = ['Alfath', 'Brandon', 'Ainur']
const teamDua = ['Furqon', 'Vicko', 'Reza']
const teamTiga = ['Ichsan', 'Taufiq', 'Refa', 'Iqbal']
const pesertaPijar = teamSatu.concat(teamDua, teamTiga)
console.log(pesertaPijar)
// output : ['Alfath', 'Brandon', 'Ainur', 'Furqon', 'Vicko', 'Reza', 'Ichsan', 'Taufiq', 'Refa', 'Iqbal' ]

// 8. Slice
// Method slice digunakan untuk memilih satu atau beberapa item dari sebuah array.

// Misal kita punya array seperti ini.

// const fruits = ['apple', 'banana', 'cherry']

// Kita mau mengambil 2 item, yaitu ‘apple’ dan ‘banana’.

// Dengan method slice caranya seperti ini.

const contohSliceFruits = ['apple', 'banana', 'cherry']
contohSliceFruits.slice(0, 2)
// outputnya ['apple', 'banana']

// Syntax:

// array.slice(start, end)
// Metode slice() memilih elemen yang dimulai dari argumen awal yang diberikan, dan berakhir pada, tetapi tidak menyertakan, argumen akhir yang diberikan.

// 9. Splice
// Metode splice() bisa digunakan untuk menambahkan, menghapus, atau mereplace item ke atau dari sebuah array.

// Syntax:

// array.splice(index, berapaBanyak, item1, ….., itemX)

// Contoh menghapus item dengan method splice

const SpliceFruits = ['apple', 'banana', 'cherry']
SpliceFruits.splice(0, 1) // menghapus 1 item di index 0
console.log(SpliceFruits) // ['banana', 'cherry']

//  mereplace item dengan method splice

// const SpliceFruits = ['apple', 'banana', 'cherry']
// SpliceFruits.splice(0, 1, 'mango') 
// // menghapus 1 item di index 0 dan menambah 'mango' di index 0
// console.log(SpliceFruits) // ['mango', 'banana', 'cherry']

//  menambah item dengan method splice

// const SpliceFruits = ['apple', 'banana', 'cherry']
// SpliceFruits.splice(0, 0, 'mango') 
// // menambah 1 item di index 0 
// console.log(SpliceFruits) // [ 'mango', 'apple', 'banana', 'cherry' ]

// 10. Sort
// Sesuai namanya, method sort digunakan untuk mengurutkan item dalam sebuah array.

// Uratannya bisa numeric atau alphabetic, bisa ascending (keatas) ataudescending (kebawah).

// :

// const contohSortNum = [11, 18, 100, 25, 30]
// contohSortNum.sort() // output ->[ 100, 11, 18, 25, 30 ]

// Perhatikan!

// Hasilnya jadi aneh kan?

// Ini karna secara default method sort akan mengurutkan secara alphabetic dan ascending.

// Kita perlu menambahkan parameter berupa sebuah function pada method sort.

// Fungsi yang mendefinisikan alternatif urutan pengurutan.

// Fungsi harus mengembalikan nilai negatif, nol, atau positif, tergantung pada argumen.

// Contoh:

const contohSortNum = [11, 18, 100, 25, 30]
contohSortNum.sort(function(a,b){return a- b}) 
// output -> [ 11, 18, 25, 30, 100 ]

// const contohSortNum = [11, 18, 100, 25, 30]
// contohSortNum.sort(function(a,b){return b - a})
// // output -> [ 100, 30, 25, 18, 11 ]