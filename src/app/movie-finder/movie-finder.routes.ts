import { MovieFinderContainer } from './containers/movie-finder.container';

export const routing = ($stateProvider: angular.ui.IStateProvider) => {
  'ngInject';
  $stateProvider

    .state('movie-finder', {
      parent: 'app',
      url: '/movie-finder',
      component: MovieFinderContainer.selector
    });
};
