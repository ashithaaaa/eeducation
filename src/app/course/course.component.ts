import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  course=[
    {'id':1,'name':'Learn Angular','description':'AngularJS is a discontinued free and open-source JavaScript-based web framework for developing single-page applications','image':'../../assets/angularjs.jpg'},
    {'id':2,'name':'Learn TypeScript','description':'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.','image':'../../assets/typescriptjs.png'},
    {'id':3,'name':'Learn Nodejs','description':'As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.','image':'../../assets/nodejs.png'},
    {'id':4,'name':'Learn Reactjs','description':'React makes it painless to create interactive UIs. Design simple views for each state in your application.','image':'../../assets/reactjs.png'}
    
]

}
