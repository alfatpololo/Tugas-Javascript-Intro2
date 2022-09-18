const pilihNilai = (awal, akhir, array) => {
    let hasil = [];
    
    array.sort((a, b) => a - b);
    if (awal < akhir) {
        if (array.length < array[4]) {
            for (let i = 0; i < akhir; i++) {
                if (array[i] >= awal && array[i] <= akhir) {
                    hasil.push(array[i]);
                }
            }  
            if (hasil.length > 0) {
                console.log(hasil)
            } else console.log("Hasil tidak ada");
        } else console.log("Jumlah angka dalam dataArray harus lebih dari 5");
    } else console.log("Nilai akhir harus lebih besar dari nilai awal");
}


pilihNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]); // [ 8, 14, 17 ]

pilihNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8]); // “Nilai akhir harus lebih besar dari nilai awal”

pilihNilai(5, 17 , [2, 25, 4]) // “Jumlah angka dalam dataArray harus lebih dari 5”

pilihNilai(5, 17 , [2, 25, 4, 1, 30, 18]) // "Hasil tidak ada"