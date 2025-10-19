import { KGNode } from './kgnode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGInstruction
 */
export class KGInstruction extends KGNode {
  public kGInstructionType?: string;
  public kGInstructionText?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGInstruction';
  }

  /**
   * Get property definitions for KGInstruction
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGInstructionType',
        tsPropertyName: 'kGInstructionType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGInstructionText',
        tsPropertyName: 'kGInstructionText',
        type: 'string',
        required: false
      }
    ];
  }


}
