import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from 'ionic-angular'; 

import {
    ExternalComponent
} from './'; 

let components = [
    ExternalComponent
];

@NgModule({
	declarations: components,
	exports: components,
	imports: [
		IonicModule
	],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	]
})
export class ExternalComponentsModule { }  