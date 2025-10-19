import { UserInterfaceCommandMessage } from './userInterfaceCommandMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#SelectGridItemCommand
 */
export class SelectGridItemCommand extends UserInterfaceCommandMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#SelectGridItemCommand';
  }

  /**
   * Get property definitions for SelectGridItemCommand
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
