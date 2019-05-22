import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBoardTeacherComponent } from './dash-board-teacher.component';

describe('DashBoardTeacherComponent', () => {
  let component: DashBoardTeacherComponent;
  let fixture: ComponentFixture<DashBoardTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashBoardTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashBoardTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
