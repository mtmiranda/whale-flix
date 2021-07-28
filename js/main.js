$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

$(document).ready(function () {
  // Gets the video src from the data-src on each button

  var $videoSrc;
  $('.video-btn').click(function () {
    $videoSrc = $(this).data('src');
  });
  console.log($videoSrc);

  // when the modal is opened autoplay it
  $('#myModal').on('shown.bs.modal', function (e) {
    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    $('#video').attr(
      'src',
      $videoSrc + '?autoplay=1&amp;modestbranding=1&amp;showinfo=0'
    );
  });

  // stop playing the youtube video when I close the modal
  $('#myModal').on('hide.bs.modal', function (e) {
    // a poor man's stop video
    $('#video').attr('src', $videoSrc);
  });

  // document ready
});

$(document).ready(function () {
  function alignModal() {
    var modalDialog = $(this).find('.modal-dialog');

    // Applying the top margin on modal to align it vertically center
    modalDialog.css(
      'margin-top',
      Math.max(0, ($(window).height() - modalDialog.height()) / 2)
    );
  }
  // Align modal when it is displayed
  $('.modal').on('shown.bs.modal', alignModal);

  // Align modal when user resize the window
  $(window).on('resize', function () {
    $('.modal:visible').each(alignModal);
  });
});

$(document).ready(function () {
  $('.item_description').parent().prepend('<div class="item_overlay">');
});
