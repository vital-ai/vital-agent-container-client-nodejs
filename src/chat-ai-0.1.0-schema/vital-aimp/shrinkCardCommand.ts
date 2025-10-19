import { UserInterfaceCommandMessage } from './userInterfaceCommandMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ShrinkCardCommand
 */
export class ShrinkCardCommand extends UserInterfaceCommandMessage {
  public cardURI?: string;
  public haleyChatCardURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#ShrinkCardCommand';
  }

  /**
   * Get property definitions for ShrinkCardCommand
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
