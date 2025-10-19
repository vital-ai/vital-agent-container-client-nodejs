import { KGDescriptor } from './kgdescriptor';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGFrameTypeDescriptor
 */
export class KGFrameTypeDescriptor extends KGDescriptor {
  public kGFrameType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGFrameTypeDescriptor';
  }

  /**
   * Get property definitions for KGFrameTypeDescriptor
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGFrameType',
        tsPropertyName: 'kGFrameType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
