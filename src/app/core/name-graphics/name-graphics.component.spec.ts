import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameGraphicsComponent } from './name-graphics.component';

describe('NameGraphicsComponent', () => {
  let component: NameGraphicsComponent;
  let fixture: ComponentFixture<NameGraphicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameGraphicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameGraphicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
