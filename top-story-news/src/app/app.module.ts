import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNewsFeedApiService } from './top-news-feed-api.service';
import { provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
 

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    AppRoutingModule,
    CommonModule
  ],
  providers: [TopNewsFeedApiService, provideHttpClient()],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
