import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AagneyaWelcomeComponent } from './aagneya-welcome.component';

describe('AagneyaWelcomeComponent', () => {
  let component: AagneyaWelcomeComponent;
  let fixture: ComponentFixture<AagneyaWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AagneyaWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AagneyaWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
