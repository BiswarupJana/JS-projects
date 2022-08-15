
const callcTip=bill=>{
    return bill >=50 && bill<=300? bill*0.15:bill*0.2;
}
const bills= [125, 555, 44];
const tips=[callcTip(bills[0]),callcTip(bills[1]),callcTip(bills[2])];
console.log(bills,tips);