import { Component } from '@angular/core';

/**
 * Generated class for the ExternalComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'external-component',
  templateUrl: 'external-component.html'
})
export class ExternalComponent {

  text: string;

  constructor() {
    console.log('Hello ExternalComponent Component');
    this.text = 'External Component Loaded';
  }

}
