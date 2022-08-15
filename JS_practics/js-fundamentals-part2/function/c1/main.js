const calcAverage=(a,b,c)=>(a+b+c)/3;
console.log(calcAverage(3,4,5));

const scoreDolphins= calcAverage(85,54,41);
const scoreKoalas= calcAverage(23,34,27);
console.log(scoreDolphins, scoreKoalas);

const checkWinner=(avgDolphins, avgKoalas)=>{
    if(avgDolphins>=2*avgKoalas){
        console.log(`Dolphins win....(${avgDolphins} VS. ${avgKoalas})`);
    }
    else if(avgKoalas>=2*avgDolphins){
        console.log(`Koalas wins....(${avgKoalas} VS. ${avgDolphines})`);
    }
    else{
        console.log('No team wins...');
    }
}

checkWinner(scoreDolphins, scoreKoalas);