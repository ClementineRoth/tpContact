import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  id : number;
  password : string;

  constructor(private authService: AuthService, private route : Router) { }

  ngOnInit(): void {
  }

  connect(){
    this.authService.getConnexion(this.id,this.password).subscribe(res=>{
      sessionStorage.setItem("contact", JSON.stringify(res));
      this.route.navigate([""]);
    });
  }
}
