import { Component } from '@angular/core';
@Component({
  selector: 'app-my-component-one',
  // external way of defining templates and styles
  templateUrl: './my-component-one.component.html',
  styleUrls: ['./my-component-one.component.css'],
  // template: `<h1>Templates</h1>
  // <p>Defining template within components and styles</p>
  // `
  // styles: ['h1 {font-weight: normal; color: blue;}', 'p {color: white; background-color: blue;}']
})


export class MyComponentOneComponent {
  titleIf="If-else Condition!";
  start=false;
  show='';
  handleClick(e:any){
    this.show = e;
    console.log(e);
  }
  handleStart(){
    this.start = !this.start;
  }
}
