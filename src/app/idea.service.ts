import { Injectable } from '@angular/core';
import { Idea } from './models/idea.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class IdeaService {
  
  ideas: FirebaseListObservable<any[]>;
  
  constructor(private database: AngularFireDatabase) {
    this.ideas = database.list('ideas');
   }

  getIdeas(){
    return this.ideas;
  }
}
