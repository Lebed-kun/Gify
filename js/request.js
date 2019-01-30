// Full url setup to Giphy
const giphyUrl = 'https://api.giphy.com/v1/gifs/random?api_key='
const giphyApiKey = 'fIv36TmggPN3qpr2ibPrlnlefDfmzP2m';

// Getting gif by url
const getGifUrl = (searchQuery, gifRating) => {
  const fullUrl = `${giphyUrl}${giphyApiKey}&tag=${searchQuery}&rating=${gifRating}`;
  let gifSource;
  let girSourceOriginal;

  fetch(fullUrl).then(response => {
    return response.json();
  }, networkError => {
    console.log(networkError);
  }).then(jsonResponse => {
    if (!jsonResponse)
      gifSource = '';
    else {
      gifSource = jsonResponse.data.images.preview_gif.url;
      gifSoucreOriginal = jsonResponse.data.image_original_url;
    }

    renderGif(gifSource, gifSoucreOriginal);
  });
};
