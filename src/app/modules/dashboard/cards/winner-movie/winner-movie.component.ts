import { WinnerMovieTableComponent } from './winner-movie-table/winner-movie-table.component';
import { MovieParam } from 'src/app/shared/interfaces/movie-param';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-winner-movie',
  templateUrl: './winner-movie.component.html',
  styleUrls: ['./winner-movie.component.css'],
})
export class WinnerMovieComponent {
  @ViewChild(WinnerMovieTableComponent)
  winnerMovieTableComponent!: WinnerMovieTableComponent;

  public yearIpt!: number;

  constructor() {}

  public search(): void {
    if (this.yearIpt) {
      const params: MovieParam = {
        winner: 'true',
        year: this.yearIpt.toString(),
      };

      this.winnerMovieTableComponent.setUpTable(params);
    } else this.winnerMovieTableComponent.setUpDefaultTable();
  }
}
