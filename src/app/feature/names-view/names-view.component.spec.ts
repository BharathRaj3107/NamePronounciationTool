import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamesViewComponent } from './names-view.component';

describe('NamesViewComponent', () => {
  let component: NamesViewComponent;
  let fixture: ComponentFixture<NamesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NamesViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NamesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
