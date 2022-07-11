import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('#getStudent should return value from observable',
  (done: DoneFn) => {
  service.getStudents().subscribe((value: any) => {
    expect(typeof value).toBe('object');
    done();
  });
});
  it('#getID should return number from the service', () => {
    service = new UserService();
    expect(typeof service.getID()).toBe('number');
  });
});
