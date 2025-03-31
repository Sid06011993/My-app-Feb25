import { Component } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent {
value:string='';
textlength:number=0
capture(value:string){
  this.value = value;
  console.log(value)
  this.textlength = this.value.length;
}
}
