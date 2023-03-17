import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  searchTerm:String='';

  constructor(
    private router:Router
  ){}


  submit(form:NgForm) {

    this.router.navigateByUrl('/results',{state:{term:this.searchTerm}}).then();
    console.log(form.value);
  }

  setSearchTerm($event: any) {
    this.searchTerm=$event;
    }

}
