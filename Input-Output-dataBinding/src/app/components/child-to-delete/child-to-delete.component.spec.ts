import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildToDeleteComponent } from './child-to-delete.component';

describe('ChildToDeleteComponent', () => {
  let component: ChildToDeleteComponent;
  let fixture: ComponentFixture<ChildToDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildToDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildToDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
