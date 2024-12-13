import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HibaFelvitelComponent } from './hiba-felvitel.component';

describe('HibaFelvitelComponent', () => {
  let component: HibaFelvitelComponent;
  let fixture: ComponentFixture<HibaFelvitelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HibaFelvitelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HibaFelvitelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
