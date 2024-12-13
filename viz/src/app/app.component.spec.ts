import { TestBed } from '@angular/core/testing';
<<<<<<< HEAD
=======
import { RouterModule } from '@angular/router';
>>>>>>> 6068181f0d2784576709de2e8bc77057d35755da
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
      imports: [AppComponent],
=======
      imports: [
        RouterModule.forRoot([])
      ],
      declarations: [
        AppComponent
      ],
>>>>>>> 6068181f0d2784576709de2e8bc77057d35755da
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

<<<<<<< HEAD
  it(`should have the 'viz' title`, () => {
=======
  it(`should have as title 'viz'`, () => {
>>>>>>> 6068181f0d2784576709de2e8bc77057d35755da
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('viz');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, viz');
  });
});
