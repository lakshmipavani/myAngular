import { Component, OnInit ,Input ,OnDestroy } from '@angular/core';
import { Person } from '../person';

import { PeopleService } from "../people.service";
import { ActivatedRoute ,Router } from '@angular/router';

@Component({
  selector: 'app-person-details',
  template: `
    <p>
      person-details Works!
    </p>
    <section *ngIf="person">
           <h2>You selected: {{person.name}}</h2>
           <h3>Description</h3>
           <p>
             {{person.name}} weights {{person.weight}} and is {{person.height}} tall.
           </p>
       </section>
    <!-- we moved the details template here -->
       <section *ngIf="person1">
           <h2>You selected: {{person1.name}}</h2>
           <h3>Description</h3>
           <p>
             {{person1.name}} weights {{person1.weight}} and is {{person1.height}} tall.
           </p>
       </section>

       <button (click)="gotoPeoplesList()">Back to peoples list</button>
   `,
  styles: []
})
export class PersonDetailsComponent implements OnInit,OnDestroy {
   
   @Input() person:Person;
   @Input() person1:Person;
   sub:any;

   constructor(private route:ActivatedRoute,
               private peopleService:PeopleService,
               private router:Router) { }

   ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
        let id = Number.parseInt(params['id']);
        this.person1 = this.peopleService.get(id);
      });
    }

    ngOnDestroy(): void {
     // this.sub.unsubscribe();
    }

    gotoPeoplesList(){
        let link = ['/persons'];
        this.router.navigate(link);

        //window.history.back();
    }
}

