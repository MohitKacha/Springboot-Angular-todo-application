import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { strict } from 'assert';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {


  name =''
  constructor(private router : ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.name)
    this.name = this.router.snapshot.params['name']
  }

}
