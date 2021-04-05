import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHeaderComponent } from './page-header.component';

describe('PageHeaderComponent', () => {
  let component: PageHeaderComponent;
  let fixture: ComponentFixture<PageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHeaderComponent);
    component = fixture.componentInstance;
    component.header = 'Movies';
    component.centered = true;
    component.description = 'This is the page description';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render proper header', () => {
    expect(component.header).toBe(component.header);
  });
  it('should render proper centered', () => {
    expect(component.centered).toBe(component.centered);
  });

  it('should render proper description', () => {
    expect(component.description).toBe(component.description);
  });
});
