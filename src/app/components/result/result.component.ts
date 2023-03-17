import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GoogleResponse } from 'src/app/GoogleResponse.model';
import { SearchService } from 'src/app/search.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit,OnDestroy {
  
  active:boolean=true;
  results?:GoogleResponse;
  subs: Subscription[]=[];
  term:any;

  constructor(private searchService:SearchService){}

  ngOnInit(): void {
    const {term}=history.state;
    this.term=term;
    if(term){
      this.subs.push(
        this.searchService.getSearchResult(term).subscribe((data:GoogleResponse):void=>{
          this.results=data;
        })
      )
    }
  }






  ngOnDestroy(): void {
    this.subs.map(s=>s.unsubscribe());
  }

}
