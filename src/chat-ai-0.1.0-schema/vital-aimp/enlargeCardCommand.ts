import { UserInterfaceCommandMessage } from './userInterfaceCommandMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#EnlargeCardCommand
 */
export class EnlargeCardCommand extends UserInterfaceCommandMessage {
  public cardURI?: string;
  public haleyChatCardURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#EnlargeCardCommand';
  }

  /**
   * Get property definitions for EnlargeCardCommand
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasCardURI',
        tsPropertyName: 'cardURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatCardURI',
        tsPropertyName: 'haleyChatCardURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
