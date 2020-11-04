import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor( 
    public userService: UserService
  ) { }

  ngOnInit(): void {
  }

  login(username, password){
    this.userService.SignIn(username,password);
    
  }
}
