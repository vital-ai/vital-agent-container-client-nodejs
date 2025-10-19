import { HaleyChatAlert } from './haleyChatAlert';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatMemberInviteAlert
 */
export class HaleyChatMemberInviteAlert extends HaleyChatAlert {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatMemberInviteAlert';
  }

  /**
   * Get property definitions for HaleyChatMemberInviteAlert
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
