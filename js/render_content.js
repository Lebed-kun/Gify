// Rendering one gif image
const renderGif = gifUrl => {
  const image = document.createElement('img');
  image.src = gifUrl;
  $('.container').append(image);
};

// Rendering whole block of gifs
const renderContainer = (searchQuery, gifCount) => {
  for (let i = 0; i < gifCount; i++) {
    getGifUrl(searchQuery);
  }
}

// Retrieving page elements
