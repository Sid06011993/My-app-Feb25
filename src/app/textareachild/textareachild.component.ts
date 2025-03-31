import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-textareachild',
  templateUrl: './textareachild.component.html',
  styleUrls: ['./textareachild.component.css']
})
export class TextareachildComponent {
term:string='';
textlength:number=0;
@Output() childEvent:EventEmitter<string>=
          new EventEmitter();
textfunction(){
  this.childEvent.emit(this.term);
  this.textlength = this.term.length;
  console.log(this.textlength)
}
}
