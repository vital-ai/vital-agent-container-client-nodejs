import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatLoginOptionSettings
 */
export class HaleyChatLoginOptionSettings extends VITAL_Node {
  public haleyChatLoginRoleURI?: string;
  public haleyChatInteractionScopeChannelURI?: string;
  public haleyChatInteractionModelTypeURI?: string;
  public haleyChatInteractionScopeURI?: string;
  public haleyChatInteractionTypeURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatLoginOptionSettings';
  }

  /**
   * Get property definitions for HaleyChatLoginOptionSettings
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatLoginRoleURI',
        tsPropertyName: 'haleyChatLoginRoleURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionScopeChannelURI',
        tsPropertyName: 'haleyChatInteractionScopeChannelURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionModelTypeURI',
        tsPropertyName: 'haleyChatInteractionModelTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionScopeURI',
        tsPropertyName: 'haleyChatInteractionScopeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionTypeURI',
        tsPropertyName: 'haleyChatInteractionTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
