import { Component, Input, OnInit } from '@angular/core';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
  // @Input() personList :string[] | undefined;
  personList: string[] | undefined;


  //private personService:PersonService;


  constructor(private perService: PersonService ) {
    //this.personList = perService.persons;
    //this.personService = perService;
  }

  ngOnInit(){
    this.personList = this.perService.persons;
  }

  onRemovePerson(personName: string){
    this.perService.removePerson(personName);
  }

}
