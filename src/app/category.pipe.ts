import { Pipe, PipeTransform } from '@angular/core';
import { Idea } from './models/idea.model';
import { IdeaService } from './idea.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Pipe({
  name: "category",
  pure: false
})

export class CategoryPipe{//} implements PipeTransform {
  // transform(input: FirebaseListObservable<any[]>, desiredCategory) {
  //   var output: Idea[] = [];
  // 
  //   if (desiredCategory !== "list"){
  //     for (var i = 0; i < input.length; i++) {
  //       if (input[i].category === desiredCategory) {
  //         output.push(input[i]);
  //       }
  //     }
  //   } else {
  //     return input;
  //   }
  //   return output;
  // }
}