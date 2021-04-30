import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparerPlayerComponent } from './preparer-player.component';

describe('PreparerPlayerComponent', () => {
  let component: PreparerPlayerComponent;
  let fixture: ComponentFixture<PreparerPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreparerPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparerPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
