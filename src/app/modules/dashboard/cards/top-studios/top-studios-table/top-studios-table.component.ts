import { MovieService } from 'src/app/shared/services/movie.service';
import { WinCount } from 'src/app/shared/interfaces/winCount';
import { MatTableDataSource } from '@angular/material/table';
import { ParamEnums } from 'src/app/shared/enum/ParamEnums';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-studios-table',
  templateUrl: './top-studios-table.component.html',
  styleUrls: [
    './top-studios-table.component.css',
    '../../../../../shared/css/table.css',
  ],
})
export class TopStudiosTableComponent implements OnInit {
  public dataSource!: MatTableDataSource<WinCount>;
  public displayedColumns: string[] = ['name', 'winCount'];

  constructor(public movieService: MovieService) {}

  ngOnInit(): void {
    this.setUpDefaultTable();
  }

  public setUpDefaultTable(): void {
    this.movieService
      .getMoviesByProjection(ParamEnums.STUDIOS_WIN_COUNT)
      .subscribe((data: any) => {
        this.setDataSource(data['studios'].slice(0, 3));
      });
  }

  public setDataSource(wincounts: WinCount[]): void {
    this.dataSource = new MatTableDataSource(wincounts);
  }
}
