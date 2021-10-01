import { MovieService } from './../../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  movieDetail: any;

  constructor(
    private activateRoute: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe((param) => {
      console.log(param.movieId);
      // call api movieDetail
      this.movieService.fetchMovieDetail(param.movieId).subscribe(
        (data) => {
          console.log(data);
          this.movieDetail = data.content;
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }
}
