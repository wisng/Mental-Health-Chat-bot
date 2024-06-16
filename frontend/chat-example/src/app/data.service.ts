import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://localhost:8080'; // Replace with your backend API URL

  constructor(private http: HttpClient) { }



  // GET request
  postMessage(message: string, score: Array<number>, guid: string, msg_count: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'}),
      body: JSON.stringify({"message": message, "score": score, "guid": guid, "msg_count": msg_count})
    };
    console.log(httpOptions)
    return this.http.post<any>(`${this.apiUrl}/getMessage`, httpOptions)
      .pipe(
        catchError(this.handleError<any>('getData', []))
      );
  }

  // Error handling
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
