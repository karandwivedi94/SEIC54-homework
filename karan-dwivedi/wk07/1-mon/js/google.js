const fetchFact = function () {
    const xhr = new XMLHttpRequest(); // similar to HTTParty
    const input = document.getElementById('input').value;

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) {
            return; // The data is not ready yet.
        }


        const data = JSON.parse(xhr.responseText);
        console.log(data)

        const p = document.createElement('p');
        const x = input;
        p.innerHTML = data.items[1].volumeInfo.publisher //change this to input?
        document.body.appendChild(p);
    };
    
    xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=title/'+input);
    xhr.send(); // asynchronous (runs in the background)
    
};

document.getElementById('fetch').addEventListener('click', fetchFact); // First fact free