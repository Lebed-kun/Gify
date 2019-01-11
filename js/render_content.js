// Rendering one gif image
const renderGif = gifUrl => {
  if (gifUrl) {
    const image = document.createElement('img');
    image.src = gifUrl;
    $gifContainer.append(image);
  } else if (!$gifContainer.html()){
    const notFoundHeading = document.createElement('h1');
    notFoundHeading.innerHTML = NOT_FOUND_TEXT;
    $gifContainer.append(notFoundHeading);
  }
};

const render = () => {
  // Constants for rendering
  const MAX_GIF_COUNT = 12;
  const NOT_FOUND_TEXT = 'NO GIFS FOUND';

  // Retrieving page elements
  const $header = $('header');
  const $logo = $header.find('span');
  const $input = $('#query');
  const $button = $('#search');
  const $gifContainer = $('.container');

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

    if ($(window).width() > 720) {
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
      $input.hide();
      $logo.show();
    }, 300);
  });

  // Redering container when user types a query
  $button.on('click', () => {
    const searchQuery = $input.val().split(' ')[0];

    $gifContainer.empty();
    renderContainer(searchQuery, MAX_GIF_COUNT);
  });

  // Same as the previous one
  $(document).on('keypress', event => {
    if (event.key == "Enter" &&
      $input.is(':visible')) {
        $gifContainer.empty();
        renderContainer(searchQuery, MAX_GIF_COUNT);
      }
  });
};