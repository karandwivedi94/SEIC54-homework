
const findScientists = function (name) {
    $.ajax('http://api.open-notify.org/astros.json').done(function (data) {

        for(i=0;i<data.people.length;i++){
            let allScientists = data.people[i].name
            let allSpaceCrafts = data.people[i].craft
        
       $('#get').after(`<p> ${ allScientists } is in space on the ${ allSpaceCrafts }! <img id = "pic1" src="https://thumbs.gfycat.com/GenuineOddballCleanerwrasse-max-1mb.gif" alt=""> </p>`)
    }});
};

$('#get').on('click', findScientists);
// findScientists()

