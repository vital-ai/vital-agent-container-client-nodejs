import { HaleyChatCommand } from './haleyChatCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#GetAppDescriptionRequest
 */
export class GetAppDescriptionRequest extends HaleyChatCommand {
  public haleyChatCurrentAppVersion?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#GetAppDescriptionRequest';
  }

  /**
   * Get property definitions for GetAppDescriptionRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatCurrentAppVersion',
        tsPropertyName: 'haleyChatCurrentAppVersion',
        type: 'string',
        required: false
      }
    ];
  }


}
