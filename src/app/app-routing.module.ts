import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsComponent } from './forms/forms.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { ReviewComponent } from './components/review/review.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TheaterComponent } from './components/theater/theater.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'theater', component: TheaterComponent },
  { path: 'review', component: ReviewComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'movie-detail/:movieId', component: MovieDetailComponent },
  { path: 'forms', component: FormsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
