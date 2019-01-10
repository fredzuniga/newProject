import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  text =  'Lorem imsupm';
  httpdata;
  httpdata2;
  showData = 0;
  blue = 'blue';
  fruits = ['Uva', 'Manzana', 'Pera'];


  constructor(private http: HttpClient) { }
   ngOnInit() {
      this.http.get("http://localhost:3000/mysql?apikey=123456").
      subscribe(data => {   // data is a string
        console.log(data);
        this.httpdata = data;
      })

      this.http.get("http://localhost:3000/mysql?apikey=123456").
      subscribe(data => {   // data is a string
        console.log(data);
        this.httpdata2 = data;
      })
   }
}
