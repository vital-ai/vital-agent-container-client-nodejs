import { HaleyChatCommand } from './haleyChatCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#UpdateSettingsRequest
 */
export class UpdateSettingsRequest extends HaleyChatCommand {
  public haleyChatSettingsCommandTypeURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#UpdateSettingsRequest';
  }

  /**
   * Get property definitions for UpdateSettingsRequest
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
