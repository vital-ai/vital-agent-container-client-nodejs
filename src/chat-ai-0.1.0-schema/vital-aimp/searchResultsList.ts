import { Card } from './card';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#SearchResultsList
 */
export class SearchResultsList extends Card {
  public searchString?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#SearchResultsList';
  }

  /**
   * Get property definitions for SearchResultsList
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
