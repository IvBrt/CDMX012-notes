import { MyNotesComponent } from "./my-notes/my-notes.component";
import { NotesComponent } from "./notes/notes.component";
import { NotFoundComponent } from "./notFound/notFound.component";

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate,redirectUnauthorizedTo} from '@angular/fire/compat/auth-guard'

const routes: Routes = [
    {path: "", component: MyNotesComponent },
    {path: "notes", component: NotesComponent, ...canActivate(()=> redirectUnauthorizedTo([""]))},
    {path: "**", component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
