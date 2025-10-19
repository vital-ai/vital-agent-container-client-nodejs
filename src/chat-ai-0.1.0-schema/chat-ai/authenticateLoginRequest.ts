import { HaleyChatCommand } from './haleyChatCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#AuthenticateLoginRequest
 */
export class AuthenticateLoginRequest extends HaleyChatCommand {
  public authPassword?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#AuthenticateLoginRequest';
  }

  /**
   * Get property definitions for AuthenticateLoginRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasAuthPassword',
        tsPropertyName: 'authPassword',
        type: 'string',
        required: false
      }
    ];
  }


}
