import { KGSlot } from './kgslot';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGFileUploadSlot
 */
export class KGFileUploadSlot extends KGSlot {
  /** URI reference to one of: KGDocument, FileNode, KGMedia */
  public fileUploadSlotValue?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGFileUploadSlot';
  }

  /**
   * Get property definitions for KGFileUploadSlot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasFileUploadSlotValue',
        tsPropertyName: 'fileUploadSlotValue',
        type: 'http://vital.ai/ontology/haley-ai-kg#KGDocument | http://vital.ai/ontology/vital#FileNode | http://vital.ai/ontology/haley-ai-kg#KGMedia',
        required: false,
        format: 'uri'
      }
    ];
  }


}
