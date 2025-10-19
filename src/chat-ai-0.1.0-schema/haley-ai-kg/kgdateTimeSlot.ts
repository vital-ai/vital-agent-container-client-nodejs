import { KGSlot } from './kgslot';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGDateTimeSlot
 */
export class KGDateTimeSlot extends KGSlot {
  public dateTimeSlotValue?: string | Date;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGDateTimeSlot';
  }

  /**
   * Get property definitions for KGDateTimeSlot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasDateTimeSlotValue',
        tsPropertyName: 'dateTimeSlotValue',
        type: 'string',
        required: false,
        format: 'date-time'
      }
    ];
  }


}
