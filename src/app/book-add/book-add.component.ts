import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {BookData} from '../bookdata.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
  addBookFormGroup : FormGroup;
  constructor(private formBuilder : FormBuilder, private router : Router) { }
  book = BookData;

  ngOnInit(): void {
    this.addBookFormGroup = this.formBuilder.group({
      id : ['',Validators.required],
      genre : ['',Validators.required],
      author : ['',Validators.required],
      title : ['',Validators.required],
      price : ['',Validators.required],
      publisher : ['',Validators.required],
      quantity : ['',Validators.required]
    })
  }

  onSubmit(){
    console.log(this.addBookFormGroup.value);
    this.book.push(this.addBookFormGroup.value);
    this.router.navigateByUrl('/');
  }

}
