import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MovieService } from 'src/app/shared/services/movie.service';
import { MovieParam } from 'src/app/shared/interfaces/movie-param';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Movie } from '../../../shared/interfaces/movie';

@Component({
  selector: 'app-movies-table',
  templateUrl: './movies-table.component.html',
  styleUrls: ['./movies-table.component.css', '../../../shared/css/table.css'],
})
export class MoviesTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public dataSource!: MatTableDataSource<Movie>;
  public displayedColumns: string[] = ['id', 'year', 'title', 'winner'];

  constructor(public movieService: MovieService) {}

  ngOnInit(): void {
    this.setUpDefaultTable();
  }

  public async setUpDefaultTable(): Promise<void> {
    await this.setUpTable({});
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
