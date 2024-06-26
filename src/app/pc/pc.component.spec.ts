import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcComponent } from './pc.component';

describe('PcComponent', () => {
  let component: PcComponent;
  let fixture: ComponentFixture<PcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
