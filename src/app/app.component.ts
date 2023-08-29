import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  public request$: Observable<any> = this.httpClient.get(environment.apiUrl)

  constructor(private httpClient: HttpClient) {
    console.log(environment.apiUrl);
    console.log('check!!!!!');
  }
}
