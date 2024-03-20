let m = [1,2,3,4,5,1,42344234,324,242,5,346554,654,7,567,56,8,678,,1,1,1,1,1,,54,6,54,756,856,,769,6968,6,85,74,7456,36,3463,63]

function en(mass) {
    let u = 0
    for(let i = 0; i < mass.length; i++){
        if(mass[i] ==1 )
        u++
    }
    return u
}
console.log(en(m))
