import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { environment } from 'src/environments/environment.development';
import { UpdateCategoryRequest } from '../models/update-category-request.model';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  ApiBaseUrl = environment.apiBaseUrl;
  private cookieService =inject(CookieService);
  private http = inject(HttpClient);

  // addCategory(model: AddCategoryRequest): Observable<void> {
  //   return this.http.post<void>(this.ApiBaseUrl+'/api/categories', model);
  // }

  
  addCategory(model: AddCategoryRequest): Observable<void> {
    return this.http.post<void>(`${environment.apiBaseUrl}/api/categories?addAuth=true`, model);
  }

  getAllCategories(query?: string, sortBy?: string, 
    sortDirection?: string, pageNumber?: number, pageSize?: number): Observable<Category[]> {
    let params = new HttpParams();
    if (query) {
      params = params.set('query', query)
    }
    if (sortBy) {
      params = params.set('sortBy', sortBy)
    }
    if (sortDirection) {
      params = params.set('sortDirection', sortDirection)
    }
    if (pageNumber) {
      params = params.set('pageNumber', pageNumber)
    }
    if (pageSize) {
      params = params.set('pageSize', pageSize)
    }
    return this.http.get<Category[]>(`${environment.apiBaseUrl}/api/categories`, {
      params: params
    });
  }
  
  getCategoryById(id: string): Observable<Category> {
    return this.http.get<Category>(`${environment.apiBaseUrl}/api/categories/${id}`);
  }

  updateCategory(id: string, updateCategoryRequest: UpdateCategoryRequest) : Observable<Category> {
    return this.http.put<Category>(`${environment.apiBaseUrl}/api/categories/${id}?addAuth=true`, updateCategoryRequest);
  }

  deleteCategory(id: string) : Observable<Category> {
    return this.http.delete<Category>(`${environment.apiBaseUrl}/api/categories/${id}?addAuth=true`)
  }

  getCategoryCount(): Observable<number> {
    return this.http.get<number>(`${environment.apiBaseUrl}/api/categories/count`);
  }
}
