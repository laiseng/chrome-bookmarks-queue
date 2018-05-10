
import { fromEvent, merge, concat } from 'rxjs';
import { switchMap, tap, takeUntil, filter } from 'rxjs/operators';

export class CGesture {
   constructor(){
       console.log("hello bookmark queue");
   }
}

let c = new CGesture();