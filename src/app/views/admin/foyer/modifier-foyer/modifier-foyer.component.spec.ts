import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierFoyerComponent } from './modifier-foyer.component';

describe('ModifierFoyerComponent', () => {
  let component: ModifierFoyerComponent;
  let fixture: ComponentFixture<ModifierFoyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierFoyerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierFoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
