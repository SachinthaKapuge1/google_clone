import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { Observable } from 'rxjs';
import { GoogleResponse } from './GoogleResponse.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private url:string=environment.SERVER_URL;
  private api_key: string=environment.API_KEY;
  private cx_key:  string=environment.CX_KEY;


 

  constructor(
    private httpClient:HttpClient
  ) { }

  getSearchResult(searchTerm:string):Observable<GoogleResponse>{
    let parameters = {"key":this.api_key,"cx":this.cx_key,"q":searchTerm};
    let queryParams = new HttpParams({ fromObject: parameters }); 
    return this.httpClient.get<GoogleResponse>(this.url,{params:queryParams});
  }

   

}
