// Constants for rendering
const MAX_GIF_COUNT = 9;
const NOT_FOUND_TEXT = 'NO GIFS FOUND';

// Retrieving page elements
const $header = $('header');
const $logo = $header.find('span').first();
const $input = $('#query');
const $button = $('#search');
const $gifContainer = $('.container');

// incapsulating image
const incapsulateImage = (gifUrl, gifUrlOriginal) => {
  // creating gif preview tile
  const image = document.createElement('img');
  image.src = gifUrl;

  // create link to the original gif
  const linkOriginal = document.createElement('a');
  linkOriginal.href = gifUrlOriginal;

  // incapsulating gif tile into link
  linkOriginal.appendChild(image);

  // create container-tile
  const tile = document.createElement('div');
  tile.className = "container-tile";

  // incapsulating linked gif into tile
  tile.appendChild(linkOriginal);

  return tile;
}

// Rendering one gif image
const renderGif = (gifUrl, gifUrlOriginal) => {
  if (gifUrl) {
    const imageTile = incapsulateImage(gifUrl, gifUrlOriginal);
    $gifContainer.append(imageTile);
  } else if (!$gifContainer.html()) {
    const notFoundHeading = document.createElement('h1');
    notFoundHeading.innerHTML = NOT_FOUND_TEXT;
    $gifContainer.append(notFoundHeading);
  }
};

const render = () => {
  // Rendering whole block of gifs
  const renderContainer = (searchQuery, gifCount) => {
    for (let i = 0; i < gifCount; i++) {
      getGifUrl(searchQuery);

      const heading = $gifContainer.find('h1');
      if (heading && heading.text() == NOT_FOUND_TEXT) {
        break;
      }
    }
  }

  /* Handling events */
  // Showing up search query field and hiding logo
  $header.on('click', () => {
    $input.show();

    if ($(window).width() > 720 &&
    window.innerWidth >= window.innerHeight) {
      $input.animate({
        width: '85%'
      }, 300);
    } else {
      $input.animate({
        width: '78%'
      }, 300);
    }

    $logo.hide();
  });

  // Hiding search query field and showing up logo
  $header.on('mouseleave', () => {
    $input.animate({
      width: '0'
    }, 300);

    setTimeout(() => {
      $input.val('');
      $input.hide();
      $logo.show();
    }, 300);
  });

  // Redering container when user types a query
  $button.on('click', () => {
    if ($input.is(':visible')) {
      const searchQuery = $input.val().split(' ')[0];

      $gifContainer.empty();
      renderContainer(searchQuery, MAX_GIF_COUNT);
    }
  });

  // Same as the previous one
  $(document).on('keypress', event => {
    if (event.key == "Enter" &&
      $input.is(':visible')) {
        $gifContainer.empty();
        const searchQuery = $input.val().split(' ')[0];
        renderContainer(searchQuery, MAX_GIF_COUNT);
      }
  });

  // Loading gifs when page is ready
  const initializeGifs = () => {
    renderContainer('random', MAX_GIF_COUNT);
  };
  initializeGifs();
};
