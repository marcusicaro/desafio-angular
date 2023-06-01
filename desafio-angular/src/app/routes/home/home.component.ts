import { Component } from '@angular/core';
import { ProductsListComponent } from 'src/app/products-list/products-list.component';

@Component({
	standalone: true,
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	imports: [ProductsListComponent],
})
export class HomeComponent {}
