import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit, OnDestroy {
  // @Input() personList :string[] | undefined;
  personList: string[] | undefined;

  private personListSubs: Subscription = new Subscription;

  //private personService:PersonService;


  constructor(private perService: PersonService ) {
    //this.personList = perService.persons;
    //this.personService = perService;
  }

  ngOnInit(){
    this.personList = this.perService.persons;
    this.personListSubs=this.perService.personChanged.subscribe(persons =>{
      this.personList = persons;
    });
  }

  onRemovePerson(personName: string){
    this.perService.removePerson(personName);
  }

  ngOnDestroy(){
    this.personListSubs.unsubscribe();

  }

}
