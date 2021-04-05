import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarViewComponent } from './toolbar-view.component';

describe('ToolbarViewComponent', () => {
  let component: ToolbarViewComponent;
  let fixture: ComponentFixture<ToolbarViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToolbarViewComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test output method on toggle value === on (should return off)', () => {

    component.dataDisplay.subscribe(value => {
      expect(value).toBe('off');
    });

    const event = {target:{value: 'on'}};
    component.onChange(event);
  });

  it('should test output method on toggle value === on (should return on)', () => {

    component.dataDisplay.subscribe(value => {
      expect(value).toBe('on');
    });

    const event = {target:{value: 'off'}};
    component.onChange(event);
  });
});
