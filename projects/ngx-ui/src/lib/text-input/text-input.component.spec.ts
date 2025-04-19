import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextInputComponent } from './text-input.component';
import { By } from '@angular/platform-browser';

describe('TextInputComponent (standalone)', () => {
  let fixture: ComponentFixture<TextInputComponent>;
  let component: TextInputComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextInputComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the placeholder', () => {
    component.placeholder = 'Test Placeholder';
    fixture.detectChanges();
    const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
    expect(inputEl.placeholder).toBe('Test Placeholder');
  });

  it('should emit valueChange on input', () => {
    spyOn(component.valueChange, 'emit');
    const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
    inputEl.value = 'Hello';
    inputEl.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.valueChange.emit).toHaveBeenCalledWith('Hello');
  });
});
