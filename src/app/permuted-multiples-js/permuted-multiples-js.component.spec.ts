import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermutedMultiplesJsComponent } from './permuted-multiples-js.component';

describe('PermutedMultiplesJsComponent', () => {
  let component: PermutedMultiplesJsComponent;
  let fixture: ComponentFixture<PermutedMultiplesJsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermutedMultiplesJsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermutedMultiplesJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
