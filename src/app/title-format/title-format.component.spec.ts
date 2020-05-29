import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleFormatComponent } from './title-format.component';

describe('TitleFormatComponent', () => {
  let component: TitleFormatComponent;
  let fixture: ComponentFixture<TitleFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
