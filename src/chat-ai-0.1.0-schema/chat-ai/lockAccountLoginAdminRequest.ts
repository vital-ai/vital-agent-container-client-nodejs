import { HaleyChatAdminCommand } from './haleyChatAdminCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#LockAccountLoginAdminRequest
 */
export class LockAccountLoginAdminRequest extends HaleyChatAdminCommand {
  public loginUsername?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#LockAccountLoginAdminRequest';
  }

  /**
   * Get property definitions for LockAccountLoginAdminRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasLoginUsername',
        tsPropertyName: 'loginUsername',
        type: 'string',
        required: false
      }
    ];
  }


}
