import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Movie } from 'src/app/shared/interfaces/movie';
import { MovieParam } from 'src/app/shared/interfaces/movie-param';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-winner-movie-table',
  templateUrl: './winner-movie-table.component.html',
  styleUrls: [
    './winner-movie-table.component.css',
    '../../../../../shared/css/table.css',
  ],
})
export class WinnerMovieTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public dataSource!: MatTableDataSource<Movie>;
  public displayedColumns: string[] = ['id', 'year', 'title'];

  constructor(public movieService: MovieService) {}

  ngOnInit(): void {
    this.setUpDefaultTable();
  }

  public async setUpDefaultTable(): Promise<void> {
    await this.setUpTable({
      winner: 'true',
    });
  }

  public async setUpTable(params: MovieParam): Promise<void> {
    this.movieService.getMovies(params).subscribe((data: any) => {
      this.setDataSource(data['content']);
    });
  }

  public async setDataSource(movies: Movie[]): Promise<void> {
    this.dataSource = new MatTableDataSource(movies);
    this.dataSource.paginator = this.paginator;
  }
}
