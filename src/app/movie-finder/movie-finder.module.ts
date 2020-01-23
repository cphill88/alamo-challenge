// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';

/**
 * Import Module Components
 */
import { CinemaList } from './components/cinema-list.component';

/**
 * Import Module Containers
 */
import { MovieFinderContainer } from './containers/movie-finder.container';

/**
 * Import Module Services
 */
import { AlamoService } from './services/alamo.service';

/**
 * Import Module Routing
 */
import { routing } from './movie-finder.routes';

export const moduleName =
  angular.module('application.movie-finder', [
      'ui.router'
  ])

  /**
   * Register Module Components
   */
  .component(CinemaList.selector, CinemaList)

  /**
   * Register Module Containers
   */
  .component(MovieFinderContainer.selector, MovieFinderContainer)

  /**
   * Register Module Services
   */
  .service(AlamoService.selector, AlamoService)

  /**
   * Register Module Configuration
   */
  .config(routing)
  .name;
