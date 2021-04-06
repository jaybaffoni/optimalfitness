import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColumnPanelComponent } from './two-column-panel.component';

describe('TwoColumnPanelComponent', () => {
  let component: TwoColumnPanelComponent;
  let fixture: ComponentFixture<TwoColumnPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoColumnPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoColumnPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
