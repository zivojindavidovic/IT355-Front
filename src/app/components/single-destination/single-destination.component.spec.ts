import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDestinationComponent } from './single-destination.component';

describe('SingleDestinationComponent', () => {
  let component: SingleDestinationComponent;
  let fixture: ComponentFixture<SingleDestinationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleDestinationComponent]
    });
    fixture = TestBed.createComponent(SingleDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
