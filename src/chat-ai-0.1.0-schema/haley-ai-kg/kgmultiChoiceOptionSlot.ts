import { KGSlot } from './kgslot';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGMultiChoiceOptionSlot
 */
export class KGMultiChoiceOptionSlot extends KGSlot {
  public multiChoiceSlotValues?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGMultiChoiceOptionSlot';
  }

  /**
   * Get property definitions for KGMultiChoiceOptionSlot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasMultiChoiceSlotValues',
        tsPropertyName: 'multiChoiceSlotValues',
        type: 'string',
        required: false
      }
    ];
  }


}
