import { KGSlot } from './kgslot';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGTextSlot
 */
export class KGTextSlot extends KGSlot {
  public textSlotValue?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGTextSlot';
  }

  /**
   * Get property definitions for KGTextSlot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasTextSlotValue',
        tsPropertyName: 'textSlotValue',
        type: 'string',
        required: false
      }
    ];
  }


}
