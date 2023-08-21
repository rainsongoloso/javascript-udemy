// Data 1
const teamDolphins = [44, 23, 71];
const teamKoalas = [65, 54, 49];

// Data 2
const teamDolphins1 = [85, 54, 41];
const teamKoalas1 = [23, 34, 27];

const calcAverage = teamScores =>{
    let totalScore = 0;
    for(let i = 0; i < teamScores.length; i++){
        let teamScore = teamScores[i];
        totalScore = teamScore + totalScore;
    };
    return totalScore / teamScores.length;
};

function checkWinner(avgDolphins, avgKoalas){
    const double = [2 * avgDolphins, 2 * avgKoalas];
    if(avgDolphins >= double[1]){
        console.log(`Team Dolphins win (Dolphins: ${avgDolphins} vs Koalas: ${avgKoalas})`);
    } else if(avgKoalas >= double[0]){
        console.log(`Team Koalas win (Koalas: ${avgKoalas} vs Dolphins: ${avgDolphins})`);
    } else{
        console.log(`Average Scores: \n Dolphins: ${avgDolphins} \n Koalas: ${avgKoalas} \n No team won!`);
    }; 
}

checkWinner(calcAverage(teamDolphins), calcAverage(teamKoalas));
checkWinner(calcAverage(teamDolphins1), calcAverage(teamKoalas1));