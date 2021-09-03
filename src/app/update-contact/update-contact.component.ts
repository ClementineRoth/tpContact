import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Contact } from '../model/contact';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {
  id : number;
  contact : Contact;
  message : string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  get(){
    this.authService.getOne(this.id).subscribe((res)=>{
      this.contact =  res;
    },(err)=>{
      
    });
  }
  update(){
    let body = JSON.stringify(this.contact);
    this.authService.update(this.contact.id, body).subscribe((res)=>{
      this.message =  "success";
    },(err)=>{
      
    });
  }
}
