import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGPointer
 */
export class KGPointer extends VITAL_Node {
  /** URI reference to one of: KGNode, Edge_hasKGEdge */
  public kGPointerURI?: string;
  /** URI reference to one of: KGNode, Edge_hasKGEdge */
  public kGPointerNextURI?: string;
  /** URI reference to one of: KGNode, Edge_hasKGEdge */
  public kGPointerPriorURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGPointer';
  }

  /**
   * Get property definitions for KGPointer
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGPointerURI',
        tsPropertyName: 'kGPointerURI',
        type: 'http://vital.ai/ontology/haley-ai-kg#KGNode | http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGPointerNextURI',
        tsPropertyName: 'kGPointerNextURI',
        type: 'http://vital.ai/ontology/haley-ai-kg#KGNode | http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGPointerPriorURI',
        tsPropertyName: 'kGPointerPriorURI',
        type: 'http://vital.ai/ontology/haley-ai-kg#KGNode | http://vital.ai/ontology/haley-ai-kg#Edge_hasKGEdge',
        required: false,
        format: 'uri'
      }
    ];
  }


}
