import { MovieService } from 'src/app/shared/services/movie.service';
import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { MaxWinIntervalTableComponent } from './max-win-interval-table/max-win-interval-table.component';
import { MinWinIntervalTableComponent } from './min-win-interval-table/min-win-interval-table.component';
import { ParamEnums } from 'src/app/shared/enum/ParamEnums';

@Component({
  selector: 'app-win-interval',
  templateUrl: './win-interval.component.html',
  styleUrls: ['./win-interval.component.css'],
})
export class WinIntervalComponent implements OnInit {
  @ViewChild(MaxWinIntervalTableComponent)
  maxWinIntervalTableComponent!: MaxWinIntervalTableComponent;
  @ViewChild(MinWinIntervalTableComponent)
  minWinIntervalTableComponent!: MinWinIntervalTableComponent;

  constructor(public movieService: MovieService) {}

  ngOnInit(): void {
    this.setUpDefaultTables();
  }

  public async setUpDefaultTables(): Promise<void> {
    this.movieService
      .getMoviesByProjection(ParamEnums.MAX_MIN_INTERVAL_WIN)
      .subscribe((data: any) => {
        this.maxWinIntervalTableComponent.setDataSource(data['max']);
        this.minWinIntervalTableComponent.setDataSource(data['min']);
      });
  }
}
