import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GoogleResponse } from 'src/app/GoogleResponse.model';
import { SearchService } from 'src/app/search.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  
})
export class SearchComponent {
  

  // constructor(
  //   private searchService:SearchService,
  //   private router:Router
  //   ){}

  // @Input()
  // currentValueResultComp!: String;
  @Output() currentValue=new EventEmitter();

  @Input() currentTermValue: String='';
  results: GoogleResponse | undefined;  

  



  submit(currentTermValue:String) {
    this.currentValue.emit(currentTermValue)
  }

}
