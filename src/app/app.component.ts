import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-test';
  postData: any[] = [];
  clickedData: any;
  constructor( private dataService: DataService){
    this.getBlogData()
  }

  getBlogData(){
    this.dataService.getBlogData().subscribe((res:any)=>{
      this.postData.push(...res.hits)
    })
  }
}
