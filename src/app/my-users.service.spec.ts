import { TestBed, inject } from '@angular/core/testing';

import { MyUsersService } from './my-users.service';

describe('MyUsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyUsersService]
    });
  });

  it('should be created', inject([MyUsersService], (service: MyUsersService) => {
    expect(service).toBeTruthy();
  }));
});
