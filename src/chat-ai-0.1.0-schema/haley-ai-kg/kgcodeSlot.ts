import { KGSlot } from './kgslot';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGCodeSlot
 */
export class KGCodeSlot extends KGSlot {
  /** URI reference to one of: KGCodeDocument, FileNode */
  public codeSlotValue?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGCodeSlot';
  }

  /**
   * Get property definitions for KGCodeSlot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasCodeSlotValue',
        tsPropertyName: 'codeSlotValue',
        type: 'http://vital.ai/ontology/haley-ai-kg#KGCodeDocument | http://vital.ai/ontology/vital#FileNode',
        required: false,
        format: 'uri'
      }
    ];
  }


}
