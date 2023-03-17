import { Component, Output } from '@angular/core';
import { GoogleResponse } from 'src/app/GoogleResponse.model';
import { SearchService } from 'src/app/search.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  

  constructor(
                private searchService:SearchService,
                private router:Router
                ){}

  currentTermValue: any;
  results: GoogleResponse | undefined;

  submit(currentTermValue:string) {
    // this.router.navigateByUrl('/results').then();
    
    // this.searchService.getSearchResult(this.currentTermValue).subscribe(
    //   data=>{
    //     this.results=data;
    //   }
    // )
    // console.log(this.results);
  }

}
