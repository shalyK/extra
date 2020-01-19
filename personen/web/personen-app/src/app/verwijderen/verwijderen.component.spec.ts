import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerwijderenComponent } from './verwijderen.component';

describe('VerwijderenComponent', () => {
  let component: VerwijderenComponent;
  let fixture: ComponentFixture<VerwijderenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerwijderenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerwijderenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
