import { KGSlot } from './kgslot';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGCurrencySlot
 */
export class KGCurrencySlot extends KGSlot {
  public currencySlotValue?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGCurrencySlot';
  }

  /**
   * Get property definitions for KGCurrencySlot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasCurrencySlotValue',
        tsPropertyName: 'currencySlotValue',
        type: 'number',
        required: false,
        format: 'double'
      }
    ];
  }


}
