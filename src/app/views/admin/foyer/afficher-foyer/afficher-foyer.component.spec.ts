import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherFoyerComponent } from './afficher-foyer.component';

describe('AfficherFoyerComponent', () => {
  let component: AfficherFoyerComponent;
  let fixture: ComponentFixture<AfficherFoyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherFoyerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherFoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
