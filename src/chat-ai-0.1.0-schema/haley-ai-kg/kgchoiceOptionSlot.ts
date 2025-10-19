import { KGSlot } from './kgslot';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGChoiceOptionSlot
 */
export class KGChoiceOptionSlot extends KGSlot {
  public choiceSlotOptionValues?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGChoiceOptionSlot';
  }

  /**
   * Get property definitions for KGChoiceOptionSlot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasChoiceSlotOptionValues',
        tsPropertyName: 'choiceSlotOptionValues',
        type: 'string',
        required: false
      }
    ];
  }


}
