import { HaleyChatManagerCommand } from './haleyChatManagerCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#RemoveOrgUnitMemberManagerRequest
 */
export class RemoveOrgUnitMemberManagerRequest extends HaleyChatManagerCommand {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#RemoveOrgUnitMemberManagerRequest';
  }

  /**
   * Get property definitions for RemoveOrgUnitMemberManagerRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
