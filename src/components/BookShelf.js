import React, {Component} from 'react'
import Book from './Book.js'
import * as BooksAPI from '../BooksAPI'
export default class Shelf extends Component {
    constructor(props){
	super(props);
        BooksAPI.getAll()
            .then(savedBooks => {
                this.setState({savedBooks:savedBooks})
            })
    }
    state = {
        savedBooks:[]
    }
    render(){
        const shelfName = this.props.keyValue[1]
        const shelfSlug = this.props.keyValue[0]
	const filteredBooks = this.state.savedBooks && this.state.savedBooks.filter(book => book.shelf == shelfSlug);
	return(
	    <div>
	      <div className="bookshelf">
		<h2 className="bookshelf-title">{shelfName}</h2>
		<div className="bookshelf-books">
                  <ol className="books-grid">
                    {filteredBooks && filteredBooks.length ? filteredBooks.map(
		        book =>
			    <Book bookinfo={book} shelf={book.shelf} key={book.id}/>
                    ) : <h3>No books here! Click the plus to search for a book and add it!</h3>
		    }
                  </ol>
                </div>
	      </div>
            </div>
        )
    }
}
