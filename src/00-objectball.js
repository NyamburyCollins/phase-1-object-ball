function gameObject(){
    return{
        homeTeam:{
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    "Number": 0,
                    "Shoe": 16,
                    "Points": 22,
                    "Rebounds": 12,
                    "Assists": 12,
                    "Steals" : 3,
                    "Blocks": 1,
                    "Slam Dunks": 1

                },
                "Reggie Evans":{
                    "Number": 30,
                    "Shoe": 14,
                    "Points": 12,
                    "Rebounds": 12,
                    "Assists": 12,
                    "Steals" : 12,
                    "Blocks": 12,
                    "Slam Dunks": 7

                },
                "Brook Lopez": {
                    "Number": 11,
                    "Shoe": 17,
                    "Points": 17,
                    "Rebounds": 19,
                    "Assists": 10,
                    "Steals" : 3,
                    "Blocks": 1,
                    "Slam Dunks": 15

                },
                "Mason Plumlee":{
                    "Number": 1,
                    "Shoe": 19,
                    "Points": 26,
                    "Rebounds": 12,
                    "Assists": 6,
                    "Steals" : 3,
                    "Blocks": 8,
                    "Slam Dunks": 5

                },
                "Jason Terry":{
                    "Number": 31,
                    "Shoe": 15,
                    "Points": 19,
                    "Rebounds": 2,
                    "Assists": 2,
                    "Steals" : 4,
                    "Blocks": 11,
                    "Slam Dunks": 1

                },
            },
            AwayTeam: {
                teamName: "Charlotte Hornets",
                colors: ["Turquoise","Purple"],
                players: {
                    "Jeff Adrien": {
                        "Number": 4,
                        "Shoe": 18,
                        "Points": 10,
                        "Rebounds": 1,
                        "Assists": 1,
                        "Steals" : 2,
                        "Blocks": 7,
                        "Slam Dunks": 2

                    },
                    "Bismak Biyombo":{
                        "Number": 0,
                        "Shoe": 16,
                        "Points": 12,
                        "Rebounds": 4,
                        "Assists": 7,
                        "Steals" : 7,
                        "Blocks": 15,
                        "Slam Dunks": 10

                    },
                    "DeSagna Diop":{
                        "Number": 2,
                        "Shoe": 14,
                        "Points": 24,
                        "Rebounds": 12,
                        "Assists": 12,
                        "Steals" : 4,
                        "Blocks": 5,
                        "Slam Dunks": 5

                    },
                    "Ben Gordon": {
                        "Number": 8,
                        "Shoe": 15,
                        "Points": 33,
                        "Rebounds": 3,
                        "Assists": 2,
                        "Steals" : 1,
                        "Blocks": 1,
                        "Slam Dunks": 0

                    },
                    "Brendan Haywood": {
                        "Number": 33,
                        "Shoe": 15,
                        "Points": 6,
                        "Rebounds": 12,
                        "Assists": 12,
                        "Steals" : 22,
                        "Blocks": 5,
                        "Slam Dunks": 12


                    },
                }

            }
        }
    }
    
}

// Step 2 Get name of home team
function homeTeamName(){
    let game = gameObject();
    return game.homeTeam.teamName;
}
console.log(homeTeamName());

//Step. 3 numpointsScored (playedName)

function numpointsScored(playedName){
    let game = gameObject();

    for(let team in game){
        if(game[team].players[playedName]){
            return game[team].players[playedName].Points
        }
    }
}
console.log(numpointsScored('Ben Gordons'))

//Step. 4 shoeSize(playerName)

function shoeSize(playedName){
    let game = gameObject();

    for(let team in game){
        if (game[team].players[playedName]) {
            return game[team].players[playedName].Shoe
        }
    }
}
console.log(shoeSize('Brook Lopez'))

//Step. 5 teamsColors(teamname)

function teamsColors(teamName){
    let game = gameObject();

    for(let team in game){
        if(game[team].teamName === teamName){
            return game[team].colors;
        }
    }
}
console.log(teamsColors('Charlotte Hornets'))

//Step.6 teamName()

function teamName(){
    let game = gameObject();
    return[game.homeTeam.teamName, game.AwayTeam.teamName]
}
console.log(teamName());

//Step. 7 playersNumbers(teamName)

function playersNumbers(teamName) {
    let game = gameObject();

    for(let team in game) {
        if(game[team].teamName === teamName){
            return Object.values(game[team].players).map(player => player.number)
        }
    }
}
console.log(playersNumbers('Brooklyn Nets'))

// Step. 8 PlayerStarts(playerName)

function PlayerStarts(playedName){
    let game = gameObject ()

    for(let team in game){
        if(game[team].players[playerName]){
            return game[team].players[playedName]
}
        }
            
}
console.log(PlayerStarts('Jason Terry'))

//Step. 9 biggestShoeSize ()

function biggestShoeSize(){
    let game = gameObject();

    let biggestShoeSize = 0
    let playerwithBiggestShoe = '';

    for(let team in game) {
        for (let player in game[team].players){
            if(game[team].players[player].Shoe > biggestShoeSize){
                biggestShoeSize = game[team].players[player].Shoe;
                playerwithBiggestShoe = player;
            }
        }
    }
    return playerwithBiggestShoe;
}
console.log(playerwithBiggestShoe());

//Step 10 mostPointsScored

function mostPointsScored() {
    let game = gameObject();
    let maxPoints = 0;
    let bestPlayer = '';

    for (let team in game){
        for(let player in game[team].players){
            if (game[team].players[player].points > maxPoints){
                maxPoints = game[team].players[player].points;
                bestPlayer = player;
            }
        }
    }
    return bestPlayer;
}
console.log('player with most points', mostPointsScored());

//step 11 winning team 

function winningTeam() {
    let game = gameObject()
    let teamPoints = {};
    for(let team in game){
        let totalPoints = 0;
        for (let player in game[team].players){
            totalPoints += game[team].players[player].points;
        }
        teamPoints[game[team].teamName] = totalPoints[a] > teamPoints[b] ? a:b
    }
}