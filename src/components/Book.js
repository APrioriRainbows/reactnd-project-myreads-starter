import React, {Component} from 'react'
import * as BooksAPI from '../BooksAPI'

export default class Book extends Component {
    constructor(props){
        super(props);
    }
    state = {
        shelf: "none"
    }
//    books = BooksAPI.getAll()
    updateShelf = (event) => {
	BooksAPI.update(this.props.bookinfo.id, event.target.value)
	this.setState({shelf: event.target.value})
    }
    render(){
	const book = this.props.bookinfo
	let book_image = book.imageLinks && book.imageLinks.thumbnail
	book_image = book_image || "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-yl"
	book_image = `url(${book_image})`
	return(
            <li>
              <div className="book" shelf={this.state.shelf}>
                <div className="book-top">
                  <div className="book-cover" style={{width: 128, height: 193, backgroundImage: book_image}}></div>
                  <div className="book-shelf-changer">
                    <select value={this.state.shelf} onChange={this.updateShelf}>
                      <option value="move" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
              </div>
            </li>
	)
    }
}
