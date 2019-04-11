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
  
  getIdeaById(ideaId: string){
    return this.database.object('ideas' + ideaId);
  }
  
  // getIdeasByCategory(desiredCategory: string){
  //   var output FirebaseListObservable<any[]>;
  //   console.log(desiredCategory);
  //   if (desiredCategory !== "list"){
  //     for (var i = 0; i < this.ideas.length; i++) {
  //       if (this.ideas[i].id === category) {
  //         output.push(this.ideas[i]);
  //       }
  //     }
  //   } else {
  //     return this.ideas;
  //   }
  //   return output;
  // }

}
