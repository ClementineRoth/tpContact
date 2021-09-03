import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Contact } from '../model/contact';

@Component({
  selector: 'app-get-contact',
  templateUrl: './get-contact.component.html',
  styleUrls: ['./get-contact.component.css']
})
export class GetContactComponent implements OnInit {

  id : number;

  contact : Contact;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  get(){
    this.authService.getOne(this.id).subscribe(
      (res)=>{
        this.contact =  res;
      },(err)=>{});
  }

}
