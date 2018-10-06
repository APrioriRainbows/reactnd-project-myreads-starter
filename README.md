# MyReads Project

MyReads is a book tracking webapp that runs on react. 

To run the app you'll need npm package manager. You can install that [here](https://www.npmjs.com/get-npm) if you don't have it.
Once you have npm follow these steps to view the app...
* install all project dependencies with `npm install`
* start the development server with `npm start`


## Viewing Your Books
* The main page shows three shelves: Currently Reading, Want to Read, and Read. You can click the green arrow off each book to move it between shelves
* To remove a book, change its state to 'none'
* To add more books you can click the green plus button at the bottom of the main page, which will take you to the search page.

##Searching for a Book
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

Once you find a book you want to add to your shelves, click the green arrow off that book and select the shelf you want to add it to. It will disappear from the search page and be added to the shelf of your choice.

## Create React App
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

#Additional Features/Extra Credit
* Books are automatically added to the shelves from the search page and the page is rerendered, giving the user immediate feedback that they've selected a book.
* The search functionailty is debounced so that the API isn't called too many times.