import { MovieService } from './../../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/model/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  listMovie: Movie[] = [];
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.fetchAllMovie().subscribe(
      //success
      (data) => {
        // console.log(data);
        this.listMovie = data.content;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
