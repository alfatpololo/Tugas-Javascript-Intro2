const contohSortNum = [11, 18, 100, 25, 30]
contohSortNum.sort() // output ->[ 100, 11, 18, 25, 30 ]

const contohSortNum = [11, 18, 100, 25, 30]
contohSortNum.sort(function(a,b){return a-b}) 
// output -> [ 11, 18, 25, 30, 100 ]