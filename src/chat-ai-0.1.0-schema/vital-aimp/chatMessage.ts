import { AIMPMessage } from './aimpmessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ChatMessage
 */
export class ChatMessage extends AIMPMessage {
  public chatMessage?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#ChatMessage';
  }

  /**
   * Get property definitions for ChatMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChatMessage',
        tsPropertyName: 'chatMessage',
        type: 'string',
        required: false
      }
    ];
  }


}
