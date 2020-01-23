export class AlamoService {
    static selector = 'alamoService';
    cinemas: { id: number, name: string }[];
    films: { cinemaId: number, filmName: string, filmSlug: string}[];
    constructor(
        private $q: angular.IQService, private $http: angular.IHttpService
    ) {
      'ngInject';
    }

    getAll() {
        var deferred = this.$q.defer();
        this.$http({
            method: 'GET',
            url: 'https://drafthouse.com/s/mother/v1/page/market/main/austin'
            }).then(((response: any) => {
                console.log(response.data.data);
                this.cinemas = response.data.data.market.cinemas.map(
                    ({id, name}: {id: number, name: string}) => ({id, name}));

                this.films = response.data.data.sessions.map(
                    ({cinemaId, filmName, filmSlug}: {cinemaId: number, filmName: string, filmSlug: string}) =>
                    ({cinemaId, filmName, filmSlug}));

                    deferred.resolve({cinemas: this.cinemas, films: this.films});
            }), function errorCallback(response: any) {
                deferred.reject(response);
            });

        return deferred.promise;
    }
}
