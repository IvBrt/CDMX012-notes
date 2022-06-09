import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor( private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  salir(){
    console.log("quiero salir")
    this.userService.salir()
    this.router.navigate([""])
  }

}
