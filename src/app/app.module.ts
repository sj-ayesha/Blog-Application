import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PostsComponent } from './pages/posts/posts.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { PostReducer } from './store/reducers/post.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsComponent,
    CarouselComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      post: PostReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
