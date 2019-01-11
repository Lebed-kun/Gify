// Full url setup to Giphy
const giphyUrl = 'https://api.giphy.com/v1/gifs/random?api_key='
const giphyApiKey = 'fIv36TmggPN3qpr2ibPrlnlefDfmzP2m';

// Getting gif by url
const getGifUrl = searchQuery => {
  const fullUrl = `${giphyUrl}${giphyApiKey}&tag=${searchQuery}&rating=R`;
  let gifSource;

  fetch(fullUrl).then(response => {
    return response.json();
  }, networkError => {
    console.log(networkError);
  }).then(jsonResponse => {
    gifSource = jsonResponse.data.image_url;
    renderGif(gifSource);
  });
};
