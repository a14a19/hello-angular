import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-cases',
  templateUrl: './switch-cases.component.html',
  styleUrls: ['./switch-cases.component.scss']
})
export class SwitchCasesComponent {
  title='Switch cases & Style Binding!';
  start= false;
  handleStart(){
    this.start = !this.start;
  }
  color='';
  handleColor(e:string){
    this.color = e
  }
}
