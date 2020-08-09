import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDeclarationSecComponent } from './event-declaration-sec.component';

describe('EventDeclarationSecComponent', () => {
  let component: EventDeclarationSecComponent;
  let fixture: ComponentFixture<EventDeclarationSecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventDeclarationSecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDeclarationSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
