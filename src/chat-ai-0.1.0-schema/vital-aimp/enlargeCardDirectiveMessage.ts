import { UserInterfaceDirectiveMessage } from './userInterfaceDirectiveMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#EnlargeCardDirectiveMessage
 */
export class EnlargeCardDirectiveMessage extends UserInterfaceDirectiveMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#EnlargeCardDirectiveMessage';
  }

  /**
   * Get property definitions for EnlargeCardDirectiveMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
