import { KGElement } from './kgelement';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGRequest
 */
export class KGRequest extends KGElement {
  public kGRequestType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGRequest';
  }

  /**
   * Get property definitions for KGRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRequestType',
        tsPropertyName: 'kGRequestType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
