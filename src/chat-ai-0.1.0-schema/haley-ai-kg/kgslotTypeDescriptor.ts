import { KGDescriptor } from './kgdescriptor';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGSlotTypeDescriptor
 */
export class KGSlotTypeDescriptor extends KGDescriptor {
  public kGSlotType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGSlotTypeDescriptor';
  }

  /**
   * Get property definitions for KGSlotTypeDescriptor
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGSlotType',
        tsPropertyName: 'kGSlotType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
