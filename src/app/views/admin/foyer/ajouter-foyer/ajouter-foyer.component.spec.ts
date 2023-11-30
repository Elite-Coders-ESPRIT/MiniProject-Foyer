import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterFoyerComponent } from './ajouter-foyer.component';

describe('AjouterFoyerComponent', () => {
  let component: AjouterFoyerComponent;
  let fixture: ComponentFixture<AjouterFoyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterFoyerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterFoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

