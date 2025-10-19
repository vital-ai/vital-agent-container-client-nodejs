import { HaleyChatManagerCommand } from './haleyChatManagerCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#AddOrgUnitManagerRequest
 */
export class AddOrgUnitManagerRequest extends HaleyChatManagerCommand {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#AddOrgUnitManagerRequest';
  }

  /**
   * Get property definitions for AddOrgUnitManagerRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
