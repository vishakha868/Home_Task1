import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRoute } from '@angular/router';

import { RouterTestingModule } from '@angular/router/testing';



import { ManageComponent } from './manage.component';



describe('ManageComponent', () => {

  let component: ManageComponent;

  let fixture: ComponentFixture<ManageComponent>;



  beforeEach(async () => {

    await TestBed.configureTestingModule({

      declarations: [ ManageComponent ],

      imports: [RouterTestingModule],

      providers:

      [

        {

          provide: ActivatedRoute,

          useValue: {

            snapshot: {params: {id: '1'}}

          }

        }

      ]

    })

    .compileComponents();



    fixture = TestBed.createComponent(ManageComponent);

    component = fixture.componentInstance;

    fixture.detectChanges();

  });



  it('should create', () => {

    expect(component).toBeTruthy();

  });

});