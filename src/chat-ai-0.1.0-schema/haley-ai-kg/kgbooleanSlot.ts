import { KGSlot } from './kgslot';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGBooleanSlot
 */
export class KGBooleanSlot extends KGSlot {
  public booleanSlotValue?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGBooleanSlot';
  }

  /**
   * Get property definitions for KGBooleanSlot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasBooleanSlotValue',
        tsPropertyName: 'booleanSlotValue',
        type: 'boolean',
        required: false
      }
    ];
  }


}
