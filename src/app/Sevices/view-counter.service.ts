import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { environment } from '../Environment/environment.service';

@Injectable({
  providedIn: 'root'
})

export class ViewCounterService {
  public apiurl = environment.apiUrl + 'Serviceproviders'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  updateViewCount(id: number): Observable<void> {
    // Send a POST request to update the view count in the database
    return this.http.put<void>(`${this.apiurl}/updateViewCount/${id}`, null);
  }

  private viewsMap: Map<number, number> = new Map<number, number>();

  getViewCount(id: number): number {
    return this.viewsMap.get(id) || 0;
  }

  incrementViewCount(id: number): void {
    const currentCount = this.viewsMap.get(id) || 0;
    this.viewsMap.set(id, currentCount + 1);

    // Update the view count in the database
    this.updateViewCount(id).subscribe(
      () => console.log('View count updated in the database'),
      error => console.error('Error updating view count in the database:', error)
    );
  }
}



