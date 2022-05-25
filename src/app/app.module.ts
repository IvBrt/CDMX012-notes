import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing'; 

import { AppComponent } from './app.component';
import { MyNotesComponent } from './my-notes/my-notes.component';
import { AccountComponent } from './account/account.component';
import { NotesComponent } from './notes/notes.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNotesComponent,
    AccountComponent,
    NotesComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
