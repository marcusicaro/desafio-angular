import { Component, Input } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { APIProductsRoot } from '../api-services/products.service.interface';
import { CrudService } from '../services/crud.service';
import { MaterialModules } from '../material.module';

@Component({
	standalone: true,
	selector: 'products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.scss'],
	imports: [CommonModule, JsonPipe, MaterialModules],
})
export class ProductsListComponent {
	@Input() tipodeproduto: string;
	smartphones: APIProductsRoot;
	laptops: APIProductsRoot;
	error: any;
	constructor(private crudService: CrudService) {
		this.getter();
	}
	getter() {
		this.crudService.getSmartphones().subscribe(
			(data: APIProductsRoot) => {
				this.smartphones = data;
			},
			(error: any) => {
				this.error = error;
				console.error('ERROR:', error);
			}
		);
		this.crudService.getLaptops().subscribe(
			(data: APIProductsRoot) => {
				this.laptops = data;
			},
			(error: any) => {
				this.error = error;
				console.error('ERROR:', error);
			}
		);
	}
}
