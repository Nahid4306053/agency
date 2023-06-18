$(document).ready(function () {
  new Isotope('.portfolio-container');

  function drop() {
    $("#drop_down").hover(function () {
      $('#drop_down #Dropdown').css({
        'display': 'block'
      })
    }, function () {
      $('#drop_down #Dropdown').css({
        'display': 'none'
      })
    });
  }

  drop();

  var width = $(window).outerWidth(true);





  $('#open_bar').click(function () {

    var data = $('#manu_bar').clone();
    $('#maus_mob').prepend(data);
    $('#maus_mob .manu_bar').addClass('d-block');
    $('#maus_mob .manu_bar').removeClass('d-none');
    
    $('#maus_mob .manu_bar #drop_down .manu_item ').html('Dropdown <i class="fa-solid fa-angle-right"></i>');
    $('#maus_mob .manu_bar').prepend('<i id="close_bt" class="fa-solid fa-rectangle-xmark close_btn"></i>');
    $('#mobile_manu_area').css({
      'width': ' 100vw'
    });
    $('#maus_mob').animate({
      'width': 300
    }, 500)
    $('#close_bt').click(function () {
      $('#maus_mob .manu_bar').remove();
      $('#mobile_manu_area').css({
        'width': ' 0vw'
      });
      $('#maus_mob').animate({
        'width': 0
      }, 500)
    });
  });

  const slider = tns({
    container: '.slide_section',
    loop: true,
    items: 1,
    slideBy: 'page',
    nav: true,
    autoplay: true,
    speed: 200,
    autoplayButtonOutput: false,
    mouseDrag: true,
    controlsContainer: "#slide_con",
    autoplayHoverPause: true
  });

  $("#tns1-ow").addClass('col-10');




  const slide = tns({
    container: '#cars_sec',
    loop: true,
    items: 3,
    slideBy: 'page',
    nav: true,
    autoplay: true,
    speed: 200,
    autoplayButtonOutput: false,
    mouseDrag: true,
    lazyload: true,
    autoplayHoverPause: true,
    controls: false,
    navPosition: 'bottom',
    responsive: {
      300: {
        edgePadding: 5,
        gutter: 20,
        items: 1
      },
      740: {
        gutter: 30,
        items: 1
      },
      1024: {
        items: 3
      }
    }
  });

const bjiol = tns({
    container: '.blog_slide',
    loop: true,
    items: 3,
    slideBy: 'page',
    nav: true,
    autoplay: true,
    speed: 200,
    autoplayButtonOutput: false,
    mouseDrag: true,
    controls: true,
    navPosition: 'bottom',
    controlsContainer: "#blog_slide_con",
    autoplayHoverPause: true,
    responsive: {
      300: {
        edgePadding: 5,
        gutter: 20,
        items: 1
      },
      740: {
        gutter: 30,
        items: 2
      },
      1024: {
        items: 3
      }
    }
  });
  const team_slide = tns({
    container: '.team_slide',
    loop: true,
    items: 3,
    slideBy: 'page',
    nav: true,
    autoplay: true,
    speed: 200,
    autoplayButtonOutput: false,
    mouseDrag: true,
    controls: true,
    navPosition: 'bottom',
    controlsContainer: "#team_slide_con",
    autoplayHoverPause: true,
    responsive: {
      300: {
        edgePadding: 5,
        gutter: 20,
        items: 1
      },
      740: {
        gutter: 30,
        items: 2
      },
      1024: {
        items: 3
      }
    }
  });


  $('#change_prize').click(function () {
    if ($(this).hasClass('cheak')) {
      $('#change_prize').removeClass('cheak');
      $('#prize_basic').text('$19.99');
      $('#prize_busness').text('$49.99');
      $('#prize_plut').text('$99.99');
      $(this).css({'left':'0%'});
    } else {
      $('#change_prize').addClass('cheak');
      $('#prize_basic').text('$100.99');
      $('#prize_busness').text('$290.99');
      $('#prize_plut').text('$450.99');
      $(this).css({'left':'50%'});
    }
  });

  
  var typed3 = new Typed('#typer', {
    strings: ['helow' , 'hello@user'],
    typeSpeed: 500,
    backSpeed: 0,
    smartBackspace: true, // this is a default
    loop: true
  });
});