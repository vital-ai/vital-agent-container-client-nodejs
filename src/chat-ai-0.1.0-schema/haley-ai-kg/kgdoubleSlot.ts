import { KGSlot } from './kgslot';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGDoubleSlot
 */
export class KGDoubleSlot extends KGSlot {
  public doubleSlotValue?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGDoubleSlot';
  }

  /**
   * Get property definitions for KGDoubleSlot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasDoubleSlotValue',
        tsPropertyName: 'doubleSlotValue',
        type: 'number',
        required: false,
        format: 'double'
      }
    ];
  }


}
