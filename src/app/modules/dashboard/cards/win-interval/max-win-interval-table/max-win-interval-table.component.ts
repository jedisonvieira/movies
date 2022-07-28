import { intervalProducer } from 'src/app/shared/interfaces/intervalProducer';
import { MatTableDataSource } from '@angular/material/table';
import { Component } from '@angular/core';

@Component({
  selector: 'app-max-win-interval-table',
  templateUrl: './max-win-interval-table.component.html',
  styleUrls: [
    './max-win-interval-table.component.css',
    '../../../../../shared/css/table.css',
  ],
})
export class MaxWinIntervalTableComponent {
  public dataSource!: MatTableDataSource<intervalProducer>;
  public displayedColumns: string[] = [
    'producer',
    'interval',
    'previousWin',
    'followingWin',
  ];

  constructor() {}

  public async setDataSource(intervals: intervalProducer[]): Promise<void> {
    this.dataSource = new MatTableDataSource(intervals);
  }
}
