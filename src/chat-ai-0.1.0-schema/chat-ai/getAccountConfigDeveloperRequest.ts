import { HaleyChatDeveloperCommand } from './haleyChatDeveloperCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#GetAccountConfigDeveloperRequest
 */
export class GetAccountConfigDeveloperRequest extends HaleyChatDeveloperCommand {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#GetAccountConfigDeveloperRequest';
  }

  /**
   * Get property definitions for GetAccountConfigDeveloperRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
