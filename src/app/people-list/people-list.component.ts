import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-list',
  template: `
    <p> people-list Works! </p>
    <ul>
       <li *ngFor="let person of people">
         <a href= "#" (click)="selectPerson(person)">
            {{person.name}}
         </a>
       </li>
    </ul>

    <app-person-details [person]="selectedPerson"></app-person-details>

    <ul>
    <li *ngFor="let person of people">
      <a [routerLink]="['/persons', person.id]">
        {{person.name}}
      </a>
    </li>
  </ul>
  
  `,
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
    
   /* people: Person[] = [
      {name: 'Luke Skywalker', height: 177, weight: 70},
      {name: 'Darth Vader', height: 200, weight: 100},
      {name: 'Han Solo', height: 185, weight: 85},
    ];*/

    people : Person[]=[];
    selectedPerson : Person;

    // this shorthand syntax automatically creates and
    // initializes a new private member in the class
    constructor(private peopleService: PeopleService) { }

    ngOnInit() {
       this.people = this.peopleService.getAll();
    }

    selectPerson(person : Person){
      this.selectedPerson = person;
  }

}
