import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundRaisingComponent } from './fund-raising.component';

describe('FundRaisingComponent', () => {
  let component: FundRaisingComponent;
  let fixture: ComponentFixture<FundRaisingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundRaisingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundRaisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
