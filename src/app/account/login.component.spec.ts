import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { LoginComponent } from './login.component';
import { AccountService } from '../_services/account.service';
import { AlertService } from '../_services/alert.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockRouter: any;
  let mockActivatedRoute: any;
  let mockAccountService: any;
  let mockAlertService: any;

  beforeEach(() => {
    mockRouter = {
      navigateByUrl: jest.fn()
    };
    mockActivatedRoute = {
      snapshot: {
        queryParams: {}
      }
    };
    mockAccountService = {
      login: jest.fn(() => of())
    };
    mockAlertService = {
      clear: jest.fn(),
      error: jest.fn()
    };

    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: AccountService, useValue: mockAccountService },
        { provide: AlertService, useValue: mockAlertService }
      ]
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate on successful login', () => {
    // Arrange
    const returnUrl = '/dashboard';
    mockActivatedRoute.snapshot.queryParams.returnUrl = returnUrl;

    // Act
    component.onSubmit();

    // Assert
    expect(mockRouter.navigateByUrl).toHaveBeenCalledWith(returnUrl);
  });

  it('should handle login error', () => {
    // Arrange
    const error = 'Invalid credentials';
    mockAccountService.login.mockReturnValueOnce(of(null).pipe(() => { throw new Error(error); }));

    // Act
    component.onSubmit();

    // Assert
    expect(mockAlertService.error).toHaveBeenCalledWith(error);
    expect(component.loading).toBeFalsy();
  });
});
