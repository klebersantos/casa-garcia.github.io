AOS.init({
    disable: window.innerWidth < 1024
});

function openNave() {
    document.getElementById("mySidenav").style.width = "100%";
}
function closeNave() {
    document.getElementById("mySidenav").style.width = "0";
}
//
// $('.sidenav a').click(function(){
//     $('#mySidenav').css("width", "0");
// });


jQuery(document).ready(function() {

    //VIDEO MODAL
    $(".js-video-button").click(function(e){
        e.preventDefault();
    });

    $(".js-video-button").modalVideo();


    $('.launch-modal').on('click', function(e){
        e.preventDefault();
        $( '#' + $(this).data('modal-id') ).modal();
    });


    $('.close').click(function(){
        $('.bt-mod iframe').attr('src', $('.bt-mod iframe').attr('src'));
    });

    $('.fade ').click(function(){
        $('.bt-mod iframe').attr('src', $('.bt-mod iframe').attr('src'));
    });

    $('#celular').mask('(99) 99999-9999');
    
    $('#telefone').mask('(99) 9999-9999');


    $(".mob_header span").click(function(event) {
        if (!$(this).parent().hasClass('dropdown'))
            $(".in").collapse('hide');
    });





    function fecharMenu(){
        $("#menufull").removeClass("aberta");
    }

    function fecharPesquisa(){
        $("#searchfull").removeClass("aberta");
    }

    $(".fechar_menu").click(function() {
        fecharMenu();
    });

    $(".botao_menu").click(function() {
        if($("#menufull").hasClass("aberta")) {
            fecharMenu();
            $("#corpo").removeClass("fix");
        }
        else {
            $("#menufull").addClass("aberta");
            $("#corpo").addClass("fix");
        }
    });

    $(".fechar_section").click(function(){
        fecharMenu();
        fecharPesquisa();
        $("#corpo").removeClass("fix");
    });


    $(".botao_pesquisa").click(function() {
        if($("#searchfull").hasClass("aberta")) {
            fecharPesquisa();
            $("#corpo").removeClass("fix");
        }
        else {
            $("#searchfull").addClass("aberta");
            $("#corpo").addClass("fix");
        }
    });


    document.querySelector('body').addEventListener('keydown', function(event) {

        var tecla = event.keyCode;

        if(tecla == 27) {
            fecharMenu();
            fecharPesquisa();
            $(".pesquisa_full").removeClass("on");
            $("#corpo").removeClass("fix");

            $(".box_promocao").css({display: "none"});
            $(".infos").css({display: "block"});

            $("#mascara_transparencia").css({display: "none"});
        }

    });



    $(function(){
        // Initialize the gallery
        $('.thumbs a').touchTouch();

    });


    $(".abrir_pesquisa").click(function() {
        $(".pesquisa_full").addClass("on");
        document.getElementById("label_for").click();
    });

    $(".fechar_pesquisa").click(function(){
        $(".pesquisa_full").removeClass("on");
    });


    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();

    jQuery(window).scroll(function (event) {
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = jQuery(this).scrollTop();

        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            jQuery('header').removeClass('fixa').addClass('normal');
        } else {
            // Scroll Up
            if (st + jQuery(window).height() < jQuery(document).height()) {
                jQuery('header').removeClass('normal').addClass('fixa');
            }
        }

        var top_offset = $(window).scrollTop();
        if (top_offset == 0) {
            $('header').removeClass('fixa fade-in');
        } else {
            $('header').addClass('menu-fixo');
        }

        lastScrollTop = st;
    }
});

$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1500);
            return false;
        }
    }
});

$('.owl-carousel-banner').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    smartSpeed: 900,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],

    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});


$('.owl-carousel-banner-mobile').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    smartSpeed: 900,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],

    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});


$('.owl-carousel-vantagens').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    smartSpeed: 900,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],

    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 3
        }
    }
});

$('.owl-galeria-full').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        },
        1400: {
            items: 5
        }
    }
});

$('.owl-depoimentos').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        }
    }
});

$('.owl-clientes').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
});
