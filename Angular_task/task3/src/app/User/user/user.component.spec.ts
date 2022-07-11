import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should return type boolean',()=>{
    component.user={
        id:'1',
        firstName:'One',
        lastName:'User',
        age:21,
        login:'User1',
        password:'123',
        isDeleted:true
    
      }
    expect(typeof component.user.isDeleted).toBe("boolean");
  })
});
