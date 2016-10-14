//Init var
var apiDomain = 'https://api.github.com';
var username = 'clamarque';
var url = '/users/' + username + '/repos';
var typeSort = 'update';
var token = '1c6ce1a76cf195b536c6e0af14e8d71e6e804f7e';



//function init repository 
$(function () {
    $.ajax({
        url: apiDomain + url + '?sort='+ typeSort +'&client_secret='+ token,
        dataType: 'json',
        success: function (data, status, error) {
            console.log(apiDomain + url + '?sort='+ typeSort +'&client_secret='+ token);
            if (data.length > 0) {
                for (var i = 0; i < 6; i++) {
                    var repo = data[i];
                    //add repository
                    addRepos(repo);
                }
                var divs = $("#repos > div");
                for (var i = 0; i < divs.length; i += 3) {
                    divs.slice(i, i + 3).wrapAll("<div class='row'></div>");
                }
            }
        },
        error: function (data, status, error) {
            console.log('error', data, status, error);
        }
    }).then(function () {
        //add filter
        filterRepos();
    })
});

//create repository
function addRepos(repo) {
    var $container = $('<div>').addClass('col-md-4 col-sm-4 col-xs-12 worksItem item ' + repo.language);
    var $link = $('<a>').attr('href', repo.svn_url).appendTo($container);

    $.ajax({
        url: 'https://raw.githubusercontent.com/' + username + '/' + repo.name + '/gh-pages/img/logo.png',
        success: function (data, status, error) {
            $link.append('<p></p>');
            $link.append('<img src="https://raw.githubusercontent.com/' + username + '/' + repo.name + '/gh-pages/img/logo.png" />');
            $link.append('<p><i class="fa fa-star" aria-hidden="true"></i>' + repo.stargazers_count + '</p>');
            $link.append('<h5>' + repo.language + '</h5>');
            $link.append('<p>' + repo.description + '</p>');
            
            $container.append($link);
        },
        error: function (data, status, error) {
            $link.append('<h4>' + repo.name + '</h4>');
            $link.append('<p><i class="fa fa-star" aria-hidden="true"></i> ' + repo.stargazers_count + '</p>');
            $link.append('<h5>' + repo.language + '</h5>');
            $link.append('<p>' + repo.description + '</p>');

            $container.append($link);
        }
    })
    $container.appendTo('#repos');
}

// Init filter for repository
function filterRepos() {

    var $container1 = $('#repos').isotope({
        itemSelector: '.item',
        isFitWidth: true
    });

    $(window).smartresize(function () {
        $container1.isotope({
            columnWidth: '.col-sm-4'
        });
    });

    $container1.isotope({ filter: '*' });

    //filter items on button click 
    $('#section-portfolio__items').on('click', 'li', function () {
        var filterValue = $(this).attr('data-filter');
        $container1.isotope({ filter: filterValue });
        $('#section-portfolio__items').find('.current-filter').removeClass('current-filter');
        $(this).addClass('current-filter');
    });
}

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
