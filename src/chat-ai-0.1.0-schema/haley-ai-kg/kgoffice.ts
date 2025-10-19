import { KGNode } from './kgnode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGOffice
 */
export class KGOffice extends KGNode {
  public kGOfficeType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGOffice';
  }

  /**
   * Get property definitions for KGOffice
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGOfficeType',
        tsPropertyName: 'kGOfficeType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
