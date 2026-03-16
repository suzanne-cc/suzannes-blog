$(document).ready(function () {
  $('#flipbook').turn({
    width: "45vw",
    height: "90vw",
    autoCenter: true,
    display: 'double',
    pageSpacing: 0,
    gradients: false,
    acceleration: false,
    duration: 400
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