import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Article } from '../model/article';

@Component({
  selector: 'app-list-article-contact',
  templateUrl: './list-article-contact.component.html',
  styleUrls: ['./list-article-contact.component.css']
})
export class ListArticleContactComponent implements OnInit {
  MyList :Array<Article>;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getArticles().subscribe(res=>{
      this.MyList = res;
    });
  }

}
