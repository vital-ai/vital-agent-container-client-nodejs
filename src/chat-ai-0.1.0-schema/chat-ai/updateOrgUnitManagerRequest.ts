import { HaleyChatManagerCommand } from './haleyChatManagerCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#UpdateOrgUnitManagerRequest
 */
export class UpdateOrgUnitManagerRequest extends HaleyChatManagerCommand {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#UpdateOrgUnitManagerRequest';
  }

  /**
   * Get property definitions for UpdateOrgUnitManagerRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
