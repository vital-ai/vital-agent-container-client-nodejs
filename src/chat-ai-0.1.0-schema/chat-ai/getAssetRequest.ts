import { HaleyChatCommand } from './haleyChatCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#GetAssetRequest
 */
export class GetAssetRequest extends HaleyChatCommand {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#GetAssetRequest';
  }

  /**
   * Get property definitions for GetAssetRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
