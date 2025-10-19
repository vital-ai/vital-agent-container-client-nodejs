import { AIMPMessage } from './aimpmessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ChatModeMessage
 */
export class ChatModeMessage extends AIMPMessage {
  public chatMode?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#ChatModeMessage';
  }

  /**
   * Get property definitions for ChatModeMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChatMode',
        tsPropertyName: 'chatMode',
        type: 'string',
        required: false
      }
    ];
  }


}
