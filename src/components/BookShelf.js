import React, {Component} from 'react'
import Book from './Book.js'

export default class Shelf extends Component {
   shelves = {
       currentlyReading: "Currently Reading", 
       wantToRead: "Want to Read", 
       read: "Read"
   }

    constructor(props){
	super(props);
    }

    render(){
	const filteredBooks = this.props.books.filter(book => book.shelfname == this.props.shelfname)
	return(
           <div>
	     <div className="bookshelf">
               <h2 className="bookshelf-title">{this.props.shelfname}</h2>
               <div className="bookshelf-books">                                                                                        
                 <ol className="books-grid">
                   {filteredBooks.length ? filteredBooks.map(
		       book => 
			       <Book bookinfo={book} key={book.id} shelf={book.shelfname}/>
                       ) : <h3>No books here! Click the plus to search for a book and add it!</h3>
		   }
                 </ol>                                                                                                                   
               </div>
	     </div> 	      
           </div>
        )
    }
}
