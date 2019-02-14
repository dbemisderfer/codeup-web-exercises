// (function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split('|');

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var planetsBreak = planetsArray.join('<br>');
    console.log(planetsBreak);

    //Instructor solution
    var planetsList = planetsArray.join('</li><li>');
    console.log(planetsList);

    var newString = "<ul><li>" + planetsList + "</li></ul>";
    console.log(newString);


    // BACK TO THE DRAWING BOARD (i.e., NEVER use this solution)
    // planetsArray.unshift('<ul><li>');
    // console.log(planetsArray);
    //
    // var planetsUnorderedList = planetsArray.join(',</li><li>,');
    // console.log(planetsUnorderedList);
    //
    // var planetsArrayUL = planetsUnorderedList.split(',');
    // console.log(planetsArrayUL);
    //
    // planetsArrayUL.push('</li></ul>');
    // console.log(planetsArrayUL);
    //
    // var planetsUnorderedString = planetsArrayUL.join('');
    // console.log(planetsUnorderedString);



// })();
