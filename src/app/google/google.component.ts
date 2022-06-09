import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
export class GoogleComponent implements OnInit {

  constructor(private userService: UserService,private router: Router) { }

  ngOnInit(): void {
  }
  google(){
    console.log("ok");
    this.userService.google()
    .then (res  => this.router.navigate(['/notes']))
  
    .catch(error=> console.log(error))
  }
}
