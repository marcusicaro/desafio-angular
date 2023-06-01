import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { APIProductsRoot } from '../api-services/products.service.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class CrudService {
	constructor(private http: HttpClient) {}

	public getSmartphones(): Observable<any> {
		return this.http.get('https://dummyjson.com/products/category/smartphones');
	}

	public getLaptops(): Observable<any> {
		return this.http.get('https://dummyjson.com/products/category/laptops');
	}
}
