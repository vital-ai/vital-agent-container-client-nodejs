import { KGNode } from './kgnode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGIPAddress
 */
export class KGIPAddress extends KGNode {
  public kGIPAddress?: string;
  public kGIPAddressJSON?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGIPAddress';
  }

  /**
   * Get property definitions for KGIPAddress
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGIPAddress',
        tsPropertyName: 'kGIPAddress',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGIPAddressJSON',
        tsPropertyName: 'kGIPAddressJSON',
        type: 'string',
        required: false
      }
    ];
  }


}
