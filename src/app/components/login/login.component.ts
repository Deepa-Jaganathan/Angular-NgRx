import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;


  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['' , Validators.required],
      password: ['', Validators.required],
    });
    console.log(this.loginForm )
  }

  onSubmit() {
    console.log(this.loginForm)
  }

  register() {
    this.router.navigate(["/register"]);
  }

}
