
let yariCap = parseInt(process.argv.slice(2));
const pi = 3.14;

function fieldCalculater(yariCap){
    result = pi*(yariCap*yariCap)
    return (result)
}

console.log("Yarıçapı", yariCap ,"olan dairenin alanı:", fieldCalculater(yariCap))