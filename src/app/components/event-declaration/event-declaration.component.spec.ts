import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDeclarationComponent } from './event-declaration.component';

describe('EventDeclarationComponent', () => {
  let component: EventDeclarationComponent;
  let fixture: ComponentFixture<EventDeclarationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventDeclarationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
