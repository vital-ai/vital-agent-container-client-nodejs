import { UserCommandMessage } from './userCommandMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#UserInterfaceCommandMessage
 */
export class UserInterfaceCommandMessage extends UserCommandMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#UserInterfaceCommandMessage';
  }

  /**
   * Get property definitions for UserInterfaceCommandMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
