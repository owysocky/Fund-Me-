import { Component, OnInit } from '@angular/core';
import { IdeaService } from '../idea.service';
import { Idea } from '../models/idea.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ideas-list',
  templateUrl: './ideas-list.component.html',
  styleUrls: ['./ideas-list.component.css'],
  providers: [IdeaService]
})
export class IdeasListComponent implements OnInit {
  filterByCurrentCategory: string = this.router.url.substring(1, this.router.url.length - 1);
  ideas: FirebaseListObservable<any[]>;

  constructor(private router: Router, private ideaService: IdeaService) { 
    //console.log(currentRoute);
  }

  ngOnInit() {
    this.ideas = this.ideaService.getIdeas();
    //console.log(currentRoute);
  }
  
  // goToDetailPage(clickedIdea: Idea){
  //  this.router.navigate(['ideas', clickedIdea.id]);
  // }


}
