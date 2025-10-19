import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-ml#HaleyIntentSlotInstance
 */
export class HaleyIntentSlotInstance extends VITAL_Node {
  public haleyIntentSlotEndRange?: number;
  public haleyIntentSlotTypeURI?: string;
  public haleyIntentSlotScore?: number;
  public haleyIntentSlotStartRange?: number;
  public haleyIntentSlotContent?: string;
  public haleyIntentSlotURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-ml#HaleyIntentSlotInstance';
  }

  /**
   * Get property definitions for HaleyIntentSlotInstance
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-ml#hasHaleyIntentSlotEndRange',
        tsPropertyName: 'haleyIntentSlotEndRange',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-ml#hasHaleyIntentSlotTypeURI',
        tsPropertyName: 'haleyIntentSlotTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-ml#hasHaleyIntentSlotScore',
        tsPropertyName: 'haleyIntentSlotScore',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-ml#hasHaleyIntentSlotStartRange',
        tsPropertyName: 'haleyIntentSlotStartRange',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-ml#hasHaleyIntentSlotContent',
        tsPropertyName: 'haleyIntentSlotContent',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-ml#hasHaleyIntentSlotURI',
        tsPropertyName: 'haleyIntentSlotURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
