import { KGSlot } from './kgslot';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGAudioSlot
 */
export class KGAudioSlot extends KGSlot {
  /** URI reference to one of: FileNode, KGAudio */
  public audioSlotValue?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGAudioSlot';
  }

  /**
   * Get property definitions for KGAudioSlot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasAudioSlotValue',
        tsPropertyName: 'audioSlotValue',
        type: 'http://vital.ai/ontology/vital#FileNode | http://vital.ai/ontology/haley-ai-kg#KGAudio',
        required: false,
        format: 'uri'
      }
    ];
  }


}
