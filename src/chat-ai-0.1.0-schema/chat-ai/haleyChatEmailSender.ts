import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatEmailSender
 */
export class HaleyChatEmailSender extends VITAL_Node {
  public email?: string;
  public haleyChatEmailSenderStatusURI?: string;
  declare public loginURI?: string;
  public accountURI?: string;
  public permittedSenderURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatEmailSender';
  }

  /**
   * Get property definitions for HaleyChatEmailSender
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasEmail',
        tsPropertyName: 'email',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatEmailSenderStatusURI',
        tsPropertyName: 'haleyChatEmailSenderStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasLoginURI',
        tsPropertyName: 'loginURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasAccountURI',
        tsPropertyName: 'accountURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasPermittedSenderURI',
        tsPropertyName: 'permittedSenderURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
