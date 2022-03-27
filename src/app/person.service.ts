import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  personChanged = new Subject<string[]>();

  persons:string[] =['fatou','soda']



  addPerson(name: string){
    this.persons.push(name);
    this.personChanged.next(this.persons);
    console.log(this.persons);
  }

  removePerson(name: string){
    this.persons = this.persons.filter(person =>{
      return person !=name;
    });
    this.personChanged.next(this.persons);
  }

  // constructor() { }
}
