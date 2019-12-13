import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {timer} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  page = 1;
  constructor(private http: HttpClient) { }

  getBlogData(){
    return timer(0, 10000).pipe(switchMap(_=>this.http.get(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${this.page++}`)));
  }
}
