import { HaleyChatManagerCommand } from './haleyChatManagerCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#DeleteOrgUnitManagerRequest
 */
export class DeleteOrgUnitManagerRequest extends HaleyChatManagerCommand {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#DeleteOrgUnitManagerRequest';
  }

  /**
   * Get property definitions for DeleteOrgUnitManagerRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
