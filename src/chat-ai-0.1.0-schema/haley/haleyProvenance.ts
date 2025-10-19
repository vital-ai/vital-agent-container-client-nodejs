import { Dataset } from '../vital-core/dataset';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyProvenance
 */
export class HaleyProvenance extends Dataset {
  declare public loginURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyProvenance';
  }

  /**
   * Get property definitions for HaleyProvenance
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasLoginURI',
        tsPropertyName: 'loginURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
