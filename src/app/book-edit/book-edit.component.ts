import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {BookData} from '../bookdata.model';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  editBookFormGroup : FormGroup;
  constructor(private formBuilder : FormBuilder, private router : Router,private activatedRouter: ActivatedRoute) { }
  book = BookData;
  id;
  index;

  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.paramMap.get("id");
    this.index = this.id - 1;
    console.log(this.index);

    this.editBookFormGroup = this.formBuilder.group({
      id: [this.id, Validators.required],
      genre : [this.book[this.index].genre,Validators.required],
      author : [this.book[this.index].author,Validators.required],
      title : [this.book[this.index].title,Validators.required],
      price : [this.book[this.index].price,Validators.required],
      publisher : [this.book[this.index].publisher,Validators.required],
      quantity : [this.book[this.index].quantity,Validators.required]
    })
  }

  onEdit(){
    console.log(this.editBookFormGroup.value);
    this.book[this.index].genre = this.editBookFormGroup.controls.genre.value;
    this.book[this.index].author = this.editBookFormGroup.controls.author.value;
    this.book[this.index].title = this.editBookFormGroup.controls.title.value;
    this.book[this.index].price = this.editBookFormGroup.controls.price.value;
    this.book[this.index].publisher = this.editBookFormGroup.controls.publisher.value;
    this.book[this.index].quantity = this.editBookFormGroup.controls.quantity.value;
    this.router.navigateByUrl("/");
  }

}
