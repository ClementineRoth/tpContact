import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Contact } from '../model/contact';
@Component({
  selector: 'app-get-contacts',
  templateUrl: './get-contacts.component.html',
  styleUrls: ['./get-contacts.component.css']
})
export class GetContactsComponent implements OnInit {

  MyList : Array<Contact>;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getContact();
  }
  getContact(){
    this.authService.getAll().subscribe((res)=>{
      this.MyList =  res;
    },(err)=>{
      
    });
  }
  delete(id){
     this.authService.delete(id).subscribe((res)=>{
       this.getContact();
     },(err)=>{});
  }
}
