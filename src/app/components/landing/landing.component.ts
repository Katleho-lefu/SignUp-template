import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  
    form = new FormGroup({
    email: new FormControl(" ", Validators.minLength(2)),
    password: new FormControl(" "),
  });


  constructor() { }

  ngOnInit(): void {
  }

}
