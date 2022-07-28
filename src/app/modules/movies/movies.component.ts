import { MoviesTableComponent } from './movies-table/movies-table.component';
import { MovieParam } from 'src/app/shared/interfaces/movie-param';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent {
  @ViewChild(MoviesTableComponent) movieTableComponent!: MoviesTableComponent;

  public yearIpt!: number;
  public winnerIpt!: string;

  constructor() {}

  public search(): void {
    const params: MovieParam = {};

    if (this.winnerIpt) params.winner = this.winnerIpt;
    if (this.yearIpt) params.year = this.yearIpt.toString();

    if (params) {
      this.movieTableComponent.setUpTable(params);
    } else this.movieTableComponent.setUpDefaultTable();
  }

  public yearSelect(value: string) {
    this.winnerIpt = value;
    this.search();
  }
}
