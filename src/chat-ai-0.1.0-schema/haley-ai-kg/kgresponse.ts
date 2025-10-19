import { KGElement } from './kgelement';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGResponse
 */
export class KGResponse extends KGElement {
  public kGRequestURI?: string;
  public kGResponseType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGResponse';
  }

  /**
   * Get property definitions for KGResponse
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRequestURI',
        tsPropertyName: 'kGRequestURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGResponseType',
        tsPropertyName: 'kGResponseType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
