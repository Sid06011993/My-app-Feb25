import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareachildComponent } from './textareachild.component';

describe('TextareachildComponent', () => {
  let component: TextareachildComponent;
  let fixture: ComponentFixture<TextareachildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextareachildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextareachildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
