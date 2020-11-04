import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EletronicsComponent } from './eletronics.component';

describe('EletronicsComponent', () => {
  let component: EletronicsComponent;
  let fixture: ComponentFixture<EletronicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EletronicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EletronicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
