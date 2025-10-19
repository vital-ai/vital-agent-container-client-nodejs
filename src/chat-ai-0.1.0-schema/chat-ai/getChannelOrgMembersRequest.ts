import { HaleyChatCommand } from './haleyChatCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#GetChannelOrgMembersRequest
 */
export class GetChannelOrgMembersRequest extends HaleyChatCommand {
  public requestedChannelURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#GetChannelOrgMembersRequest';
  }

  /**
   * Get property definitions for GetChannelOrgMembersRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasRequestedChannelURI',
        tsPropertyName: 'requestedChannelURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
