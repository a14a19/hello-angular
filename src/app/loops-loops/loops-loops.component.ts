import { Component } from '@angular/core';

@Component({
  selector: 'app-loops-loops',
  templateUrl: './loops-loops.component.html',
  styleUrls: ['./loops-loops.component.scss']
})
export class LoopsLoopsComponent {
  title='Loops!';
  start=false;
  handleStart(){
    this.start = !this.start;
  }
  planets = [
    {name: 'Mercury', radius: 2440, moon: 0, moonName: []},
    {name: 'Venus', radius: 6052, moon: 0, moonName: []},
    {name: 'Earth', radius: 6371, moon: 1, moonName: ["Moon"]},
    {name: 'Mars', radius: 3390, moon: 2, moonName: ["Phobos", "Deimos"]},
    {name: 'Jupiter', radius: 69911, moon: 95, moonName: ["Io", "Europa", "Ganymede", "Callisto", "..."]},
    {name: 'Saturn', radius: 58232, moon: 83, moonName: ["Titan", "Mimas", "Dione", "..."]},
    {name: 'Uranus', radius: 25362, moon: 27, moonName: ["Miranda", "Ariel", "Puck", "..."]},
    {name: 'Neptune', radius: 24622, moon: 14, moonName: ["Triton", "Nereid", "..."]},
  ]
}
