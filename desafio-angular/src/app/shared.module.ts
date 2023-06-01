import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Components } from './components/components.module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MaterialModules } from './material.module';

import { MAT_PAGINATOR_DEFAULT_OPTIONS } from '@angular/material/paginator';

@NgModule({
	declarations: [
		Components
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule,
		MaterialModules
	],
	exports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule,
		MaterialModules,

		Components
	],
	providers: [
		DatePipe,
		{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } },
		{ provide: MAT_PAGINATOR_DEFAULT_OPTIONS, useValue: { formFieldAppearance: 'fill' } },
	]
})
export class SharedModule { }
