import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter/counter.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { ButtonsComponent } from './counter/buttons/buttons.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/state/counter.reducer';
import { MycountComponent } from './counter1/mycount/mycount.component';
import { MycountCoutputComponent } from './counter1/mycount-coutput/mycount-coutput.component';
import { MybuttonComponent } from './counter1/mybutton/mybutton.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomCounterInputComponent } from './counter/custom-counter-input/custom-counter-input.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './counter/header/header.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { appReducer } from './store/app.state';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';
@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterOutputComponent,
    ButtonsComponent,
    MycountComponent,
    MycountCoutputComponent,
    MybuttonComponent,
    CustomCounterInputComponent,
    HomeComponent,
    HeaderComponent,
    PostsListComponent,
    AddPostComponent,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    // StoreModule.forRoot({counter: counterReducer,posts:postsReducer}),
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,  // Restrict extension to Log-only m
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
} 