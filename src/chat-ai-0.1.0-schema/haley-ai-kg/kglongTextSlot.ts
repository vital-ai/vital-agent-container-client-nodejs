import { KGSlot } from './kgslot';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGLongTextSlot
 */
export class KGLongTextSlot extends KGSlot {
  public longTextSlotValue?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGLongTextSlot';
  }

  /**
   * Get property definitions for KGLongTextSlot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasLongTextSlotValue',
        tsPropertyName: 'longTextSlotValue',
        type: 'string',
        required: false
      }
    ];
  }


}
