import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { PersonService } from '../person.service';


@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent implements OnInit {

  // @Output() personCreate= new EventEmitter<string>();
  enteredPersonName='';


  constructor(private personService: PersonService) {

  }

  ngOnInit(): void {
  }

  onCreatePerson(){

    console.log("Created a person :" + this.enteredPersonName);
    this.personService.addPerson(this.enteredPersonName);
    this.enteredPersonName='';
  }

}
