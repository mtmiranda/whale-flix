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
  var $videoSrc;
  $('.video-btn').click(function () {
    $videoSrc = $(this).data('src');
  });
  console.log($videoSrc);
  $('#myModal').on('shown.bs.modal', function (e) {
    $('#video').attr(
      'src',
      $videoSrc + '?autoplay=1&amp;modestbranding=1&amp;showinfo=0'
    );
  });
  // stop playing the youtube video when I close the modal
  $('#myModal').on('hide.bs.modal', function (e) {
    $('#video').attr('src', $videoSrc);
  });
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

  const chk = document.getElementById('chk');

  chk.addEventListener('change', (event) => {
    if (document.body.classList.contains('dark')) {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      $('.logo').attr('src', './assets/whaleflix-logo.png');
    } else {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      $('.logo').attr('src', './assets/whaleflix-logowhite.png');
    }
  });

  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    $('.logo').attr('src', './assets/whaleflix-logowhite.png');
  }
});

$(document).ready(function () {
  $('.hamburguer_menu').on('click', function () {
    $('#nav').toggleClass('menu_show');
    $('i', this).toggleClass('fas fa-bars fas fa-times');
  });
});
