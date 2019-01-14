import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendadorLuceneComponent } from './recomendador-lucene.component';

describe('RecomendadorLuceneComponent', () => {
  let component: RecomendadorLuceneComponent;
  let fixture: ComponentFixture<RecomendadorLuceneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecomendadorLuceneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomendadorLuceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
