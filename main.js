$('header .logo').hover(
    function(){$('header .one span').removeClass('out').addClass('in')},
        function(){$('header .one span').removeClass('in').addClass('out')}
        )
    
    
    history.scrollRestoration = "auto"
    
    // 스크롤 이동
    var btn_all = $('header .header_right p');
    var btn_sec2 = $('.btn_sec2');
    var btn_sec3 = $('.btn_sec3');
    var btn_sec4 = $('.btn_sec4');
    var btn_sec5 = $('.btn_sec5');
    var btn_sec6 = $('.btn_sec6');
    var btn_scroll = $('.scrolldown-btn');
    
    
    var headerHeight = document.querySelector("header").offsetHeight;
    
    var move_sec2 = document.querySelector(".section_2").offsetTop;
    var move_sec3 = document.querySelector(".section_3").offsetTop;
    var move_sec4 = document.querySelector(".section_4").offsetTop;
    var move_sec5 = document.querySelector(".section_5").offsetTop;
    var move_sec6 = document.querySelector(".section_6").offsetTop;
    
    
    var checked = $('#overlay-input').is(':checked') == true;
    
    
    btn_scroll.click(function() {window.scrollTo({top:move_sec2 - headerHeight, behavior:'smooth'})});
    btn_sec2.click(function() {window.scrollTo({top:move_sec2 - headerHeight, behavior:'smooth'}); });
    btn_sec3.click(function() {window.scrollTo({top:move_sec3 - headerHeight, behavior:'smooth'})});
    btn_sec4.click(function() {window.scrollTo({top:move_sec4 - headerHeight, behavior:'smooth'})});
    btn_sec5.click(function() {window.scrollTo({top:move_sec5 - headerHeight, behavior:'smooth'})});
    btn_sec6.click(function() {window.scrollTo({top:move_sec6, behavior:'smooth'})});
    
    
    
    //배경 밝아지기
    $(function () {
    
    
    var fixScroll = 0;
    
    var section2 = $('.section_2');
    
    var scroll2 = $(section2).offset().top;
    
    
    $(window).scroll(function (event) {
        var scroll = $(this).scrollTop();
        if (scroll > scroll2 - 550) {
            //스크롤 높이 설정
            $("#wrap").addClass("bg-active");
            $('.scrolldown-btn svg').css('opacity','0');
            $('header').addClass('active');
        }
        else {
            $("#wrap").removeClass("bg-active");
            $('.scrolldown-btn svg').css('opacity','1')
            $('header').removeClass('active');
        }
    
        if(scroll < move_sec2 - headerHeight - 10){
            btn_all.removeClass("btn-active");
        }else if(move_sec2 - headerHeight - 10 < scroll && scroll < move_sec3 - headerHeight - 10) {
            btn_all.removeClass("btn-active");
            btn_sec2.addClass("btn-active");
    
        }else if(move_sec3 - headerHeight - 10 < scroll && scroll < move_sec4 - headerHeight - 10) {
            btn_all.removeClass("btn-active");
            btn_sec3.addClass("btn-active");
        }else if(move_sec4 - headerHeight - 10 < scroll && scroll < move_sec5 - headerHeight - 10) {
            btn_all.removeClass("btn-active");
            btn_sec4.addClass("btn-active");
        }else if(move_sec5 - headerHeight - 10 < scroll && scroll < move_sec6 - headerHeight - 10) {
            btn_all.removeClass("btn-active");
            btn_sec5.addClass("btn-active");
            $('header').removeClass('active');
        }else if(move_sec6 - headerHeight - 10 < scroll ){
            btn_all.removeClass("btn-active");
            btn_sec6.addClass("btn-active");
            $('header').removeClass('active');
        }
    
    
       
        
        if (scroll > scroll2 - 300) {
            //스크롤 높이 설정
    
            $(".section_2 .main #primary li a").addClass("active");
    
        }
        else {
            $(".section_2 .main #primary li a").removeClass("active");
        }
        fixScroll = scroll;
        if ($('.section_3 .main .product.prd1 .prd1_img .info_cover .name').hasClass('aos-animate') === true) {
            setTimeout(function () {
                $('.section_3 .main .product.prd1 .prd1_img .info_cover .name').addClass('active')
            }, 800);
        } else {
            $('.section_3 .main .product.prd1 .prd1_img .info_cover .name').removeClass('active')
        };
    
        if ($('.section_3 .main .product.prd2 .info_cover .name').hasClass('aos-animate') === true) {
            setTimeout(function () {
                $('.section_3 .main .product.prd2 .info_cover .name').addClass('active')
            }, 800);
        } else {
            $('.section_3 .main .product.prd2 .info_cover .name').removeClass('active')
        };
    
        if ($('.section_3 .main .product.prd3 .prd3_img .info_cover .name').hasClass('aos-animate') === true) {
            setTimeout(function () {
                $('.section_3 .main .product.prd3 .prd3_img .info_cover .name').addClass('active')
            }, 800);
        } else {
            $('.section_3 .main .product.prd3 .prd3_img .info_cover .name').removeClass('active')
        };
    
    });
    
    $(document).ready(function () {
        var scroll = $(this).scrollTop();
        if (scroll > scroll2 - 550) {
            //스크롤 높이 설정
            $("#wrap").addClass("bg-active");
            $('header').addClass('active');
            $('.scrolldown-btn svg').css('opacity','0')
        }
        else {
            $("#wrap").removeClass("bg-active");
            $('header').removeClass('active');
            $('.scrolldown-btn svg').css('opacity','1')
        }
        if (scroll > scroll2 - 300) {
            //스크롤 높이 설정
            $(".section_2 .main #primary li a").addClass("active");
        }
        else {
            $(".section_2 .main #primary li a").removeClass("active");
        }
        fixScroll = scroll;
        if(scroll < move_sec2 - headerHeight - 10){
            btn_all.removeClass("btn-active");
        }else if(move_sec2 - headerHeight - 10 < scroll && scroll < move_sec3 - headerHeight - 10) {
            btn_all.removeClass("btn-active");
            btn_sec2.addClass("btn-active");
            console.log('aaa')
        }else if(move_sec3 - headerHeight - 10 < scroll && scroll < move_sec4 - headerHeight - 10) {
            btn_all.removeClass("btn-active");
            btn_sec3.addClass("btn-active");
        }else if(move_sec4 - headerHeight - 10 < scroll && scroll < move_sec5 - headerHeight - 10) {
            btn_all.removeClass("btn-active");
            btn_sec4.addClass("btn-active");
        }else if(move_sec5 - headerHeight - 10 < scroll && scroll < move_sec6 - headerHeight - 10) {
            btn_all.removeClass("btn-active");
            btn_sec5.addClass("btn-active");
            $('header').removeClass('active');
        }else if(move_sec6 - headerHeight - 10 < scroll ){
            btn_all.removeClass("btn-active");
            btn_sec6.addClass("btn-active");
            $('header').removeClass('active');
        }
    })
    
    });
    
    
    // var bolt = gsap.utils.toArray('.product');
    // gsap.to(bolt,{
    //     scrollTrigger: {
    //         trigger: '.section_3',
    //         start: 'top 0%',
    //         scrub: 1
    //     },
    //     yPercent: 3,
    //     ease: 'none'
    // });
    
    
    
    
    var swiper = new Swiper(".swiper_media", {
    slidesPerView:1.6,
    spaceBetween: 0,
    loop: true,
    speed: 1000,
    mousewheel: true,   
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //     type: "progressbar",
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        },
        keyboard: {
        enabled: true,
        },
        breakpoints: {
            
            480: {
              slidesPerView: 2,  //브라우저가 768보다 클 때
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: "auto",
              spaceBetween: 30,
            },
          },
    });
    
    
    
    window.addEventListener('scroll', () => {
    if ($('.section_5 .cover').hasClass('aos-animate') === true) {
        $('.section_5').css('border-radius', '50px 50px 0 0')
    } else {
        $('.section_5').css('border-radius', '0')
    }
    
    });
    
    
    
    
    