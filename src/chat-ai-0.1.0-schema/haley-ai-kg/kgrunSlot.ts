import { KGSlot } from './kgslot';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGRunSlot
 */
export class KGRunSlot extends KGSlot {
  /** URI reference to one of: KGRunDocument, FileNode */
  public runSlotValue?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGRunSlot';
  }

  /**
   * Get property definitions for KGRunSlot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasRunSlotValue',
        tsPropertyName: 'runSlotValue',
        type: 'http://vital.ai/ontology/haley-ai-kg#KGRunDocument | http://vital.ai/ontology/vital#FileNode',
        required: false,
        format: 'uri'
      }
    ];
  }


}
