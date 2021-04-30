import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixArmePrincipaleComponent } from './choix-arme-principale.component';

describe('ChoixArmePrincipaleComponent', () => {
  let component: ChoixArmePrincipaleComponent;
  let fixture: ComponentFixture<ChoixArmePrincipaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoixArmePrincipaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixArmePrincipaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
