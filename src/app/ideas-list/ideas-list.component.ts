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
  //filterByCurrentCategory: string = this.router.url.substring(1, this.router.url.length - 1);
  // ideas: FirebaseListObservable<any[]>;
  ideas: Idea[] = [];

  constructor(private router: Router, private ideaService: IdeaService) { 
    //console.log(currentRoute);
  }

  ngOnInit() {
    // this.ideas = this.ideaService.getIdeas();
     
    this.ideaService.getIdeas().subscribe(dataLastEmittedFromObserver => {
      let category = this.router.url.substring(1);
      for (let i = 0; i < dataLastEmittedFromObserver.length; i++) {
        if((dataLastEmittedFromObserver[i].category === category) || (category === 'list')){
          let currentIdea = new Idea(dataLastEmittedFromObserver[i].name, dataLastEmittedFromObserver[i].category, dataLastEmittedFromObserver[i].userName, dataLastEmittedFromObserver[i].description, dataLastEmittedFromObserver[i].moneyExpected);
          currentIdea.moneyRisen = dataLastEmittedFromObserver[i].moneyRisen;
          currentIdea.id = dataLastEmittedFromObserver[i].$key;
          this.ideas.push(currentIdea);
        }
      }
    });  
    // this.ideaService.getIdeasByCategory(this.router.url.substring(1)).subscribe(dataLastEmittedFromObserver => {
    //   this.ideas.push() = dataLastEmittedFromObserver;
    //   console.log(this.ideas);
    // });
    
    //console.log(currentRoute);
  }
  
  goToDetailPage(clickedIdea: Idea){
   this.router.navigate(['ideas', clickedIdea.id]);
  }


}
