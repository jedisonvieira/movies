import { HttpClient, HttpParams } from '@angular/common/http';
import { MovieParam } from '../interfaces/movie-param';
import { ParamEnums } from '../enum/ParamEnums';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  public url: string = 'https://tools.texoit.com/backend-java/api/movies';

  constructor(public http: HttpClient) {}

  public getMovies(param: MovieParam): Observable<any> {
    const params: HttpParams = new HttpParams()
      .set('page', param.page ? param.page : ParamEnums.DEFAULT_PAGE)
      .set('size', param.size ? param.size : ParamEnums.DEFAULT_SIZE)
      .set('year', param.year ? param.year : ParamEnums.DEFAULT_YEAR)
      .set('winner', param.winner ? param.winner : ParamEnums.DEFAULT_WINNER);

    return this.http.get(this.url, { params });
  }

  public getMoviesByProjection(projectionValue: string): Observable<any> {
    const params: HttpParams = new HttpParams().set(
      'projection',
      projectionValue
    );

    return this.http.get(this.url, { params });
  }
}
