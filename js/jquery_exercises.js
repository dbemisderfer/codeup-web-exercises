"use strict";

$(document).ready(function() {

    // ********* JQUERY MOUSE EVENTS EXERCISE *********

    $('h1').click(function() {
        $(this).css('background-color', '#F68');
    });

    $('p').dblclick(function() {
        $(this).css('font-size', '18px');
    })

    $('li').hover(
        function() {
            $(this).css('color', '#f00');
        },
        function() {
            $(this).css('color', '#000');
        }
        )
    // ********* JQUERY MOUSE EVENTS EXERCISE *********















    // ********* JQUERY SELECTOR EXERCISE *********
    // alert('The DOM has finished loading!');

    // var contents = $('#container').html();
    // alert(contents);

    // $('.codeup').css('border', '1px solid #F00');

    // $('li').css('font-size', '20px');

    // $('h1').css('background-color', '#FF0');
    // $('p').css('background-color', '#FF0');
    // $('li').css('background-color', '#FF0');

    // var contents = $('h1').html();
    // alert(contents);

    // $('h1, p, li').css('background-color', "#FF0");

    // ********* JQUERY SELECTOR EXERCISE *********

});