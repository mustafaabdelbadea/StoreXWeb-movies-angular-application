import { Component, Input, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  movie!: any;
  constructor(public config: DynamicDialogConfig, private movieService: MoviesService, public ref: DynamicDialogRef
    ) { }

  ngOnInit(): void {
    this.movie = this.config.data?.movie;
  }


  deleteMovie() {
    const inputs = {
      ...this.movie,
      _method: "delete"
    }
    this.movieService.deleteMovie(inputs, this.movie.id).subscribe((output) => {
      this.ref.close(this.movie.id)
    })
  }
}
