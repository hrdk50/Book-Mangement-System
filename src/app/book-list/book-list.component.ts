import { Component, OnInit } from '@angular/core';
import {BookData} from '../bookdata.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  
  constructor() { }
  books = BookData; 
  ngOnInit(): void {
  }

  deleteBook(id){
      for(let i=0; i<this.books.length; i++){
        if(this.books[i].id == id){
            this.books.splice(i,1);
        }
      }
  }

}
