import { HaleyChatCommand } from './haleyChatCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#GetSettingsRequest
 */
export class GetSettingsRequest extends HaleyChatCommand {
  public haleyChatSettingsCommandTypeURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#GetSettingsRequest';
  }

  /**
   * Get property definitions for GetSettingsRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatSettingsCommandTypeURI',
        tsPropertyName: 'haleyChatSettingsCommandTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
