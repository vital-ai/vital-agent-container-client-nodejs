import { UserInterfaceDirectiveMessage } from './userInterfaceDirectiveMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ClosePanelDirectiveMessage
 */
export class ClosePanelDirectiveMessage extends UserInterfaceDirectiveMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#ClosePanelDirectiveMessage';
  }

  /**
   * Get property definitions for ClosePanelDirectiveMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
