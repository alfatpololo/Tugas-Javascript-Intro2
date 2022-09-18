const namaNama = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope'
]

const cariNama = (kata, batas, callback) => {
    const cari = namaNama.filter(element => {
        const hasil = element.toLowerCase().includes(kata.toLowerCase())
        return hasil
    })
    let final = cari.slice(0,batas)

    return callback(final)

}

const callback = (final) => {
    const cetak = final;
    if(cetak.length === 0){
        return "Data tidak ada"
    }
    else{
        return cetak
    }
}

const output = cariNama("it",2,callback)
console.log(output)