import React, {Component} from 'react'
import Book from './Book.js'

export default class Shelf extends Component {
   shelves = {
       currentlyReading: "Currently Reading", 
       wantToRead: "Want to Read", 
       read: "Read"
}
//   filteredBooks = bookArray.filter(book => book.state.shelf === this.props.shelfName)
    render(){
       return(
           <div>
           {Object.values(this.shelves).map((shelf, index) => 
	                <div className="bookshelf" shelfName={Object.keys(this.shelves)[index]}>
                          <h2 className="bookshelf-title">{shelf}</h2>
                          <div className="bookshelf-books">                                                                                        
                            <ol className="books-grid">
                              <Book/>//write a function to reduce incoming array of book components to ones with the correct state
                            </ol>                                                                                                                   
                          </div>
	                </div> 	      
                       )
           }
           </div>
	)
    }
}
