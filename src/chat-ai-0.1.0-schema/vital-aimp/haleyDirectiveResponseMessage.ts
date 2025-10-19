import { UserCommandMessage } from './userCommandMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#HaleyDirectiveResponseMessage
 */
export class HaleyDirectiveResponseMessage extends UserCommandMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#HaleyDirectiveResponseMessage';
  }

  /**
   * Get property definitions for HaleyDirectiveResponseMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
