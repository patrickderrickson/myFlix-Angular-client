import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, catchError } from 'rxjs';
import { map } from 'rxjs/operators';

//Declaring the api url that will provide data for the client app
const apiUrl = 'https://frozen-sierra-28921.herokuapp.com/';
// Get token from local storage for requests
const token = localStorage.getItem('token');
// Get username from localStorage for URLs
const username = localStorage.getItem('user');

@Injectable({
  providedIn: 'root'
})
export class FetchApiDataService {
 
  constructor(private http: HttpClient) {
  }
 // Making the api call for the user registration endpoint
  public userRegistration(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http.post(apiUrl + 'users', userDetails).pipe(
    catchError(this.handleError)
    );
  }

  public userLogin(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http.post(apiUrl + `login`, userDetails).pipe(
      catchError(this.handleError)
    );
  }

  public getAllMovies(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'movies', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
      catchError(this.handleError)
    );
  }
    
    public getUser(Username: any): Observable<any> {
      const token = localStorage.getItem('token');
      const username = localStorage.getItem('user');
      return this.http
        .get(apiUrl + `users/${username}`, {
          headers: new HttpHeaders({
            Authorization: 'Bearer ' + token,
          })}).pipe(
            catchError(this.handleError)
          );
        }

  public getMovie(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'movies/:Title', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
      catchError(this.handleError)
    );
  }

  public getDirector(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'movies/director/:director', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
      catchError(this.handleError)
    );
  }

  public getGenre(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'movies/genre/:genre', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
      catchError(this.handleError)
    );
  }

  public getFavouriteMovies(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'users/:Username', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
      catchError(this.handleError)
    );
  }

  public addFavouriteMovie(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'users/:Username/movies/:MovieID', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
      catchError(this.handleError)
    );
  }

  public deleteFavouriteMovie(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'users/:Username/movies/:MovieID', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
      catchError(this.handleError)
    );
  }

  public editProfile(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'users/:Username', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
      catchError(this.handleError)
    );
  }

  public deleteProfile(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'users/:Username', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
      catchError(this.handleError)
    );
  }

private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Something bad happened; please try again later.');
  }
}