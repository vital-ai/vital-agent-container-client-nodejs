import { KGSlot } from './kgslot';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGVideoSlot
 */
export class KGVideoSlot extends KGSlot {
  /** URI reference to one of: FileNode, KGVideo */
  public videoSlotValue?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGVideoSlot';
  }

  /**
   * Get property definitions for KGVideoSlot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasVideoSlotValue',
        tsPropertyName: 'videoSlotValue',
        type: 'http://vital.ai/ontology/vital#FileNode | http://vital.ai/ontology/haley-ai-kg#KGVideo',
        required: false,
        format: 'uri'
      }
    ];
  }


}
