import { Card } from './card';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#GridResultsList
 */
export class GridResultsList extends Card {
  public searchString?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#GridResultsList';
  }

  /**
   * Get property definitions for GridResultsList
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSearchString',
        tsPropertyName: 'searchString',
        type: 'string',
        required: false
      }
    ];
  }


}
