import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  personChanged = new Subject<string[]>();

  persons: string[] = [];


  constructor(private http:HttpClient){}

  // working with swapi API
  fetchPersons(){
    this.http
    .get<any>('https://swapi.dev/api/people')
    .pipe(
      map(respData=>{
      return respData.results.map((character: { name: any; }) =>
      character.name);
      })
    )

    .subscribe(transformeData=>{
      this.personChanged.next(transformeData);
      console.log(transformeData);
    });

  }


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
