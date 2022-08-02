const displayStandings = function(year){
    $.ajax('https://api-football-standings.azharimm.site/leagues/eng.1/standings?season='+year+'&sort=desc').done(function(data){
    
        for(i=0;i<data.data.standings.length;i++){
            let allTeams = data.data.standings[i].team.name
            let allPoints = data.data.standings[i].stats[6].value
            let allGoalsFor = data.data.standings[i].stats[4].value
            let allGoalsAgainst = data.data.standings[i].stats[5].value

            $('#premtable').after(`<table> <th> ${ allTeams} </th> <th> ${allPoints}</th> <th> ${allGoalsFor} </th> <th> ${allGoalsAgainst}</th> </table> `)

    //    $('#submit').after(`<table> <th> ${ allTeams} </th> <th> ${allPoints}</th> <th> ${allGoalsFor} </th> <th> ${allGoalsAgainst}</th> </table> `) // NOT NEEDED
}});
};

$('#search').on('submit', function (event) {
    event.preventDefault();

    const title = $('#input').val();
    displayStandings(title);
});

$('#submit').on('click', displayStandings);


// sort function in built, it would expect a call back 
//two parameters (a,b) they will return a number 