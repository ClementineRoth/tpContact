import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Contact } from '../model/contact';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {

  contact = new Contact();
  message : string;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  create(){
    let body = JSON.stringify(this.contact);
    this.authService.Create(body).subscribe(res=>{
      this.message = "success";
    })
  }
}
