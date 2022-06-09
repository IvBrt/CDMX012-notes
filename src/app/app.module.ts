import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing'; 

import { AppComponent } from './app.component';
import { MyNotesComponent } from './my-notes/my-notes.component';
import { AccountComponent } from './account/account.component';
import { NotesComponent } from './notes/notes.component';
import { NotFoundComponent } from './notFound/notFound.component';
import { GoogleComponent } from './google/google.component';
import { AngularFireModule} from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MyNotesComponent,
    AccountComponent,
    NotesComponent,
    NotFoundComponent,
    GoogleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(
    environment.firebaseConfig
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
