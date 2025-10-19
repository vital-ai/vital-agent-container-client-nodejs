import { KGSlot } from './kgslot';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGChoiceSlot
 */
export class KGChoiceSlot extends KGSlot {
  public choiceSlotValue?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGChoiceSlot';
  }

  /**
   * Get property definitions for KGChoiceSlot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasChoiceSlotValue',
        tsPropertyName: 'choiceSlotValue',
        type: 'string',
        required: false
      }
    ];
  }


}
