import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  products:any=[
    {name:'pen', price:10, rating:3.1},
    {name:'bag', price:20, rating:4.7},
    {name:'book', price:30, rating:3.9},
    {name:'cap', price:50, rating:2.7},
    {name:'eraser', price:120, rating:1.5},
    {name:'shoes', price:1400, rating:1.2},
    {name:'bike', price:40000, rating:3.9},
    {name:'car', price:700000, rating:4},
  ]

  isVisible:boolean=true;

  states:string[]=['Andhra', 'Karnataka', 'Telangana', 'Kerala', 'Maharashtra', 'Sikkim'];

  newDate:any=new Date();
}
