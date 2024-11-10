$(document).ready(function() {
    const apiUrl = 'https://api.quotable.io/random';

    function getQuote() {
        $.getJSON(apiUrl, function(data) {
            const quote = data.content;
            const author = data.author;

            $('#text').text(quote);
            $('#author').text(`- ${author}`);
            $('#tweet-quote').attr('href', `https://twitter.com/intent/tweet?text="${encodeURIComponent(quote)}" ${encodeURIComponent(author)}`);
        });
    }

    $('#new-quote').on('click', getQuote);

    // Fetch a quote on initial load
    getQuote();
});