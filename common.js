$(function(){
    AOS.init()
    $('.quick_1').on('mouseover', function(){
        $(this).attr("src", $(this).attr("src").replace("Before","After"));
    })
    $('.quick_1').on('mouseout', function(){
        $(this).attr("src", $(this).attr("src").replace("After","Before"));
    })
    
    $('.gnb>ul>li').mouseleave(function(){
        $('.sub_menu>li,  gnb::before').hide()
    })
    $('.gnb>ul>li').mouseenter(function(){
        $('.sub_menu>li, gnb::before').show()
    })
    // $('.ham').on('click', function(){
    //     $('.gnb').toggleClass('on')
    // })
    $('.ham').click(function(){
        $(this).toggleClass('active')
        $('.gnb').toggleClass('active, on')
        $('.person_mo').toggleClass('active, on')
    })
    $('.gnb a, section').click(function(){
        $('.gnb, .ham').removeClass('active, on')
        $('.person_mo, .ham').removeClass('active, on')
    })
    
})



// 스위퍼 js
// play 영역
$(function(){
    var swiper = new Swiper(".swiper2", {
        slidesPerView: 5,
        spaceBetween: 30,
        
        breakpoints: {
            640: {
            slidesPerView: 2,
            spaceBetween: 20,
            },
            768: {
            slidesPerView: 2,
            spaceBetween: 40,
            },
            1024: {
            slidesPerView: 3,
            spaceBetween: 50,
            },
        }
    })
    var swiper = new Swiper(".swiper1", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        },
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        }
    });
    
})

$(window).scroll(function () {
    let secTop = $('.farm').offset().top
    let scrollTop = $(window).scrollTop();
    console.log(secTop)
    console.log(scrollTop)
    if (scrollTop < secTop) {
        $('.guide').fadeIn()
    } else {
        $('.guide').fadeOut()
    }
})