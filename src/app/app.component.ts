import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ecommerce';
  
  show = false;

  deconnexion(){
    sessionStorage.clear();
  }
  ngDoCheck(){
    this.show = (sessionStorage.getItem("contact")!=undefined)?true:false;
  }
}
