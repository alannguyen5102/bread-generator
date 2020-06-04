import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughListComponent } from './dough-list.component';

describe('DoughListComponent', () => {
  let component: DoughListComponent;
  let fixture: ComponentFixture<DoughListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoughListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoughListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
