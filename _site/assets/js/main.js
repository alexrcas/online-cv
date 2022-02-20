jQuery(document).ready(function($) {

    $('.level-bar-inner').css('width', '0');
    $('.cap').css('opacity', 0.7);

    $('.glow').on('click', (e) => {
        $('.banner').toggleClass('fade');
        setTimeout(() => {
            $('.banner').toggleClass('fade');
        }, 2500)
    })

    $('.more-button').on('click', (e) => {
        $('.more-courses').removeClass('hidden');
        $('.more-button').toggleClass('hidden')
        $('.more-courses').toggleClass('fade');
    })

    $('.fs-question').on('click', (e) => {
        $('#fs-banner').removeClass('hidden');
        $('#fs-banner').toggleClass('fade');
    })
   

});