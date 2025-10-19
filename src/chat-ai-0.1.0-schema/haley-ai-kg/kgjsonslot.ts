import { KGSlot } from './kgslot';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGJSONSlot
 */
export class KGJSONSlot extends KGSlot {
  public jsonSlotValue?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGJSONSlot';
  }

  /**
   * Get property definitions for KGJSONSlot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasJsonSlotValue',
        tsPropertyName: 'jsonSlotValue',
        type: 'string',
        required: false
      }
    ];
  }


}
