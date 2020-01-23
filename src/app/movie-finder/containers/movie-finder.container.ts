import { AlamoService } from '../services/alamo.service';

/**
 * Import the Component styles
 */
import './movie-finder.container.scss';

class MovieFinderController {
  cinemas: { id: number, name: string }[];
  films: { cinemaId: number, filmName: string, filmSlug: string}[];
  selectedFilms: { cinemaId: number, filmName: string, filmSlug: string}[];

  constructor(
      private alamoService: AlamoService
  ) {
      'ngInject';
    }

  $onInit() {
    this.fetchData();
  }

  private fetchData() {
    this.alamoService.getAll()
      .then((data: any) => {
        this.cinemas = data.cinemas;
        this.films = data.films;
      });
  }

}

export class MovieFinderContainer implements angular.IComponentOptions {
  static selector = 'movieFinder';
  static controller = MovieFinderController;
  static template = `
  <div class="row">
    <h3 class="header-text">FIND A MOVIE</h3>
    <cinema-list films="$ctrl.films" cinemas="$ctrl.cinemas"></cinema-list>
  </div>
  `;
}
