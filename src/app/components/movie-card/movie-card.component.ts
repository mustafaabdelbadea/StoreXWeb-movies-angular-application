import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EditMovieComponent } from '../edit-movie/edit-movie.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
  providers: [DialogService]
})
export class MovieCardComponent implements OnInit {
  @Input() movies: any;
  @Output() newMovies = new EventEmitter<any>();

  ref!: DynamicDialogRef;
  constructor( public dialogService: DialogService) { }

  ngOnInit(): void {
  }

  editMovie(movie: any) {
   this.ref = this.dialogService.open(EditMovieComponent, {
      width: '70%',
      contentStyle: { 'max-height': '600px', overflow: 'auto' },
      baseZIndex: 10000,
      dismissableMask: true,
      data: {
        movie
      }
    })

    this.ref.onClose.subscribe((id: string) =>{
      if (id) {
        this.movies = this.movies.filter((movie: any) => {
          return movie != id
        })

        this.newMovies.emit(this.movies)
      }
  }) }
}
