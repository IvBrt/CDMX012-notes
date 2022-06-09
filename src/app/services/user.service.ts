import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import firebase  from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private auth: AngularFireAuth) { }
  google(){
  return this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }
  salir(){
    return this.auth.signOut()
    }
}
