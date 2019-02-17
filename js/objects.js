// (function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    // var person = {
    //     firstName: "Dwight",
    //     lastName: "Bemisderfer"
    // };

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    // person.sayHello = function () {
    //     return "Hello from " + person.firstName + " " + person.lastName
    // };
    //
    // console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    // var shoppers = [
    //     {name: 'Cameron', amount: 180},
    //     {name: 'Ryan', amount: 250},
    //     {name: 'George', amount: 320}
    // ];
    //
    //
    // shoppers.forEach(function(shopper){
    //
    //     var discountAmount = (shopper.amount * .12);
    //     var finalAmount = (shopper.amount - discountAmount);
    //
    //     if (shopper.amount > 200) {
    //         console.log(shopper.name + " owed $" + shopper.amount + ", but has a discount of $"
    //             + discountAmount.toFixed(2) + ". Only $" + finalAmount.toFixed(2) + " is now owed.");
    //     } else {
    //         console.log(shopper.name + " has no discount and owes $" + shopper.amount + ".");
    //     }
    //
    // });



    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {
            title: "Moby Dick",
            author: {
                firstName: "Herman",
                lastName: "Melville"
            }
        },
        {
            title: "Rock Albums of the '70s: A Critical Guide",
            author: {
                firstName: "Robert",
                lastName: "Christgau"
            }

        },
        {
            title: "Revelation",
            author: {
                firstName: "John",
                lastName: "'the Revelator'"
            }

        },
        {
            title: "On the Banks of Plum Creek",
            author: {
                firstName: "Laura",
                lastName: "Wilder"
            }

        },
        {
            title: "The Secret of the Old Mill",
            author: {
                firstName: "Franklin",
                lastName: "Dixon"
            }
        }
    ];
//
//     console.log(JSON.stringify(books));
//
    function createBook(title, firstName, lastName) {

             return books.push({
            "title": title,
            "author": {
                firstName: firstName,
                lastName: lastName
            }
        });
    };
//
//
// createBook("The Hidden Staircase", "Carolyn", "Keene");
//     console.log(JSON.stringify(books));
//
//     // console.log(books[3].title);
//     // console.log(books[4].author.firstName);
//     // console.log(books[2].author.lastName);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    // for (var i = 0; i < books.length; i += 1) {
    //
    //     console.log("Book # " + (i + 1));
    //     console.log("Title: " + books[i].title);
    //     console.log("Author: " + books[i].author.firstName + " " + books[i].author.lastName);
    //     console.log("-------");
    // }

    // Alternate method
    // books.forEach(function(book, index){
    //
    //     console.log("Book # " + (index + 1));
    //     console.log("Title: " + book.title);
    //     console.log("Author: " + book.author.firstName + " " + book.author.lastName);
    //     console.log("-------");
    //
    // });

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */


    function createBook(title, firstName, lastName) {
        return library.books.push({
            "title": title,
            "author": {
                firstName: firstName,
                lastName: lastName
            }
        });
    };

    var library = {
        books: [
            {
            title: "Moby Dick",
            author: {
                firstName: "Herman",
                lastName: "Melville"
                }
            },
            {
                title: "Rock Albums of the '70s: A Critical Guide",
                    author: {
                firstName: "Robert",
                    lastName: "Christgau"
                }

            },
            {
                title: "Revelation",
                    author: {
                firstName: "John",
                    lastName: "'the Revelator'"
                }

            },
            {
                title: "On the Banks of Plum Creek",
                    author: {
                firstName: "Laura",
                    lastName: "Wilder"
                }

            },
            {
                title: "The Secret of the Old Mill",
                    author: {
                firstName: "Franklin",
                    lastName: "Dixon"
                }
            }],
        addBook: createBook
    }

    console.log((JSON.stringify(library.books)));
    console.log(library.addBook("The Exorcist", "William", "Blatty"));
    console.log(JSON.stringify(library.books));

//     BONUS 1 (expanding on the books object exercise):
// Add a property "keywords" that contains an array of possible genres the book may be categorized by
// Add a boolean property "available" and set it to true
// Add a dateAvailable property that has a string of the date/time when the book will be available
// Add a method lend() that...
// - changes the available property to false if it is not already false
// - sets the dateAvailable to a date exactly two weeks from when the lend() method is called
// (to do this, research the JS Date object and use methods from it in your code)
// Add a method receive() that...
// - changes the available property to true
// - changes the dateAvailable property to the string "now"
// BONUS 2 (expanding on the books object exercise):
// Create an application to take in user input to build the books array of objects.
//     Allow the user to continue adding books or to finish adding books.
//     Once the books have been added, output the books array in the console.
//     Allow a user to delete a book or a group of books by title or author last name
// Allow a user to edit a book by index number in the books array

// })();
