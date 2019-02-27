$(document).ready(function() {
    "use strict";

    // ********* JQUERY KEYBOARD EVENTS EXERCISE *********



    // ********* JQUERY KEYBOARD EVENTS EXERCISE *********







    // ********* JQUERY MOUSE EVENTS EXERCISE *********

    $('h1').click(function() {
        $(this).css('background-color', '#F68');
    });

    // $('h1').off('click'); // ^^^^^^ Turns off click function!!!! ^^^^^^

    $('p').dblclick(function() {
        $(this).css('font-size', '18px');
    });

    $('li').hover(
        function() {
            $(this).css('color', '#f00');
        },
        function() {
            $(this).css('color', '#000');
        }
        );

    // ********** Justin's TIPS **********
    // $('li').click(function(e) {
    //     // $(this).css('background','yellow'); // use to target one individual 'li' element (rather than all 'li' elements)
    //     // $(e.target).css('background','yellow'); // 'e.target' is same as 'this'
    // })
    // ********** Justin's TIPS **********
    // ********* JQUERY MOUSE EVENTS EXERCISE *********















    // ********* JQUERY SELECTOR EXERCISE *********
    // alert('The DOM has finished loading!');

    // Curriculum method
    // var contents = $('#container').html();
    // alert(contents);

    // Instructor method
    // alert($('#container').html());

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