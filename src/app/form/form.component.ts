import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent {
  title = 'Form - ngForm!'
  counter = 0;
  initState = false;
  state: boolean = false;
  list: any[] = []
  printInput = 'Default Text';

  constructor() {
    setTimeout(() => {
      this.initState = true;
    }, 3000)
  }
  handleForm(data: NgForm) {
    // console.log(this.list.includes({...data, data.name}));
    // for (let x = 0; x < this.list.length; x++) {console.log(this.list[x]);}
    this.list.forEach((elem: any) => {
      console.log(elem);
    });
    // && this.list[x].name !== data.name
    if (data.name !== '') {
      this.list.push({ ...data, id: this.list.length })
      // data.name = '';
    }
    // }
    console.log(data);
  }
  handleClick() {
    if (this.list.length > 0) {
      this.counter++;
      this.state = !this.state;
      console.log(this.state);
    }
  }
  remove(e: any) {
    console.log(e);
    this.list = this.list.filter(item => item.id !== e)
  }
  onNameInput(event: Event) {
    console.log(event);
    // to get input values through event
    this.printInput = (<HTMLInputElement>event.target).value.trim();
  }
  onSubmit(form: NgForm){
    console.log(form);

  }
}
