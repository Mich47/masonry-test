// import Masonry from 'masonry-layout';

window.onload = () => {
  const grid = document.querySelector('.grid');

  const masonry = new Masonry(grid, {
    itemSelector: '.grid-item',
    gutter: 20,
  });
};

// $('.grid').masonry({
//   itemSelector: '.grid-item',
//   columnWidth: 160,
//   gutter: 50,
// });
