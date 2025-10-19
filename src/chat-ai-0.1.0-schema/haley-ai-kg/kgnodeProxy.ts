import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGNodeProxy
 */
export class KGNodeProxy extends VITAL_Node {
  public kGNodeReferenceURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGNodeProxy';
  }

  /**
   * Get property definitions for KGNodeProxy
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGNodeReferenceURI',
        tsPropertyName: 'kGNodeReferenceURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
