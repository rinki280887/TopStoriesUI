import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Story } from "./story.model";
import { Observable } from "rxjs/internal/Observable";
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize, tap } from 'rxjs/operators';


@Injectable({
  providedIn: "root",
})
export class TopNewsFeedApiService {
  
 private apiUrl = "https://localhost:44389/api/Stories ";
 
 constructor(private http: HttpClient, private spinner: NgxSpinnerService) { }

  getTopStories(): Observable<Story[]> {
    this.spinner.show();
    this.spinner.show();
    return this.http.get<Story[]>(this.apiUrl).pipe(
      tap(data => 
        
        console.log(data)
      ),
      finalize(() => this.spinner.hide())
    );
  }
}