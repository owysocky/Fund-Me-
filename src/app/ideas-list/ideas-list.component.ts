import { Component, OnInit } from '@angular/core';
import { IdeaService } from '../idea.service';
import { Idea } from '../models/idea.model';

@Component({
  selector: 'app-ideas-list',
  templateUrl: './ideas-list.component.html',
  styleUrls: ['./ideas-list.component.css'],
  providers: [IdeaService]
})
export class IdeasListComponent implements OnInit {
  
  ideas: Idea[];
  constructor(private ideaService: IdeaService) { }

  ngOnInit() {
    this.ideas = this.ideaService.getIdeas();
  }

}
