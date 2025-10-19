import { UserInterfaceDirectiveMessage } from './userInterfaceDirectiveMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#NextAudioDirectiveMessage
 */
export class NextAudioDirectiveMessage extends UserInterfaceDirectiveMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#NextAudioDirectiveMessage';
  }

  /**
   * Get property definitions for NextAudioDirectiveMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
