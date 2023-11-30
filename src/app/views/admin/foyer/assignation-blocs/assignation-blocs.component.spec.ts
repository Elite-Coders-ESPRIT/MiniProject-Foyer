import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignationBlocsComponent } from './assignation-blocs.component';

describe('AssignationBlocsComponent', () => {
  let component: AssignationBlocsComponent;
  let fixture: ComponentFixture<AssignationBlocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignationBlocsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignationBlocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
