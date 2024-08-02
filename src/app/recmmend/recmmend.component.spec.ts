import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecmmendComponent } from './recmmend.component';

describe('RecmmendComponent', () => {
  let component: RecmmendComponent;
  let fixture: ComponentFixture<RecmmendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecmmendComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecmmendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
