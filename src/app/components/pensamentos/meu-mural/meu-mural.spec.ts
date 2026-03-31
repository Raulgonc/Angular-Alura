import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuMural } from './meu-mural';

describe('MeuMural', () => {
  let component: MeuMural;
  let fixture: ComponentFixture<MeuMural>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeuMural],
    }).compileComponents();

    fixture = TestBed.createComponent(MeuMural);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
