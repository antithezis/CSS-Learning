import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CypressHeaderComponent } from './cypress-header.component';

describe('CypressHeaderComponent', () => {
  let component: CypressHeaderComponent;
  let fixture: ComponentFixture<CypressHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CypressHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CypressHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
