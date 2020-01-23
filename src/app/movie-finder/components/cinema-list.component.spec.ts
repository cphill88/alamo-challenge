import * as angular from 'angular';
import 'angular-mocks';
import { CinemaList } from './cinema-list.component';

describe('ContactList component', () => {
  beforeEach(() => {
    angular
      .module('app', [])
      .component(CinemaList.selector, CinemaList);
    angular.mock.module('app');
  });

  it('should exist', angular.mock.inject(($componentController: any) => {
    const component = $componentController(CinemaList.selector, {}, {});

    expect(component).toBeDefined();
  }));
});
