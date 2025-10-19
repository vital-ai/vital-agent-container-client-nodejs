import { Card } from './card';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ProgressObject
 */
export class ProgressObject extends Card {
  public progress?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#ProgressObject';
  }

  /**
   * Get property definitions for ProgressObject
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasProgress',
        tsPropertyName: 'progress',
        type: 'number',
        required: false,
        format: 'double'
      }
    ];
  }


}
