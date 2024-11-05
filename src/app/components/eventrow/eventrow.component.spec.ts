import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventrowComponent } from './eventrow.component';

describe('EventrowComponent', () => {
  let component: EventrowComponent;
  let fixture: ComponentFixture<EventrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventrowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
