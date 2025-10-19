import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGService
 */
export class KGService extends VITAL_Node {
  public kGServiceType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGService';
  }

  /**
   * Get property definitions for KGService
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGServiceType',
        tsPropertyName: 'kGServiceType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
