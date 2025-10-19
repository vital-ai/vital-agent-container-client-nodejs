import { PropertyFact } from './propertyFact';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#GeoLocationPropertyFact
 */
export class GeoLocationPropertyFact extends PropertyFact {
  declare public geolocation?: string;
  public address?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#GeoLocationPropertyFact';
  }

  /**
   * Get property definitions for GeoLocationPropertyFact
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasGeolocation',
        tsPropertyName: 'geolocation',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAddress',
        tsPropertyName: 'address',
        type: 'string',
        required: false
      }
    ];
  }


}
