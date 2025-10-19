import { UserInterfaceDirectiveMessage } from './userInterfaceDirectiveMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#RefreshChannelDirectiveMessage
 */
export class RefreshChannelDirectiveMessage extends UserInterfaceDirectiveMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#RefreshChannelDirectiveMessage';
  }

  /**
   * Get property definitions for RefreshChannelDirectiveMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
