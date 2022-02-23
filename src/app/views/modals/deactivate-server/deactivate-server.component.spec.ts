import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeactivateServerComponent } from './deactivate-server.component';

describe('DeactivateServerComponent', () => {
  let component: DeactivateServerComponent;
  let fixture: ComponentFixture<DeactivateServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeactivateServerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeactivateServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
