import { KGSlot } from './kgslot';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGIntegerSlot
 */
export class KGIntegerSlot extends KGSlot {
  public integerSlotValue?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGIntegerSlot';
  }

  /**
   * Get property definitions for KGIntegerSlot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasIntegerSlotValue',
        tsPropertyName: 'integerSlotValue',
        type: 'number',
        required: false
      }
    ];
  }


}
