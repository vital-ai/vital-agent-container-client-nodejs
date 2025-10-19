import { UserInterfaceDirectiveMessage } from './userInterfaceDirectiveMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ShrinkCardDirectiveMessage
 */
export class ShrinkCardDirectiveMessage extends UserInterfaceDirectiveMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#ShrinkCardDirectiveMessage';
  }

  /**
   * Get property definitions for ShrinkCardDirectiveMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
