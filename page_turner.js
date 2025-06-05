$(document).ready(function () {
  $('#flipbook').turn({
    width: 800,          // Each spread = 2 x 400px pages
    height: 600,
    autoCenter: true,
    display: 'double',   // ← Important!
    pageSpacing: 0,
    gradients: false,
    acceleration: false
  });

  $('#flipbook').click(function (e) {
    const offsetX = e.pageX - $(this).offset().left;
    const width = $(this).width();
    const currentPage = $(this).turn('page');
    const totalPages = $(this).turn('pages');

    if (offsetX > width / 2) {
      if (currentPage < totalPages) $(this).turn('next');
    } else {
      if (currentPage > 1) $(this).turn('previous');
    }
  });
});

