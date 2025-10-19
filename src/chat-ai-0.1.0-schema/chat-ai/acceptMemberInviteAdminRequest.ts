import { HaleyChatAdminCommand } from './haleyChatAdminCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#AcceptMemberInviteAdminRequest
 */
export class AcceptMemberInviteAdminRequest extends HaleyChatAdminCommand {
  public accountModificationTrackingIdentifier?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#AcceptMemberInviteAdminRequest';
  }

  /**
   * Get property definitions for AcceptMemberInviteAdminRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasAccountModificationTrackingIdentifier',
        tsPropertyName: 'accountModificationTrackingIdentifier',
        type: 'string',
        required: false
      }
    ];
  }


}
