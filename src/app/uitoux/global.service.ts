import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  handleError(error: { error: { message: any; }; status: any; message: any; }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  baseURL = environment.apiUrl+'/v1'
  product = '/product'
  
  constructor(
    private http: HttpClient,
    ) { }

    productList(data: any): Observable<any> {
      return this.http.post<any>(`${this.baseURL}${this.product}/list`, data).pipe(
        retry(1),
        catchError(this.handleError)
      );
    }
}
