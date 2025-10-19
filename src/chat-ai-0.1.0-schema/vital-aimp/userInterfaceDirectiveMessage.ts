import { HaleyDirectiveMessage } from './haleyDirectiveMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#UserInterfaceDirectiveMessage
 */
export class UserInterfaceDirectiveMessage extends HaleyDirectiveMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#UserInterfaceDirectiveMessage';
  }

  /**
   * Get property definitions for UserInterfaceDirectiveMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
