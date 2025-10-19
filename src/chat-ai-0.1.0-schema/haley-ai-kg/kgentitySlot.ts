import { KGSlot } from './kgslot';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGEntitySlot
 */
export class KGEntitySlot extends KGSlot {
  /** URI reference to one of: KGEntity, KGEntityMention */
  public entitySlotValue?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGEntitySlot';
  }

  /**
   * Get property definitions for KGEntitySlot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasEntitySlotValue',
        tsPropertyName: 'entitySlotValue',
        type: 'http://vital.ai/ontology/haley-ai-kg#KGEntity | http://vital.ai/ontology/haley-ai-kg#KGEntityMention',
        required: false,
        format: 'uri'
      }
    ];
  }


}
