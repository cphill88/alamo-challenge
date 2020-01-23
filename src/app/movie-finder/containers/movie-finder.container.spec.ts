import * as angular from 'angular';
import 'angular-mocks';
import { MovieFinderContainer } from './movie-finder.container';

describe('Movie finder container', () => {
    let _alamoService = {
        getAll: jasmine.createSpy('getAll')
    };

    let _$state = {
        go: jasmine.createSpy('go')
    };

    beforeEach(() => {
        angular
            .module('app', [])
            .component(MovieFinderContainer.selector, MovieFinderContainer)
            .value('alamoService', _alamoService);
        angular.mock.module('app');
    });

    it('should exist', angular.mock.inject(($componentController: any) => {
        const component = $componentController(MovieFinderContainer.selector, {}, {});

        expect(component).toBeDefined();
    }));

    it('should call `alamoService.getAll` on init', angular.mock.inject((
        $componentController: any,
        alamoService: any,
        $q: angular.IQService) => {
        const component = $componentController(MovieFinderContainer.selector, {}, {});
        _alamoService.getAll.and.returnValue($q.resolve());
        component.$onInit();

        expect(alamoService.getAll).toHaveBeenCalled();
    }));
});
