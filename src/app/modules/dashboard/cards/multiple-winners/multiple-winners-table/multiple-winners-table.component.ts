import { MultipleWinner } from 'src/app/shared/interfaces/multipleWinner';
import { MovieService } from 'src/app/shared/services/movie.service';
import { MatTableDataSource } from '@angular/material/table';
import { ParamEnums } from 'src/app/shared/enum/ParamEnums';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple-winners-table',
  templateUrl: './multiple-winners-table.component.html',
  styleUrls: [
    './multiple-winners-table.component.css',
    '../../../../../shared/css/table.css',
  ],
})
export class MultipleWinnersTableComponent implements OnInit {
  public dataSource!: MatTableDataSource<MultipleWinner>;
  public displayedColumns: string[] = ['year', 'winnerCount'];

  constructor(public movieService: MovieService) {}

  ngOnInit(): void {
    this.setUpDefaultTable();
  }

  public setUpDefaultTable(): void {
    this.movieService
      .getMoviesByProjection(ParamEnums.YEARS_WITH_MULTIPLE_WINNERS)
      .subscribe((data: any) => {
        this.setDataSource(data['years']);
      });
  }

  public setDataSource(wincounts: MultipleWinner[]): void {
    this.dataSource = new MatTableDataSource(wincounts);
  }
}
