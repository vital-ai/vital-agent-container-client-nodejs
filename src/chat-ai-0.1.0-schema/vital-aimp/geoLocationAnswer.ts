import { Answer } from './answer';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#GeoLocationAnswer
 */
export class GeoLocationAnswer extends Answer {
  declare public geolocation?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#GeoLocationAnswer';
  }

  /**
   * Get property definitions for GeoLocationAnswer
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasGeolocation',
        tsPropertyName: 'geolocation',
        type: 'string',
        required: false
      }
    ];
  }


}
