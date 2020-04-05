import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindlogsComponent } from './findlogs.component';

describe('FindlogsComponent', () => {
  let component: FindlogsComponent;
  let fixture: ComponentFixture<FindlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
