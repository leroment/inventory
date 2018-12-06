import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { IProduct } from '../shared/models/inventory.model';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseUrl: string = 'http://localhost:1572/api/products';

  constructor(private http: Http) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get(this.baseUrl)
      .pipe(map((res: Response) => {
        let products = res.json();
        return products;
      }),
      catchError(this.handleError));
  }

  getProduct(id: string): Observable<IProduct> {
    return this.http.get(this.baseUrl + '/' + id)
      .pipe(map((res: Response) => res.json()),
      catchError(this.handleError));
  }
  
  insertProduct(product: IProduct) : Observable<IProduct> {
    return this.http.post(this.baseUrl, product)
      .pipe(map((res: Response) => {
        const data = res.json();
        console.log('insertProduct status: ' + data.status);
        return data.product;
      }),
      catchError(this.handleError));
  }

  private handleError(error: any) {
    console.error('server error:', error);
    if (error instanceof Response)
    {
      let errMessage = '';
      try {
        errMessage = error.json().error;
      } catch(err) {
        errMessage = error.statusText;
      }
      return Observable.throw(errMessage);
    }
    return Observable.throw(error || 'ASP.NET Core server error');
  }
}
