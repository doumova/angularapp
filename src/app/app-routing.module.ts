import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PersonInputComponent } from "./person-input/person-input.component";
import { PersonsComponent } from "./persons/persons.component";


const routes : Routes=[
  {path:'', component:PersonsComponent},
  {path:'input-person', component:PersonInputComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
