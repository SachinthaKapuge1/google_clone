import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private router:Router
  ){}


  submit(form:NgForm) {
    const {search_term} = form.value;
    this.router.navigateByUrl('/results',{state:{term:search_term}}).then();
    console.log(search_term);
  }

}
