/*global console, $*/
$(document).ready(function () {
    'use strict';
    $('header h1').typed({
        strings: ['El-<span class="main-color">Maghrabi </span>', 'Full<span class="main-color">-Stack</span>', 'El-<span class="main-color">Maghrabi </span>', 'Create Sites  <span class="main-color">And</span> Develop It', 'El-<span class="main-color">Maghrabi </span>'],
        typeSpeed: 80
    });
    $(window).scroll(function () {
        var navbar = window.$('.navbar');
        if ($(window).scrollTop() >= navbar.height()) {
            navbar.addClass('scrolling');
        } else {
            navbar.removeClass('scrolling');
        }
    });
    $('.feedback ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('.feedback .feeds > div').hide();
        $('.' + $(this).data('class')).fadeIn(1000);
    });

    var

        p_ass = $('.contact-me form input[type="password"]'),
        u_ser = $('.contact-me form input[type="text"]'),
        m_sg = $('.contact-me form textarea');

    $(p_ass).on('keyup', function () {
        if ($(this).val().length < 15) {
            $('.contact-me div.first-one').text('You Have To Type A Strong Password').fadeIn(1000);
        } else {
            $('.contact-me div.first-one').text('Correct !').css('backgroundColor', '#080').fadeOut(2500);
        }
    });

    $(u_ser).on('keyup', function () {
        if ($(this).val().length < 12) {
            $('.contact-me div.second-one').text('Your Username Must Be More Than 12 Letters').fadeIn(1000);
        } else {
            $('.contact-me div.second-one').text('Correct !').css('backgroundColor', '#080').fadeOut(2500);
        }
    });

    $(m_sg).on('keyup', function () {
        if ($(this).val().length < 20) {
            $('.contact-me div.third-one').text('Message Must Be More Than 20 Letters').fadeIn(1000);
        } else {
            $('.contact-me div.third-one').text('Completed !!').css('backgroundColor', '#080').fadeOut(2500);
        }
    });

    function clockSection() {
        var
            time = new Date(),
            hours = (time.getHours() % 12).toString(),
            minutes = time.getMinutes().toString(),
            seconds = time.getSeconds().toString(),
            timeString,
            h = document.querySelector('.clockString');

        if (hours.length < 2) {
            hours = '0' + hours;
        }

        if (minutes.length < 2) {
            minutes = '0' + minutes;
        }

        if (seconds.length < 2) {
            seconds = '0' + seconds;
        }
        timeString = hours + ':' + '<span class="main-color">' + minutes + '</span>' + ':' + seconds;

        h.innerHTML = timeString;
    }
    clockSection();
    setInterval(clockSection, 1000);
});
