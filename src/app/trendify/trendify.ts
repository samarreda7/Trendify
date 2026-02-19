import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { Movies } from '../movies';
import { Movie } from '../movie';
export interface SiteData {
  results: Movies[];
}
@Component({
  selector: 'app-trendify',
  standalone: true,
  imports: [],
  templateUrl: './trendify.html',
  styleUrl: './trendify.css',
})
export class Trendify implements OnInit {
  MoviesListt: Movies[] = [];
  private readonly Movie = inject(Movie);
  private cdr = inject(ChangeDetectorRef);
  ngOnInit(): void {
    this.getMovies();
  }
  getMovies(): void {
    this.Movie.getMovies().subscribe({
      next: (data: SiteData) => {
        this.MoviesListt = data.results;
        console.log(data.results);
        this.cdr.detectChanges();
      },
    });
  }
}
