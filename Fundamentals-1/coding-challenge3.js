// Data 1
const teamDolphins = [96, 108, 89];
const teamKoalas = [88, 91, 110];

// Data bonus 1
const teamDolphins1 = [97, 112, 101];
const teamKoalas1 = [109, 95, 123];

// Data bonus 2
const teamDolphins2 = [97,112,101];
const teamKoalas2 = [109, 95, 106];

function calculateAverage(teamScores){
    let totalScore = 0;
    for(let i = 0; i < teamScores.length; i++){
        let teamScore = teamScores[i];
        totalScore = teamScore + totalScore;
    };
    return totalScore / teamScores.length;
};

function winners(team1, team2){
    const limit = 100;
    if(team1 > team2 && team1 >= limit){
        console.log(`Team Dolphins won the Game with the average score of ${team1}`);
    } else if(team2 > team1 && team2 >= limit){
        console.log(`Team Koalas won the Game with the average score of ${team2}`);
    } else if(team1 === team2 && team1 >= limit && team2 >= limit){
        console.log('Draw!');
    } else{
        console.log('No one Wins');
    }; 
}

const teamDolphinsAverage = calculateAverage(teamDolphins);
const teamKoalasAverage = calculateAverage(teamKoalas);

console.log(teamDolphinsAverage, teamKoalasAverage);

winners(teamDolphinsAverage, teamKoalasAverage);

console.log(calculateAverage(teamDolphins1), calculateAverage(teamKoalas1));
winners(calculateAverage(teamDolphins1), calculateAverage(teamKoalas1));

console.log(calculateAverage(teamDolphins2), calculateAverage(teamKoalas2));
winners(calculateAverage(teamDolphins2), calculateAverage(teamKoalas2));