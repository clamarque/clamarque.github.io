  /*-- Circle JavaScript
      ================================================== --*/
  (function ($) {

      $('input.round').wrap('<div class="round" />').each(function () {
          var $input = $(this);
          var $div = $input.parent();
          var min = $input.data('min');
          var max = $input.data('max');
          var ratio = ($input.val() - min) / (max - min);
          var color = $input.data('color') ? $input.data('color') : "rgba(33,33,33,0.6)";

          var $circle = $('<canvas width="150px" height="150px"/>');
          var $color = $('<canvas width="150px" height="150px"/>');
          $div.append($circle);
          $div.append($color);
          var ctx = $circle[0].getContext('2d');

          // On dessine le cercle blanc avec ombre porté
          ctx.beginPath();
          ctx.arc(75, 75, 50, 0, 2 * Math.PI);
          ctx.lineWidth = 3; //epaisseur
          ctx.strokeStyle = "rgba(225,255,255,0.3)"
          ctx.shadowOffsetX = 2;
          ctx.shadowBlur = 6;
          ctx.shadowColor = "rgba(0,0,0,0.1)";
          ctx.stroke();


          // On dessine le cercle de couleur
          var ctx = $color[0].getContext('2d');
          ctx.arc(75, 75, 50, -1 / 2 * Math.PI, ratio * 2 * Math.PI - 1 / 2 * Math.PI);
          ctx.lineWidth = 3;
          ctx.strokeStyle = color;
          ctx.stroke();




      })

  })(jQuery);

  /*-- Grid Portfolio JavaScript
    ================================================== --*/
  /*
  $('ul.nav-pills li a').click(function (e) {
      $('ul.nav-pills li.active').removeClass('active')
      $(this).parent('li').addClass('active')
  })

  $(window).load(function () {
      var $container = $('.grid-wrapper');
      $container.isotope({
          filter: '*',
          animationOptions: {
              duration: 750,
              easing: 'linear',
              queue: false
          }
      });

      $('.grid-controls li a').click(function () {
          $('.grid-controls .current').removeClass('current');
          $(this).addClass('current');

          var selector = $(this).attr('data-filter');
          $container.isotope({
              filter: selector,
              animationOptions: {
                  duration: 750,
                  easing: 'linear',
                  queue: false
              }
          });
          return false;
      });
  });
  */

  /*-- Scroll To JavaScript
    ================================================== --*/
  $(function () {
      $('a[href*=#]:not([href=#])').click(function () {
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              if (target.length) {
                  $('html,body').animate({
                      scrollTop: target.offset().top
                  }, 1000);
                  return false;
              }
          }
      });
  });
  /*-- Scroll CSS JavaScript
    ================================================== --*/
  $(document).ready(function () {
      $(window).scroll(function () {
          var y = $(window).scrollTop();

          if (y > 400) {
              $('.navbar').fadeIn(300);
       

              $(".navbar").css({
                  'background-color': '#305162'
              });
              $(".navbar-nav>li>a").click(function () {
                  $(".navbar-nav>li>a").each(function () {
                      $(this).removeClass('.nav__current');
                  });
                  $(this).addClass('.nav__current');
              });
              $('#navbar').animate({
                  'height': '60'
              }, {
                  duration: 200,
                  queue: false
              });
          } else {
              $('.navbar').fadeOut(300);

              $(".navbar").css({
                  'background-color': 'transparent',
                  'border-bottom': 'none'
              });
              $('#navbar').animate({
                  'height': '51'
              }, {
                  duration: 200,
                  queue: false
              });
          }
          /*
          if ($(window).width() > 767) {
                $('.scrollpoint.sp-effect3').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInDown');},{offset:'90%'});
              if ($(this).scrollTop() > 600) {
                  $('.scroll-up').fadeIn(300);   
              } else {
                  $('.scroll-up').fadeOut(300);
              }
          }
          if($(window).width() > 767) {
              
          }*/
          $('#result').html(y);
      });
  })


  /*-- Show Div JavaScript
     ================================================== --*/

  $(document).ready(function () {
      $("#skill-up").click(function () {
          $(".showSkill").hide("slow");
          $("#skill-up").hide();
          $("#skill-down").show();
      });
      $("#skill-down").click(function () {
          $(".showSkill").show("slow");
          $("#skill-down").hide();
          $("#skill-up").show();
      });
  });

  /*-- Show Div and scroll To position example JavaScript
     ================================================== --*/
  $(document).ready(function () {
      //par défaut on masque les réponses
      $(".k-page-faq__answer").hide();

      $(".k-page-faq__question").click(function () {
          hauteur = $(".k-page-faq__question").offset().top;
          if ($(this).next().is(":visible") == false) {
              // Masquage des réponses
              $(".k-page-faq__answer").slideUp();
              // Affichage de la réponse placée juste après dans le code HTML
              $(this).next().slideDown("slow");
              $('html,body').animate({
                  scrollTop: hauteur
              }, 1000);
          }
      });
  });

  (function ($) {

      $('#header__icon').click(function (e) {
          e.preventDefault();
          $('body').toggleClass('with--sidebar');
      });

      $('#site-cache').click(function (e) {
          $('body').removeClass('with--sidebar');
      })

  })(jQuery);


  /*-- ISOTOPE portfolio
     ================================================== --*/

  $( document ).ready(function() {
  /* activate jquery isotope */
  var $container = $('#posts').isotope({
    itemSelector : '.item',
    isFitWidth: true
  });

  $(window).smartresize(function(){
    $container.isotope({
      columnWidth: '.col-sm-3'
    });
  });
  
  $container.isotope({ filter: '*' });

    // filter items on button click
  $('#section-portfolio__items').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $container.isotope({ filter: filterValue });
    $('#section-portfolio__items').find('.current-filter').removeClass('current-filter');
    $( this ).addClass('current-filter');
  });
});