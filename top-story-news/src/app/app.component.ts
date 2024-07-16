import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Story } from './story.model';
import { TopNewsFeedApiService } from './top-news-feed-api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'top-story-news';
  stories: Story[] = [];
  loading: boolean = true;

  constructor(private topNewsFeedApiService: TopNewsFeedApiService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.topNewsFeedApiService.getTopStories().subscribe({
      next: value => { 
        this.stories = value; 
        this.loading = false; 
        this.spinner.hide();
      },
      error: err => console.error('Observable emitted an error: ' + err),
      complete: () => console.log('Observable emitted the complete notification')
    });
    
    //   data => {
    //     this.stories = data;
    //     this.loading = false;
    //     this.spinner.hide();
    //   },
    //   error => {
    //     console.error('Error fetching stories', error);
    //     this.loading = false;
    //     this.spinner.hide();
    //   }
    // );
  }
}
