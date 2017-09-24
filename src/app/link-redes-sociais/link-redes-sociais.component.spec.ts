import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkRedesSociaisComponent } from './link-redes-sociais.component';

describe('LinkRedesSociaisComponent', () => {
  let component: LinkRedesSociaisComponent;
  let fixture: ComponentFixture<LinkRedesSociaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkRedesSociaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkRedesSociaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
