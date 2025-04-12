import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';
import { By } from '@angular/platform-browser';

describe('ButtonComponent (standalone)', () => {
  let fixture: ComponentFixture<ButtonComponent>;
  let component: ButtonComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the label', () => {
    component.label = 'Click Me';
    fixture.detectChanges();
    const buttonEl: HTMLButtonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(buttonEl.textContent).toContain('Click Me');
  });

  it('should emit buttonClick event when clicked', () => {
    spyOn(component.buttonClick, 'emit');
    const buttonEl: HTMLButtonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    buttonEl.click();
    expect(component.buttonClick.emit).toHaveBeenCalled();
  });

  it('should not emit buttonClick event when disabled', () => {
    component.disabled = true;
    fixture.detectChanges();
    spyOn(component.buttonClick, 'emit');
    const buttonEl: HTMLButtonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    buttonEl.click();
    expect(component.buttonClick.emit).not.toHaveBeenCalled();
  });
});
