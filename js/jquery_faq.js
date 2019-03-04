$(document).ready(function() {
    "use strict";

    // function Car() {
    //     this.speed = 0;
    //     var self = this;
    //     setInterval( function() {
    //         self.speed++;
    //         document.getElementById("status").innerHTML = self.speed;
    //     }, 300);
    // }
    // Car();

    $('#newsletter-toggle').click(function() {
        $('#newsletter').hide();
    });

    setTimeout(function() {
        $('h2').fadeIn(3000);
    }, 8000);


    $('#registration').fadeIn(3000);

    $('#cross-state-parks').click(function() {
        $('#blue-ridge').slideToggle()
    });

    $('#pennsylvania').click(function() {
        $('#gettysburg').slideToggle()
    });

    $('#maryland').click(function() {
        $('#fort-mchenry').slideToggle()
    });

    // $('#national-parks-toggle').click(function() {
    //     $('#national-parks').slideToggle(4500);
    // });
    //
    // $('#state-parks-texas-toggle').click(function() {
    //     $('#state-parks-texas').fadeToggle(5500);
    // });

    $('#button1').click(function() {
        $("ul li:last-child").css('background', 'yellow');
        // $("li").last().css('background', 'yellow');
    });

    $('#cross-state-parks').click(function() {
        $('#cross-state-parks').first().css('font-weight', 'bold');
    });

    $('#pennsylvania').click(function() {
        $('#pennsylvania').first().css('font-weight', 'bold');
    });

    $('#maryland').click(function() {
        $('#maryland').first().css('font-weight', 'bold');
    });

    // $('#national-parks-heading').next().css('background-color', 'salmon');




});