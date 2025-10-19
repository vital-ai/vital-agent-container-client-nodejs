import { HaleyIntentCommand } from '../haley/haleyIntentCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatCodeIntent
 */
export class HaleyChatCodeIntent extends HaleyIntentCommand {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatCodeIntent';
  }

  /**
   * Get property definitions for HaleyChatCodeIntent
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
