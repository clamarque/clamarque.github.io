 $(document).ready(function () {

             var active = false;

             $('.work').click(function (e) {
                 e.preventDefault();
                 //window.location.hash = $(this).attr('id');

                 var work = $(this);

                 if (work.hasClass('active')) {
                     return true;
                 }

                 var detail = work.parent().nextAll('.row-detail:first');
                 var work_detail = $('.work_detail', work).clone();

                 var showElement = function () {
                     detail.append(work_detail);
                     work_detail.slideDown();

                     //animation
                     for (var i = 1; i <= 4; i++) {
                         $('.stagger' + i, work_detail).css({
                             opacity: 0,
                             marginLeft: -20
                         }).delay(300 + 200 * i).animate({
                             opacity: 1,
                             marginLeft: 0
                         });

                         active = work_detail;
                     }
                 }
                 var hideActive = function () {

                     var el = active;
                     el.slideUp(500, function () {
                         el.remove();
                     });
                 }



                 //Traitement
                 $('.work').removeClass('active');
                 work.addClass('active');


                 if (active) {
                     hideActive();
                 }
                 showElement();

             });
 });