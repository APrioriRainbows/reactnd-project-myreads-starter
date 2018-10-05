import React, {Component} from 'react'
import Book from './Book.js'

export default class Shelf extends Component {
    state = {
        savedBooks:[]
    }
    render(){
	const shelf = this.props.shelf_obj
	return(
	    <div>
	      <div className="bookshelf">
		<h2 className="bookshelf-title">{shelf.name}</h2>
		<div className="bookshelf-books">
                  <ol className="books-grid">
                    { shelf.books.map( book =>
			    <Book bookinfo={book} shelf={book.shelf} key={book.id} refreshData={this.props.refreshData}/>
                    ) }
		    { (shelf.books.length === 0) && <h3>No books here! Click the plus to search for a book and add it!</h3> }
                  </ol>
                </div>
	      </div>
            </div>
        )
    }
}
