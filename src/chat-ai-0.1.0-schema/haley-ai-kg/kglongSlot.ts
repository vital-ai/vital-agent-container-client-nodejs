import { KGSlot } from './kgslot';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGLongSlot
 */
export class KGLongSlot extends KGSlot {
  public longSlotValue?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGLongSlot';
  }

  /**
   * Get property definitions for KGLongSlot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasLongSlotValue',
        tsPropertyName: 'longSlotValue',
        type: 'number',
        required: false
      }
    ];
  }


}
