import { MultipleWinnersTableComponent } from './modules/dashboard/cards/multiple-winners/multiple-winners-table/multiple-winners-table.component';
import { MaxWinIntervalTableComponent } from './modules/dashboard/cards/win-interval/max-win-interval-table/max-win-interval-table.component';
import { MinWinIntervalTableComponent } from './modules/dashboard/cards/win-interval/min-win-interval-table/min-win-interval-table.component';
import { WinnerMovieTableComponent } from './modules/dashboard/cards/winner-movie/winner-movie-table/winner-movie-table.component';
import { TopStudiosTableComponent } from './modules/dashboard/cards/top-studios/top-studios-table/top-studios-table.component';
import { MultipleWinnersComponent } from './modules/dashboard/cards/multiple-winners/multiple-winners.component';
import { WinIntervalComponent } from './modules/dashboard/cards/win-interval/win-interval.component';
import { WinnerMovieComponent } from './modules/dashboard/cards/winner-movie/winner-movie.component';
import { TopStudiosComponent } from './modules/dashboard/cards/top-studios/top-studios.component';
import { MoviesTableComponent } from './modules/movies/movies-table/movies-table.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { MoviesComponent } from './modules/movies/movies.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MoviesComponent,
    DashboardComponent,
    MoviesTableComponent,
    MultipleWinnersTableComponent,
    TopStudiosTableComponent,
    WinnerMovieTableComponent,
    MultipleWinnersComponent,
    TopStudiosComponent,
    WinIntervalComponent,
    WinnerMovieComponent,
    MaxWinIntervalTableComponent,
    MinWinIntervalTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
