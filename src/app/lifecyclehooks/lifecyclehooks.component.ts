import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecyclehooks',
  templateUrl: './lifecyclehooks.component.html',
  styleUrls: ['./lifecyclehooks.component.css']
})
export class LifecyclehooksComponent implements OnChanges, OnInit, DoCheck, AfterViewInit, AfterViewChecked, AfterContentChecked, AfterContentInit, OnDestroy{
  interval:any;
     
  ngOnInit():void{
    console.log('ngOnInit running');
    this.interval=setInterval(()=>{
      console.log('count');
    },5000)
  }


  ngOnDestroy(): void {
    console.log('ngOnDestroy running');
    clearInterval(this.interval);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges running');

  }

  ngDoCheck(): void {
    console.log('ngDoCheck running');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit running');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked running');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit running');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked running');
  }
}
