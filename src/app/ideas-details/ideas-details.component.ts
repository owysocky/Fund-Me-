import { Component, OnInit } from '@angular/core';
import { IdeaService } from '../idea.service';
import { Idea } from '../models/idea.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ideas-details',
  templateUrl: './ideas-details.component.html',
  styleUrls: ['./ideas-details.component.css'],
  providers: [IdeaService]
})
export class IdeasDetailsComponent implements OnInit {

  ideaId: string;
  ideaToDisplay;
  
  constructor(private route: ActivatedRoute, private location: Location, private ideaService: IdeaService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.ideaId = urlParameters['id'];
   });
   this.ideaToDisplay = this.ideaService.getIdeaById(this.ideaId);
  }

}
