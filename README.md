# MyReads Project
This is the eighth project for the Udacity Front-End web Nanodegree, there's a bookshelf app that allows user to select and categorize books he has read, are currently reading, or want to read. The project emphasizes using React.

## Demo
[![Screen record](http://img.youtube.com/vi/K5U-c21YU0I/0.jpg)](https://youtu.be/K5U-c21YU0I)

# App Functionality

In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

* Currently Reading
* Want to Read
* Read

Each book has a control that lets the user select the shelf for that book. When he selects a different shelf, the book moves there.

The main page also has a link to /search, a search page that allows user to find books to add to his library.

The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets user add the book to his library.

When a book is on a bookshelf, it will have the same state on both the main application page and the search page.

The search page also has a link to / (the root URL), which leads back to the main page.

When user navigates back to the main page from the search page, he will instantly see all of the selections he made on the search page in his library.

## How to run
* Clone this repo or download and unzip the file
* Type `cd` command to be inside the project directory
* install all project dependencies with `npm install`
* Launch the server with `npm start`