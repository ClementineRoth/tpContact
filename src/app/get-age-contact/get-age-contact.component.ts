import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Contact } from '../model/contact';

@Component({
  selector: 'app-get-age-contact',
  templateUrl: './get-age-contact.component.html',
  styleUrls: ['./get-age-contact.component.css']
})
export class GetAgeContactComponent implements OnInit {
  MyList : Array<Contact>;
  min : number;
  max : number;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  find(){
    this.authService.getByAge(this.min, this.max).subscribe(res=>{
      this.MyList = res;
    })
  }
}
