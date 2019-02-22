"use strict";

function renderCoffee(coffee) {
    var html = '<div class="row coffee">';
    html += '<div class="col">';
    html += '<div class="justify-content-start d-flex flex-row">';
    html += '<h2 class="coffeeNameId">' + coffee.name + '</h2>';
    html += '<p class="coffeeNameId ml-2 my-auto pt-1 text-muted">' + coffee.roast + '</p>';
    html += '</div>';
    html += '</div>';
    // html += '<div class="col">';
    // html += '<div class="justify-content-start d-flex flex-row">';
    // html += '<h2>' + coffee.name + '</h2>';
    // html += '<p class="ml-2 my-auto pt-1 text-muted">' + coffee.roast + '</p>';
    // html += '</div>';
    // html += '</div>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

var output= document.getElementsByClass("coffeeNameId");
var formInput = document.getElementById("coffee_search"").innerHTML;
output.value = "";
for (var i = 0; i<coffees.length; i++) {
    if coffees[i].name == formInput {
        output.value +=
    }
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);