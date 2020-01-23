/**
 * Import the Component styles
 */
import './cinema-list.component.scss';

class CinemaListController {
  cinemas: { id: number, name: string }[];
  films: { cinemaId: number, filmName: string, filmSlug: string}[];
  selectedFilms: { cinemaId: number, filmName: string, filmSlug: string}[];
  cinemaName: string;

  getFilms(event: any, cinemaName: string) {
    const set = new Set();
    const id = event.target.id;
    this.cinemaName = cinemaName;
    this.selectedFilms = this.films.filter(film => film.cinemaId === id);
    this.selectedFilms = this.selectedFilms.filter(obj => !set.has(obj[`filmName`]) && set.add(obj[`filmName`]));
  }
}

export class CinemaList implements angular.IComponentOptions {
  static selector = 'cinemaList';
  static bindings = {
    films: '<',
    cinemas: '<'
  };
  static controller = CinemaListController;
  static template = `
  <div class="cinema-list-container">
    <div class="label">SELECT THEATER</div>
    <div class="cinema-list-flex">
      <div class="cinema-list" ng-repeat="cinema in $ctrl.cinemas">
            <a id="{{cinema.id}}" ng-click="$ctrl.getFilms($event, cinema.name)">{{ cinema.name }}</a>
      </div>
    </div>
  </div>
  <div class="film-list-container">
    <div class="label">FILMS PLAYING AT <span class="cinema-name">{{$ctrl.cinemaName}}</span></div>
    <div class="film-list-flex">
      <div class="film-list" ng-repeat="selectedFilm in $ctrl.selectedFilms">
            <a href="https://drafthouse.com/show/{{selectedFilm.filmSlug}}" target="_blank">{{selectedFilm.filmName}}</a>
            <div class="cart"></div>
      </div>
    </div>
  </div>
  `;
}
