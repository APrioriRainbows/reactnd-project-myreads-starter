import React, {Component} from 'react'
import * as BooksAPI from '../BooksAPI'

export default class Book extends Component {
    updateShelf = (event) => {
	const value = event.target.value;
	BooksAPI.update(this.props.bookinfo, value).then(()=> {
	    this.props.refreshData()
	})
    }
    render(){
	const book = this.props.bookinfo
	const authorsString = (book.authors || []).join(", ")
	let book_image = book.imageLinks && book.imageLinks.thumbnail
	book_image = book_image || "https://books.google.com/googlebooks/images/no_cover_thumb.gif"
	book_image = `url(${book_image})`
	const style = {width: 128, height: 193, backgroundSize: 'cover', backgroundImage: book_image}
	return(
            <li>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={style}></div>
                  <div className="book-shelf-changer">
                    <select value={book.shelf || "none"} onChange={this.updateShelf} highlighted={book.shelf || "none"}>
                      <option value="move" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{authorsString}</div>
              </div>
            </li>
	)
    }
}
