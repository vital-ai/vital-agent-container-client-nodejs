import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-ml#HaleyIntentSlot
 */
export class HaleyIntentSlot extends VITAL_Node {
  public haleyIntentSlotTypeURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-ml#HaleyIntentSlot';
  }

  /**
   * Get property definitions for HaleyIntentSlot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-ml#hasHaleyIntentSlotTypeURI',
        tsPropertyName: 'haleyIntentSlotTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
