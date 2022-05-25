import { MyNotesComponent } from "./my-notes/my-notes.component";
import { NotesComponent } from "./notes/notes.component";
import { ErrorComponent } from "./error/error.component";

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path: "", component: MyNotesComponent },
    {path: "notes", component: NotesComponent },
    {path: "**", component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
