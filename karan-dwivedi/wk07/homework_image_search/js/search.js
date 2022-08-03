let page = 1

const searchFlickr = function (keywords){
    console.log('Searching for', keywords);
 // defined a function outside of document ready that we can call whenever we need it. 
// What does this above function mean?

// get the data
const flickrURL = 'https://api.flickr.com/services/rest';

// show the data
$.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: keywords,
    format: 'json',
    nojsoncallback: 1,
    per_page: 100,
    page: page
}).done(showImages).done(function(response){ //one function just shows images and one consoles logs the results
    console.log(response);
}); 
//curlies let you customize your request with certain paramaters
};


// new function to show images

const showImages = function (results){
    _(results.photos.photo).each(function(photo){
        const thumbnail = generateURL(photo);
        const $img = $('<img>', {src: thumbnail});
        $('#images').append($img);
    });
};

const generateURL = function (p){
    return [
        'http://farm',
        p.farm,
        '.static.flickr.com/',
        p.server,
        '/',
        p.id,
        '_',
        p.secret,
        '_t.jpg' // you can use another alphabet instead of q for figg sices
    ].join('');
};

$(document).ready(function(){
    $('#search').on('submit', function(event){
        event.preventDefault(); //prevents form from being submitted to server
        const searchTerms = $('#query').val();
        searchFlickr(searchTerms);
        $('#images').html('');
    });

    $(window).on('scroll', function(){
        // calculate the scroll bottom
        const scrollBottom = $(document).height() - $(window).height() - $(document).scrollTop();
        console.log(scrollBottom)
        if (scrollBottom < 600){
            const searchTerms = $('#query').val();
            searchFlickr(searchTerms);
            page++
        }
            // searchFlickr again for more photos

    });    
});

