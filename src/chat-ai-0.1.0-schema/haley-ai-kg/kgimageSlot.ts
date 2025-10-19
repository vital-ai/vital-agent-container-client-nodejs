import { KGSlot } from './kgslot';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGImageSlot
 */
export class KGImageSlot extends KGSlot {
  /** URI reference to one of: FileNode, KGImage */
  public imageSlotValue?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGImageSlot';
  }

  /**
   * Get property definitions for KGImageSlot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasImageSlotValue',
        tsPropertyName: 'imageSlotValue',
        type: 'http://vital.ai/ontology/vital#FileNode | http://vital.ai/ontology/haley-ai-kg#KGImage',
        required: false,
        format: 'uri'
      }
    ];
  }


}
