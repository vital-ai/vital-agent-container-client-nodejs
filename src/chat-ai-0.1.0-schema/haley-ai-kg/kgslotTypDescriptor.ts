import { KGDescriptor } from './kgdescriptor';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGSlotTypDescriptor
 */
export class KGSlotTypDescriptor extends KGDescriptor {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGSlotTypDescriptor';
  }

  /**
   * Get property definitions for KGSlotTypDescriptor
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
