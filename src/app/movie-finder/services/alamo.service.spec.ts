import * as angular from 'angular';
import 'angular-mocks';
import { AlamoService } from './alamo.service';

describe('Alamo container', () => {
  beforeEach(() => {
    angular
      .module('app', [])
      .service('alamoService', AlamoService);
    angular.mock.module('app');
  });

  it('should exist', angular.mock.inject((alamoService: AlamoService) => {
    expect(alamoService).toBeDefined();
  }));
});
